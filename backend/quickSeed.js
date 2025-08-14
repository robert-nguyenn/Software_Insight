const mongoose = require('mongoose');
const Course = require('./src/models/Course');
const Internship = require('./src/models/Internship');
require('dotenv').config();

// Quick courses data
const quickCourses = [
  {
    title: 'Frontend Development',
    slug: 'frontend-development',
    description: 'Master the skills, land internships, and ace interviews with our comprehensive platform designed by industry experts.',
    shortDescription: 'Learn modern frontend development with HTML, CSS, JavaScript, and popular frameworks like React and Vue.js.',
    category: 'Frontend Development',
    level: 'Beginner',
    duration: '4-6 months',
    price: 0,
    featured: true,
    tags: ['html', 'css', 'javascript', 'react', 'vue.js', 'frontend'],
    instructor: {
      name: 'David Malan',
      bio: 'Professor of Computer Science at Harvard University',
      avatar: '/images/davidmalan.jpg'
    },
    thumbnail: '/images/frontend.jpg',
    enrollmentCount: 1250,
    rating: {
      average: 4.8,
      count: 324
    },
    modules: [
      {
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        duration: '2 hours',
        topics: ['HTML Structure', 'Semantic Elements', 'Forms'],
        resources: []
      },
      {
        title: 'CSS Styling',
        description: 'Style your web pages with CSS',
        duration: '3 hours',
        topics: ['CSS Selectors', 'Layout', 'Responsive Design'],
        resources: []
      },
      {
        title: 'JavaScript Basics',
        description: 'Programming fundamentals with JavaScript',
        duration: '4 hours',
        topics: ['Variables', 'Functions', 'DOM Manipulation'],
        resources: []
      }
    ]
  },
  {
    title: 'Backend Development',
    slug: 'backend-development',
    description: 'Learn server-side programming, databases, and API development with modern technologies.',
    shortDescription: 'Master backend development with Node.js, Python, databases, and API design principles.',
    category: 'Backend Development',
    level: 'Intermediate',
    duration: '5-7 months',
    price: 0,
    featured: true,
    tags: ['node.js', 'python', 'database', 'api', 'server'],
    instructor: {
      name: 'Tech Expert',
      bio: 'Senior Backend Engineer with 10+ years experience',
      avatar: '/images/instructor.jpg'
    },
    thumbnail: '/images/backend.jpg',
    enrollmentCount: 892,
    rating: {
      average: 4.7,
      count: 203
    },
    modules: [
      {
        title: 'Server Fundamentals',
        description: 'Understanding how servers work',
        duration: '2 hours',
        topics: ['HTTP Protocol', 'Client-Server Model', 'REST APIs'],
        resources: []
      },
      {
        title: 'Node.js Basics',
        description: 'Introduction to Node.js runtime',
        duration: '3 hours',
        topics: ['Event Loop', 'Modules', 'Package Management'],
        resources: []
      }
    ]
  },
  {
    title: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Learn AI and machine learning from basics to advanced concepts.',
    shortDescription: 'Explore machine learning algorithms, neural networks, and AI applications using Python.',
    category: 'Machine Learning',
    level: 'Advanced',
    duration: '6-9 months',
    price: 0,
    featured: true,
    tags: ['python', 'ai', 'machine learning', 'data science', 'tensorflow'],
    instructor: {
      name: 'AI Specialist',
      bio: 'Machine Learning Engineer at Google',
      avatar: '/images/ai_instructor.jpg'
    },
    thumbnail: '/images/ml.jpg',
    enrollmentCount: 743,
    rating: {
      average: 4.8,
      count: 189
    },
    modules: [
      {
        title: 'Python for ML',
        description: 'Python programming for machine learning',
        duration: '4 hours',
        topics: ['NumPy', 'Pandas', 'Scikit-learn'],
        resources: []
      }
    ]
  }
];

// Quick internships data
const quickInternships = [
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Google',
      logo: '/images/google-logo.png',
      website: 'https://google.com'
    },
    location: {
      city: 'Mountain View',
      state: 'CA',
      country: 'USA',
      remote: false
    },
    type: 'Full-time',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers.',
    requirements: ['Currently pursuing a degree in Computer Science', 'Strong programming skills'],
    responsibilities: ['Develop software applications', 'Collaborate with teams'],
    skills: ['Python', 'Java', 'C++', 'Problem Solving', 'Communication'],
    stipend: {
      amount: 8000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2024-12-15'),
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-08-30'),
    applicationUrl: 'https://careers.google.com/internships',
    featured: true,
    tags: ['python', 'java', 'c++', 'software engineering'],
    level: 'Entry Level',
    category: 'Software Engineering',
    applicationCount: 245,
    postedBy: new mongoose.Types.ObjectId()
  },
  {
    title: 'Data Science Intern',
    company: {
      name: 'Meta',
      logo: '/images/meta-logo.png',
      website: 'https://meta.com'
    },
    location: {
      city: 'Menlo Park',
      state: 'CA',
      country: 'USA',
      remote: false
    },
    type: 'Full-time',
    duration: '12 weeks',
    description: 'Join our data science team to work on machine learning models.',
    requirements: ['Pursuing a degree in Data Science', 'Proficiency in Python and SQL'],
    responsibilities: ['Develop ML models', 'Analyze large datasets'],
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Mathematics'],
    stipend: {
      amount: 9000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2024-11-28'),
    startDate: new Date('2025-05-15'),
    endDate: new Date('2025-08-15'),
    applicationUrl: 'https://careers.facebook.com/internships',
    featured: true,
    tags: ['python', 'sql', 'machine learning', 'data science'],
    level: 'Entry Level',
    category: 'Data Science',
    applicationCount: 189,
    postedBy: new mongoose.Types.ObjectId()
  },
  {
    title: 'Frontend Engineering Intern',
    company: {
      name: 'Netflix',
      logo: '/images/netflix-logo.png',
      website: 'https://netflix.com'
    },
    location: {
      city: 'Los Gatos',
      state: 'CA',
      country: 'USA',
      remote: true
    },
    type: 'Full-time',
    duration: '12 weeks',
    description: 'Help build the next generation of Netflix user interface.',
    requirements: ['Strong knowledge of JavaScript, HTML, CSS', 'Experience with React'],
    responsibilities: ['Develop user-facing features', 'Optimize applications'],
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    stipend: {
      amount: 7500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2024-12-01'),
    startDate: new Date('2025-06-10'),
    endDate: new Date('2025-09-10'),
    applicationUrl: 'https://jobs.netflix.com/internships',
    featured: true,
    tags: ['react', 'typescript', 'javascript', 'frontend'],
    level: 'Entry Level',
    category: 'Software Engineering',
    applicationCount: 156,
    postedBy: new mongoose.Types.ObjectId()
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
