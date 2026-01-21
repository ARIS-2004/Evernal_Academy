import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      childName,
      childAge,
      selectedCourse,
      coursePrice,
      courseDuration,
      courseAge,
      learningMode,
      address,
      city,
      pin,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !childName || !childAge || !address || !city || !pin) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: `"Elite Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Enrollment: ${childName} - ${selectedCourse}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #08472C 0%, #0F172A 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
            .section { background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #FCAB17; }
            .label { color: #08472C; font-weight: bold; display: inline-block; min-width: 150px; }
            .highlight { background: #FFF7ED; padding: 15px; border-radius: 8px; border: 2px solid #FCAB17; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">🎓 New Enrollment Received</h1>
            <p>Elite Academy Admissions</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <h2 style="color: #08472C; margin-top: 0;">${childName}</h2>
              <p style="font-size: 1.2em; color: #0F172A;"><strong>${selectedCourse}</strong></p>
              <p>Fees: <strong>$${coursePrice}</strong> • Duration: ${courseDuration} • Age: ${courseAge}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">👨‍👩‍👧 Parent/Guardian Information</h3>
              <p><span class="label">Name:</span> ${firstName} ${lastName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">👶 Child Information</h3>
              <p><span class="label">Child's Name:</span> ${childName}</p>
              <p><span class="label">Age:</span> ${childAge} years</p>
              <p><span class="label">Program Timing:</span> ${learningMode === 'full-day' ? 'Full Day (8 AM - 3 PM)' : 'Half Day (8 AM - 12 PM)'}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">📍 Address Details</h3>
              <p><span class="label">Address:</span> ${address}</p>
              <p><span class="label">City:</span> ${city}</p>
              <p><span class="label">PIN:</span> ${pin}</p>
            </div>
            
            ${message ? `
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">💭 Additional Notes</h3>
              <p>${message}</p>
            </div>
            ` : ''}
            
            <div style="background: #0F172A; color: white; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <h4 style="color: #FCAB17; margin-top: 0;">📞 Next Steps</h4>
              <p>1. Contact parent within 24 hours</p>
              <p>2. Schedule campus tour</p>
              <p>3. Complete documentation</p>
              <p>4. Confirm admission</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to parent (confirmation)
    const parentMailOptions = {
      from: `"Elite Academy Admissions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Enrollment Confirmation - ${childName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #08472C 0%, #0F172A 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
            .confirmation-box { background: #F0FDF4; padding: 20px; border-radius: 8px; border: 2px solid #16A34A; margin: 20px 0; text-align: center; }
            .info-box { background: #F8FAFC; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #FCAB17; }
            .steps { counter-reset: step; }
            .step { position: relative; padding-left: 40px; margin: 20px 0; }
            .step:before { counter-increment: step; content: counter(step); position: absolute; left: 0; top: 0; width: 30px; height: 30px; background: #FCAB17; color: #0F172A; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">Enrollment Confirmation</h1>
            <p>Thank you for choosing Elite Academy</p>
          </div>
          
          <div class="content">
            <div class="confirmation-box">
              <h2 style="color: #166534; margin: 0;">✓ Enrollment Submitted Successfully!</h2>
              <p style="color: #15803D; margin: 10px 0;">Reference #: EL${Date.now().toString().slice(-8)}</p>
            </div>
            
            <p>Dear ${firstName} ${lastName},</p>
            
            <p>Thank you for enrolling <strong>${childName}</strong> in our <strong>${selectedCourse}</strong> program.</p>
            
            <div class="info-box">
              <h3 style="color: #08472C; margin-top: 0;">📋 Enrollment Summary</h3>
              <p><strong>Program:</strong> ${selectedCourse}</p>
              <p><strong>Duration:</strong> ${courseDuration}</p>
              <p><strong>Age Group:</strong> ${courseAge}</p>
              <p><strong>Monthly Fees:</strong> $${coursePrice}</p>
              <p><strong>Timing:</strong> ${learningMode === 'full-day' ? 'Full Day (8:00 AM - 3:00 PM)' : 'Half Day (8:00 AM - 12:00 PM)'}</p>
            </div>
            
            <div class="steps">
              <h3 style="color: #08472C;">📅 Next Steps</h3>
              
              <div class="step">
                <strong>Step 1: Admission Team Contact</strong>
                <p>Our admission team will contact you within <strong>24 hours</strong> to discuss the next steps.</p>
              </div>
              
              <div class="step">
                <strong>Step 2: Campus Tour & Orientation</strong>
                <p>Schedule a campus tour to see our facilities and meet our staff.</p>
              </div>
              
              <div class="step">
                <strong>Step 3: Documentation</strong>
                <p>Submit required documents (birth certificate, immunization records, photos).</p>
              </div>
              
              <div class="step">
                <strong>Step 4: Fee Payment & Confirmation</strong>
                <p>Complete fee payment to secure your child's admission.</p>
              </div>
            </div>
            
            <div style="background: #0F172A; color: white; padding: 20px; border-radius: 8px; margin-top: 30px;">
              <h3 style="color: #FCAB17; margin-top: 0;">📞 Need Immediate Assistance?</h3>
              <p><strong>Admission Office:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> admissions@eliteacademy.com</p>
              <p><strong>Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>
            
            <p style="margin-top: 30px; color: #64748B; font-size: 14px;">
              <strong>Note:</strong> This is an automated confirmation. Please do not reply to this email.
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(parentMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Enrollment submitted successfully!',
    });

  } catch (error: any) {
    console.error('Enrollment error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit enrollment. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}