// import cron from 'node-cron';
// import bookDemoModel from '../Models/bookDemoModel.js';
// import { send24HourReminder } from '../Utils/sendMailforQueryform.js';

// // Run every minute
// const twentyFourHourReminderJob = cron.schedule(
//     '* * * * *', // Har minute
//     async () => {
//         try {
//             const now = new Date();
            
//             // ✅ Find pending requests jinke liye reminder bhejna hai
//             const pendingRequests = await bookDemoModel.find({ 
//                 status: 'pending',
//                 $or: [
//                     // Pehli baar reminder bhejna hai (1 minute purani request)
//                     { 
//                         lastReminderSentAt: { $exists: false },
//                         createdAt: { $lte: new Date(now.getTime() - 1 * 60 * 1000) } // 1 minute purani
//                     },
//                     // Ya fir next reminder time aa gaya ho
//                     { 
//                         nextReminderAt: { $lte: now }
//                     }
//                 ]
//             });

//             if (pendingRequests.length > 0) {
//                 for (const request of pendingRequests) {
//                     console.log(`📨 Processing reminder for: ${request.name} (Reminder #${request.reminderCount + 1})`);
                    
//                     // ✅ Email bhejo
//                     const emailSent = await send24HourReminder(request);
                    
//                     if (emailSent) {
//                         const reminderCount = request.reminderCount + 1;
                        
//                         // ✅ Agla reminder 1 minute baad set karo
//                         const nextReminderTime = new Date(now.getTime() + 1 * 60 * 1000); // 1 minute baad
                        
//                         await bookDemoModel.findByIdAndUpdate(request._id, { 
//                             lastReminderSentAt: now,
//                             reminderCount: reminderCount,
//                             nextReminderAt: nextReminderTime // ✅ Agla reminder time set karo
//                         });
                        
//                         console.log(`✅ Reminder #${reminderCount} sent for: ${request.name}`);
//                         console.log(`⏰ Next reminder at: ${nextReminderTime.toLocaleTimeString()}`);
//                     }
//                 }
//             } else {
//                 console.log('✅ No requests needing reminder at this time');
//             }
//         } catch (error) {
//             console.error('❌ 24-hour reminder error:', error);
//         }
//     },
//     {
//         scheduled: true,
//         timezone: 'Asia/Kolkata'
//     }
// );

// console.log('✅ 24-hour reminder cron job scheduled (continuous reminders)');
// export default twentyFourHourReminderJob;



import cron from 'node-cron';
import bookDemoModel from '../Models/bookDemoModel.js';
import { send24HourReminder } from '../Utils/sendMailforQueryform.js';

const twentyFourHourReminderJob = cron.schedule(
    '* * * * *',  // runs every minute but sends email only when 24 hours passed
    async () => {
        try {
            const now = new Date();

            const requests = await bookDemoModel.find({
                status: 'pending',
                reminderSent: { $ne: true },  // send only once
                createdAt: { $lte: new Date(now.getTime() - 24 * 60 * 60 * 1000) } // 24 hours old
            });

            if (requests.length === 0) return;

            for (const req of requests) {
                await send24HourReminder(req);

                await bookDemoModel.findByIdAndUpdate(req._id, {
                    reminderSent: true,
                    reminderSentAt: now
                });

                console.log(
                    `📨 24-hour reminder sent to ${req.name} (${req.email})`
                );
            }
        } catch (e) {
            console.error("24-hour reminder error:", e);
        }
    },
    { scheduled: true, timezone: "Asia/Kolkata" }
);

export default twentyFourHourReminderJob;
