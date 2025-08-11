const mongoose = require('mongoose');
const User = require('../models/User');
const Course = require('../models/Course');
const Testimonial = require('../models/Testimonial');
const Internship = require('../models/Internship');

const seedData = async () => {
  try {
    console.log('🌱 Starting to seed data...');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Testimonial.deleteMany({});
    await Internship.deleteMany({});

    console.log('🧹 Cleared existing data');

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@softwareinsight.com',
      password: 'admin123',
      role: 'admin',
      bio: 'System administrator for Software Insight platform',
      skills: ['Management', 'Technical Support', 'Education']
    });

    console.log('👤 Created admin user');

    // Create sample courses
    const courses = [
      {
        title: 'Complete Web Development Bootcamp',
        shortDescription: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB from scratch',
        description: 'This comprehensive bootcamp covers everything you need to become a full-stack web developer. Starting with the fundamentals of HTML and CSS, you\'ll progress through JavaScript, React for frontend development, and Node.js with MongoDB for backend development.',
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
          'Deploy applications to production'
        ],
        modules: [
          {
            title: 'HTML & CSS Fundamentals',
            description: 'Learn the building blocks of web development',
            duration: '2 weeks',
            topics: ['HTML structure', 'CSS styling', 'Responsive design', 'Flexbox', 'Grid'],
            resources: [
              {
                title: 'MDN HTML Documentation',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                type: 'documentation'
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
                title: 'JavaScript.info',
                url: 'https://javascript.info/',
                type: 'tutorial'
              }
            ]
          }
        ],
        projects: [
          {
            title: 'Personal Portfolio Website',
            description: 'Create a responsive portfolio to showcase your projects',
            difficulty: 'Easy',
            technologies: ['HTML', 'CSS', 'JavaScript']
          },
          {
            title: 'Task Management App',
            description: 'Build a full-stack task management application',
            difficulty: 'Medium',
            technologies: ['React', 'Node.js', 'MongoDB']
          }
        ],
        instructor: {
          name: 'Robert Nguyen',
          bio: 'Senior Full-Stack Developer with 8+ years of experience',
          socialLinks: {
            github: 'https://github.com/robert-nguyenn',
            linkedin: 'https://linkedin.com/in/robert-nguyenn'
          }
        },
        featured: true,
        isPublished: true,
        rating: { average: 4.8, count: 234 },
        enrollmentCount: 1250,
        tags: ['web development', 'full stack', 'javascript', 'react', 'nodejs']
      },
      {
        title: 'Advanced React Development',
        shortDescription: 'Master advanced React concepts including hooks, context, testing, and performance optimization',
        description: 'Take your React skills to the next level with advanced patterns, performance optimization techniques, and modern development practices.',
        level: 'Advanced',
        category: 'Frontend',
        duration: '8 weeks',
        technologies: ['React', 'TypeScript', 'Redux', 'Testing Library', 'Next.js'],
        prerequisites: ['Solid JavaScript knowledge', 'Basic React experience', 'Understanding of ES6+'],
        learningOutcomes: [
          'Master advanced React hooks and patterns',
          'Implement state management with Redux',
          'Write comprehensive tests for React applications',
          'Optimize React app performance',
          'Build server-side rendered apps with Next.js'
        ],
        instructor: {
          name: 'Sarah Chen',
          bio: 'React core team contributor and frontend architect',
          socialLinks: {
            github: 'https://github.com/sarahchen',
            linkedin: 'https://linkedin.com/in/sarahchen'
          }
        },
        featured: true,
        isPublished: true,
        rating: { average: 4.9, count: 156 },
        enrollmentCount: 892,
        tags: ['react', 'advanced', 'typescript', 'performance', 'testing']
      },
      {
        title: 'Data Science with Python',
        shortDescription: 'Learn data analysis, visualization, and machine learning with Python',
        description: 'Comprehensive course covering data science fundamentals using Python, pandas, matplotlib, and scikit-learn.',
        level: 'Intermediate',
        category: 'Data Science',
        duration: '10 weeks',
        technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter'],
        prerequisites: ['Basic Python programming', 'High school mathematics'],
        learningOutcomes: [
          'Analyze data with pandas and NumPy',
          'Create visualizations with matplotlib',
          'Build machine learning models',
          'Work with real-world datasets'
        ],
        instructor: {
          name: 'Dr. Michael Johnson',
          bio: 'Data scientist with PhD in Statistics and 10+ years industry experience',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/dr-michael-johnson'
          }
        },
        isPublished: true,
        rating: { average: 4.7, count: 89 },
        enrollmentCount: 567,
        tags: ['python', 'data science', 'machine learning', 'analytics']
      }
    ];

    const createdCourses = await Course.insertMany(courses);
    console.log('📚 Created sample courses');

    // Create sample testimonials
    const testimonials = [
      {
        name: 'Diego Sic',
        email: 'diego.sic@example.com',
        company: 'Tech Innovations Inc.',
        position: 'Frontend Developer',
        content: 'My experience with SoftwareInsight has been transformative. The guidance and resources provided have not only deepened my understanding of front-end development but also equipped me with practical skills that are crucial in the industry.',
        rating: 5,
        course: createdCourses[0]._id,
        featured: true,
        isApproved: true,
        approvedBy: adminUser._id,
        approvedAt: new Date(),
        socialLinks: {
          linkedin: 'https://linkedin.com/in/diego-sic',
          github: 'https://github.com/diego-sic'
        }
      },
      {
        name: 'Aiden Do',
        email: 'aiden.do@example.com',
        company: 'StartupXYZ',
        position: 'Full Stack Developer',
        content: 'Enrolling in SoftwareInsight has been one of the best decisions I\'ve made. The interactive learning environment and dedicated instructors have made learning front-end development not only educational but also enjoyable.',
        rating: 5,
        course: createdCourses[0]._id,
        featured: true,
        isApproved: true,
        approvedBy: adminUser._id,
        approvedAt: new Date(),
        socialLinks: {
          linkedin: 'https://linkedin.com/in/aiden-do',
          portfolio: 'https://aiden-do.dev'
        }
      },
      {
        name: 'Emily Rodriguez',
        email: 'emily.rodriguez@example.com',
        company: 'Data Corp',
        position: 'Data Analyst',
        content: 'The Data Science course provided exactly what I needed to transition from a business analyst to a data scientist. The hands-on projects and real-world examples made complex concepts easy to understand.',
        rating: 5,
        course: createdCourses[2]._id,
        featured: true,
        isApproved: true,
        approvedBy: adminUser._id,
        approvedAt: new Date()
      }
    ];

    await Testimonial.insertMany(testimonials);
    console.log('⭐ Created sample testimonials');

    // Create sample internships
    const internships = [
      {
        title: 'Software Engineering Intern',
        company: {
          name: 'Google',
          website: 'https://careers.google.com',
          description: 'Global technology company focusing on search, advertising, and cloud computing'
        },
        location: {
          city: 'Mountain View',
          state: 'CA',
          country: 'USA',
          remote: false
        },
        description: 'Join our engineering team to work on cutting-edge projects that impact billions of users worldwide. You\'ll collaborate with experienced engineers, contribute to real products, and learn from industry leaders.',
        requirements: [
          'Currently pursuing CS or related degree',
          'Strong programming skills in Java, Python, or C++',
          'Understanding of data structures and algorithms',
          'Previous internship or project experience preferred'
        ],
        responsibilities: [
          'Develop and maintain software applications',
          'Collaborate with cross-functional teams',
          'Participate in code reviews and design discussions',
          'Contribute to open-source projects'
        ],
        skills: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Git'],
        duration: '12 weeks (Summer)',
        stipend: {
          amount: 8000,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-31'),
        applicationUrl: 'https://careers.google.com/jobs/results/',
        contactEmail: 'internships@google.com',
        category: 'Software Engineering',
        level: 'Intermediate',
        type: 'Full-time',
        featured: true,
        tags: ['software engineering', 'backend', 'frontend', 'algorithms'],
        postedBy: adminUser._id
      },
      {
        title: 'Data Science Intern',
        company: {
          name: 'Meta',
          website: 'https://www.facebookcareers.com',
          description: 'Social technology company connecting people through apps and technologies'
        },
        location: {
          city: 'Menlo Park',
          state: 'CA',
          country: 'USA',
          remote: true
        },
        description: 'Work with our data science team to analyze user behavior, build predictive models, and drive product insights using machine learning and statistical analysis.',
        requirements: [
          'Pursuing degree in Data Science, Statistics, or related field',
          'Experience with Python and SQL',
          'Knowledge of machine learning concepts',
          'Strong analytical and problem-solving skills'
        ],
        responsibilities: [
          'Analyze large datasets to extract insights',
          'Build and validate machine learning models',
          'Create data visualizations and reports',
          'Collaborate with product teams on data-driven decisions'
        ],
        skills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'R', 'Tableau'],
        duration: '16 weeks',
        stipend: {
          amount: 9000,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days from now
        startDate: new Date('2024-05-15'),
        endDate: new Date('2024-09-15'),
        applicationUrl: 'https://www.facebookcareers.com/jobs/',
        contactEmail: 'university@meta.com',
        category: 'Data Science',
        level: 'Intermediate',
        type: 'Full-time',
        featured: true,
        tags: ['data science', 'machine learning', 'python', 'sql'],
        postedBy: adminUser._id
      },
      {
        title: 'Frontend Development Intern',
        company: {
          name: 'Airbnb',
          website: 'https://careers.airbnb.com',
          description: 'Online marketplace for short-term homestays and experiences'
        },
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          remote: false
        },
        description: 'Join our frontend team to build beautiful, responsive user interfaces that enhance the Airbnb experience for millions of users worldwide.',
        requirements: [
          'Strong knowledge of HTML, CSS, and JavaScript',
          'Experience with React or similar frameworks',
          'Understanding of responsive design principles',
          'Portfolio demonstrating frontend skills'
        ],
        responsibilities: [
          'Develop responsive web interfaces',
          'Implement designs from Figma mockups',
          'Optimize applications for performance',
          'Collaborate with designers and backend engineers'
        ],
        skills: ['React', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Figma'],
        duration: '10 weeks',
        stipend: {
          amount: 7500,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
        startDate: new Date('2024-06-15'),
        endDate: new Date('2024-08-25'),
        applicationUrl: 'https://careers.airbnb.com/',
        contactEmail: 'university-recruiting@airbnb.com',
        category: 'Software Engineering',
        level: 'Entry Level',
        type: 'Full-time',
        featured: true,
        tags: ['frontend', 'react', 'javascript', 'ui/ux'],
        postedBy: adminUser._id
      }
    ];

    await Internship.insertMany(internships);
    console.log('💼 Created sample internships');

    // Create regular users
    const users = [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
        password: 'password123',
        bio: 'Aspiring full-stack developer passionate about creating web applications',
        skills: ['JavaScript', 'React', 'Node.js'],
        enrolledCourses: [
          {
            course: createdCourses[0]._id,
            progress: 45
          }
        ],
        socialLinks: {
          github: 'https://github.com/johnsmith',
          linkedin: 'https://linkedin.com/in/johnsmith'
        }
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password123',
        bio: 'Data enthusiast looking to break into data science',
        skills: ['Python', 'SQL', 'Excel'],
        enrolledCourses: [
          {
            course: createdCourses[2]._id,
            progress: 30
          }
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com/in/janedoe'
        }
      },
      {
        name: 'Alex Chen',
        email: 'alex.chen@example.com',
        password: 'password123',
        bio: 'Experienced developer looking to master advanced React patterns',
        skills: ['React', 'TypeScript', 'GraphQL', 'Node.js'],
        enrolledCourses: [
          {
            course: createdCourses[1]._id,
            progress: 75
          }
        ],
        socialLinks: {
          github: 'https://github.com/alexchen',
          portfolio: 'https://alexchen.dev'
        }
      }
    ];

    await User.insertMany(users);
    console.log('👥 Created sample users');

    console.log('✅ Seed data created successfully!');
    console.log(`
📊 Summary:
- Admin user: admin@softwareinsight.com (password: admin123)
- Courses: ${createdCourses.length}
- Testimonials: ${testimonials.length}
- Internships: ${internships.length}
- Users: ${users.length + 1} (including admin)
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
