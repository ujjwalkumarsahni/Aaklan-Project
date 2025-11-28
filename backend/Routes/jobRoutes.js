// routes/jobRoutes.js
import express from 'express';
import { createJob, deleteJob, getJobs, updateJob } from '../Controllers/jobController.js';

const jobRoutes = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs
// @access  Public
jobRoutes.get('/', getJobs);

// @route   GET /api/jobs/:id
// @desc    Get a single job by ID
// @access  Public
// jobRoutes.get('/:id', getJobById);

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Private/Admin
jobRoutes.post('/create', createJob);

// @route   PUT /api/jobs/:id
// @desc    Update an existing job
// @access  Private/Admin
// jobRoutes.put('/:id', updateJob);

// @route   DELETE /api/jobs/:id
// @desc    Delete a job
// @access  Private/Admin
jobRoutes.delete('/:id', deleteJob);

export default jobRoutes;
