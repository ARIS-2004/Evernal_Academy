export interface Programme {
  id: string;
  name: string;
  href: string;
  ageGroup: string;
  duration: string;
  description: string;
  overview: string;
  keyAreas: string[];
  specialPrograms: string[];
  kidzeeSession: string[];
  activities: string[];
  behavior: string[];
  note: string;
  heroImage: string;
  heroVideo: string;
  images: string[];
  videos: string[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const programmes: Programme[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    href: '/programmes/playgroup',
    ageGroup: '2 - 3 Years',
    duration: '3 Hours/Day',
    description: 'Age appropriate curriculum for toddlers',
    overview: 'Children in this age group are identified as Toddlers. Kidzee\'s playgroup age appropriate curriculum plays an important role in helping children continue their exploration. At Kidzee, the Playgroup programme prepares a child for developmental and academic progress.',
    note: 'As per RTE- Right to Education and NEP- National Education Policy from state to state. Playgroup curriculum provides a safe and stimulating environment for child to learn and improve in all developmental domains.',
    heroImage: 'https://images.unsplash.com/photo-1503454537688-e6c6ff891b52?w=1200&h=600&fit=crop',
    heroVideo: 'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
    images: [
      'https://images.unsplash.com/photo-1503454537688-e6c6ff891b52?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1545776490-14de3f13f8d2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515905217210-f9aee1a1bfe5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503454537688-e6c6ff891b52?w=600&h=400&fit=crop'
    ],
    videos: [
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4'
    ],
    behavior: [
      'Curious and eager to explore',
      'Learning through sensory play',
      'Developing basic motor skills',
      'Building social awareness',
      'Beginning language development'
    ],
    keyAreas: [
      'Promoting positive peer social interaction',
      'Opportunities for basic motor development',
      'Math Readiness (Number Recognition)',
      'Language Readiness (Letter Recognition)',
      'Exploration based learning'
    ],
    specialPrograms: [
      'Artsy',
      'Personality Development',
      'Showstopper',
      'Mental Might',
      'Augmented Reality - Fantasy Box',
      'Eco-conscious',
      'Tell-a-Tale',
      'Library',
      'Sciencify',
      'Whirl & Twirl',
      'Sensorium',
      'Critical Thinking - Problem solving',
      'Intergrated Sanskar'
    ],
    kidzeeSession: [
      'Circle Time',
      'Free Play',
      'Knowledge Time',
      'Language Time',
      'Numeracy Time',
      'Talk Time',
      'Outdoor',
      'Indoor'
    ],
    activities: [
      'Celebration of festivals and special days',
      'Field Trips',
      'Puppet shows and skits',
      'Story telling sessions',
      'Music and movement activities',
      'Sensory exploration activities'
    ],
    color: {
      primary: '#08472C',
      secondary: '#FCAB17',
      accent: '#B2C6BD'
    }
  },
  {
    id: 'nursery',
    name: 'Nursery',
    href: '/programmes/nursery',
    ageGroup: '3 - 4 Years',
    duration: '3 Hours/Day',
    description: 'Comprehensive early education programme for pre-primary children',
    overview: 'The Nursery programme is designed to provide a structured and nurturing environment where children develop foundational skills in academics, creativity, and social-emotional domains. Our specially trained educators focus on holistic development through play-based learning.',
    note: 'As per RTE- Right to Education and NEP- National Education Policy. The curriculum is designed to encourage curiosity, independence, and collaborative learning.',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=1200&h=600&fit=crop',
    heroVideo: 'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503454537688-e6c6ff891b52?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1545776490-14de3f13f8d2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515905217210-f9aee1a1bfe5?w=600&h=400&fit=crop'
    ],
    videos: [
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4'
    ],
    behavior: [
      'Increased independence and self-confidence',
      'Better language communication skills',
      'More coordinated physical movements',
      'Understanding social norms and rules',
      'Developing emotional intelligence'
    ],
    keyAreas: [
      'Fine and gross motor development',
      'Social and emotional skills',
      'Cognitive development',
      'Language development',
      'Numeracy foundation',
      'Creative expression'
    ],
    specialPrograms: [
      'Creative Artsy',
      'Leadership skills',
      'Innovation Box',
      'Mindfulness activities',
      'Environmental awareness',
      'Technology integration',
      'Story narration',
      'Music and movement',
      'STEM exploration'
    ],
    kidzeeSession: [
      'Circle Time',
      'Play-based learning',
      'Activity Time',
      'Language sessions',
      'Math activities',
      'Creative sessions',
      'Outdoor play',
      'Rest time'
    ],
    activities: [
      'Seasonal celebrations',
      'Educational excursions',
      'Dramatic play performances',
      'Parent-child activities',
      'Art and craft exhibitions',
      'Music and dance shows'
    ],
    color: {
      primary: '#08472C',
      secondary: '#FCAB17',
      accent: '#B2C6BD'
    }
  },
  {
    id: 'kindergarten',
    name: 'Kindergarten',
    href: '/programmes/kindergarten',
    ageGroup: '4 - 5 Years',
    duration: '4-5 Hours/Day',
    description: 'Pre-primary education with academic focus and skill development',
    overview: 'Kindergarten programme prepares children for primary school while maintaining the essence of play-based learning. It combines structured academics with creative activities, ensuring children develop strong foundational skills in reading, writing, and numeracy.',
    note: 'Following international educational standards aligned with NEP. Focus on developing independent learners with problem-solving abilities and critical thinking skills.',
    heroImage: 'https://images.unsplash.com/photo-1535338454862-38d5f8e47c4a?w=1200&h=600&fit=crop',
    heroVideo: 'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
    images: [
      'https://images.unsplash.com/photo-1535338454862-38d5f8e47c4a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515905217210-f9aee1a1bfe5?w=600&h=400&fit=crop'
    ],
    videos: [
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4'
    ],
    behavior: [
      'Strong academic readiness and focus',
      'Advanced problem-solving abilities',
      'Leadership qualities emerging',
      'Enhanced communication and presentation skills',
      'Growing independence and responsibility'
    ],
    keyAreas: [
      'Phonics and early reading skills',
      'Pre-writing and writing skills',
      'Mathematical concepts',
      'Scientific thinking',
      'Social studies',
      'Life skills'
    ],
    specialPrograms: [
      'Advanced arts and crafts',
      'Public speaking',
      'Leadership development',
      'Coding basics',
      'Environmental studies',
      'Cultural awareness',
      'Debate and discussion',
      'Project-based learning',
      'Digital literacy'
    ],
    kidzeeSession: [
      'Assembly and morning circle',
      'Structured learning time',
      'Activity-based projects',
      'Reading and language',
      'Mathematics activities',
      'Science exploration',
      'Arts and crafts',
      'Physical education',
      'Outdoor exploration'
    ],
    activities: [
      'Annual day performances',
      'Science exhibitions',
      'Field educational trips',
      'Inter-class competitions',
      'Cultural programs',
      'Spelling bee and quiz contests',
      'Sports day celebrations'
    ],
    color: {
      primary: '#08472C',
      secondary: '#FCAB17',
      accent: '#B2C6BD'
    }
  },
  {
    id: 'teacher-training',
    name: 'Teacher Training Programme',
    href: '/programmes/teacher-training',
    ageGroup: 'Professional Development',
    duration: 'Varies',
    description: 'Comprehensive training for educators in early childhood education',
    overview: 'Our Teacher Training Programme is designed to equip educators with contemporary pedagogical methods, child psychology knowledge, and practical skills in classroom management. We focus on developing confident, empathetic, and innovative teachers.',
    note: 'Certified training programme following international standards in early childhood education.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    heroVideo: 'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    ],
    videos: [
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4'
    ],
    behavior: [
      'Enhanced professional competency',
      'Improved classroom management skills',
      'Better student engagement techniques',
      'Modern teaching methodology expertise',
      'Certified professional credentials'
    ],
    keyAreas: [
      'Child psychology and development',
      'Modern teaching methodologies',
      'Curriculum development',
      'Classroom management',
      'Assessment and evaluation',
      'Parent engagement strategies'
    ],
    specialPrograms: [
      'Leadership and mentoring',
      'Digital teaching tools',
      'Inclusive education',
      'Special needs education',
      'Emotional intelligence training',
      'Research methodology',
      'Subject expertise development',
      'Professional certification'
    ],
    kidzeeSession: [
      'Theoretical sessions',
      'Practical workshops',
      'Case study analysis',
      'Peer mentoring',
      'Certification modules',
      'Seminar participation',
      'Field practice',
      'Assessment and feedback'
    ],
    activities: [
      'National and international conferences',
      'Training certification',
      'Ongoing professional development',
      'Research publications support',
      'Community engagement programs',
      'Curriculum workshops',
      'Skill enhancement seminars'
    ],
    color: {
      primary: '#08472C',
      secondary: '#FCAB17',
      accent: '#B2C6BD'
    }
  },
  {
    id: 'daycare',
    name: 'Daycare',
    href: '/programmes/daycare',
    ageGroup: '6 Months - 5 Years',
    duration: 'Flexible Hours',
    description: 'Full-day care service with structured developmental activities',
    overview: 'Our Daycare programme provides safe, nurturing care combined with developmental activities throughout the day. Designed for working parents, it offers flexible timings while maintaining educational standards and individualized attention for every child.',
    note: 'Professional caregivers trained in early childhood development and safety standards. Customizable schedules to meet family needs.',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=1200&h=600&fit=crop',
    heroVideo: 'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14819c9cb6c1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503454537688-e6c6ff891b52?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1493761671305-129cf7649b1d?w=600&h=400&fit=crop'
    ],
    videos: [
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4',
      'https://cdn.pixabay.com/vimeo/775039876/small_children%20playing-775039876.mp4'
    ],
    behavior: [
      'Secure attachment with caregivers',
      'Consistent developmental progress',
      'Improved social and emotional stability',
      'Better nutrition and health habits',
      'Balanced daily routine adherence'
    ],
    keyAreas: [
      'Safe and hygienic environment',
      'Age-appropriate developmental activities',
      'Nutrition and health monitoring',
      'Emotional security and bonding',
      'Cognitive stimulation',
      'Social interaction opportunities'
    ],
    specialPrograms: [
      'Individualized development plans',
      'Music and movement',
      'Language exposure',
      'Sensory activities',
      'Creative play',
      'Health and wellness',
      'Bilingual exposure',
      'Parental communication'
    ],
    kidzeeSession: [
      'Arrival and settling time',
      'Morning activities',
      'Breakfast time',
      'Learning play',
      'Rest/nap time',
      'Afternoon activities',
      'Snack time',
      'Parent pickup and handover'
    ],
    activities: [
      'Daily progress reports for parents',
      'Monthly developmental assessments',
      'Seasonal celebrations',
      'Parent-teacher interactions',
      'Special theme-based activities',
      'Nutritious meal services',
      'Child safety protocols and training'
    ],
    color: {
      primary: '#08472C',
      secondary: '#FCAB17',
      accent: '#B2C6BD'
    }
  }
];

export const getProgrammeById = (id: string): Programme | undefined => {
  return programmes.find(p => p.id === id);
};
