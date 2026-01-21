export interface PlacementStat {
  label: string;
  value: string;
  description?: string;
}

export interface PlacementService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PlacementProcess {
  step: string;
  title: string;
  description: string;
  duration?: string;
}

export interface SuccessStory {
  name: string;
  course: string;
  company: string;
  package: string;
  image: string;
  testimonial: string;
  position: string;
}

export interface PartnerCompany {
  name: string;
  logo: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const placementStats: PlacementStat[] = [
  { label: 'Placement Rate', value: '95%', description: 'Success Rate' },
  { label: 'Avg. Salary Package', value: '₹6.5 LPA', description: 'Average CTC' },
  { label: 'Company Partners', value: '250+', description: 'Hiring Companies' },
  { label: 'Students Placed', value: '1200+', description: 'Successful Careers' },
];

export const placementServices: PlacementService[] = [
  {
    icon: '📝',
    title: 'Resume Building',
    description: 'Create ATS-friendly resumes that pass screening algorithms',
    features: ['ATS Optimization', 'Professional Templates', 'Industry-specific Formatting']
  },
  {
    icon: '💼',
    title: 'Career Guidance',
    description: 'Personalized career path planning and strategy sessions',
    features: ['Career Assessment', 'Growth Roadmap', 'Skill Gap Analysis']
  },
  {
    icon: '🎯',
    title: 'Interview Coaching',
    description: 'Master technical and HR interviews with expert coaching',
    features: ['Mock Interviews', 'Technical Prep', 'HR Round Practice']
  },
  {
    icon: '💬',
    title: 'Soft Skills Training',
    description: 'Develop communication and professional skills',
    features: ['Communication Skills', 'Presentation Skills', 'Email Etiquette']
  },
  {
    icon: '🔗',
    title: 'LinkedIn Optimization',
    description: 'Build a professional online presence that attracts recruiters',
    features: ['Profile Makeover', 'Network Building', 'Content Strategy']
  },
  {
    icon: '🤝',
    title: 'Job Matching',
    description: 'Intelligent matching with suitable job opportunities',
    features: ['Profile Matching', 'Job Recommendations', 'Referral Network']
  }
];

export const placementProcess: PlacementProcess[] = [
  {
    step: '01',
    title: 'Skill Assessment',
    description: 'Comprehensive evaluation of your technical and soft skills',
    duration: '1-2 Weeks'
  },
  {
    step: '02',
    title: 'Profile Building',
    description: 'Resume, LinkedIn, and portfolio optimization',
    duration: '2-3 Weeks'
  },
  {
    step: '03',
    title: 'Interview Prep',
    description: 'Intensive interview training and mock sessions',
    duration: '3-4 Weeks'
  },
  {
    step: '04',
    title: 'Job Matching',
    description: 'Strategic matching with suitable companies',
    duration: 'Ongoing'
  },
  {
    step: '05',
    title: 'Final Placement',
    description: 'Offer negotiation and onboarding support',
    duration: '1-2 Weeks'
  }
];

export const successStories: SuccessStory[] = [
  {
    name: 'Rahul Sharma',
    course: 'Full Stack Development',
    company: 'Amazon',
    package: '₹18 LPA',
    image: '👨‍💻',
    testimonial: 'The placement team helped me crack 3 offers. Their mock interviews were incredibly helpful!',
    position: 'SDE-1'
  },
  {
    name: 'Priya Patel',
    course: 'Data Science',
    company: 'Google',
    package: '₹22 LPA',
    image: '👩‍🔬',
    testimonial: 'From resume building to final negotiations, the support was exceptional.',
    position: 'Data Scientist'
  },
  {
    name: 'Amit Kumar',
    course: 'Digital Marketing',
    company: 'Microsoft',
    package: '₹12 LPA',
    image: '👨‍💼',
    testimonial: 'The career guidance helped me choose the right path. Got placed in 2 months!',
    position: 'Marketing Manager'
  },
  {
    name: 'Neha Gupta',
    course: 'Cloud Computing',
    company: 'IBM',
    package: '₹15 LPA',
    image: '👩‍💻',
    testimonial: 'The internship program gave me real-world experience that impressed recruiters.',
    position: 'Cloud Engineer'
  }
];

export const partnerCompanies: PartnerCompany[] = [
  { name: 'Google', logo: '🔍', category: 'Tech' },
  { name: 'Microsoft', logo: '💻', category: 'Tech' },
  { name: 'Amazon', logo: '📦', category: 'E-commerce' },
  { name: 'Meta', logo: '👍', category: 'Social Media' },
  { name: 'Apple', logo: '🍎', category: 'Tech' },
  { name: 'Netflix', logo: '🎬', category: 'Entertainment' },
  { name: 'Uber', logo: '🚗', category: 'Transport' },
  { name: 'Airbnb', logo: '🏠', category: 'Travel' },
  { name: 'Adobe', logo: '🎨', category: 'Creative' },
  { name: 'Salesforce', logo: '☁️', category: 'Cloud' },
  { name: 'IBM', logo: '💼', category: 'Tech' },
  { name: 'TCS', logo: '🏢', category: 'Consulting' },
  { name: 'Infosys', logo: '💡', category: 'IT Services' },
  { name: 'Wipro', logo: '⚡', category: 'IT Services' },
  { name: 'Accenture', logo: '🎯', category: 'Consulting' },
  { name: 'Cognizant', logo: '🧠', category: 'IT Services' }
];

export const placementFAQs: FAQ[] = [
  {
    question: 'Is placement guaranteed?',
    answer: 'While we provide comprehensive placement support, final placement depends on multiple factors including your performance, attendance, and interview performance. Our current placement rate is 95% for students who complete all requirements.'
  },
  {
    question: 'What kind of companies hire from your institute?',
    answer: 'We partner with over 250+ companies including MNCs, startups, and established enterprises across IT, E-commerce, Finance, and other sectors. Our network includes companies like Google, Microsoft, Amazon, and many more.'
  },
  {
    question: 'What if I don\'t get placed?',
    answer: 'We provide extended placement support for up to 6 months after course completion. If you haven\'t been placed within this period, you can attend additional training sessions and avail continued support.'
  },
  {
    question: 'Is there an extra placement fee?',
    answer: 'No, placement support is included in your course fee. There are no additional charges for any placement services including resume building, interview preparation, or job referrals.'
  },
  {
    question: 'What are the eligibility criteria for placement?',
    answer: 'To avail placement support, students must maintain 85% attendance, complete all projects and assignments, clear assessments, and participate in mock interviews and soft skills sessions.'
  },
  {
    question: 'Do you provide internship opportunities?',
    answer: 'Yes, we facilitate internships with partner companies. Many students receive pre-placement offers (PPOs) based on their internship performance.'
  }
];

export const eligibilityCriteria = [
  'Minimum 85% attendance',
  'All course projects completed',
  'Assessment score above 75%',
  'Active participation in placement activities',
  'Updated resume and LinkedIn profile'
];

export const internshipBenefits = [
  'Real-world project experience',
  'Industry mentorship',
  'Networking opportunities',
  'Stipend (where applicable)',
  'Pre-placement offer chances'
];