import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { eurokidsAdminEmail, eurokidsParentEmail } from '@/lib/email-templates';

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
    const { childName, parentName, email, mobile, pincode, centre, programName, programAge, programDescription, captcha } = body;

    if (!childName || !parentName || !email || !mobile || !pincode || !centre || !programName)
      return NextResponse.json({ success: false, message: 'All required fields must be filled' }, { status: 400 });

    if (captcha !== '22')
      return NextResponse.json({ success: false, message: 'Incorrect answer to the security question' }, { status: 400 });

    const transporter = makeTransporter();

    const [adminResult, clientResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Enrolment: ${childName} — ${programName}`,
        html: eurokidsAdminEmail({ childName, parentName, email, mobile, pincode, centre, programName, programAge, programDescription }),
      }),
      transporter.sendMail({
        from: `"Evernal Academy Admissions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Application Received — Evernal Academy`,
        text: `Dear ${parentName},\n\nThank you for enrolling ${childName} at Evernal Academy. We have received your application and our team will contact you within 2 hours.\n\nFor urgent matters, call us at +91 7003999531.\n\nWarm regards,\nEvernal Academy Admissions Team`,
        html: eurokidsParentEmail({ parentName, childName, programName, programAge, centre }),
      }),
    ]);

    if (clientResult.status === 'rejected') console.error('Client email failed:', clientResult.reason);
    if (adminResult.status === 'rejected') console.error('Admin email failed:', adminResult.reason);

    return NextResponse.json({
      success: true,
      message: 'Enrolment application submitted successfully.',
      applicationId: `EA-${Date.now().toString(36).toUpperCase().slice(-6)}`,
    });

  } catch (error: any) {
    console.error('Eurokids enrolment error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
