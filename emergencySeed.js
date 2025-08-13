const mongoose = require('mongoose');
require('dotenv').config();

// Simple course data that works
const simpleCourses = [
  {
    title: 'Frontend Development',
    description: 'Master frontend development with HTML, CSS, JavaScript, and React. Build responsive websites and interactive web applications.',
    shortDescription: 'Master frontend development with HTML, CSS, JavaScript, and React.',
    level: 'Beginner',
    category: 'Frontend Development',
    duration: '4-6 months',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    prerequisites: ['Basic computer skills'],
    learningOutcomes: ['Build responsive websites', 'Master JavaScript', 'Create React apps'],
    modules: [
      {
        title: 'HTML Fundamentals',
        description: 'Learn HTML basics',
        duration: '2 hours',
        topics: ['HTML structure', 'Elements', 'Forms'],
        resources: []
      }
    ],
    projects: [],
    instructor: {
      name: 'David Malan',
      bio: 'Professor at Harvard',
      avatar: '/images/davidmalan.jpg'
    },
    thumbnail: '/images/frontend.jpg',
    featured: true,
    price: 0,
    rating: { average: 4.8, count: 324 },
    enrollmentCount: 1250,
    isPublished: true,
    tags: ['html', 'css', 'javascript', 'react']
  },
  {
    title: 'Backend Development',
    description: 'Learn server-side programming with Node.js, Express, and databases. Build scalable backend systems and APIs.',
    shortDescription: 'Learn server-side programming with Node.js and databases.',
    level: 'Intermediate',
    category: 'Backend Development',
    duration: '5-7 months',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    prerequisites: ['JavaScript basics'],
    learningOutcomes: ['Build APIs', 'Work with databases', 'Deploy applications'],
    modules: [
      {
        title: 'Node.js Basics',
        description: 'Learn Node.js fundamentals',
        duration: '3 hours',
        topics: ['Node.js runtime', 'NPM', 'Modules'],
        resources: []
      }
    ],
    projects: [],
    instructor: {
      name: 'Tech Expert',
      bio: 'Senior Backend Engineer',
      avatar: '/images/instructor.jpg'
    },
    thumbnail: '/images/backend.jpg',
    featured: true,
    price: 0,
    rating: { average: 4.7, count: 203 },
    enrollmentCount: 892,
    isPublished: true,
    tags: ['nodejs', 'express', 'mongodb']
  },
  {
    title: 'Machine Learning',
    description: 'Learn AI and machine learning with Python, TensorFlow, and scikit-learn. Build predictive models and neural networks.',
    shortDescription: 'Learn AI and machine learning with Python and TensorFlow.',
    level: 'Advanced',
    category: 'Machine Learning',
    duration: '6-9 months',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    prerequisites: ['Python programming', 'Mathematics'],
    learningOutcomes: ['Build ML models', 'Train neural networks', 'Deploy AI apps'],
    modules: [
      {
        title: 'Python for ML',
        description: 'Python for machine learning',
        duration: '4 hours',
        topics: ['NumPy', 'Pandas', 'Matplotlib'],
        resources: []
      }
    ],
    projects: [],
    instructor: {
      name: 'AI Specialist',
      bio: 'ML Engineer at Google',
      avatar: '/images/ai_instructor.jpg'
    },
    thumbnail: '/images/ml.jpg',
    featured: true,
    price: 0,
    rating: { average: 4.8, count: 189 },
    enrollmentCount: 743,
    isPublished: true,
    tags: ['python', 'ai', 'tensorflow']
  }
];

const simpleInternships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers at Google.',
    requirements: ['CS degree pursuit', 'Programming skills', 'Problem solving'],
    responsibilities: ['Develop software', 'Collaborate with teams', 'Code reviews'],
    qualifications: ['Strong problem-solving', 'Communication skills', 'Team player'],
    benefits: ['Competitive stipend', 'Housing assistance', 'Mentorship'],
    applicationDeadline: new Date('2024-12-15'),
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-08-30'),
    isRemote: false,
    salaryRange: { min: 7000, max: 9000, currency: 'USD', period: 'monthly' },
    applicationUrl: 'https://careers.google.com/internships',
    featured: true,
    tags: ['Python', 'Java', 'Software Engineering'],
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
    description: 'Join our data science team to work on machine learning models and data analysis.',
    requirements: ['Data Science degree', 'Python and SQL', 'ML experience'],
    responsibilities: ['Develop ML models', 'Analyze datasets', 'Present findings'],
    qualifications: ['Mathematical background', 'Data visualization', 'A/B testing'],
    benefits: ['Competitive pay', 'Housing stipend', 'Networking'],
    applicationDeadline: new Date('2024-11-28'),
    startDate: new Date('2025-05-15'),
    endDate: new Date('2025-08-15'),
    isRemote: false,
    salaryRange: { min: 8000, max: 10000, currency: 'USD', period: 'monthly' },
    applicationUrl: 'https://careers.facebook.com/internships',
    featured: true,
    tags: ['Python', 'SQL', 'Machine Learning'],
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
    description: 'Help build the next generation of Netflix user interface with React and modern web technologies.',
    requirements: ['JavaScript, HTML, CSS', 'React experience', 'Portfolio projects'],
    responsibilities: ['Develop UI features', 'Optimize performance', 'Work with designers'],
    qualifications: ['Frontend tools experience', 'Git knowledge', 'Attention to detail'],
    benefits: ['Competitive salary', 'Netflix access', 'Professional development'],
    applicationDeadline: new Date('2024-12-01'),
    startDate: new Date('2025-06-10'),
    endDate: new Date('2025-09-10'),
    isRemote: true,
    salaryRange: { min: 6500, max: 8500, currency: 'USD', period: 'monthly' },
    applicationUrl: 'https://jobs.netflix.com/internships',
    featured: true,
    tags: ['React', 'JavaScript', 'Frontend'],
    experienceLevel: 'entry',
    category: 'Frontend Development',
    applicationCount: 156
  }
];

async function emergencySeed() {
  try {
    console.log('🚨 Emergency seeding starting...');
    
    // Direct MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get models directly
    const Course = mongoose.model('Course') || require('./backend/src/models/Course');
    const Internship = mongoose.model('Internship') || require('./backend/src/models/Internship');

    console.log('🧹 Clearing existing data...');
    await Course.deleteMany({});
    await Internship.deleteMany({});

    console.log('📚 Creating courses...');
    const courses = await Course.insertMany(simpleCourses);
    console.log(`✅ Created ${courses.length} courses:`, courses.map(c => c.title));

    console.log('💼 Creating internships...');
    const internships = await Internship.insertMany(simpleInternships);
    console.log(`✅ Created ${internships.length} internships:`, internships.map(i => i.title));

    console.log('🎉 Emergency seed completed!');
    console.log('🔄 Refresh your browser now!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Emergency seed failed:', error.message);
    process.exit(1);
  }
}

emergencySeed();
