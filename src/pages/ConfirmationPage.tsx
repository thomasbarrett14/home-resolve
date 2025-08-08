
import React, { useEffect } from 'react';
import { useReport } from '../context/ReportContext';
import { sendEmailConfirmation } from '../lib/sendEmailConfirmation';

const ConfirmationPage = () => {
  const { state } = useReport();

  useEffect(() => {
    // Simulate report ID — in real app this should be returned by Supabase after insertion
    const fakeReportId = crypto.randomUUID();

    if (state.email && state.name) {
      sendEmailConfirmation(state.email, state.name, fakeReportId);
    }
  }, [state.email, state.name]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submission Complete</h1>
      <p>Thanks, {state.name || 'tenant'} — your issue has been reported.</p>
      <p>We’ve sent you a confirmation email.</p>
    </div>
  );
};

export default ConfirmationPage;
