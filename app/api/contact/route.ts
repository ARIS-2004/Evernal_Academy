import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, city, pin, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Admin email content
    const adminMailOptions = {
      from: `"Elite Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📧 New Contact Form: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                .header { background: linear-gradient(135deg, #08472C 0%, #0F172A 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
                .footer { background: #0F172A; color: #B2C6BD; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
                .info-item { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #FCAB17; }
                .label { color: #08472C; font-weight: bold; }
                .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1 style="margin: 0; color: #FCAB17;">New Contact Form Submission</h1>
                <p style="opacity: 0.9;">From Elite Academy Website</p>
            </div>
            
            <div class="content">
                <div class="info-item">
                    <span class="label">👤 Name:</span> ${name}
                </div>
                <div class="info-item">
                    <span class="label">📧 Email:</span> ${email}
                </div>
                ${phone ? `<div class="info-item"><span class="label">📱 Phone:</span> ${phone}</div>` : ''}
                ${city ? `<div class="info-item"><span class="label">🏙️ City:</span> ${city}</div>` : ''}
                ${pin ? `<div class="info-item"><span class="label">📍 PIN:</span> ${pin}</div>` : ''}
                
                <div class="message-box">
                    <h3 style="color: #08472C; margin-top: 0;">💬 Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
                
                <div style="background: #0F172A; color: white; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <p style="margin: 0; color: #FCAB17; font-weight: bold;">📞 Quick Actions:</p>
                    <p style="margin: 5px 0;">Reply to: <a href="mailto:${email}" style="color: #FCAB17;">${email}</a></p>
                    ${phone ? `<p style="margin: 5px 0;">Call: <a href="tel:${phone}" style="color: #FCAB17;">${phone}</a></p>` : ''}
                </div>
            </div>
            
            <div class="footer">
                <p style="margin: 0;">© ${new Date().getFullYear()} Elite Academy. All rights reserved.</p>
                <p style="margin: 5px 0; font-size: 12px; opacity: 0.8;">This email was generated automatically from the contact form.</p>
            </div>
        </body>
        </html>
      `,
    };

    // User email content
    const userMailOptions = {
      from: `"Elite Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Thank You for Contacting Elite Academy',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                .header { background: linear-gradient(135deg, #08472C 0%, #0F172A 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #FFFFFF; padding: 30px; border: 1px solid #e2e8f0; }
                .footer { background: #0F172A; color: #B2C6BD; padding: 25px; text-align: center; border-radius: 0 0 10px 10px; }
                .highlight-box { background: linear-gradient(135deg, #FCAB17 0%, #fbbf24 100%); color: #0F172A; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; font-weight: bold; }
                .contact-box { background: #f8fafc; padding: 20px; border-radius: 8px; border: 2px solid #08472C; margin: 20px 0; }
                .contact-item { margin: 10px 0; display: flex; align-items: center; gap: 10px; }
                .icon { color: #FCAB17; }
            </style>
        </head>
        <body>
            <div class="header">
                <div style="font-size: 48px; margin-bottom: 20px;">🎓</div>
                <h1 style="margin: 0; color: #FCAB17;">Thank You, ${name}!</h1>
                <p style="opacity: 0.9;">We've received your message</p>
            </div>
            
            <div class="content">
                <p style="font-size: 16px; color: #0F172A;">Dear <strong>${name}</strong>,</p>
                
                <p style="color: #08472C;">Thank you for reaching out to <strong>Elite Academy</strong>. Your message has been successfully delivered to our team.</p>
                
                <div class="highlight-box">
                    ⏰ We'll respond within <span style="font-size: 1.2em;">24 hours</span>
                </div>
                
                <div style="background: #B2C6BD; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0; color: #08472C;"><strong>📝 Your Message Summary:</strong></p>
                    <p style="margin: 10px 0; padding: 10px; background: white; border-radius: 5px;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
                </div>
                
                <div class="contact-box">
                    <h3 style="color: #08472C; margin-top: 0;">📞 Need Immediate Assistance?</h3>
                    
                    <div class="contact-item">
                        <span class="icon">📱</span>
                        <div>
                            <strong>Phone Support:</strong><br>
                            +1 (555) 123-4567<br>
                            +1 (555) 987-6543
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="icon">📧</span>
                        <div>
                            <strong>Email Support:</strong><br>
                            info@eliteacademy.com<br>
                            support@eliteacademy.com
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="icon">📍</span>
                        <div>
                            <strong>Office Address:</strong><br>
                            123 Education Street<br>
                            Tech City, TC 12345
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="icon">🕒</span>
                        <div>
                            <strong>Business Hours:</strong><br>
                            Mon-Fri: 9:00 AM - 6:00 PM<br>
                            Saturday: 10:00 AM - 4:00 PM
                        </div>
                    </div>
                </div>
                
                <p style="color: #0F172A; font-size: 14px;">
                    <strong>Note:</strong> This is an automated confirmation email. Please do not reply directly to this message.
                </p>
            </div>
            
            <div class="footer">
                <p style="margin: 0; color: #FCAB17; font-weight: bold;">Elite Academy</p>
                <p style="margin: 10px 0; font-size: 14px;">Transforming Education, Empowering Futures</p>
                <p style="margin: 5px 0; font-size: 12px; opacity: 0.8;">© ${new Date().getFullYear()} Elite Academy. All rights reserved.</p>
            </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully!',
    });

  } catch (error: any) {
    console.error('Detailed email error:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.';
    } else if (error.message?.includes('Invalid login')) {
      errorMessage = 'Email configuration error. Please contact administrator.';
    }

    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}