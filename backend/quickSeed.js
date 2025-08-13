const mongoose = require('mongoose');
const Course = require('./src/models/Course');
const Internship = require('./src/models/Internship');
require('dotenv').config();

// Quick courses data
const quickCourses = [
  {
    title: 'Frontend Development',
    description: 'Master the skills, land internships, and ace interviews with our comprehensive platform designed by industry experts.',
    category: 'Technology',
    level: 'Beginner to Advanced',
    duration: '4-6 months',
    price: 0,
    featured: true,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Frontend'],
    instructor: {
      name: 'David Malan',
      bio: 'Professor of Computer Science at Harvard University',
      avatar: '/images/davidmalan.jpg'
    },
    thumbnail: '/images/frontend.jpg',
    enrollmentCount: 1250,
    rating: 4.8,
    reviewCount: 324,
    lessons: [
      {
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        duration: '2 hours',
        type: 'video',
        completed: false,
        resources: []
      },
      {
        title: 'CSS Styling',
        description: 'Style your web pages with CSS',
        duration: '3 hours',
        type: 'video',
        completed: false,
        resources: []
      },
      {
        title: 'JavaScript Basics',
        description: 'Programming fundamentals with JavaScript',
        duration: '4 hours',
        type: 'video',
        completed: false,
        resources: []
      }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, and API development with modern technologies.',
    category: 'Technology',
    level: 'Intermediate',
    duration: '5-7 months',
    price: 0,
    featured: true,
    tags: ['Node.js', 'Python', 'Database', 'API', 'Server'],
    instructor: {
      name: 'Tech Expert',
      bio: 'Senior Backend Engineer with 10+ years experience',
      avatar: '/images/instructor.jpg'
    },
    thumbnail: '/images/backend.jpg',
    enrollmentCount: 892,
    rating: 4.7,
    reviewCount: 203,
    lessons: [
      {
        title: 'Server Fundamentals',
        description: 'Understanding how servers work',
        duration: '2 hours',
        type: 'video',
        completed: false,
        resources: []
      },
      {
        title: 'Node.js Basics',
        description: 'Introduction to Node.js runtime',
        duration: '3 hours',
        type: 'video',
        completed: false,
        resources: []
      }
    ]
  },
  {
    title: 'Machine Learning',
    description: 'Learn AI and machine learning from basics to advanced concepts.',
    category: 'Technology',
    level: 'Intermediate to Advanced',
    duration: '6-9 months',
    price: 0,
    featured: true,
    tags: ['Python', 'AI', 'Machine Learning', 'Data Science', 'TensorFlow'],
    instructor: {
      name: 'AI Specialist',
      bio: 'Machine Learning Engineer at Google',
      avatar: '/images/ai_instructor.jpg'
    },
    thumbnail: '/images/ml.jpg',
    enrollmentCount: 743,
    rating: 4.8,
    reviewCount: 189,
    lessons: [
      {
        title: 'Python for ML',
        description: 'Python programming for machine learning',
        duration: '4 hours',
        type: 'video',
        completed: false,
        resources: []
      }
    ]
  }
];

// Quick internships data
const quickInternships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers.',
    requirements: ['Currently pursuing a degree in Computer Science', 'Strong programming skills'],
    responsibilities: ['Develop software applications', 'Collaborate with teams'],
    qualifications: ['Strong problem-solving skills', 'Excellent communication'],
    benefits: ['Competitive stipend', 'Housing assistance', 'Mentorship program'],
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
    tags: ['Python', 'Java', 'C++', 'Software Engineering'],
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
    description: 'Join our data science team to work on machine learning models.',
    requirements: ['Pursuing a degree in Data Science', 'Proficiency in Python and SQL'],
    responsibilities: ['Develop ML models', 'Analyze large datasets'],
    qualifications: ['Strong mathematical background', 'Experience with data visualization'],
    benefits: ['Competitive compensation', 'Housing stipend', 'Networking opportunities'],
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
    tags: ['Python', 'SQL', 'Machine Learning', 'Data Science'],
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
    description: 'Help build the next generation of Netflix user interface.',
    requirements: ['Strong knowledge of JavaScript, HTML, CSS', 'Experience with React'],
    responsibilities: ['Develop user-facing features', 'Optimize applications'],
    qualifications: ['Experience with modern frontend tools', 'Knowledge of version control'],
    benefits: ['Competitive salary', 'Netflix content access', 'Professional development'],
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
    tags: ['React', 'TypeScript', 'JavaScript', 'Frontend'],
    experienceLevel: 'entry',
    category: 'Frontend Development',
    applicationCount: 156
  }
];

async function quickSeed() {
  try {
    console.log('🚀 Starting quick seed...');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🧹 Clearing existing courses and internships...');
    await Course.deleteMany({});
    await Internship.deleteMany({});

    // Add courses
    console.log('📚 Adding courses...');
    const createdCourses = await Course.insertMany(quickCourses);
    console.log(`✅ Created ${createdCourses.length} courses`);

    // Add internships
    console.log('💼 Adding internships...');
    const createdInternships = await Internship.insertMany(quickInternships);
    console.log(`✅ Created ${createdInternships.length} internships`);

    console.log('🎉 Quick seed completed successfully!');
    console.log('Now refresh your browser to see the data!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during quick seed:', error);
    process.exit(1);
  }
}

quickSeed();
