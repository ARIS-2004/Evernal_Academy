import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactAdminEmail, contactUserEmail } from '@/lib/email-templates';

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
    const { name, email, phone, city, pin, message } = body;

    if (!name || !email || !message)
      return NextResponse.json({ success: false, message: 'Name, email, and message are required' }, { status: 400 });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 });

    const transporter = makeTransporter();
    await transporter.verify();

    await transporter.sendMail({
      from: `"Evernal Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: contactAdminEmail({ name, email, phone, city, pin, message }),
    });

    await transporter.sendMail({
      from: `"Evernal Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message — Evernal Academy`,
      text: `Dear ${name},\n\nThank you for contacting Evernal Academy. We have received your message and will get back to you within 24 hours.\n\nFor urgent matters, call us at +91 7003999531.\n\nWarm regards,\nEvernal Academy Team`,
      html: contactUserEmail({ name, message }),
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });

  } catch (error: any) {
    console.error('Contact email error:', error);
    let msg = 'Failed to send message. Please try again.';
    if (error.code === 'EAUTH') msg = 'Email authentication failed.';
    else if (error.code === 'ECONNECTION') msg = 'Connection error. Please try again.';
    return NextResponse.json(
      { success: false, message: msg, details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}
