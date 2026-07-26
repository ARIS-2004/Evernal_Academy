import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { admissionsAdminEmail, admissionsParentEmail } from '@/lib/email-templates';

function makeTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
    tls: { rejectUnauthorized: false },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobile, childName, childAge, programName, programAge, city, pinCode, message } = body;

    if (!firstName || !lastName || !email || !mobile || !childName || !childAge || !city || !pinCode)
      return NextResponse.json({ success: false, message: 'All required fields must be filled' }, { status: 400 });

    const transporter = makeTransporter();

    const [adminResult, clientResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Admission Enquiry: ${childName} — ${programName}`,
        html: admissionsAdminEmail({ firstName, lastName, email, mobile, childName, childAge, programName, programAge, city, pinCode, message }),
      }),
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Admission Enquiry Received — Evernal Academy`,
        text: `Dear ${firstName} ${lastName},\n\nThank you for your interest in Evernal Academy. We have received your admission enquiry for ${childName} and our team will be in touch within 24 hours.\n\nFor urgent matters, call us at +91 7003999531.\n\nWarm regards,\nEvernal Academy Admissions Team`,
        html: admissionsParentEmail({ firstName, lastName, childName, childAge, programName, programAge, city, pinCode }),
      }),
    ]);

    if (clientResult.status === 'rejected') console.error('Client email failed:', clientResult.reason);
    if (adminResult.status === 'rejected') console.error('Admin email failed:', adminResult.reason);

    return NextResponse.json({ success: true, message: 'Admission enquiry submitted successfully.' });

  } catch (error: any) {
    console.error('Admissions email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
