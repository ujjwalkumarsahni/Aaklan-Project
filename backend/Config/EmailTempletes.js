export const emailTemplates = {
  applicationConfirmation: (name) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 10px; display: inline-block;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Application Received</h1>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">Thank you for applying to our company. We have received your application and will review it carefully.</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">We'll get back to you within <strong>5-7 business days</strong>.</p>
        
        <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 25px 0;">
          <p style="color: #667eea; margin: 0; font-style: italic; text-align: center;">
            "The future depends on what you do today." - Mahatma Gandhi
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 14px; text-align: center;">
            Need assistance? Contact us at <a href="mailto:hr@company.com" style="color: #667eea; text-decoration: none;">hr@company.com</a>
          </p>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #667eea;">HR Team</span>
        </p>
      </div>
    </div>
  `,

  screeningTopic: (name, topic, videoLink) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #ff6b6b, #ff8e8e); color: white; padding: 20px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Next Step: Screening Round</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Congratulations! 🎉</p>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">Your application has been shortlisted for the next round!</p>
        
        <div style="background: #fff5f5; padding: 20px; border-radius: 8px; border: 2px solid #ff6b6b; margin: 25px 0;">
          <h3 style="color: #ff6b6b; margin-top: 0; margin-bottom: 10px;">🎯 Screening Topic</h3>
          <p style="color: #333; font-weight: 600; font-size: 16px; margin: 0;">${topic}</p>
        </div>
        
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">Please record a <strong>3-5 minute video</strong> addressing this topic:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${videoLink}" style="background: linear-gradient(135deg, #ff6b6b, #ff8e8e); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3); font-size: 16px; transition: transform 0.3s ease;">
            🎥 Submit Video Response
          </a>
        </div>
        
        <div style="background: #f0f7ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #333; margin: 0; font-weight: 600; text-align: center;">
            ⏰ Submission Deadline: 7 days from now
          </p>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #ff6b6b;">HR Team</span>
        </p>
      </div>
    </div>
  `,

  shortlisted: (name, resumeLink) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #4ecdc4, #44a08d); color: white; padding: 25px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">🎊 You've Been Shortlisted!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Congratulations on this achievement!</p>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">We're excited to inform you that your application has been shortlisted for the next round of our selection process!</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resumeLink}" style="background: linear-gradient(135deg, #4ecdc4, #44a08d); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);">
            📄 Review Your Resume
          </a>
        </div>
        
        <div style="background: #f0f7ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #4ecdc4; margin-top: 0; margin-bottom: 15px;">📋 What's Next?</h3>
          <ul style="color: #555; margin: 0; padding-left: 20px;">
            <li>We'll contact you within <strong>3-5 business days</strong></li>
            <li>Prepare for the upcoming interview round</li>
            <li>Keep your documents ready for verification</li>
          </ul>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #4ecdc4;">HR Team</span>
        </p>
      </div>
    </div>
  `,

  rejection: (name, stage) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #96deda 0%, #50c9c3 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #96deda, #50c9c3); color: white; padding: 20px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Application Update</h1>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Thank you for your interest in our company and for taking the time to participate in our <strong>${stage}</strong> process.</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">After careful consideration, we regret to inform you that we will not be moving forward with your application at this time.</p>
        
        <div style="background: #fff5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #96deda; margin: 25px 0;">
          <p style="color: #666; margin: 0; text-align: center; font-style: italic;">
            We sincerely appreciate the time and effort you invested in your application.
          </p>
        </div>
        
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">We encourage you to apply for future positions that match your skills and experience.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background: #f8f9ff; padding: 15px; border-radius: 8px; display: inline-block;">
            <p style="color: #96deda; margin: 0; font-weight: 600;">🌟 Continue your journey with us!</p>
          </div>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #96deda;">HR Team</span>
        </p>
      </div>
    </div>
  `,

  technicalInterview: (name, scheduleLink) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #ffd89b, #19547b); color: white; padding: 25px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">💻 Technical Interview</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You've passed the screening round! 🎯</p>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">Congratulations on passing the screening round! We're impressed with your profile.</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">We'd like to invite you for a technical interview with our team:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${scheduleLink}" style="background: linear-gradient(135deg, #ffd89b, #19547b); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(255, 216, 155, 0.3); font-size: 16px;">
            📅 Schedule Interview
          </a>
        </div>
        
        <div style="background: #fffaf0; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #19547b; margin-top: 0; margin-bottom: 15px;">💡 Preparation Tips</h3>
          <ul style="color: #555; margin: 0; padding-left: 20px;">
            <li>Review your technical skills and projects</li>
            <li>Prepare for problem-solving scenarios</li>
            <li>Have your coding environment ready</li>
            <li>Prepare questions about our tech stack</li>
          </ul>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #19547b;">Technical Hiring Team</span>
        </p>
      </div>
    </div>
  `,

  hrInterview: (name, scheduleLink) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #ff9a9e, #fecfef); color: white; padding: 25px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">🤝 HR Interview</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Final Round Discussion</p>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 16px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">Congratulations on passing the technical round! We're excited to learn more about you.</p>
        <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">Let's schedule your HR interview to discuss your fit with our company culture:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${scheduleLink}" style="background: linear-gradient(135deg, #ff9a9e, #fecfef); color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(255, 154, 158, 0.3); font-size: 16px;">
            📋 Schedule HR Interview
          </a>
        </div>
        
        <div style="background: #fff0f5; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #ff9a9e; margin-top: 0; margin-bottom: 15px;">💼 Discussion Topics</h3>
          <ul style="color: #555; margin: 0; padding-left: 20px;">
            <li>Career goals and aspirations</li>
            <li>Company culture and values</li>
            <li>Teamwork and collaboration</li>
            <li>Compensation expectations</li>
          </ul>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px;">
          Best regards,<br>
          <span style="color: #ff9a9e;">HR Team</span>
        </p>
      </div>
    </div>
  `,

  offerLetter: (name, position, salary, startDate) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%); padding: 2px; border-radius: 12px;">
      <div style="background: white; padding: 40px; border-radius: 10px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background: linear-gradient(135deg, #a8ff78, #78ffd6); color: white; padding: 30px; border-radius: 10px;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 600;">🎉 CONGRATULATIONS!</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Official Job Offer</p>
          </div>
        </div>
        
        <p style="color: #555; line-height: 1.6; font-size: 18px;">Dear <strong style="color: #333;">${name}</strong>,</p>
        <p style="color: #666; line-height: 1.6; font-size: 16px; margin-bottom: 20px;">We are thrilled to offer you the position of:</p>
        
        <div style="text-align: center; margin: 25px 0;">
          <div style="background: linear-gradient(135deg, #a8ff78, #78ffd6); color: white; padding: 20px; border-radius: 10px; display: inline-block;">
            <h2 style="margin: 0; font-size: 24px; font-weight: 600;">${position}</h2>
          </div>
        </div>
        
        <div style="background: #f8fff0; padding: 25px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #a8ff78; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #a8ff78; padding-bottom: 10px;">📋 Offer Details</h3>
          <table style="width: 100%; color: #333; font-size: 16px;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; width: 40%;">💰 Annual Salary:</td>
              <td style="padding: 10px 0; font-weight: 600;">${salary}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600;">📅 Start Date:</td>
              <td style="padding: 10px 0; font-weight: 600;">${startDate}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fff5f5; padding: 20px; border-radius: 8px; border: 2px solid #a8ff78; margin: 25px 0;">
          <p style="color: #333; font-weight: 600; text-align: center; margin: 0; font-size: 16px;">
            ⚠️ Please respond to this offer within <strong>7 days</strong>
          </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background: linear-gradient(135deg, #a8ff78, #78ffd6); color: white; padding: 20px; border-radius: 25px; display: inline-block;">
            <p style="margin: 0; font-size: 20px; font-weight: 600;">🚀 Welcome to Our Team!</p>
          </div>
        </div>
        
        <p style="color: #333; font-weight: 600; margin-top: 30px; font-size: 16px;">
          Warmest regards,<br>
          <span style="color: #a8ff78;">HR Team</span>
        </p>
      </div>
    </div>
  `
};



export const otpEmailTemplate = (otp, name) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
                .content { padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
                .otp-code { font-size: 32px; font-weight: bold; color: #667eea; text-align: center; margin: 20px 0; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>OTP Verification</h1>
                </div>
                <div class="content">
                    <h2>Hello ${name},</h2>
                    <p>Your One-Time Password (OTP) for demo request verification is:</p>
                    <div class="otp-code">${otp}</div>
                    <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
                    <p>If you didn't request this OTP, please ignore this email.</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

export const adminNotificationTemplate = (formData) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
                .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
                .content { padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
                .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .info-table td { padding: 10px; border-bottom: 1px solid #ddd; }
                .info-table tr:last-child td { border-bottom: none; }
                .status-pending { color: #e67e22; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Demo Request</h1>
                </div>
                <div class="content">
                    <h2>A new demo request has been submitted:</h2>
                    <table class="info-table">
                        <tr><td><strong>Name:</strong></td><td>${formData.name}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${formData.email}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${formData.phoneNumber}</td></tr>
                        <tr><td><strong>School:</strong></td><td>${formData.schoolName}</td></tr>
                        <tr><td><strong>City:</strong></td><td>${formData.city}</td></tr>
                        <tr><td><strong>Designation:</strong></td><td>${formData.designation}</td></tr>
                        <tr><td><strong>Interest:</strong></td><td>${formData.scheduleCallFor}</td></tr>
                        <tr><td><strong>Status:</strong></td><td class="status-pending">Pending</td></tr>
                    </table>
                    <p><strong>Message:</strong> ${formData.message || 'No message provided'}</p>
                    <p>Please log in to the admin dashboard to review this request.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

export const dailyReminderTemplate = (pendingRequests) => {
    let requestsHTML = pendingRequests.map(request => `
        <tr>
            <td>${request.name}</td>
            <td>${request.email}</td>
            <td>${request.phoneNumber}</td>
            <td>${request.schoolName}</td>
            <td>${new Date(request.createdAt).toLocaleDateString()}</td>
        </tr>
    `).join('');

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .container { max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
                .header { background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
                .content { padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
                .pending-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .pending-table th, .pending-table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
                .pending-table th { background-color: #34495e; color: white; }
                .count { font-size: 18px; color: #e74c3c; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Daily Reminder: Pending Demo Requests</h1>
                </div>
                <div class="content">
                    <p>You have <span class="count">${pendingRequests.length}</span> pending demo requests that need attention:</p>
                    <table class="pending-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>School</th>
                                <th>Submitted On</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${requestsHTML}
                        </tbody>
                    </table>
                    <p>Please log in to the admin dashboard to review and take action on these requests.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};