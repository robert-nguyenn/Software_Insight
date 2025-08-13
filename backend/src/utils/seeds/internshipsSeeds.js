// Import comprehensive internships data
const { comprehensiveInternshipsData } = require('./comprehensiveInternshipsSeeds');

// Original core internships (keeping for compatibility)
const originalInternshipsData = [
  {
    title: 'Software Engineer Intern',
    company: {
      name: 'Google',
      website: 'https://careers.google.com/',
      description: 'A multinational technology company that specializes in Internet-related services and products.'
    },
    location: {
      city: 'Mountain View',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Join Google\'s Software Engineering team to work on products that impact billions of users. You\'ll collaborate with experienced engineers, contribute to real projects, and learn cutting-edge technologies.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s in Computer Science or related field',
      'Strong programming skills in one or more languages (Java, C++, Python, JavaScript)',
      'Understanding of data structures and algorithms',
      'Previous internship or project experience preferred'
    ],
    responsibilities: [
      'Write and test code for Google products',
      'Collaborate with cross-functional teams',
      'Participate in code reviews',
      'Contribute to product design discussions'
    ],
    skills: ['Software Development', 'System Design', 'Algorithm Design', 'Testing'],
    duration: '12 weeks',
    stipend: {
      amount: 8000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-23'),
    applicationUrl: 'https://careers.google.com/students/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'google', 'summer']
  },
  {
    title: 'Software Development Engineer Intern',
    company: {
      name: 'Microsoft',
      website: 'https://careers.microsoft.com/',
      description: 'A multinational technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.'
    },
    location: {
      city: 'Redmond',
      state: 'WA',
      country: 'United States',
      remote: false
    },
    description: 'Work with Microsoft\'s engineering teams on Azure, Office, Windows, or other Microsoft products. Gain hands-on experience with cloud technologies and enterprise software development.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Engineering, or related field',
      'Proficiency in C#, Java, JavaScript, or Python',
      'Familiarity with software development lifecycle',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Develop features for Microsoft products',
      'Write automated tests',
      'Participate in agile development processes',
      'Collaborate with product managers and designers'
    ],
    skills: ['C#', 'Azure', 'Software Architecture', 'Agile Development'],
    duration: '12 weeks',
    stipend: {
      amount: 7500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-28'),
    startDate: new Date('2026-06-03'),
    endDate: new Date('2026-08-25'),
    applicationUrl: 'https://careers.microsoft.com/students/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'microsoft', 'azure']
  },
  {
    title: 'Software Engineer Intern',
    company: {
      name: 'Meta',
      website: 'https://www.metacareers.com/',
      description: 'A technology company that builds the future of social connection and immersive experiences.'
    },
    location: {
      city: 'Menlo Park',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Build the next generation of social technology at Meta. Work on Facebook, Instagram, WhatsApp, or emerging technologies like VR/AR and the metaverse.',
    requirements: [
      'Currently pursuing degree in Computer Science or related technical field',
      'Experience with at least one programming language (Python, Java, C++, JavaScript)',
      'Understanding of computer science fundamentals',
      'Ability to work in a fast-paced environment'
    ],
    responsibilities: [
      'Build and optimize social media features',
      'Work on scalable backend systems',
      'Contribute to mobile application development',
      'Participate in product strategy discussions'
    ],
    skills: ['React', 'Mobile Development', 'Distributed Systems', 'Machine Learning'],
    duration: '12-16 weeks',
    stipend: {
      amount: 8500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-05-28'),
    endDate: new Date('2026-08-30'),
    applicationUrl: 'https://www.metacareers.com/students/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'meta', 'social-media']
  },
  {
    title: 'Machine Learning Intern',
    company: {
      name: 'OpenAI',
      website: 'https://openai.com/careers/',
      description: 'An AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Work on cutting-edge AI research and development at OpenAI. Contribute to large language models, reinforcement learning, and AI safety research.',
    requirements: [
      'Currently pursuing PhD or Master\'s in Computer Science, AI, or related field',
      'Strong background in machine learning and deep learning',
      'Experience with PyTorch or TensorFlow',
      'Research experience in AI/ML'
    ],
    responsibilities: [
      'Conduct AI research experiments',
      'Develop and train machine learning models',
      'Write research papers and documentation',
      'Collaborate with research scientists'
    ],
    skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'Natural Language Processing'],
    duration: '12 weeks',
    stipend: {
      amount: 9500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-20'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-23'),
    applicationUrl: 'https://openai.com/careers/',
    category: 'AI/ML',
    level: 'Advanced',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'machine-learning', 'ai', 'research']
  },
  {
    title: 'Data Science Intern',
    company: {
      name: 'Netflix',
      website: 'https://jobs.netflix.com/',
      description: 'The world\'s leading streaming entertainment service with over 230 million paid memberships in more than 190 countries.'
    },
    location: {
      city: 'Los Gatos',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Work on Netflix\'s recommendation systems, content analytics, and data-driven decision making. Use data science to enhance the viewing experience for millions of users.',
    requirements: [
      'Currently pursuing Master\'s or PhD in Data Science, Statistics, or related field',
      'Strong programming skills in Python or R',
      'Experience with machine learning algorithms',
      'Knowledge of SQL and data visualization tools'
    ],
    responsibilities: [
      'Analyze user behavior and content performance',
      'Build and evaluate recommendation models',
      'Create data visualizations and reports',
      'Collaborate with product teams on A/B testing'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
    duration: '12 weeks',
    stipend: {
      amount: 8800,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-20'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-23'),
    applicationUrl: 'https://jobs.netflix.com/students/',
    category: 'Data Science',
    level: 'Intermediate',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'data-science', 'netflix', 'analytics']
  },
  {
    title: 'DevOps Engineer Intern',
    company: {
      name: 'Amazon',
      website: 'https://amazon.jobs/',
      description: 'The world\'s largest online retailer and a prominent cloud service provider through Amazon Web Services (AWS).'
    },
    location: {
      city: 'Seattle',
      state: 'WA',
      country: 'United States',
      remote: false
    },
    description: 'Work on Amazon\'s cloud infrastructure and deployment systems. Learn about large-scale distributed systems, containerization, and infrastructure automation.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s degree program in Computer Science or related field',
      'Experience with Linux systems and command line',
      'Knowledge of scripting languages (Python, Bash)',
      'Understanding of cloud computing concepts'
    ],
    responsibilities: [
      'Automate deployment and monitoring processes',
      'Maintain cloud infrastructure',
      'Implement CI/CD pipelines',
      'Monitor system performance and reliability'
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Python', 'CI/CD'],
    duration: '12 weeks',
    stipend: {
      amount: 7800,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-15'),
    startDate: new Date('2026-06-10'),
    endDate: new Date('2026-09-01'),
    applicationUrl: 'https://amazon.jobs/students/',
    category: 'DevOps',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'devops', 'aws', 'cloud']
  }
];

// Combine original internships with comprehensive internships from 20 major companies
const internshipsData = [...originalInternshipsData, ...comprehensiveInternshipsData];

module.exports = { internshipsData };
