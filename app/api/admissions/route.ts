import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      mobile,
      childName,
      childAge,
      programName,
      programAge,
      programFee,
      city,
      pinCode,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !mobile || !childName || !childAge || !city || !pinCode) {
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
      subject: `📚 New Admission Inquiry: ${childName} - ${programName}`,
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
            .action-box { background: #0F172A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .action-title { color: #FCAB17; font-weight: bold; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">📚 New Admission Inquiry</h1>
            <p>Elite Academy Admissions Portal</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <h2 style="color: #08472C; margin-top: 0;">${childName}</h2>
              <p style="font-size: 1.2em; color: #0F172A;"><strong>${programName}</strong></p>
              <p>Monthly Fee: <strong>$${programFee}</strong> • Age Group: ${programAge}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">👨‍👩‍👧 Parent/Guardian Information</h3>
              <p><span class="label">Name:</span> ${firstName} ${lastName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}" style="color: #08472C;">${email}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${mobile}" style="color: #08472C;">${mobile}</a></p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">👶 Child Information</h3>
              <p><span class="label">Child's Name:</span> ${childName}</p>
              <p><span class="label">Age:</span> ${childAge} years</p>
              <p><span class="label">Program:</span> ${programName}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">📍 Location Details</h3>
              <p><span class="label">City:</span> ${city}</p>
              <p><span class="label">PIN Code:</span> ${pinCode}</p>
            </div>
            
            ${message ? `
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">💭 Additional Information</h3>
              <p>${message}</p>
            </div>
            ` : ''}
            
            <div class="action-box">
              <div class="action-title">📞 Next Steps Required</div>
              <ol style="margin-left: 20px;">
                <li>Contact parent within 24 hours</li>
                <li>Schedule campus tour appointment</li>
                <li>Send program details and fee structure</li>
                <li>Follow up after 48 hours</li>
              </ol>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #FCAB17;">
                <p><strong>Priority:</strong> High</p>
                <p><strong>Inquiry Date:</strong> ${new Date().toLocaleDateString()}</p>
              </div>
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
      subject: `✅ Admission Inquiry Received - ${childName}`,
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
            .contact-box { background: #0F172A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .steps { margin: 20px 0; }
            .step { display: flex; align-items: flex-start; margin: 15px 0; }
            .step-number { background: #FCAB17; color: #0F172A; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">Admission Inquiry Confirmation</h1>
            <p>Elite Academy - Nurturing Young Minds</p>
          </div>
          
          <div class="content">
            <div class="confirmation-box">
              <h2 style="color: #166534; margin: 0;">✓ Inquiry Submitted Successfully!</h2>
              <p style="color: #15803D; margin: 10px 0;">Reference #: EL${Date.now().toString().slice(-8)}</p>
            </div>
            
            <p>Dear ${firstName} ${lastName},</p>
            
            <p>Thank you for your interest in <strong>Elite Academy</strong>. We have received your inquiry for <strong>${childName}</strong>'s admission to our <strong>${programName}</strong> program.</p>
            
            <div class="info-box">
              <h3 style="color: #08472C; margin-top: 0;">📋 Inquiry Summary</h3>
              <p><strong>Child's Name:</strong> ${childName}</p>
              <p><strong>Age:</strong> ${childAge} years</p>
              <p><strong>Program:</strong> ${programName}</p>
              <p><strong>Age Group:</strong> ${programAge}</p>
              <p><strong>Location:</strong> ${city}, ${pinCode}</p>
            </div>
            
            <div class="steps">
              <h3 style="color: #08472C;">📅 What Happens Next?</h3>
              
              <div class="step">
                <div class="step-number">1</div>
                <div>
                  <strong>Admission Team Contact</strong>
                  <p>Our admission team will contact you within <strong>24 hours</strong> to discuss the next steps.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div>
                  <strong>Campus Tour</strong>
                  <p>Schedule a campus tour to explore our facilities and learning environment.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div>
                  <strong>Documentation & Admission</strong>
                  <p>Complete the admission formalities and secure your child's seat.</p>
                </div>
              </div>
            </div>
            
            <div class="contact-box">
              <h3 style="color: #FCAB17; margin-top: 0;">📞 Need Immediate Assistance?</h3>
              <p><strong>Admission Office:</strong> +91 555 123 4567</p>
              <p><strong>Email:</strong> admissions@eliteacademy.com</p>
              <p><strong>Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</p>
              <p><strong>Address:</strong> 123 Education Street, Tech City</p>
            </div>
            
            <p style="margin-top: 30px; color: #64748B; font-size: 14px;">
              <strong>Note:</strong> This is an automated confirmation email. Please do not reply directly to this message.
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
      message: 'Admission inquiry submitted successfully!',
    });

  } catch (error: any) {
    console.error('Admission inquiry error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit inquiry. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}