import express from 'express';
import cors from 'cors';
import careerRoutes from './Routes/careerRoutes.js';
import jobRoutes from './Routes/jobRoutes.js';
import connectDB from './Config/db.js';

import 'dotenv/config.js'
import connectCloudinary from './Config/cloudinary.js';
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
connectCloudinary()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/career', careerRoutes);
app.use('/api/jobs', jobRoutes)
app.get('/', (req, res) => console.log("Api working fine"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});