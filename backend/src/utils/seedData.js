const mongoose = require('mongoose');
const User = require('../models/User');
const Course = require('../models/Course');
const Testimonial = require('../models/Testimonial');
const Internship = require('../models/Internship');
const { techRoadmaps } = require('./techRoadmapSeeds');
const { usersData, coursesData, testimonialsData, internshipsData } = require('./seeds');

const seedData = async () => {
  try {
    console.log('🌱 Starting to seed data...');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Testimonial.deleteMany({});
    await Internship.deleteMany({});

    console.log('🧹 Cleared existing data');

    // Create users from seed data
    const createdUsers = await User.insertMany(usersData);
    const adminUser = createdUsers.find(user => user.role === 'admin');

    console.log('👤 Created users from seed data');

    // Add the original full-stack course to maintain compatibility
    const originalFullStackCourse = {
      title: 'Full Stack Development Roadmap',
      shortDescription: 'Complete roadmap to become a full-stack web developer with hands-on projects and free resources',
      description: 'Master the complete web development stack from frontend to backend. This comprehensive roadmap includes free YouTube courses, documentation, and practical projects to build your portfolio for internship applications.',
      level: 'Beginner',
      category: 'Full Stack',
      duration: '12 weeks',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
      prerequisites: ['Basic computer skills', 'Understanding of internet basics'],
      learningOutcomes: [
        'Build responsive websites with HTML and CSS',
        'Create interactive web applications with JavaScript',
        'Develop modern frontend applications with React',
        'Build RESTful APIs with Node.js and Express',
        'Work with databases using MongoDB',
        'Deploy applications to production',
        'Build a complete portfolio ready for internship applications'
      ],
      modules: [
        {
          title: 'HTML & CSS Fundamentals',
          description: 'Learn the building blocks of web development',
          duration: '2 weeks',
          topics: ['HTML structure', 'CSS styling', 'Responsive design', 'Flexbox', 'Grid'],
          resources: [
            {
              title: 'HTML Full Course - FreeCodeCamp',
              url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
              type: 'video',
              description: 'Complete HTML tutorial for beginners',
              duration: '2 hours',
              difficulty: 'Beginner',
              estimatedTime: '2 hours'
            },
            {
              title: 'CSS Tutorial for Beginners - Traversy Media',
              url: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
              type: 'video',
              description: 'CSS fundamentals and styling techniques',
              duration: '1.5 hours',
              difficulty: 'Beginner',
              estimatedTime: '2 hours'
            },
            {
              title: 'MDN HTML Documentation',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
              type: 'documentation',
              description: 'Comprehensive HTML reference',
              difficulty: 'Beginner',
              estimatedTime: '3 hours'
            }
          ]
        },
        {
          title: 'JavaScript Programming',
          description: 'Master the programming language of the web',
          duration: '3 weeks',
          topics: ['Variables and data types', 'Functions', 'DOM manipulation', 'Events', 'Async programming'],
          resources: [
            {
              title: 'JavaScript Full Course - FreeCodeCamp',
              url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
              type: 'video',
              description: 'Complete JavaScript programming course',
              duration: '3.5 hours',
              difficulty: 'Beginner',
              estimatedTime: '4 hours'
            },
            {
              title: 'JavaScript.info',
              url: 'https://javascript.info/',
              type: 'tutorial',
              description: 'Modern JavaScript tutorial with interactive examples',
              difficulty: 'Intermediate',
              estimatedTime: '20 hours'
            },
            {
              title: 'Modern JavaScript Tutorial - Net Ninja',
              url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc',
              type: 'video',
              description: 'ES6+ features and modern JavaScript',
              duration: '8 hours',
              difficulty: 'Intermediate',
              estimatedTime: '10 hours'
            }
          ]
        },
        {
          title: 'React Frontend Development',
          description: 'Build modern user interfaces with React',
          duration: '3 weeks',
          topics: ['Components', 'JSX', 'Props and State', 'Hooks', 'Routing'],
          resources: [
            {
              title: 'React Course for Beginners - FreeCodeCamp',
              url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
              type: 'video',
              description: 'Complete React course for beginners',
              duration: '12 hours',
              difficulty: 'Intermediate',
              estimatedTime: '15 hours'
            },
            {
              title: 'Official React Documentation',
              url: 'https://reactjs.org/docs/getting-started.html',
              type: 'documentation',
              description: 'Official React documentation and guides',
              difficulty: 'Intermediate',
              estimatedTime: '10 hours'
            },
            {
              title: 'React Tutorial - Programming with Mosh',
              url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
              type: 'video',
              description: 'React fundamentals and best practices',
              duration: '2 hours',
              difficulty: 'Intermediate',
              estimatedTime: '3 hours'
            }
          ]
        },
        {
          title: 'Backend Development with Node.js',
          description: 'Create server-side applications and APIs',
          duration: '3 weeks',
          topics: ['Node.js basics', 'Express.js', 'REST APIs', 'Authentication', 'Database integration'],
          resources: [
            {
              title: 'Node.js Tutorial for Beginners - Programming with Mosh',
              url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
              type: 'video',
              description: 'Complete Node.js course',
              duration: '3 hours',
              difficulty: 'Intermediate',
              estimatedTime: '4 hours'
            },
            {
              title: 'Express.js Course - FreeCodeCamp',
              url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
              type: 'video',
              description: 'Build REST APIs with Express.js',
              duration: '2 hours',
              difficulty: 'Intermediate',
              estimatedTime: '3 hours'
            },
            {
              title: 'Node.js Official Documentation',
              url: 'https://nodejs.org/en/docs/',
              type: 'documentation',
              description: 'Official Node.js documentation',
              difficulty: 'Intermediate',
              estimatedTime: '5 hours'
            }
          ]
        },
        {
          title: 'Database & Deployment',
          description: 'Learn database management and deployment strategies',
          duration: '1 week',
          topics: ['MongoDB basics', 'Database design', 'Cloud deployment', 'Environment variables'],
          resources: [
            {
              title: 'MongoDB Tutorial - Net Ninja',
              url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA',
              type: 'video',
              description: 'MongoDB fundamentals and operations',
              duration: '3 hours',
              difficulty: 'Beginner',
              estimatedTime: '4 hours'
            },
            {
              title: 'Deploy to Heroku - Traversy Media',
              url: 'https://www.youtube.com/watch?v=71wSzpLyW9k',
              type: 'video',
              description: 'Deploy Node.js apps to Heroku',
              duration: '30 minutes',
              difficulty: 'Beginner',
              estimatedTime: '1 hour'
            }
          ]
        }
      ],
      projects: [
        {
          title: 'Personal Portfolio Website',
          description: 'Create a responsive portfolio to showcase your projects for internship applications',
          difficulty: 'Easy',
          technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Task Management App',
          description: 'Build a full-stack task management application with authentication',
          difficulty: 'Medium',
          technologies: ['React', 'Node.js', 'MongoDB']
        },
        {
          title: 'E-commerce Platform',
          description: 'Complete e-commerce solution with payment integration',
          difficulty: 'Hard',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
        }
      ],
      instructor: {
        name: 'Robert Nguyen',
        bio: 'Senior Full-Stack Developer with 8+ years of experience helping students land internships',
        socialLinks: {
          github: 'https://github.com/robert-nguyenn',
          linkedin: 'https://linkedin.com/in/robert-nguyenn'
        }
      },
      featured: true,
      isPublished: true,
      rating: { average: 4.8, count: 234 },
      enrollmentCount: 1250,
      tags: ['web development', 'full stack', 'javascript', 'react', 'nodejs', 'internship prep']
    };

    // Combine original course with new comprehensive roadmaps and courses from seed data
    const allCourses = [originalFullStackCourse, ...techRoadmaps, ...coursesData];

    // Create courses one by one to trigger pre-save middleware for slug generation
    const createdCourses = [];
    for (const courseData of allCourses) {
      const course = await Course.create(courseData);
      createdCourses.push(course);
    }
    console.log('📚 Created comprehensive tech roadmaps and courses');

    // Create sample testimonials from seed data
    await Testimonial.insertMany(testimonialsData);
    console.log('⭐ Created testimonials from seed data');

    // Create sample internships from seed data
    await Internship.insertMany(internshipsData);
    console.log('💼 Created internships from seed data');

    console.log('✅ Seed data created successfully!');
    console.log(`
📊 Summary:
- Admin user: admin@softwareinsight.com (password: admin123)
- Courses: ${createdCourses.length}
- Testimonials: ${testimonialsData.length}
- Internships: ${internshipsData.length}
- Users: ${createdUsers.length}
    `);

  } catch (error) {
    console.error('❌ Seed data creation failed:', error);
  }
};

// Connect to database and run seed
const runSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/software_insight');
    console.log('📊 Connected to MongoDB');
    
    await seedData();
    
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed process failed:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  require('dotenv').config();
  runSeed();
}

module.exports = { seedData };
