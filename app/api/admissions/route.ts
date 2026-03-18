import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { admissionsAdminEmail, admissionsParentEmail } from '@/lib/email-templates';

function makeTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobile, childName, childAge, programName, programAge, city, pinCode, message } = body;

    if (!firstName || !lastName || !email || !mobile || !childName || !childAge || !city || !pinCode)
      return NextResponse.json({ success: false, message: 'All required fields must be filled' }, { status: 400 });

    const transporter = makeTransporter();

    await transporter.sendMail({
      from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Admission Enquiry: ${childName} — ${programName}`,
      html: admissionsAdminEmail({ firstName, lastName, email, mobile, childName, childAge, programName, programAge, city, pinCode, message }),
    });

    await transporter.sendMail({
      from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Admission Enquiry Received — Evernal Academy`,
      html: admissionsParentEmail({ firstName, lastName, childName, childAge, programName, programAge, city, pinCode }),
    });

    return NextResponse.json({ success: true, message: 'Admission enquiry submitted successfully.' });

  } catch (error: any) {
    console.error('Admissions email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
