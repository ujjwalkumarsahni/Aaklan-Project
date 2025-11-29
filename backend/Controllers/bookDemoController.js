import XLSX from 'xlsx';
import { clearVerifiedPhone, isPhoneVerified } from './otpController.js';
import bookDemoModel from '../Models/bookDemoModel.js';
import { sendAdminNotification } from '../Utils/sendMailforQueryform.js';

// Submit demo request
export const submitDemoRequest = async (req, res) => {
    try {
        const {
            name,
            email,
            phoneNumber,
            designation,
            schoolName,
            city,
            schoolAddress,
            scheduleCallFor,
            message
        } = req.body;

        console.log('📝 Form submission received:', { name, email, phoneNumber });

        // Check if phone is OTP verified
        if (!isPhoneVerified(phoneNumber)) {
            console.log('❌ Phone not verified for:', phoneNumber);
            return res.status(400).json({
                success: false,
                message: 'Phone number not verified. Please verify OTP first.'
            });
        }

        // Check if demo request already exists with same email and phone (pending)
        const existingRequest = await bookDemoModel.findOne({
            email,
            phoneNumber,
            status: 'pending'
        });

        if (existingRequest) {
            console.log('❌ Duplicate request found for:', email);
            return res.status(400).json({
                success: false,
                message: 'You already have a pending demo request'
            });
        }

        // Create new demo request
        const demoRequest = await bookDemoModel.create({
            name,
            email,
            phoneNumber,
            designation,
            schoolName,
            city,
            schoolAddress,
            scheduleCallFor,
            message,
            isOTPVerified: true
        });

        console.log('✅ Demo request saved to database:', demoRequest._id);

        // Send admin notification (non-blocking with detailed logging)
        console.log('📧 Attempting to send admin notification...');
        sendAdminNotification(demoRequest.toObject())
            .then(success => {
                if (success) {
                    console.log('✅ Admin notification sent successfully');
                } else {
                    console.log('❌ Admin notification failed, but form was saved');
                }
            })
            .catch(error => {
                console.error('❌ Admin notification error:', error);
                // Don't throw - form is already saved
            });

        // Clear verified phone from memory
        clearVerifiedPhone(phoneNumber);

        console.log('✅ Form submission completed successfully');

        res.status(201).json({
            success: true,
            message: 'Demo request submitted successfully! We will contact you within 24 hours.',
            data: demoRequest
        });

    } catch (error) {
        console.error('❌ Submit demo request error:', error);
        
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            console.log('❌ Validation errors:', errors);
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors
            });
        }

        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get all demo requests (with pagination and filtering)
export const getAllDemoRequests = async (req, res) => {
    try {
        const { page = 1, limit = 10, status, search } = req.query;
        
        // Build filter object
        const filter = {};
        if (status && status !== 'all') {
            filter.status = status;
        }
        
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { schoolName: { $regex: search, $options: 'i' } },
                { city: { $regex: search, $options: 'i' } }
            ];
        }

        // Calculate pagination
        const skip = (page - 1) * limit;

        // Get requests with pagination
        const requests = await bookDemoModel.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        // Get total count for pagination
        const total = await bookDemoModel.countDocuments(filter);
        const pendingCount = await bookDemoModel.countDocuments({ status: 'pending' });
        const resolvedCount = await bookDemoModel.countDocuments({ status: 'resolved' });
        const rejectedCount = await bookDemoModel.countDocuments({ status: 'rejected' });

        res.status(200).json({
            success: true,
            data: {
                requests,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(total / limit),
                    totalRequests: total,
                    hasNext: page * limit < total,
                    hasPrev: page > 1
                },
                counts: {
                    pending: pendingCount,
                    resolved: resolvedCount,
                    rejected: rejectedCount,
                    total: total
                }
            }
        });

    } catch (error) {
        console.error('Get all demo requests error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get single demo request
export const getDemoRequest = async (req, res) => {
    try {
        const { id } = req.params;

        const request = await bookDemoModel.findById(id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: 'Demo request not found'
            });
        }

        res.status(200).json({
            success: true,
            data: request
        });

    } catch (error) {
        console.error('Get demo request error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Update request status
// export const updateRequestStatus = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { status } = req.body;

//         if (!['pending', 'resolved', 'rejected'].includes(status)) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Invalid status. Must be: pending, resolved, or rejected'
//             });
//         }

//         const request = await bookDemoModel.findByIdAndUpdate(
//             id,
//             { status },
//             { new: true, runValidators: true }
//         );

//         if (!request) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Demo request not found'
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Status updated successfully',
//             data: request
//         });

//     } catch (error) {
//         console.error('Update status error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// };

// In your bookDemoController.js, update the status update function:
// Update request status
export const updateRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'resolved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Must be: pending, resolved, or rejected'
            });
        }

        const updateData = { 
            status,
            // ✅ Status change par reminders stop kar do
            nextReminderAt: null
        };

        const request = await bookDemoModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!request) {
            return res.status(404).json({
                success: false,
                message: 'Demo request not found'
            });
        }

        console.log(`✅ Status updated to ${status} for: ${request.name}`);
        console.log(`✅ Reminders stopped for this request`);

        res.status(200).json({
            success: true,
            message: 'Status updated successfully',
            data: request
        });

    } catch (error) {
        console.error('Update status error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Delete demo request
export const deleteDemoRequest = async (req, res) => {
    try {
        const { id } = req.params;

        const request = await bookDemoModel.findByIdAndDelete(id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: 'Demo request not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Demo request deleted successfully'
        });

    } catch (error) {
        console.error('Delete demo request error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get dashboard statistics
export const getDashboardStats = async (req, res) => {
    try {
        const totalCount = await bookDemoModel.countDocuments();
        const pendingCount = await bookDemoModel.countDocuments({ status: 'pending' });
        const resolvedCount = await bookDemoModel.countDocuments({ status: 'resolved' });
        const rejectedCount = await bookDemoModel.countDocuments({ status: 'rejected' });

        // Recent requests (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const recentCount = await bookDemoModel.countDocuments({
            createdAt: { $gte: sevenDaysAgo }
        });

        // Requests by designation
        const designationStats = await bookDemoModel.aggregate([
            {
                $group: {
                    _id: '$designation',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Requests by scheduleCallFor
        const interestStats = await bookDemoModel.aggregate([
            {
                $group: {
                    _id: '$scheduleCallFor',
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: {
                counts: {
                    total: totalCount,
                    pending: pendingCount,
                    resolved: resolvedCount,
                    rejected: rejectedCount,
                    recent: recentCount
                },
                designationStats,
                interestStats
            }
        });

    } catch (error) {
        console.error('Get dashboard stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Export pending requests to Excel
export const exportPendingToExcel = async (req, res) => {
    try {
        const pendingRequests = await bookDemoModel.find({ status: 'pending' }).sort({ createdAt: -1 });

        if (pendingRequests.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No pending requests found'
            });
        }

        // Prepare data for Excel
        const excelData = pendingRequests.map(request => ({
            'Name': request.name,
            'Email': request.email,
            'Phone': request.phoneNumber,
            'Designation': request.designation,
            'School Name': request.schoolName,
            'City': request.city,
            'School Address': request.schoolAddress,
            'Interest': request.scheduleCallFor,
            'Message': request.message,
            'Submitted On': new Date(request.createdAt).toLocaleDateString(),
            'Status': request.status
        }));

        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(excelData);

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Pending Requests');

        // Generate buffer
        const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        // Set headers for file download
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="pending-requests-${new Date().toISOString().split('T')[0]}.xlsx"`);

        res.send(buffer);

    } catch (error) {
        console.error('Export to Excel error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};