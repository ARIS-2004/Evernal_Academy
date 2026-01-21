export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  content: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest web development trends including AI integration, serverless architecture, and more.',
    date: 'Jan 15, 2024',
    author: 'John Smith',
    category: 'Web Development',
    image: '💻',
    slug: 'future-of-web-development-2024',
    readTime: '8 min read',
    content: 'Detailed content about web development trends...',
    tags: ['Web Development', 'Trends', 'Technology', 'Programming']
  },
  {
    id: 2,
    title: 'From Bootcamp to Six-Figure Salary: Success Stories',
    excerpt: 'Learn how our graduates transitioned into high-paying tech roles in just months.',
    date: 'Jan 10, 2024',
    author: 'Sarah Williams',
    category: 'Career Tips',
    image: '📈',
    slug: 'bootcamp-to-six-figure-salary',
    readTime: '6 min read',
    content: 'Detailed content about career success...',
    tags: ['Career', 'Success Stories', 'Jobs', 'Interview']
  },
  {
    id: 3,
    title: 'Data Science vs Machine Learning: What\'s the Difference?',
    excerpt: 'Understand the key differences and choose the right career path for you.',
    date: 'Jan 5, 2024',
    author: 'Dr. Emily Watson',
    category: 'Data Science',
    image: '🤖',
    slug: 'data-science-vs-machine-learning',
    readTime: '10 min read',
    content: 'Detailed comparison between Data Science and ML...',
    tags: ['Data Science', 'Machine Learning', 'AI', 'Technology']
  },
  {
    id: 4,
    title: 'The Complete Guide to UI/UX Design Principles',
    excerpt: 'Master the fundamentals of creating beautiful and user-friendly interfaces.',
    date: 'Dec 28, 2023',
    author: 'Sarah Mitchell',
    category: 'Design',
    image: '🎨',
    slug: 'complete-guide-ui-ux-design',
    readTime: '12 min read',
    content: 'Detailed guide about UI/UX design...',
    tags: ['Design', 'UI/UX', 'User Experience', 'Web Design']
  },
  {
    id: 5,
    title: 'Cloud Computing Essentials: AWS, Azure, and GCP',
    excerpt: 'A comprehensive comparison of the top cloud platforms and which one to learn.',
    date: 'Dec 20, 2023',
    author: 'Raj Kapoor',
    category: 'Cloud',
    image: '☁️',
    slug: 'cloud-computing-essentials-aws-azure-gcp',
    readTime: '15 min read',
    content: 'Detailed comparison of cloud platforms...',
    tags: ['Cloud Computing', 'AWS', 'Azure', 'GCP', 'DevOps']
  },
  {
    id: 6,
    title: 'Cybersecurity Career: Roles, Responsibilities, and Salary',
    excerpt: 'Explore the growing field of cybersecurity and its lucrative opportunities.',
    date: 'Dec 15, 2023',
    author: 'Lisa Chen',
    category: 'Security',
    image: '🔒',
    slug: 'cybersecurity-career-roles-responsibilities-salary',
    readTime: '9 min read',
    content: 'Detailed guide about cybersecurity careers...',
    tags: ['Cybersecurity', 'Security', 'Career', 'Jobs']
  },
  {
    id: 7,
    title: 'Mastering React Hooks: A Practical Guide',
    excerpt: 'Learn how to effectively use React Hooks in your projects with real-world examples.',
    date: 'Dec 10, 2023',
    author: 'Mike Johnson',
    category: 'Web Development',
    image: '⚛️',
    slug: 'mastering-react-hooks-practical-guide',
    readTime: '11 min read',
    content: 'Detailed guide about React Hooks...',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development']
  },
  {
    id: 8,
    title: 'The Art of Technical Interviews: Tips for Success',
    excerpt: 'Essential tips and strategies to ace your next technical interview.',
    date: 'Dec 5, 2023',
    author: 'David Lee',
    category: 'Career Tips',
    image: '🎯',
    slug: 'art-of-technical-interviews-tips-success',
    readTime: '7 min read',
    content: 'Detailed tips for technical interviews...',
    tags: ['Interview', 'Career', 'Tips', 'Programming']
  },
  {
    id: 9,
    title: 'Getting Started with Python for Data Analysis',
    excerpt: 'A beginner-friendly guide to using Python for data analysis and visualization.',
    date: 'Nov 28, 2023',
    author: 'Dr. Emily Watson',
    category: 'Data Science',
    image: '🐍',
    slug: 'getting-started-python-data-analysis',
    readTime: '14 min read',
    content: 'Detailed guide about Python for data analysis...',
    tags: ['Python', 'Data Science', 'Data Analysis', 'Programming']
  }
];

export const categories = ['All', 'Web Development', 'Career Tips', 'Data Science', 'Design', 'Cloud', 'Security'];