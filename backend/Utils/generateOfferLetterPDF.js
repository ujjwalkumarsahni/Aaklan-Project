// // Function to generate offer letter PDF with dynamic data from dashboard
import PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";

// export const generateOfferLetterPDF = async (applicant, offerData) => {
//   return new Promise((resolve, reject) => {
//     try {
//       // Create a temporary file path using process.cwd() to avoid __dirname issues
//       const fileName = `Offer_Letter_${applicant.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
//       const filePath = path.join(process.cwd(), 'temp', fileName);
      
//       // Ensure temp directory exists
//       const tempDir = path.join(process.cwd(), 'temp');
//       if (!fs.existsSync(tempDir)) {
//         fs.mkdirSync(tempDir, { recursive: true });
//       }

//       // Create PDF document
//       const doc = new PDFDocument({ margin: 50 });
//       const stream = fs.createWriteStream(filePath);
//       doc.pipe(stream);

//       // Add content to PDF
//       // Page 1 - Main Offer Letter
//       doc.fontSize(16).font('Helvetica-Bold').text('OFFER LETTER', { align: 'center' });
//       doc.moveDown(2);
      
//       // Date
//       const currentDate = new Date().toLocaleDateString('en-GB');
//       doc.fontSize(10).font('Helvetica').text(`Date: ${currentDate}`, { align: 'right' });
//       doc.moveDown();
      
//       // Candidate details - Dynamic
//       doc.fontSize(12).font('Helvetica').text(`Dear ${offerData.name || applicant.name},`);
//       doc.moveDown();
      
//       // Role - Dynamic
//       doc.text(`Congratulations! Further to your application as a ${offerData.role || applicant.appliedPosition} with us and the subsequent selection process, we are delighted to offer you the role of ${offerData.role || applicant.appliedPosition} in our organization. The location of your initial reporting will be shared after your confirmation. As per the agreed terms, you have to work as per school hours. You will meet with your onboarding specialist who will assist you with your joining formalities. If you have any queries about your first day, send an email to hr@aaklan.com.`);
//       doc.moveDown();
      
//       doc.text('On your joining date, please bring:');
//       doc.moveDown(0.5);
//       doc.text('1. Copy of offer letter duly signed and dated by you.');
//       doc.text('2. Self photographs (passport size, color with white background)');
//       doc.text('3. One set of printouts of the completed onboarding forms & Originals.');
//       doc.text('4. Aadhaar card xerox.');
//       doc.text('5. Relieving documents from the most recent employer. (if applicable)');
//       doc.text('6. Passport and Pan card xerox.');
//       doc.text('7. Relevant Education Documents.');
//       doc.text('8. Last 3 months pay/salary slip (if applicable)');
//       doc.moveDown();
      
//       // Date of Joining and Probation Period - Dynamic
//       doc.text(`You will be on probation until your successful completion of the probationary period is confirmed in writing. The normal probation period is ${offerData.probationPeriod || "6 months"} but may be extended or confirmed earlier based on your performance and at your supervisor's discretion.`);
//       doc.moveDown();
      
//       doc.text('Your individual remuneration is strictly confidential and is detailed in Annexure A.');
//       doc.moveDown();
      
//       // Pay Cycle - Dynamic
//       doc.text(`Your pay cycle is monthly. Your salary will be calculated on the basis of the number of working days in a month. Our pay cycle runs from the ${offerData.payCycleFrom || "1st"} of every month to the ${offerData.payCycleTo || "30th/31st"} of every month and pays are processed till the 15th to 20th of the next month.`);
//       doc.moveDown();
      
//       doc.text('You are expected to enter into an employment agreement, which details the scope, terms, and conditions of your work, the necessary training, and confidentiality obligations with our organization.');
//       doc.moveDown();
      
//       doc.text('If you do not confirm your acceptance, this offer letter will be withdrawn. To confirm your acceptance of this offer letter, you are required to accept it by signing at the bottom of this document.');
//       doc.moveDown();
      
//       doc.text('Please note that if you do not provide your acceptance, you will not be allowed to join.');
//       doc.moveDown(2);
      
//       doc.text('Welcome to AAKLAN IT SOLUTION PRIVATE LIMITED. We wish you a long, rewarding, and fulfilling career and look forward to your joining us.');
//       doc.moveDown(3);
      
//       doc.text('Yours Sincerely');
//       doc.moveDown(2);
//       doc.text('AAKLAN IT SOLUTION PRIVATE LIMITED');
      
//       // Add new page for Annexure A
//       doc.addPage();
//       doc.fontSize(14).font('Helvetica-Bold').text('ANNEXURE A', { align: 'center' });
//       doc.moveDown();
//       doc.fontSize(12).font('Helvetica-Bold').text('EXPLANATION OF COMPENSATION COMPONENTS');
//       doc.moveDown();
      
//       // Salary components table - All Dynamic
//       const salaryData = {
//         ctc: offerData.ctc || "₹25,000",
//         basicSalary: offerData.basicSalary || "₹12,000",
//         houseRentAllowance: offerData.houseRentAllowance || "₹3,000",
//         providentFund: offerData.providentFund || "₹1,500",
//         securityAmount: offerData.securityAmount || "₹500",
//         netSalary: offerData.netSalary || "₹17,000"
//       };
      
//       // Create table for salary components
//       const tableTop = doc.y;
//       const firstColumn = 50;
//       const secondColumn = 250;
      
//       // Table headers
//       doc.font('Helvetica-Bold').fontSize(10);
//       doc.text('Components', firstColumn, tableTop);
//       doc.text('Amount', secondColumn, tableTop);
      
//       // Table rows
//       let currentY = tableTop + 20;
//       doc.font('Helvetica').fontSize(10);
      
//       const components = [
//         { name: 'CTC', value: salaryData.ctc },
//         { name: 'Basic Salary', value: salaryData.basicSalary },
//         { name: 'House Rent Allowance', value: salaryData.houseRentAllowance },
//         { name: 'Provident Fund (PF) (if any)', value: salaryData.providentFund },
//         { name: 'Security Amount (if any)', value: salaryData.securityAmount },
//         { name: 'Net Salary', value: salaryData.netSalary }
//       ];
      
//       components.forEach(component => {
//         doc.text(component.name, firstColumn, currentY);
//         doc.text(component.value, secondColumn, currentY);
//         currentY += 20;
//       });
      
//       // Finalize PDF
//       doc.end();
      
//       stream.on('finish', () => {
//         resolve(filePath);
//       });
      
//       stream.on('error', (error) => {
//         reject(error);
//       });
      
//     } catch (error) {
//       reject(error);
//     }
//   });
// };


// Function to generate offer letter PDF with dynamic data from dashboard
export const generateOfferLetterPDF = async (applicant, offerData) => {
  return new Promise((resolve, reject) => {
    try {
      // Create a temporary file path using process.cwd() to avoid __dirname issues
      const fileName = `Offer_Letter_${applicant.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
      const filePath = path.join(process.cwd(), 'temp', fileName);
      
      // Ensure temp directory exists
      const tempDir = path.join(process.cwd(), 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      // Create PDF document
      const doc = new PDFDocument({ margin: 50 });
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // Add content to PDF - Page 1 - Main Offer Letter
      // Title
      doc.fontSize(16).font('Helvetica-Bold').text('OFFER LETTER', { align: 'center' });
      doc.moveDown(2);
      
      // Salutation
      doc.fontSize(12).font('Helvetica').text(`Dear ${offerData.name || applicant.name},`);
      doc.moveDown();
      
      // Main content
      doc.text(`Congratulations! Further to your application as a ${offerData.role || applicant.appliedPosition} with us and the subsequent selection process, we are delighted to offer you the role of ${offerData.role || applicant.appliedPosition} in our organization. The location of your initial reporting will be shared after your confirmation. As per the agreed terms, you have to work as per school hours. You will meet with your onboarding specialist who will assist you with your joining formalities. If you have any queries about your first day, send an email to hr@aaklan.com.`);
      doc.moveDown();
      
      // Documents list
      doc.text('On your joining date, please bring:');
      doc.moveDown(0.3);
      doc.text('1. Copy of offer letter duly signed and dated by you.');
      doc.text('2. Self photographs (passport size, color with white background)');
      doc.text('3. One set of printouts of the completed onboarding forms & Originals.');
      doc.text('4. Aadhaar card xerox.');
      doc.text('5. Relieving documents from the most recent employer. (if applicable)');
      doc.text('6. Passport and Pan card xerox.');
      doc.text('7. Relevant Education Documents.');
      doc.moveDown();
      
      // Probation period
      doc.text(`You will be on probation until your successful completion of the probationary period is confirmed in writing. The normal probation period is ${offerData.probationPeriod || "6 months"} but may be extended or confirmed earlier based on your performance and at your supervisor's discretion.`);
      doc.moveDown();
      
      // Salary confidentiality
      doc.text('Your individual remuneration is strictly confidential and is detailed in Annexure A.');
      doc.moveDown();
      
      // Pay cycle
      doc.text(`Your pay cycle is monthly. Your salary will be calculated on the basis of the number of working days in a month. Our pay cycle runs from the ${offerData.payCycleFrom || "1st"} of every month to the ${offerData.payCycleTo || "30th /31st"} of every month and pays are processed till the 15th to 20th of the next month.`);
      doc.moveDown();
      
      // Employment agreement
      doc.text('You are expected to enter into an employment agreement, which details the scope, terms, and conditions of your work, the necessary training, and confidentiality obligations with our organization.');
      
      // Acceptance terms
      doc.text('If you do not confirm your acceptance, this offer letter will be withdrawn. To confirm your acceptance of this offer letter, you are required to accept it by signing at the bottom of this document.');
      
      // Joining condition
      doc.text('Please note that if you do not provide your acceptance, you will not be allowed to join.');
        
      // Welcome message
      doc.text('Welcome to AAKLAN IT SOLUTION PRIVATE LIMITED. We wish you a long, rewarding, and fulfilling career and look forward to your joining us.');
      doc.moveDown(2);
      
      // Closing
      doc.text('Yours Sincerely');
      doc.moveDown(1);
      doc.text('AAKLAN IT SOLUTION PRIVATE LIMITED');
      
      // Add new page for Annexure A
      doc.addPage();
      
      // Annexure A Title
      doc.fontSize(14).font('Helvetica-Bold').text('ANNEXURE A', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).font('Helvetica-Bold').text('EXPLANATION OF COMPENSATION COMPONENTS');
      doc.moveDown(2);
      
      // Helper function to check if field is empty or just whitespace
      const isEmptyField = (value) => {
        return !value || value.trim() === '' || value === '---';
      };
      
      // Salary components table - Only show non-empty fields
      const salaryComponents = [];
      
      // Add components only if they have values
      if (!isEmptyField(offerData.ctc)) {
        salaryComponents.push({ name: 'CTC', value: offerData.ctc });
      }
      
      if (!isEmptyField(offerData.basicSalary)) {
        salaryComponents.push({ name: 'Basic Salary', value: offerData.basicSalary });
      }
      
      if (!isEmptyField(offerData.houseRentAllowance)) {
        salaryComponents.push({ name: 'House Rent Allowance', value: offerData.houseRentAllowance });
      }
      
      if (!isEmptyField(offerData.providentFund)) {
        salaryComponents.push({ name: 'Provident Fund (PF) (if any)', value: offerData.providentFund });
      }
      
      if (!isEmptyField(offerData.securityAmount)) {
        salaryComponents.push({ name: 'Security Amount (if any)', value: offerData.securityAmount });
      }
      
      salaryComponents.push({ 
        name: 'Net Salary', 
        value: offerData.netSalary
      });
      
      // Create table for salary components
      const tableTop = doc.y;
      const firstColumn = 50;
      const secondColumn = 300;
      
      // Only create table if there are components to show
      if (salaryComponents.length > 0) {
        // Table headers with lines
        doc.font('Helvetica-Bold').fontSize(10);
        doc.text('Components', firstColumn, tableTop);
        doc.text('Amount', secondColumn, tableTop);
        
        // Draw header line
        doc.moveTo(50, tableTop + 15)
           .lineTo(550, tableTop + 15)
           .stroke();
        
        // Table rows
        let currentY = tableTop + 25;
        doc.font('Helvetica').fontSize(10);
        
        salaryComponents.forEach((component, index) => {
          // Draw row line
          doc.moveTo(50, currentY - 5)
             .lineTo(550, currentY - 5)
             .stroke();
          
          doc.text(component.name, firstColumn, currentY);
          doc.text(component.value, secondColumn, currentY, { align: 'right' });
          currentY += 20;
        });
        
        // Draw final bottom line
        doc.moveTo(50, currentY - 5)
           .lineTo(550, currentY - 5)
           .stroke();
      } else {
        // If no salary components (shouldn't happen since Net Salary is required)
        doc.text('No salary components specified.', 50, tableTop);
      }
      
      // Finalize PDF
      doc.end();
      
      stream.on('finish', () => {
        resolve(filePath);
      });
      
      stream.on('error', (error) => {
        reject(error);
      });
      
    } catch (error) {
      reject(error);
    }
  });
};