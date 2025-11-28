// components/Career/TermsModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TermsModal = ({ selectedJob, agreeToTerms, setAgreeToTerms, onClose, onAgree }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#0b234a]">Terms & Conditions</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Application for: {selectedJob?.title}</h3>
            <p className="text-blue-700 text-sm">Please read the following terms carefully before proceeding.</p>
          </div>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Application Process</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>By submitting your application, you confirm that all information provided is accurate and complete</li>
                <li>You consent to Aaklan collecting and processing your personal data for recruitment purposes</li>
                <li>Your application will be reviewed within 5-7 business days</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Data Privacy</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Your personal information will be stored securely and used solely for recruitment purposes</li>
                <li>We may contact you via email or phone regarding your application</li>
                <li>You can request deletion of your data at any time by contacting HR</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Interview Process</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Selected candidates will be contacted for initial screening</li>
                <li>The process may include technical assessments and multiple interview rounds</li>
                <li>We strive to provide feedback to all applicants</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Confidentiality</h4>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>All application details and discussions will remain confidential</li>
                <li>Do not share proprietary information from current or previous employers</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-700">
              I have read and understood the terms and conditions. I agree to the processing of my personal data for recruitment purposes and confirm that all information provided is accurate.
            </label>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onAgree}
            disabled={!agreeToTerms}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
              agreeToTerms
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Agree & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;