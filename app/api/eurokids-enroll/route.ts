import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      childName,
      parentName,
      email,
      mobile,
      pincode,
      centre,
      programName,
      programAge,
      programDescription,
      captcha,
    } = body;

    // Validate required fields
    if (!childName || !parentName || !email || !mobile || !pincode || !centre || !programName) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate CAPTCHA
    if (captcha !== '22') {
      return NextResponse.json(
        { success: false, message: 'Incorrect answer to math question' },
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
      from: `"EvernalAcademy Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Enrollment: ${childName} - ${programName}`,
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
            <h1 style="margin: 0; color: #FCAB17;">🎓 New Enrollment Application</h1>
            <p>EvernalAcademy - Online Enrollment</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <h2 style="color: #08472C; margin-top: 0;">${childName}</h2>
              <p style="font-size: 1.2em; color: #0F172A;"><strong>${programName}</strong></p>
              <p>Age Group: ${programAge} • Selected Centre: ${centre}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">👨‍👩‍👧 Family Information</h3>
              <p><span class="label">Child's Name:</span> ${childName}</p>
              <p><span class="label">Parent's Name:</span> ${parentName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}" style="color: #08472C;">${email}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${mobile}" style="color: #08472C;">${mobile}</a></p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">📍 Program & Location Details</h3>
              <p><span class="label">Program:</span> ${programName}</p>
              <p><span class="label">Age Group:</span> ${programAge}</p>
              <p><span class="label">Focus Area:</span> ${programDescription}</p>
              <p><span class="label">Selected Centre:</span> ${centre}</p>
              <p><span class="label">Pincode:</span> ${pincode}</p>
            </div>
            
            <div class="action-box">
              <div class="action-title">📞 Immediate Actions Required</div>
              <ol style="margin-left: 20px;">
                <li>Contact parent within <strong>2 hours</strong></li>
                <li>Schedule campus tour appointment</li>
                <li>Send program details and fee structure</li>
                <li>Create student profile in system</li>
              </ol>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #FCAB17;">
                <p><strong>Priority:</strong> URGENT</p>
                <p><strong>Application ID:</strong> EL${Date.now().toString().slice(-8)}</p>
                <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 15px; background: #F8FAFC; border-radius: 8px;">
              <p style="margin: 0; color: #08472C;">
                <strong>⚠️ Important:</strong> This enrollment requires follow-up within 24 hours
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to parent (confirmation)
    const parentMailOptions = {
      from: `"EvernalAcademy Admissions" <${process.env.EMAIL_USER}>`,
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
            .contact-box { background: #0F172A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .steps { margin: 20px 0; }
            .step { display: flex; align-items: flex-start; margin: 15px 0; }
            .step-number { background: #FCAB17; color: #0F172A; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; }
            .ticket { background: linear-gradient(135deg, #FCAB17, #FFD700); color: #0F172A; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">Enrollment Confirmation</h1>
            <p>EvernalAcademy - Nurturing Young Minds</p>
          </div>
          
          <div class="content">
            <div class="ticket">
              <div style="font-size: 1.5em; margin-bottom: 5px;">🎟️ Application Ticket</div>
              <div style="font-size: 1.2em;">EL${Date.now().toString().slice(-8)}</div>
            </div>
            
            <div class="confirmation-box">
              <h2 style="color: #166534; margin: 0;">✓ Enrollment Submitted Successfully!</h2>
              <p style="color: #15803D; margin: 10px 0;">Thank you for choosing EvernalAcademy</p>
            </div>
            
            <p>Dear ${parentName},</p>
            
            <p>Thank you for enrolling <strong>${childName}</strong> in our <strong>${programName}</strong> program at EvernalAcademy.</p>
            
            <div class="info-box">
              <h3 style="color: #08472C; margin-top: 0;">📋 Application Summary</h3>
              <p><strong>Child's Name:</strong> ${childName}</p>
              <p><strong>Program:</strong> ${programName}</p>
              <p><strong>Age Group:</strong> ${programAge}</p>
              <p><strong>Selected Centre:</strong> ${centre}</p>
              <p><strong>Application ID:</strong> EL${Date.now().toString().slice(-8)}</p>
              <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="steps">
              <h3 style="color: #08472C;">📅 Next Steps in Admission Process</h3>
              
              <div class="step">
                <div class="step-number">1</div>
                <div>
                  <strong>Phone Call from Admission Team</strong>
                  <p>Our team will contact you within <strong>2 hours</strong> to discuss the next steps.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div>
                  <strong>Campus Tour & Meeting</strong>
                  <p>Schedule a personalized campus tour to see our facilities and meet our educators.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div>
                  <strong>Documentation & Fee Payment</strong>
                  <p>Submit required documents and complete the admission formalities.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div>
                  <strong>Welcome Kit & Orientation</strong>
                  <p>Receive your child's welcome kit and attend orientation session.</p>
                </div>
              </div>
            </div>
            
            <div class="contact-box">
              <h3 style="color: #FCAB17; margin-top: 0;">📞 Need Immediate Assistance?</h3>
              <p><strong>Admission Office:</strong> +91 555 123 4567</p>
              <p><strong>Email:</strong> admissions@eliteacademy.com</p>
              <p><strong>Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</p>
              <p><strong>Emergency:</strong> +91 555 987 6543 (Available 24/7)</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: #FFF7ED; border-radius: 8px; border: 1px solid #FCAB17;">
              <h4 style="color: #08472C; margin-top: 0;">🎁 Special Offer for Early Enrollment</h4>
              <p>Complete the admission process within 7 days to receive:</p>
              <ul style="margin-left: 20px;">
                <li>🎒 Free School Bag & Stationery Kit</li>
                <li>📚 15% Discount on Annual Fee</li>
                <li>👕 2 Sets of School Uniform</li>
              </ul>
            </div>
            
            <p style="margin-top: 30px; color: #64748B; font-size: 14px; text-align: center;">
              <strong>Note:</strong> This is an automated confirmation email. Please do not reply directly to this message.<br>
              For any queries, please contact our admission office.
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
      message: 'Enrollment application submitted successfully!',
      applicationId: `EL${Date.now().toString().slice(-8)}`,
    });

  } catch (error: any) {
    console.error('Enrollment error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit application. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}