const BRAND = {
  green: '#08472C',
  gold: '#FCAB17',
  dark: '#0a2e1c',
  lightBg: '#f7f8f6',
  border: '#d4e4dc',
};

const BASE_STYLES = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', Arial, sans-serif; background: #f0f4f1; color: #1a1a1a; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(8,71,44,0.10); }
    .header { background: ${BRAND.green}; padding: 36px 40px 28px; text-align: center; }
    .header-logo { font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: ${BRAND.gold}; margin-bottom: 10px; }
    .header-title { font-size: 22px; font-weight: 700; color: #ffffff; line-height: 1.3; }
    .header-sub { font-size: 13px; color: rgba(255,255,255,0.65); margin-top: 6px; }
    .gold-rule { height: 3px; background: ${BRAND.gold}; }
    .body { padding: 36px 40px; background: #ffffff; }
    .greeting { font-size: 15px; color: #1a1a1a; margin-bottom: 16px; }
    .intro { font-size: 14px; color: #4a5568; line-height: 1.7; margin-bottom: 24px; }
    .card { background: ${BRAND.lightBg}; border: 1px solid ${BRAND.border}; border-radius: 10px; padding: 22px 24px; margin-bottom: 20px; }
    .card-title { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: ${BRAND.green}; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid ${BRAND.border}; }
    .row { padding: 8px 0; border-bottom: 1px solid ${BRAND.border}; font-size: 13.5px; }
    .row:last-child { border-bottom: none; }
    .row-label { color: #6b7280; font-weight: 500; }
    .row-value { color: #1a1a1a; font-weight: 600; }
    .highlight-card { background: ${BRAND.green}; border-radius: 10px; padding: 22px 24px; margin-bottom: 20px; }
    .highlight-card .card-title { color: ${BRAND.gold}; border-bottom-color: rgba(252,171,23,0.3); }
    .highlight-card .row-label { color: rgba(255,255,255,0.6); }
    .highlight-card .row-value { color: #ffffff; }
    .highlight-card .row { border-bottom-color: rgba(255,255,255,0.1); }
    .message-card { background: ${BRAND.lightBg}; border-left: 4px solid ${BRAND.gold}; border-radius: 0 10px 10px 0; padding: 18px 20px; margin-bottom: 20px; font-size: 14px; color: #374151; line-height: 1.7; font-style: italic; }
    .steps { margin-bottom: 20px; }
    .step { display: table; width: 100%; margin-bottom: 14px; }
    .step-num { display: table-cell; width: 32px; vertical-align: top; }
    .step-num-inner { width: 28px; height: 28px; background: ${BRAND.gold}; color: ${BRAND.dark}; border-radius: 50%; font-size: 12px; font-weight: 700; text-align: center; line-height: 28px; }
    .step-body { display: table-cell; vertical-align: top; padding-left: 12px; }
    .step-title { font-size: 13.5px; font-weight: 600; color: #1a1a1a; margin-bottom: 2px; }
    .step-desc { font-size: 13px; color: #6b7280; line-height: 1.6; }
    .cta-band { background: ${BRAND.lightBg}; border: 1px solid ${BRAND.border}; border-radius: 10px; padding: 20px 24px; margin-bottom: 20px; text-align: center; }
    .cta-band p { font-size: 13px; color: #4a5568; margin-bottom: 14px; }
    .cta-btn { display: inline-block; background: ${BRAND.green}; color: #ffffff; font-size: 13px; font-weight: 600; padding: 10px 24px; border-radius: 6px; text-decoration: none; letter-spacing: 0.5px; }
    .notice { font-size: 12px; color: #9ca3af; text-align: center; margin-top: 24px; line-height: 1.6; }
    .footer { background: ${BRAND.dark}; padding: 24px 40px; text-align: center; }
    .footer-name { font-size: 14px; font-weight: 700; color: ${BRAND.gold}; letter-spacing: 1px; margin-bottom: 4px; }
    .footer-tagline { font-size: 12px; color: rgba(255,255,255,0.45); margin-bottom: 12px; }
    .footer-copy { font-size: 11px; color: rgba(255,255,255,0.3); }
    a { color: ${BRAND.gold}; }
  </style>
`;

function shell(headerTitle: string, headerSub: string, bodyHtml: string): string {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">${BASE_STYLES}</head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="header-logo">Evernal Academy</div>
    <div class="header-title">${headerTitle}</div>
    <div class="header-sub">${headerSub}</div>
  </div>
  <div class="gold-rule"></div>
  <div class="body">${bodyHtml}</div>
  <div class="footer">
    <div class="footer-name">Evernal Academy</div>
    <div class="footer-tagline">Nurturing Young Minds, Building Bright Futures</div>
    <div class="footer-copy">&copy; ${year} Evernal Academy. All rights reserved.</div>
  </div>
</div>
</body>
</html>`;
}

function card(title: string, rows: [string, string][], highlight = false): string {
  const cls = highlight ? 'highlight-card' : 'card';
  const rowsHtml = rows
    .filter(([, v]) => v && v !== 'undefined' && v !== 'null')
    .map(([l, v]) => `<div class="row"><span class="row-label">${l}:</span> <span class="row-value">${v}</span></div>`)
    .join('');
  return `<div class="${cls}"><div class="card-title">${title}</div>${rowsHtml}</div>`;
}

function steps(items: { title: string; desc: string }[]): string {
  const html = items
    .map((s, i) => `<div class="step"><div class="step-num"><div class="step-num-inner">${i + 1}</div></div><div class="step-body"><div class="step-title">${s.title}</div><div class="step-desc">${s.desc}</div></div></div>`)
    .join('');
  return `<div class="steps">${html}</div>`;
}

function refId(): string {
  return `EA-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

// ─── Contact ────────────────────────────────────────────────────────────────

export function contactAdminEmail(data: {
  name: string; email: string; phone?: string; city?: string; pin?: string; message: string;
}): string {
  const { name, email, phone, city, pin, message } = data;
  const body = `
    ${card('Sender Details', [
      ['Name', name],
      ['Email', `<a href="mailto:${email}">${email}</a>`],
      ['Phone', phone ? `<a href="tel:${phone}">${phone}</a>` : '—'],
      ['City', city || '—'],
      ['PIN Code', pin || '—'],
    ])}
    <div class="card"><div class="card-title">Message</div>
      <p style="font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${message}</p>
    </div>
    ${card('Received', [['Date', new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })]], true)}
  `;
  return shell('New Contact Message', `Submitted via the Evernal Academy website`, body);
}

export function contactUserEmail(data: { name: string; message: string }): string {
  const { name, message } = data;
  const body = `
    <p class="greeting">Dear ${name},</p>
    <p class="intro">Thank you for reaching out to Evernal Academy. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
    <div class="message-card">"${message.length > 220 ? message.slice(0, 220) + '…' : message}"</div>
    ${steps([
      { title: 'Message Received', desc: 'Your enquiry has been logged and assigned to our team.' },
      { title: 'Team Review', desc: 'A member of our team will review your message carefully.' },
      { title: 'Personal Response', desc: 'We will reply to your email within 24 hours.' },
    ])}
    <p class="notice">For urgent matters, call us at <strong>+91 7003999531</strong> or visit us at the academy.</p>
  `;
  return shell('We Received Your Message', 'Thank you for contacting Evernal Academy', body);
}

// ─── Admissions ─────────────────────────────────────────────────────────────

export function admissionsAdminEmail(data: {
  firstName: string; lastName: string; email: string; mobile: string;
  childName: string; childAge: string; programName: string; programAge: string;
  city: string; pinCode: string; message?: string;
}): string {
  const { firstName, lastName, email, mobile, childName, childAge, programName, programAge, city, pinCode, message } = data;
  const body = `
    ${card('Programme Interest', [
      ['Child\'s Name', childName],
      ['Programme', programName],
      ['Age Group', programAge],
    ], true)}
    ${card('Parent / Guardian', [
      ['Name', `${firstName} ${lastName}`],
      ['Email', `<a href="mailto:${email}">${email}</a>`],
      ['Mobile', `<a href="tel:${mobile}">${mobile}</a>`],
    ])}
    ${card('Child Details', [
      ['Child\'s Name', childName],
      ['Age', `${childAge} years`],
      ['City', city],
      ['PIN Code', pinCode],
    ])}
    ${message ? `<div class="card"><div class="card-title">Additional Notes</div><p style="font-size:14px;color:#374151;line-height:1.7;">${message}</p></div>` : ''}
    ${card('Submission Info', [
      ['Reference', refId()],
      ['Date', new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })],
    ], true)}
  `;
  return shell('New Admission Enquiry', `${childName} — ${programName}`, body);
}

export function admissionsParentEmail(data: {
  firstName: string; lastName: string; childName: string; childAge: string;
  programName: string; programAge: string; city: string; pinCode: string;
}): string {
  const { firstName, lastName, childName, childAge, programName, programAge, city, pinCode } = data;
  const ref = refId();
  const body = `
    <p class="greeting">Dear ${firstName} ${lastName},</p>
    <p class="intro">Thank you for your interest in Evernal Academy. We have received your admission enquiry for <strong>${childName}</strong> and our admissions team will be in touch within <strong>24 hours</strong>.</p>
    ${card('Enquiry Summary', [
      ['Reference No.', ref],
      ['Child\'s Name', childName],
      ['Child\'s Age', `${childAge} years`],
      ['Programme', programName],
      ['Age Group', programAge],
      ['Location', `${city} — ${pinCode}`],
      ['Date Submitted', new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })],
    ])}
    <div class="card-title" style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND.green};margin-bottom:14px;">What Happens Next</div>
    ${steps([
      { title: 'Admissions Team Contact', desc: 'Our admissions team will call you within 24 hours to discuss the programme and answer any questions.' },
      { title: 'Campus Tour', desc: 'Schedule a visit to explore our classrooms, facilities, and meet our educators.' },
      { title: 'Documentation', desc: 'Submit required documents — birth certificate, immunisation records, and passport-size photos.' },
      { title: 'Admission Confirmation', desc: 'Complete the fee payment to secure your child\'s place in the programme.' },
    ])}
    <p class="notice">For any queries, call us at <strong>+91 7003999531</strong>. Keep your reference number <strong>${ref}</strong> for future correspondence.</p>
  `;
  return shell('Admission Enquiry Received', `Evernal Academy — ${programName}`, body);
}

// ─── Enroll ──────────────────────────────────────────────────────────────────

export function enrollAdminEmail(data: {
  firstName: string; lastName: string; email: string; phone: string;
  childName: string; childAge: string; selectedCourse: string;
  learningMode: string; address: string; city: string; pin: string; message?: string;
}): string {
  const { firstName, lastName, email, phone, childName, childAge, selectedCourse, learningMode, address, city, pin, message } = data;
  const timing = learningMode === 'full-day' ? 'Full Day (8:00 AM – 3:00 PM)' : 'Half Day (8:00 AM – 12:00 PM)';
  const body = `
    ${card('Enrolment Details', [
      ['Child\'s Name', childName],
      ['Programme', selectedCourse],
      ['Session Timing', timing],
    ], true)}
    ${card('Parent / Guardian', [
      ['Name', `${firstName} ${lastName}`],
      ['Email', `<a href="mailto:${email}">${email}</a>`],
      ['Phone', `<a href="tel:${phone}">${phone}</a>`],
    ])}
    ${card('Address', [
      ['Street', address],
      ['City', city],
      ['PIN Code', pin],
    ])}
    ${message ? `<div class="card"><div class="card-title">Additional Notes</div><p style="font-size:14px;color:#374151;line-height:1.7;">${message}</p></div>` : ''}
    ${card('Submission Info', [
      ['Reference', refId()],
      ['Date', new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })],
    ], true)}
  `;
  return shell('New Enrolment Application', `${childName} — ${selectedCourse}`, body);
}

export function enrollParentEmail(data: {
  firstName: string; lastName: string; childName: string; childAge: string;
  selectedCourse: string; learningMode: string;
}): string {
  const { firstName, lastName, childName, childAge, selectedCourse, learningMode } = data;
  const ref = refId();
  const timing = learningMode === 'full-day' ? 'Full Day (8:00 AM – 3:00 PM)' : 'Half Day (8:00 AM – 12:00 PM)';
  const body = `
    <p class="greeting">Dear ${firstName} ${lastName},</p>
    <p class="intro">Thank you for enrolling <strong>${childName}</strong> at Evernal Academy. We are delighted to welcome your family. Our admissions team will contact you within <strong>24 hours</strong> to confirm the next steps.</p>
    ${card('Enrolment Summary', [
      ['Reference No.', ref],
      ['Child\'s Name', childName],
      ['Child\'s Age', `${childAge} years`],
      ['Programme', selectedCourse],
      ['Session Timing', timing],
      ['Date Submitted', new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })],
    ])}
    <div class="card-title" style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND.green};margin-bottom:14px;">Admission Process</div>
    ${steps([
      { title: 'Confirmation Call', desc: 'Our admissions team will call you within 24 hours to confirm your enrolment details.' },
      { title: 'Campus Tour & Orientation', desc: 'Visit our campus to meet the educators and explore the learning environment.' },
      { title: 'Document Submission', desc: 'Provide birth certificate, immunisation records, and two passport-size photographs.' },
      { title: 'Fee Payment & Welcome Kit', desc: 'Complete the fee payment to secure your child\'s seat and receive the welcome kit.' },
    ])}
    <p class="notice">For any queries, call us at <strong>+91 7003999531</strong>. Keep your reference number <strong>${ref}</strong> for future correspondence.</p>
  `;
  return shell('Enrolment Confirmed', `Evernal Academy — ${selectedCourse}`, body);
}

// ─── Eurokids Enroll ─────────────────────────────────────────────────────────

export function eurokidsAdminEmail(data: {
  childName: string; parentName: string; email: string; mobile: string;
  pincode: string; centre: string; programName: string; programAge: string; programDescription: string;
}): string {
  const { childName, parentName, email, mobile, pincode, centre, programName, programAge, programDescription } = data;
  const body = `
    ${card('Programme Details', [
      ['Child\'s Name', childName],
      ['Programme', programName],
      ['Age Group', programAge],
      ['Focus Area', programDescription],
      ['Selected Centre', centre],
    ], true)}
    ${card('Family Information', [
      ['Parent\'s Name', parentName],
      ['Email', `<a href="mailto:${email}">${email}</a>`],
      ['Mobile', `<a href="tel:${mobile}">${mobile}</a>`],
      ['PIN Code', pincode],
    ])}
    ${card('Submission Info', [
      ['Reference', refId()],
      ['Date', new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })],
    ], true)}
  `;
  return shell('New Enrolment Application', `${childName} — ${programName}`, body);
}

export function eurokidsParentEmail(data: {
  parentName: string; childName: string; programName: string;
  programAge: string; centre: string;
}): string {
  const { parentName, childName, programName, programAge, centre } = data;
  const ref = refId();
  const body = `
    <p class="greeting">Dear ${parentName},</p>
    <p class="intro">Thank you for enrolling <strong>${childName}</strong> at Evernal Academy. We have received your application and our team will contact you within <strong>2 hours</strong>.</p>
    ${card('Application Summary', [
      ['Reference No.', ref],
      ['Child\'s Name', childName],
      ['Programme', programName],
      ['Age Group', programAge],
      ['Selected Centre', centre],
      ['Date Submitted', new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })],
    ])}
    <div class="card-title" style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND.green};margin-bottom:14px;">Next Steps</div>
    ${steps([
      { title: 'Team Contact', desc: 'Our admissions team will call you within 2 hours to discuss the programme.' },
      { title: 'Campus Visit', desc: 'Schedule a tour to see our facilities and meet our educators.' },
      { title: 'Documentation', desc: 'Submit birth certificate, immunisation records, and passport-size photos.' },
      { title: 'Admission Confirmation', desc: 'Complete the formalities to secure your child\'s place.' },
    ])}
    <p class="notice">For any queries, call us at <strong>+91 7003999531</strong>. Keep your reference number <strong>${ref}</strong> for future correspondence.</p>
  `;
  return shell('Application Received', `Evernal Academy — ${programName}`, body);
}
