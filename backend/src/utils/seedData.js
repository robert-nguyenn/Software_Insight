const mongoose = require('mongoose');
const User = require('../models/User');
const Course = require('../models/Course');
const Testimonial = require('../models/Testimonial');
const Internship = require('../models/Internship');
const { techRoadmaps } = require('./techRoadmapSeeds');

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

    // Create demo user for easy testing
    const demoUser = await User.create({
      name: 'Demo Student',
      email: 'demo.student@internprep.com',
      password: 'demo123',
      role: 'user',
      bio: 'Demo account for exploring the Software Insight internship preparation platform',
      skills: ['JavaScript', 'Python', 'React', 'Problem Solving'],
      socialLinks: {
        github: 'https://github.com/demostudent',
        linkedin: 'https://linkedin.com/in/demostudent'
      }
    });

    console.log('🎭 Created demo user');

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

    // Combine original course with new comprehensive roadmaps
    const allCourses = [originalFullStackCourse, ...techRoadmaps];

    // Create courses one by one to trigger pre-save middleware for slug generation
    const createdCourses = [];
    for (const courseData of allCourses) {
      const course = await Course.create(courseData);
      createdCourses.push(course);
    }
    console.log('📚 Created comprehensive tech roadmaps and courses');

    // Create sample testimonials
    const testimonials = [
      {
        name: 'Diego Sic',
        email: 'diego.sic@example.com',
        company: 'Google',
        position: 'Software Engineer Intern',
        content: 'The Frontend Development Roadmap was instrumental in landing my Google internship. The structured approach and real-world projects helped me build a portfolio that stood out to recruiters.',
        rating: 5,
        course: createdCourses[1]._id, // Frontend roadmap
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
        company: 'Meta',
        position: 'Backend Engineer Intern',
        content: 'The Backend Development Roadmap completely transformed my understanding of scalable systems. I went from struggling with basic APIs to building microservices that got me noticed by Meta recruiters.',
        rating: 5,
        course: createdCourses[2]._id, // Backend roadmap
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
        company: 'Netflix',
        position: 'Data Engineer Intern',
        content: 'The Data Engineer roadmap gave me the practical skills I needed to transition into data engineering. The real-world projects using Spark and Airflow were exactly what interviewers asked about.',
        rating: 5,
        course: createdCourses[3]._id, // Data Engineering roadmap
        featured: true,
        isApproved: true,
        approvedBy: adminUser._id,
        approvedAt: new Date()
      },
      {
        name: 'Marcus Johnson',
        email: 'marcus.j@example.com',
        company: 'OpenAI',
        position: 'AI Engineer Intern',
        content: 'The AI Engineer roadmap kept me up to date with the latest in LLMs and MLOps. The hands-on experience with transformers and deployment strategies helped me land my dream internship at OpenAI.',
        rating: 5,
        course: createdCourses[4]._id, // AI Engineering roadmap
        featured: true,
        isApproved: true,
        approvedBy: adminUser._id,
        approvedAt: new Date(),
        socialLinks: {
          github: 'https://github.com/marcus-ai',
          linkedin: 'https://linkedin.com/in/marcus-johnson-ai'
        }
      }
    ];

    await Testimonial.insertMany(testimonials);
    console.log('⭐ Created sample testimonials');

    // Create sample internships with detailed interview processes
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
          'Currently pursuing CS or related degree (Junior/Senior preferred)',
          'Strong programming skills in Java, Python, or C++',
          'Solid understanding of data structures and algorithms',
          'Experience with system design concepts',
          'Previous internship or project experience preferred',
          'GPA 3.5+ preferred'
        ],
        responsibilities: [
          'Develop and maintain software applications',
          'Collaborate with cross-functional teams',
          'Participate in code reviews and design discussions',
          'Contribute to large-scale distributed systems'
        ],
        skills: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Git', 'System Design'],
        duration: '12 weeks (Summer)',
        stipend: {
          amount: 8000,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-31'),
        applicationUrl: 'https://careers.google.com/jobs/results/',
        contactEmail: 'internships@google.com',
        category: 'Software Engineering',
        level: 'Intermediate',
        type: 'Full-time',
        featured: true,
        tags: ['software engineering', 'backend', 'frontend', 'algorithms'],
        interviewProcess: {
          totalRounds: 4,
          description: 'Google follows a rigorous but fair interview process focusing on problem-solving and coding skills',
          rounds: [
            {
              round: 1,
              type: 'Online Assessment',
              duration: '90 minutes',
              description: 'Two coding problems of medium difficulty, focus on algorithms and data structures',
              tips: 'Practice LeetCode medium problems, especially trees, graphs, and dynamic programming'
            },
            {
              round: 2,
              type: 'Phone/Video Screen',
              duration: '45 minutes',
              description: 'One coding problem with follow-up questions, problem-solving discussion',
              tips: 'Communicate your thought process clearly, ask clarifying questions'
            },
            {
              round: 3,
              type: 'Virtual Onsite - Technical',
              duration: '45 minutes each, 2 rounds back-to-back',
              description: 'Two separate coding interviews, 1 medium to hard LeetCode problem each',
              tips: 'Focus on graph algorithms, dynamic programming, and tree traversals'
            },
            {
              round: 4,
              type: 'Behavioral/Cultural Fit',
              duration: '30 minutes',
              description: 'Questions about past experiences, motivation, and alignment with Google values',
              tips: 'Prepare STAR method examples, research Google\'s culture and recent projects'
            }
          ],
          commonTopics: [
            'Graph algorithms (DFS, BFS, shortest path)',
            'Dynamic programming',
            'Tree and binary search tree operations',
            'Array and string manipulation',
            'System design basics'
          ],
          preparationResources: [
            'LeetCode Google tag problems',
            'Cracking the Coding Interview',
            'Google\'s interview prep guide',
            'Practice with mock interviews'
          ]
        },
        applicationPlatforms: [
          {
            name: 'Google Careers',
            url: 'https://careers.google.com/students/',
            type: 'Direct Application'
          },
          {
            name: 'University Career Fair',
            url: 'https://careers.google.com/events/',
            type: 'Campus Recruitment'
          },
          {
            name: 'Simplify',
            url: 'https://simplify.jobs/',
            type: 'Application Tracker'
          }
        ],
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
          'Pursuing degree in Data Science, Statistics, CS, or related field',
          'Strong experience with Python and SQL',
          'Knowledge of machine learning algorithms and statistical methods',
          'Experience with data visualization tools',
          'Strong analytical and problem-solving skills',
          'Previous data science projects or internships preferred'
        ],
        responsibilities: [
          'Analyze large datasets to extract insights',
          'Build and validate machine learning models',
          'Create data visualizations and reports',
          'Collaborate with product teams on data-driven decisions'
        ],
        skills: ['Python', 'SQL', 'Machine Learning', 'Statistics', 'R', 'Tableau', 'A/B Testing'],
        duration: '16 weeks',
        stipend: {
          amount: 9000,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
        startDate: new Date('2024-05-15'),
        endDate: new Date('2024-09-15'),
        applicationUrl: 'https://www.facebookcareers.com/jobs/',
        contactEmail: 'university@meta.com',
        category: 'Data Science',
        level: 'Intermediate',
        type: 'Full-time',
        featured: true,
        tags: ['data science', 'machine learning', 'python', 'sql'],
        interviewProcess: {
          totalRounds: 4,
          description: 'Meta emphasizes practical data science skills and business impact',
          rounds: [
            {
              round: 1,
              type: 'Take-Home Assignment',
              duration: '3-5 hours',
              description: 'Data analysis project with real Meta-style data, including cleaning and insights',
              tips: 'Focus on clear methodology, business insights, and code quality'
            },
            {
              round: 2,
              type: 'Technical Interview - Statistics & ML',
              duration: '45 minutes',
              description: 'Statistics concepts, ML algorithms, and coding problems',
              tips: 'Review fundamental statistics, common ML algorithms, practice coding'
            },
            {
              round: 3,
              type: 'Case Study Presentation',
              duration: '45 minutes',
              description: 'Present take-home results and answer follow-up questions',
              tips: 'Prepare clear visualizations, defend your approach, suggest business actions'
            },
            {
              round: 4,
              type: 'Behavioral + Culture Fit',
              duration: '30 minutes',
              description: 'Questions about motivation and alignment with Meta\'s mission',
              tips: 'Research Meta\'s culture, prepare stories about data-driven decisions'
            }
          ],
          commonTopics: [
            'Statistical hypothesis testing and A/B testing',
            'Machine learning model evaluation',
            'SQL queries for complex analysis',
            'Data visualization and storytelling',
            'Business metrics and KPI development'
          ],
          preparationResources: [
            'Kaggle datasets and competitions',
            'Meta\'s data science blog',
            'Statistics and ML fundamentals',
            'Practice with real-world data projects'
          ]
        },
        applicationPlatforms: [
          {
            name: 'Meta Careers',
            url: 'https://www.metacareers.com/students/',
            type: 'Direct Application'
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/meta/jobs/',
            type: 'Job Board'
          },
          {
            name: 'Handshake',
            url: 'https://joinhandshake.com/',
            type: 'University Platform'
          }
        ],
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
          'Portfolio demonstrating frontend skills',
          'Knowledge of modern CSS (Flexbox, Grid)',
          'Experience with version control (Git)'
        ],
        responsibilities: [
          'Develop responsive web interfaces',
          'Implement designs from Figma mockups',
          'Optimize applications for performance',
          'Collaborate with designers and backend engineers'
        ],
        skills: ['React', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Figma', 'Redux'],
        duration: '10 weeks',
        stipend: {
          amount: 7500,
          currency: 'USD',
          period: 'monthly'
        },
        applicationDeadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        startDate: new Date('2024-06-15'),
        endDate: new Date('2024-08-25'),
        applicationUrl: 'https://careers.airbnb.com/',
        contactEmail: 'university-recruiting@airbnb.com',
        category: 'Software Engineering',
        level: 'Entry Level',
        type: 'Full-time',
        featured: true,
        tags: ['frontend', 'react', 'javascript', 'ui/ux'],
        interviewProcess: {
          totalRounds: 3,
          description: 'Airbnb focuses on frontend skills, design thinking, and cultural alignment',
          rounds: [
            {
              round: 1,
              type: 'Technical Screen',
              duration: '45 minutes',
              description: 'JavaScript/React coding problem with focus on component design',
              tips: 'Practice React hooks, component lifecycle, and common patterns'
            },
            {
              round: 2,
              type: 'Virtual Onsite - Technical Deep Dive',
              duration: '45 minutes',
              description: 'Complex frontend problem with performance considerations',
              tips: 'Understand React optimization, virtual DOM, and architecture patterns'
            },
            {
              round: 3,
              type: 'Behavioral + Design Sense',
              duration: '45 minutes',
              description: 'Behavioral questions and discussion about user experience',
              tips: 'Research Airbnb\'s products, understand design challenges'
            }
          ],
          commonTopics: [
            'React component design and optimization',
            'JavaScript ES6+ features',
            'Frontend system design',
            'State management patterns',
            'Web performance and accessibility'
          ],
          preparationResources: [
            'React official documentation',
            'Frontend system design interviews',
            'Airbnb\'s engineering blog',
            'Practice building React applications'
          ]
        },
        applicationPlatforms: [
          {
            name: 'Airbnb Careers',
            url: 'https://careers.airbnb.com/university/',
            type: 'Direct Application'
          },
          {
            name: 'AngelList',
            url: 'https://angel.co/',
            type: 'Startup Platform'
          },
          {
            name: 'Indeed',
            url: 'https://indeed.com/',
            type: 'Job Board'
          }
        ],
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
