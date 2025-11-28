import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true }, 
  location: { type: String, required: true },
  experience: { type: String },
  salary: { type: String },
  description: { type: String, required: true },
  posted: { type: Date, default: Date.now },
  urgent: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
});

const jobModel = mongoose.model('Job', jobSchema);

export default jobModel;


