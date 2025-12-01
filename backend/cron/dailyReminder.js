// import cron from 'node-cron';
// import bookDemoModel from '../Models/bookDemoModel.js';
// import { sendDailyReminder } from '../Utils/sendMailforQueryform.js';

// // Run every day at 10:00 AM
// const dailyReminderJob = cron.schedule(
//     '0 10 * * *', // cron time
//     async () => {
//         try {
//             console.log('Running daily reminder job...');
            
//             // Get all pending requests
//             const pendingRequests = await bookDemoModel.find({ status: 'pending' })
//                 .sort({ createdAt: -1 })
//                 .select('name email phoneNumber schoolName createdAt')
//                 .lean();

//             if (pendingRequests.length > 0) {
//                 // Send reminder email to admin
//                 await sendDailyReminder(pendingRequests);
//                 console.log(`Daily reminder sent for ${pendingRequests.length} pending requests`);
//             } else {
//                 console.log('No pending requests for daily reminder');
//             }
//         } catch (error) {
//             console.error('Daily reminder job error:', error);
//         }
//     },
//     {
//         scheduled: true,
//         timezone: 'Asia/Kolkata'
//     }
// );

// export default dailyReminderJob;



import cron from 'node-cron';
import bookDemoModel from '../Models/bookDemoModel.js';
import { sendDailyReminder } from '../Utils/sendMailforQueryform.js';

const dailyReminderJob = cron.schedule(
    '0 10 * * *',
    async () => {
        try {
            console.log('Running daily reminder job...');

            const pendingRequests = await bookDemoModel
                .find({ status: 'pending' })
                .sort({ createdAt: -1 })
                .lean();

            if (pendingRequests.length > 0) {
                await sendDailyReminder(pendingRequests);
                console.log(`Daily reminder sent for ${pendingRequests.length} pending requests`);
            } else {
                console.log('No pending requests for daily reminder');
            }

        } catch (error) {
            console.error('Daily reminder job error:', error);
        }
    },
    { scheduled: true, timezone: 'Asia/Kolkata' }
);

export default dailyReminderJob;
