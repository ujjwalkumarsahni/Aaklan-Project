import cron from 'node-cron';
import bookDemoModel from '../Models/bookDemoModel.js';
import { send24HourReminder } from '../Utils/sendMailforQueryform.js';

// Run every minute
const twentyFourHourReminderJob = cron.schedule(
    '* * * * *', // Har minute
    async () => {
        try {
            console.log('⏰ Running 24-hour reminder check...');
            
            const now = new Date();
            
            // ✅ Find pending requests jinke liye reminder bhejna hai
            const pendingRequests = await bookDemoModel.find({ 
                status: 'pending',
                $or: [
                    // Pehli baar reminder bhejna hai (1 minute purani request)
                    { 
                        lastReminderSentAt: { $exists: false },
                        createdAt: { $lte: new Date(now.getTime() - 1 * 60 * 1000) } // 1 minute purani
                    },
                    // Ya fir next reminder time aa gaya ho
                    { 
                        nextReminderAt: { $lte: now }
                    }
                ]
            });

            console.log(`📧 Found ${pendingRequests.length} requests needing reminder`);

            if (pendingRequests.length > 0) {
                for (const request of pendingRequests) {
                    console.log(`📨 Processing reminder for: ${request.name} (Reminder #${request.reminderCount + 1})`);
                    
                    // ✅ Email bhejo
                    const emailSent = await send24HourReminder(request);
                    
                    if (emailSent) {
                        const reminderCount = request.reminderCount + 1;
                        
                        // ✅ Agla reminder 1 minute baad set karo
                        const nextReminderTime = new Date(now.getTime() + 1 * 60 * 1000); // 1 minute baad
                        
                        await bookDemoModel.findByIdAndUpdate(request._id, { 
                            lastReminderSentAt: now,
                            reminderCount: reminderCount,
                            nextReminderAt: nextReminderTime // ✅ Agla reminder time set karo
                        });
                        
                        console.log(`✅ Reminder #${reminderCount} sent for: ${request.name}`);
                        console.log(`⏰ Next reminder at: ${nextReminderTime.toLocaleTimeString()}`);
                    }
                }
            } else {
                console.log('✅ No requests needing reminder at this time');
            }
        } catch (error) {
            console.error('❌ 24-hour reminder error:', error);
        }
    },
    {
        scheduled: true,
        timezone: 'Asia/Kolkata'
    }
);

console.log('✅ 24-hour reminder cron job scheduled (continuous reminders)');
export default twentyFourHourReminderJob;