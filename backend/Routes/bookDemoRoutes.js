import express from 'express';
import {
    submitDemoRequest,
    getAllDemoRequests,
    getDemoRequest,
    updateRequestStatus,
    deleteDemoRequest,
    getDashboardStats,
    exportPendingToExcel
} from '../Controllers/bookDemoController.js';

const bookDemoRoutes = express.Router();

// Submit demo request
bookDemoRoutes.post('/', submitDemoRequest);

// Get all demo requests (with pagination and filtering)
bookDemoRoutes.get('/', getAllDemoRequests);

// Get dashboard statistics
bookDemoRoutes.get('/dashboard/stats', getDashboardStats);

// Export pending requests to Excel
bookDemoRoutes.get('/export/pending', exportPendingToExcel);

// Get single demo request
bookDemoRoutes.get('/:id', getDemoRequest);

// Update request status
bookDemoRoutes.patch('/:id/status', updateRequestStatus);

// Delete demo request
bookDemoRoutes.delete('/:id', deleteDemoRequest);

export default bookDemoRoutes;