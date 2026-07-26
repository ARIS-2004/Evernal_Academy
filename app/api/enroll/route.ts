import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { enrollAdminEmail, enrollParentEmail } from '@/lib/email-templates';

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
    const { firstName, lastName, email, phone, childName, childAge, selectedCourse, learningMode, address, city, pin, message } = body;

    if (!firstName || !lastName || !email || !phone || !childName || !childAge || !address || !city || !pin)
      return NextResponse.json({ success: false, message: 'All required fields must be filled' }, { status: 400 });

    const transporter = makeTransporter();

    const [adminResult, clientResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Enrolment: ${childName} — ${selectedCourse}`,
        html: enrollAdminEmail({ firstName, lastName, email, phone, childName, childAge, selectedCourse, learningMode, address, city, pin, message }),
      }),
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Enrolment Confirmed — Evernal Academy`,
        text: `Dear ${firstName} ${lastName},\n\nThank you for enrolling ${childName} at Evernal Academy. We are delighted to welcome your family. Our admissions team will contact you within 24 hours.\n\nFor urgent matters, call us at +91 7003999531.\n\nWarm regards,\nEvernal Academy Admissions Team`,
        html: enrollParentEmail({ firstName, lastName, childName, childAge, selectedCourse, learningMode }),
      }),
    ]);

    if (clientResult.status === 'rejected') console.error('Client email failed:', clientResult.reason);
    if (adminResult.status === 'rejected') console.error('Admin email failed:', adminResult.reason);

    return NextResponse.json({ success: true, message: 'Enrolment submitted successfully.' });

  } catch (error: any) {
    console.error('Enrolment email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enrolment. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
