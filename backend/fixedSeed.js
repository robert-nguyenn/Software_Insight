const mongoose = require('mongoose');
const Course = require('./src/models/Course');
const Internship = require('./src/models/Internship');
require('dotenv').config();

const properCourses = [
  {
    title: 'Frontend Development',
    description: 'Master the skills, land internships, and ace interviews with our comprehensive platform designed by industry experts. This course covers everything from HTML and CSS basics to advanced React development.',
    shortDescription: 'Master frontend development with HTML, CSS, JavaScript, and React.',
    level: 'Beginner',
    category: 'Frontend Development',
    duration: '4-6 months',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    prerequisites: ['Basic computer skills', 'Willingness to learn'],
    learningOutcomes: [
      'Build responsive websites with HTML and CSS',
      'Master JavaScript programming fundamentals',
      'Create interactive web applications with React',
      'Deploy applications to production'
    ],
    modules: [
      {
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        duration: '2 hours',
        topics: ['HTML structure', 'Semantic elements', 'Forms and inputs'],
        resources: [
          {
            title: 'HTML Crash Course',
            url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
            type: 'video',
            description: 'Complete HTML tutorial for beginners',
            duration: '1 hour',
            difficulty: 'Beginner',
            isRequired: true
          }
        ]
      },
      {
        title: 'CSS Styling',
        description: 'Style your web pages with CSS',
        duration: '3 hours',
        topics: ['CSS selectors', 'Flexbox', 'Grid layout', 'Responsive design'],
        resources: [
          {
            title: 'CSS Complete Guide',
            url: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
            type: 'video',
            description: 'Master CSS from basics to advanced',
            duration: '2 hours',
            difficulty: 'Beginner',
            isRequired: true
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Build a responsive portfolio website to showcase your projects',
        difficulty: 'Medium',
        technologies: ['HTML', 'CSS', 'JavaScript']
      }
    ],
    instructor: {
      name: 'David Malan',
      bio: 'Professor of Computer Science at Harvard University',
      avatar: '/images/davidmalan.jpg'
    },
    thumbnail: '/images/frontend.jpg',
    featured: true,
    price: 0,
    rating: {
      average: 4.8,
      count: 324
    },
    enrollmentCount: 1250,
    isPublished: true,
    tags: ['html', 'css', 'javascript', 'react', 'frontend']
  },
  {
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, and API development with modern technologies. Build scalable backend systems with Node.js, Express, and MongoDB.',
    shortDescription: 'Learn server-side programming with Node.js, Express, and databases.',
    level: 'Intermediate',
    category: 'Backend Development',
    duration: '5-7 months',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Python', 'PostgreSQL'],
    prerequisites: ['JavaScript fundamentals', 'Basic programming concepts'],
    learningOutcomes: [
      'Build RESTful APIs with Express.js',
      'Work with databases (MongoDB, PostgreSQL)',
      'Implement authentication and authorization',
      'Deploy backend applications to cloud platforms'
    ],
    modules: [
      {
        title: 'Server Fundamentals',
        description: 'Understanding how servers work',
        duration: '2 hours',
        topics: ['HTTP protocol', 'Server architecture', 'Request/Response cycle'],
        resources: [
          {
            title: 'How Web Servers Work',
            url: 'https://www.youtube.com/watch?v=9J1nJOivdyw',
            type: 'video',
            description: 'Learn how web servers handle requests',
            duration: '30 minutes',
            difficulty: 'Beginner',
            isRequired: true
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Task Management API',
        description: 'Build a complete REST API for task management with authentication',
        difficulty: 'Hard',
        technologies: ['Node.js', 'Express', 'MongoDB', 'JWT']
      }
    ],
    instructor: {
      name: 'Tech Expert',
      bio: 'Senior Backend Engineer with 10+ years experience',
      avatar: '/images/instructor.jpg'
    },
    thumbnail: '/images/backend.jpg',
    featured: true,
    price: 0,
    rating: {
      average: 4.7,
      count: 203
    },
    enrollmentCount: 892,
    isPublished: true,
    tags: ['nodejs', 'express', 'mongodb', 'api', 'backend']
  },
  {
    title: 'Machine Learning',
    description: 'Learn AI and machine learning from basics to advanced concepts. Master Python, TensorFlow, and build real-world ML applications.',
    shortDescription: 'Learn AI and machine learning with Python and TensorFlow.',
    level: 'Advanced',
    category: 'Machine Learning',
    duration: '6-9 months',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    prerequisites: ['Python programming', 'Basic mathematics', 'Statistics fundamentals'],
    learningOutcomes: [
      'Understand machine learning algorithms',
      'Build and train neural networks',
      'Work with data preprocessing and feature engineering',
      'Deploy ML models to production'
    ],
    modules: [
      {
        title: 'Python for ML',
        description: 'Python programming for machine learning',
        duration: '4 hours',
        topics: ['NumPy', 'Pandas', 'Matplotlib', 'Data manipulation'],
        resources: [
          {
            title: 'Python for Machine Learning',
            url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            type: 'video',
            description: 'Complete Python ML tutorial',
            duration: '3 hours',
            difficulty: 'Intermediate',
            isRequired: true
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Predictive Analytics Dashboard',
        description: 'Build a complete ML application with data visualization',
        difficulty: 'Expert',
        technologies: ['Python', 'TensorFlow', 'Flask', 'React']
      }
    ],
    instructor: {
      name: 'AI Specialist',
      bio: 'Machine Learning Engineer at Google',
      avatar: '/images/ai_instructor.jpg'
    },
    thumbnail: '/images/ml.jpg',
    featured: true,
    price: 0,
    rating: {
      average: 4.8,
      count: 189
    },
    enrollmentCount: 743,
    isPublished: true,
    tags: ['python', 'ai', 'machine-learning', 'tensorflow', 'data-science']
  }
];

const properInternships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers. Contribute to products used by billions of users worldwide.',
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Strong programming skills in Python, Java, or C++',
      'Understanding of data structures and algorithms',
      'Previous internship or project experience preferred'
    ],
    responsibilities: [
      'Develop and maintain software applications',
      'Collaborate with cross-functional teams',
      'Participate in code reviews and design discussions',
      'Work on real projects that impact millions of users'
    ],
    qualifications: [
      'Strong problem-solving skills',
      'Excellent communication abilities',
      'Ability to work in a fast-paced environment',
      'Passion for technology and innovation'
    ],
    benefits: [
      'Competitive stipend',
      'Housing assistance',
      'Mentorship program',
      'Access to Google facilities and events',
      'Full-time offer potential'
    ],
    applicationDeadline: new Date('2024-12-15'),
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-08-30'),
    isRemote: false,
    salaryRange: {
      min: 7000,
      max: 9000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://careers.google.com/internships',
    featured: true,
    tags: ['Python', 'Java', 'C++', 'Software Engineering', 'Big Tech'],
    experienceLevel: 'entry',
    category: 'Software Engineering',
    applicationCount: 245
  },
  {
    title: 'Data Science Intern',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Join our data science team to work on machine learning models and data analysis projects that impact billions of Facebook and Instagram users.',
    requirements: [
      'Pursuing a degree in Data Science, Statistics, or related field',
      'Proficiency in Python and SQL',
      'Experience with machine learning libraries (scikit-learn, pandas)',
      'Strong analytical and statistical skills'
    ],
    responsibilities: [
      'Develop machine learning models',
      'Analyze large datasets to derive insights',
      'Collaborate with product teams',
      'Present findings to stakeholders'
    ],
    qualifications: [
      'Strong mathematical background',
      'Experience with data visualization tools',
      'Knowledge of A/B testing',
      'Previous data science projects'
    ],
    benefits: [
      'Competitive compensation',
      'Housing stipend',
      'Access to Meta facilities',
      'Networking opportunities',
      'Return offer consideration'
    ],
    applicationDeadline: new Date('2024-11-28'),
    startDate: new Date('2025-05-15'),
    endDate: new Date('2025-08-15'),
    isRemote: false,
    salaryRange: {
      min: 8000,
      max: 10000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://careers.facebook.com/internships',
    featured: true,
    tags: ['Python', 'SQL', 'Machine Learning', 'Data Science', 'Analytics'],
    experienceLevel: 'entry',
    category: 'Data Science',
    applicationCount: 189
  },
  {
    title: 'Frontend Engineering Intern',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Help build the next generation of Netflix\'s user interface. Work with React, TypeScript, and modern web technologies.',
    requirements: [
      'Strong knowledge of JavaScript, HTML, and CSS',
      'Experience with React or similar frameworks',
      'Understanding of responsive design principles',
      'Portfolio of frontend projects'
    ],
    responsibilities: [
      'Develop user-facing features',
      'Optimize applications for speed and scalability',
      'Work closely with designers and product managers',
      'Implement UI/UX designs'
    ],
    qualifications: [
      'Experience with modern frontend tools',
      'Knowledge of version control (Git)',
      'Understanding of web performance optimization',
      'Strong attention to detail'
    ],
    benefits: [
      'Competitive salary',
      'Netflix content access',
      'Professional development opportunities',
      'Mentorship program',
      'Full-time conversion possibility'
    ],
    applicationDeadline: new Date('2024-12-01'),
    startDate: new Date('2025-06-10'),
    endDate: new Date('2025-09-10'),
    isRemote: true,
    salaryRange: {
      min: 6500,
      max: 8500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://jobs.netflix.com/internships',
    featured: true,
    tags: ['React', 'TypeScript', 'JavaScript', 'Frontend', 'UI/UX'],
    experienceLevel: 'entry',
    category: 'Frontend Development',
    applicationCount: 156
  }
];

async function fixedSeed() {
  try {
    console.log('🔧 Starting fixed seed with proper data structure...');
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    console.log('🧹 Clearing existing data...');
    await Course.deleteMany({});
    await Internship.deleteMany({});

    console.log('📚 Creating courses...');
    const createdCourses = await Course.insertMany(properCourses);
    console.log(`✅ Created ${createdCourses.length} courses:`, createdCourses.map(c => c.title));

    console.log('💼 Creating internships...');
    const createdInternships = await Internship.insertMany(properInternships);
    console.log(`✅ Created ${createdInternships.length} internships:`, createdInternships.map(i => i.title));

    console.log('🎉 Database seeded successfully!');
    console.log('🔄 Please refresh your browser to see the new data!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

if (require.main === module) {
  fixedSeed();
}
