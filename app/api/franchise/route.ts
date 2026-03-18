import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      mobile,
      state,
      city,
      investmentRange,
      experience,
      message,
    } = body;

    // Validate required fields
    if (!fullName || !email || !mobile || !state || !city || !investmentRange || !experience) {
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

    // Get investment range label
    const investmentLabels: { [key: string]: string } = {
      '15-20': '₹ 15-20 Lakhs',
      '20-25': '₹ 20-25 Lakhs',
      '25-30': '₹ 25-30 Lakhs',
      '30+': '₹ 30+ Lakhs'
    };

    // Get experience label
    const experienceLabels: { [key: string]: string } = {
      'none': 'No Prior Experience',
      'education': 'Education Background',
      'business': 'Business Experience',
      'corporate': 'Corporate Background',
      'other': 'Other Experience'
    };

    // Email to admin
    const adminMailOptions = {
      from: `"Elite Academy Franchise" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🏫 New Franchise Inquiry: ${fullName} - ${city}, ${state}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #08472C 0%, #0F172A 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }
            .section { background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #FCAB17; }
            .label { color: #08472C; font-weight: bold; display: inline-block; min-width: 200px; }
            .highlight { background: #FFF7ED; padding: 15px; border-radius: 8px; border: 2px solid #FCAB17; margin: 20px 0; }
            .priority-box { background: #DC2626; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            .action-box { background: #0F172A; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .action-title { color: #FCAB17; font-weight: bold; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">🏫 New Franchise Inquiry</h1>
            <p>Elite Academy Franchise Department</p>
          </div>
          
          <div class="content">
            <div class="priority-box">
              <h2 style="margin: 0;">🚨 HIGH PRIORITY INQUIRY</h2>
              <p>Follow up required within 2 hours</p>
            </div>
            
            <div class="highlight">
              <h2 style="color: #08472C; margin-top: 0;">${fullName}</h2>
              <p style="font-size: 1.2em; color: #0F172A;"><strong>${city}, ${state}</strong></p>
              <p>Investment Range: <strong>${investmentLabels[investmentRange]}</strong> • Experience: ${experienceLabels[experience]}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">📋 Applicant Information</h3>
              <p><span class="label">Full Name:</span> ${fullName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}" style="color: #08472C;">${email}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${mobile}" style="color: #08472C;">${mobile}</a></p>
              <p><span class="label">Location:</span> ${city}, ${state}</p>
            </div>
            
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">💼 Business Details</h3>
              <p><span class="label">Investment Range:</span> ${investmentLabels[investmentRange]}</p>
              <p><span class="label">Experience:</span> ${experienceLabels[experience]}</p>
              <p><span class="label">Location:</span> ${city}, ${state}</p>
            </div>
            
            ${message ? `
            <div class="section">
              <h3 style="color: #08472C; margin-top: 0;">💭 Additional Information</h3>
              <p>${message}</p>
            </div>
            ` : ''}
            
            <div class="action-box">
              <div class="action-title">🎯 Immediate Actions Required</div>
              <ol style="margin-left: 20px;">
                <li><strong>Call within 2 hours</strong> - Initial discussion</li>
                <li><strong>Send franchise brochure</strong> via email</li>
                <li><strong>Schedule detailed meeting</strong> within 24 hours</li>
                <li><strong>Prepare investment proposal</strong> based on location</li>
                <li><strong>Add to CRM</strong> for follow-up tracking</li>
              </ol>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #FCAB17;">
                <p><strong>Inquiry ID:</strong> FR${Date.now().toString().slice(-8)}</p>
                <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Lead Score:</strong> ${investmentRange === '25-30' || investmentRange === '30+' ? 'HIGH' : 'MEDIUM'}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 15px; background: #F8FAFC; border-radius: 8px; border: 2px solid #08472C;">
              <p style="margin: 0; color: #08472C;">
                <strong>📊 Lead Quality:</strong> Potential High-Value Franchise Partner
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to applicant (confirmation)
    const applicantMailOptions = {
      from: `"Elite Academy Franchise" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Franchise Inquiry Received - ${fullName}`,
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
            .documents { background: #FFF7ED; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #FCAB17; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #FCAB17;">Franchise Inquiry Confirmation</h1>
            <p>Elite Academy - Building Successful Preschools Since 2010</p>
          </div>
          
          <div class="content">
            <div class="ticket">
              <div style="font-size: 1.5em; margin-bottom: 5px;">🎟️ Inquiry Ticket</div>
              <div style="font-size: 1.2em;">FR${Date.now().toString().slice(-8)}</div>
            </div>
            
            <div class="confirmation-box">
              <h2 style="color: #166534; margin: 0;">✓ Inquiry Submitted Successfully!</h2>
              <p style="color: #15803D; margin: 10px 0;">Thank you for your interest in Elite Academy Franchise</p>
            </div>
            
            <p>Dear ${fullName},</p>
            
            <p>Thank you for expressing interest in becoming an <strong>Elite Academy Franchise Partner</strong>. 
            We have received your inquiry for ${city}, ${state} and our franchise team will contact you shortly.</p>
            
            <div class="info-box">
              <h3 style="color: #08472C; margin-top: 0;">📋 Inquiry Summary</h3>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Location:</strong> ${city}, ${state}</p>
              <p><strong>Investment Range:</strong> ${investmentLabels[investmentRange]}</p>
              <p><strong>Experience:</strong> ${experienceLabels[experience]}</p>
              <p><strong>Inquiry ID:</strong> FR${Date.now().toString().slice(-8)}</p>
              <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="steps">
              <h3 style="color: #08472C;">📅 Next Steps in Our Partnership Journey</h3>
              
              <div class="step">
                <div class="step-number">1</div>
                <div>
                  <strong>Initial Consultation Call</strong>
                  <p>Our franchise expert will call you within <strong>2 hours</strong> for initial discussion.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div>
                  <strong>Detailed Information Package</strong>
                  <p>Receive complete franchise kit including business plan, investment details, and support structure.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div>
                  <strong>Virtual Meeting & Presentation</strong>
                  <p>Detailed presentation about the franchise model, profitability, and support system.</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div>
                  <strong>Site Visit & Final Agreement</strong>
                  <p>Visit existing centers, finalize location, and complete partnership formalities.</p>
                </div>
              </div>
            </div>
            
            <div class="documents">
              <h4 style="color: #08472C; margin-top: 0;">📚 Documents Being Prepared for You</h4>
              <ul style="margin-left: 20px;">
                <li>Franchise Business Plan & ROI Analysis</li>
                <li>Complete Investment Breakdown</li>
                <li>Center Design & Layout Plans</li>
                <li>Marketing & Admission Strategy</li>
                <li>Training & Operations Manual</li>
                <li>Franchise Agreement Draft</li>
              </ul>
            </div>
            
            <div class="contact-box">
              <h3 style="color: #FCAB17; margin-top: 0;">📞 Need Immediate Assistance?</h3>
              <p><strong>Franchise Director:</strong> +91 555 123 4567</p>
              <p><strong>Email:</strong> franchise@eliteacademy.com</p>
              <p><strong>Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</p>
              <p><strong>Head Office:</strong> 123 Education Street, Tech City</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: linear-gradient(135deg, #08472C, #0A5C3A); border-radius: 8px; color: white;">
              <h4 style="color: #FCAB17; margin-top: 0;">🎁 Special Early Bird Offer</h4>
              <p>Complete the franchise process within 30 days to receive:</p>
              <ul style="margin-left: 20px;">
                <li>🏆 10% Discount on Franchise Fee</li>
                <li>🎓 Free Advanced Teacher Training</li>
                <li>📢 Additional Marketing Support Package</li>
                <li>🛠️ Extra Setup Assistance</li>
              </ul>
            </div>
            
            <p style="margin-top: 30px; color: #64748B; font-size: 14px; text-align: center;">
              <strong>Note:</strong> This is an automated confirmation email. Please do not reply directly to this message.<br>
              For any queries, please contact our franchise department directly.
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(applicantMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Franchise inquiry submitted successfully!',
      inquiryId: `FR${Date.now().toString().slice(-8)}`,
    });

  } catch (error: any) {
    console.error('Franchise inquiry error:', error);
    
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
