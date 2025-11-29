import express from 'express';
import cors from 'cors';
import careerRoutes from './Routes/careerRoutes.js';
import jobRoutes from './Routes/jobRoutes.js';
import connectDB from './Config/db.js';

import 'dotenv/config.js'
import connectCloudinary from './Config/cloudinary.js';
import bookDemoRoutes from './Routes/bookDemoRoutes.js';
import otpRoutes from './Routes/otpRoutes.js';

// Import cron jobs (they auto-start when imported)
import './cron/dailyReminder.js';
import './cron/24hourReminderTest.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "API working fine" });
});

app.use('/api/career', careerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/book-demo', bookDemoRoutes);
app.use('/api/otp', otpRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log('✅ Cron jobs are running automatically');
});