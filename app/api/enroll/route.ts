import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { enrollAdminEmail, enrollParentEmail } from '@/lib/email-templates';

function makeTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, childName, childAge, selectedCourse, learningMode, address, city, pin, message } = body;

    if (!firstName || !lastName || !email || !phone || !childName || !childAge || !address || !city || !pin)
      return NextResponse.json({ success: false, message: 'All required fields must be filled' }, { status: 400 });

    const transporter = makeTransporter();

    await transporter.sendMail({
      from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Enrolment: ${childName} — ${selectedCourse}`,
      html: enrollAdminEmail({ firstName, lastName, email, phone, childName, childAge, selectedCourse, learningMode, address, city, pin, message }),
    });

    await transporter.sendMail({
      from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Enrolment Confirmed — Evernal Academy`,
      html: enrollParentEmail({ firstName, lastName, childName, childAge, selectedCourse, learningMode }),
    });

    return NextResponse.json({ success: true, message: 'Enrolment submitted successfully.' });

  } catch (error: any) {
    console.error('Enrolment email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enrolment. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
