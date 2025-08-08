
export async function sendEmailConfirmation(email: string, name: string, reportId: string) {
  try {
    const res = await fetch('/functions/v1/send-confirmation-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, report_id: reportId }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Email failed:', error);
    } else {
      console.log('Email confirmation sent.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
