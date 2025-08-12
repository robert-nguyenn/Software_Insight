const techRoadmaps = [
  {
    title: 'Frontend Development Roadmap',
    shortDescription: 'Complete frontend development path from basics to advanced React patterns and performance optimization',
    description: 'Master frontend development with our comprehensive roadmap designed specifically for students preparing for big tech internships. This course covers everything from HTML/CSS fundamentals to advanced React patterns, state management, and performance optimization techniques used at companies like Google, Meta, and Netflix.',
    level: 'Beginner',
    category: 'Frontend',
    duration: '14 weeks',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
    prerequisites: ['Basic computer skills', 'Basic understanding of how websites work'],
    learningOutcomes: [
      'Build responsive, accessible web applications',
      'Master modern JavaScript (ES6+) and TypeScript',
      'Create interactive UIs with React and advanced hooks',
      'Implement state management with Redux and Context API',
      'Optimize web performance and bundle sizes',
      'Build production-ready applications with Next.js',
      'Create a portfolio that stands out to recruiters'
    ],
    modules: [
      {
        title: 'HTML & CSS Fundamentals',
        description: 'Master the building blocks of web development with semantic HTML and modern CSS',
        duration: '2 weeks',
        topics: ['Semantic HTML', 'CSS Box Model', 'Flexbox', 'CSS Grid', 'Responsive Design'],
        resources: [
          {
            title: 'HTML Crash Course For Absolute Beginners',
            url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
            type: 'video',
            description: 'Learn HTML fundamentals with hands-on examples',
            duration: '1 hour',
            difficulty: 'Beginner',
            estimatedTime: '1 hour'
          },
          {
            title: 'CSS Tutorial - Zero to Hero',
            url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
            type: 'video',
            description: 'Complete CSS course covering selectors, box model, and layout',
            duration: '6 hours',
            difficulty: 'Beginner',
            estimatedTime: '6 hours'
          },
          {
            title: 'Flexbox Froggy',
            url: 'https://flexboxfroggy.com/',
            type: 'interactive',
            description: 'Interactive game to learn CSS Flexbox',
            difficulty: 'Beginner',
            estimatedTime: '30 minutes'
          },
          {
            title: 'CSS Grid Garden',
            url: 'https://cssgridgarden.com/',
            type: 'interactive',
            description: 'Interactive game to master CSS Grid',
            difficulty: 'Beginner',
            estimatedTime: '45 minutes'
          },
          {
            title: 'Responsive Web Design Fundamentals',
            url: 'https://web.dev/responsive-web-design-basics/',
            type: 'article',
            description: 'Google\'s guide to responsive design principles',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'JavaScript Fundamentals',
        description: 'Learn modern JavaScript from variables to advanced concepts like closures and async programming',
        duration: '3 weeks',
        topics: ['Variables & Data Types', 'Functions & Scope', 'DOM Manipulation', 'Events', 'Promises & Async/Await'],
        resources: [
          {
            title: 'JavaScript Tutorial for Beginners - Full Course',
            url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
            type: 'video',
            description: 'Complete JavaScript course by FreeCodeCamp',
            duration: '3.5 hours',
            difficulty: 'Beginner',
            estimatedTime: '4 hours'
          },
          {
            title: 'JavaScript30 - 30 Day Challenge',
            url: 'https://javascript30.com/',
            type: 'tutorial',
            description: '30 projects in 30 days to build JavaScript skills',
            difficulty: 'Intermediate',
            estimatedTime: '30 hours'
          },
          {
            title: 'Modern JavaScript From The Beginning',
            url: 'https://www.youtube.com/watch?v=BI1o2H9z9fo',
            type: 'video',
            description: 'Modern JS concepts including ES6+ features',
            duration: '10 hours',
            difficulty: 'Intermediate',
            estimatedTime: '12 hours'
          },
          {
            title: 'You Don\'t Know JS (Book Series)',
            url: 'https://github.com/getify/You-Dont-Know-JS',
            type: 'book',
            description: 'Deep dive into JavaScript concepts and gotchas',
            difficulty: 'Advanced',
            estimatedTime: '40 hours'
          },
          {
            title: 'JavaScript Promises Explained',
            url: 'https://www.youtube.com/watch?v=DHvZLI7Db8E',
            type: 'video',
            description: 'Master asynchronous JavaScript with promises',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '1.5 hours'
          }
        ]
      },
      {
        title: 'React Fundamentals',
        description: 'Master React components, hooks, and modern patterns used in production applications',
        duration: '4 weeks',
        topics: ['Components & JSX', 'Props & State', 'React Hooks', 'Event Handling', 'Forms & Validation'],
        resources: [
          {
            title: 'React Course - Beginner\'s Tutorial for React JavaScript Library',
            url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            type: 'video',
            description: 'Complete React course by FreeCodeCamp',
            duration: '12 hours',
            difficulty: 'Beginner',
            estimatedTime: '15 hours'
          },
          {
            title: 'Official React Tutorial - Tic Tac Toe',
            url: 'https://reactjs.org/tutorial/tutorial.html',
            type: 'tutorial',
            description: 'Official React tutorial building a tic-tac-toe game',
            difficulty: 'Beginner',
            estimatedTime: '2 hours'
          },
          {
            title: 'React Hooks Tutorial',
            url: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
            type: 'video',
            description: 'Complete guide to React hooks',
            duration: '2.5 hours',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'React TypeScript Tutorial',
            url: 'https://www.youtube.com/watch?v=Z5iWr6Srsj8',
            type: 'video',
            description: 'Using TypeScript with React for better development',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '1.5 hours'
          },
          {
            title: 'React Testing Library Tutorial',
            url: 'https://www.youtube.com/watch?v=8Xwq35cPwYg',
            type: 'video',
            description: 'Learn to test React components effectively',
            duration: '45 minutes',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'Advanced React & State Management',
        description: 'Learn advanced React patterns, performance optimization, and state management',
        duration: '3 weeks',
        topics: ['Context API', 'Redux Toolkit', 'Performance Optimization', 'Custom Hooks', 'Error Boundaries'],
        resources: [
          {
            title: 'Redux Toolkit Tutorial',
            url: 'https://www.youtube.com/watch?v=9zySeP5vH9c',
            type: 'video',
            description: 'Modern Redux with Redux Toolkit',
            duration: '1.5 hours',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          },
          {
            title: 'React Performance Optimization',
            url: 'https://www.youtube.com/watch?v=8pDqJVdNa44',
            type: 'video',
            description: 'Optimize React apps with memo, useMemo, and useCallback',
            duration: '1 hour',
            difficulty: 'Advanced',
            estimatedTime: '2 hours'
          },
          {
            title: 'Advanced React Patterns',
            url: 'https://kentcdodds.com/blog/advanced-react-patterns',
            type: 'article',
            description: 'Learn render props, HOCs, and compound components',
            difficulty: 'Advanced',
            estimatedTime: '3 hours'
          },
          {
            title: 'React Context API Deep Dive',
            url: 'https://www.youtube.com/watch?v=35lXWvCuM8o',
            type: 'video',
            description: 'Master React Context for state management',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '1.5 hours'
          }
        ]
      },
      {
        title: 'Modern Frontend Tooling',
        description: 'Master build tools, bundlers, and development workflows',
        duration: '2 weeks',
        topics: ['Webpack', 'Vite', 'ESLint & Prettier', 'Git & GitHub', 'CI/CD for Frontend'],
        resources: [
          {
            title: 'Webpack 5 Full Tutorial',
            url: 'https://www.youtube.com/watch?v=MpGLUVbqoYQ',
            type: 'video',
            description: 'Complete webpack configuration guide',
            duration: '1.5 hours',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'Vite Tutorial - Lightning Fast Build Tool',
            url: 'https://www.youtube.com/watch?v=LQQ3CR2JTX8',
            type: 'video',
            description: 'Modern build tool that\'s faster than webpack',
            duration: '30 minutes',
            difficulty: 'Beginner',
            estimatedTime: '1 hour'
          },
          {
            title: 'Git & GitHub Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=3RjQznt-8kE',
            type: 'video',
            description: 'Essential version control for developers',
            duration: '1 hour',
            difficulty: 'Beginner',
            estimatedTime: '2 hours'
          },
          {
            title: 'GitHub Actions for Frontend Apps',
            url: 'https://www.youtube.com/watch?v=eB0nUzAI7M8',
            type: 'video',
            description: 'Set up CI/CD for your frontend applications',
            duration: '45 minutes',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Interactive Dashboard',
        description: 'Build a responsive dashboard with charts, filters, and real-time data',
        difficulty: 'Medium',
        technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Context API']
      },
      {
        title: 'E-commerce Frontend',
        description: 'Complete e-commerce website with shopping cart, authentication, and payment integration',
        difficulty: 'Hard',
        technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Stripe API']
      },
      {
        title: 'Social Media Clone',
        description: 'Build a Twitter-like social media platform with real-time features',
        difficulty: 'Hard',
        technologies: ['React', 'Socket.io', 'Redux', 'Firebase']
      }
    ],
    instructor: {
      name: 'Alex Rivera',
      bio: 'Senior Frontend Engineer at Netflix with 7+ years experience building scalable user interfaces',
      socialLinks: {
        github: 'https://github.com/alexrivera',
        linkedin: 'https://linkedin.com/in/alex-rivera-frontend'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 342 },
    enrollmentCount: 2150,
    tags: ['frontend', 'react', 'javascript', 'html', 'css', 'internship prep', 'big tech']
  },
  {
    title: 'Backend Development Roadmap',
    shortDescription: 'Master server-side development with Node.js, databases, APIs, and cloud deployment',
    description: 'Comprehensive backend engineering roadmap covering everything from REST APIs to microservices architecture. Designed for students targeting backend engineering roles at top tech companies like Amazon, Microsoft, and Uber.',
    level: 'Intermediate',
    category: 'Backend',
    duration: '16 weeks',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'GraphQL'],
    prerequisites: ['JavaScript fundamentals', 'Basic understanding of databases', 'Command line familiarity'],
    learningOutcomes: [
      'Build scalable REST APIs and GraphQL servers',
      'Design efficient database schemas and optimize queries',
      'Implement robust authentication and authorization systems',
      'Deploy applications using containers and cloud platforms',
      'Build microservices with proper communication patterns',
      'Monitor and debug production applications',
      'Design systems that handle millions of users'
    ],
    modules: [
      {
        title: 'Node.js & Express Fundamentals',
        description: 'Master server-side JavaScript with Node.js and Express framework',
        duration: '3 weeks',
        topics: ['Node.js Runtime', 'Express.js Framework', 'Middleware', 'Routing', 'Error Handling'],
        resources: [
          {
            title: 'Node.js Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
            type: 'video',
            description: 'Complete Node.js course by Programming with Mosh',
            duration: '3 hours',
            difficulty: 'Beginner',
            estimatedTime: '4 hours'
          },
          {
            title: 'Express.js Tutorial',
            url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
            type: 'video',
            description: 'Build REST APIs with Express.js',
            duration: '2 hours',
            difficulty: 'Beginner',
            estimatedTime: '3 hours'
          },
          {
            title: 'Node.js Best Practices',
            url: 'https://github.com/goldbergyoni/nodebestpractices',
            type: 'documentation',
            description: 'Industry best practices for Node.js development',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Building RESTful APIs with Node.js and Express',
            url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
            type: 'video',
            description: 'Complete REST API course',
            duration: '4 hours',
            difficulty: 'Intermediate',
            estimatedTime: '5 hours'
          }
        ]
      },
      {
        title: 'Database Design & Management',
        description: 'Master both SQL and NoSQL databases with advanced optimization techniques',
        duration: '4 weeks',
        topics: ['SQL Fundamentals', 'PostgreSQL', 'MongoDB', 'Database Optimization', 'Migrations'],
        resources: [
          {
            title: 'PostgreSQL Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
            type: 'video',
            description: 'Complete PostgreSQL course',
            duration: '4 hours',
            difficulty: 'Beginner',
            estimatedTime: '6 hours'
          },
          {
            title: 'MongoDB Tutorial',
            url: 'https://www.youtube.com/watch?v=VELru-FCWDM',
            type: 'video',
            description: 'MongoDB fundamentals and advanced features',
            duration: '3 hours',
            difficulty: 'Beginner',
            estimatedTime: '4 hours'
          },
          {
            title: 'Database Design Course',
            url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc',
            type: 'video',
            description: 'Learn to design efficient database schemas',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'SQL Performance Tuning',
            url: 'https://use-the-index-luke.com/',
            type: 'tutorial',
            description: 'Advanced SQL optimization techniques',
            difficulty: 'Advanced',
            estimatedTime: '8 hours'
          },
          {
            title: 'Redis Tutorial',
            url: 'https://www.youtube.com/watch?v=XCsS_NVAa1g',
            type: 'video',
            description: 'In-memory database for caching and sessions',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'Authentication & Security',
        description: 'Implement secure authentication systems and protect against common vulnerabilities',
        duration: '3 weeks',
        topics: ['JWT Authentication', 'OAuth 2.0', 'Password Security', 'Rate Limiting', 'Security Headers'],
        resources: [
          {
            title: 'JWT Authentication Tutorial',
            url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4',
            type: 'video',
            description: 'Complete JWT authentication implementation',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          },
          {
            title: 'OAuth 2.0 Explained',
            url: 'https://www.youtube.com/watch?v=996OiexHze0',
            type: 'video',
            description: 'Understanding OAuth 2.0 flow and implementation',
            duration: '15 minutes',
            difficulty: 'Intermediate',
            estimatedTime: '1 hour'
          },
          {
            title: 'OWASP Top 10 Security Risks',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'documentation',
            description: 'Essential web application security guide',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'Node.js Security Best Practices',
            url: 'https://blog.risingstack.com/node-js-security-checklist/',
            type: 'article',
            description: 'Security checklist for Node.js applications',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'API Design & Testing',
        description: 'Build robust APIs with proper documentation and comprehensive testing',
        duration: '3 weeks',
        topics: ['REST API Design', 'GraphQL', 'API Documentation', 'Unit Testing', 'Integration Testing'],
        resources: [
          {
            title: 'REST API Design Best Practices',
            url: 'https://www.youtube.com/watch?v=llpr5924N7E',
            type: 'video',
            description: 'Design principles for REST APIs',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          },
          {
            title: 'GraphQL Tutorial',
            url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
            type: 'video',
            description: 'Complete GraphQL course',
            duration: '4 hours',
            difficulty: 'Intermediate',
            estimatedTime: '6 hours'
          },
          {
            title: 'API Testing with Jest and Supertest',
            url: 'https://www.youtube.com/watch?v=I4BZQr-5mBY',
            type: 'video',
            description: 'Test your APIs comprehensively',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'OpenAPI Documentation',
            url: 'https://swagger.io/docs/',
            type: 'documentation',
            description: 'Document your APIs professionally',
            difficulty: 'Beginner',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'DevOps & Cloud Deployment',
        description: 'Deploy and scale applications using containers and cloud platforms',
        duration: '3 weeks',
        topics: ['Docker Containers', 'AWS Deployment', 'CI/CD Pipelines', 'Monitoring', 'Load Balancing'],
        resources: [
          {
            title: 'Docker Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI',
            type: 'video',
            description: 'Complete Docker course',
            duration: '2.5 hours',
            difficulty: 'Beginner',
            estimatedTime: '4 hours'
          },
          {
            title: 'AWS for Beginners',
            url: 'https://www.youtube.com/watch?v=3hLmDS179YE',
            type: 'video',
            description: 'AWS fundamentals and core services',
            duration: '4 hours',
            difficulty: 'Beginner',
            estimatedTime: '6 hours'
          },
          {
            title: 'GitHub Actions CI/CD',
            url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
            type: 'video',
            description: 'Set up automated deployment pipelines',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'Application Monitoring with Prometheus',
            url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
            type: 'video',
            description: 'Monitor production applications',
            duration: '2 hours',
            difficulty: 'Advanced',
            estimatedTime: '4 hours'
          }
        ]
      }
    ],
    projects: [
      {
        title: 'REST API with Authentication',
        description: 'Build a complete REST API with user authentication, role-based access, and comprehensive testing',
        difficulty: 'Medium',
        technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Jest']
      },
      {
        title: 'Real-time Chat Application',
        description: 'Build a scalable chat app with WebSocket connections, message persistence, and user presence',
        difficulty: 'Hard',
        technologies: ['Node.js', 'Socket.io', 'Redis', 'MongoDB', 'Docker']
      },
      {
        title: 'Microservices E-commerce Backend',
        description: 'Design and implement a microservices architecture for an e-commerce platform',
        difficulty: 'Hard',
        technologies: ['Node.js', 'Docker', 'AWS', 'API Gateway', 'Message Queues']
      }
    ],
    instructor: {
      name: 'Maria Santos',
      bio: 'Principal Backend Engineer at Uber with expertise in distributed systems and scalable architecture',
      socialLinks: {
        github: 'https://github.com/mariasantos',
        linkedin: 'https://linkedin.com/in/maria-santos-backend'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 198 },
    enrollmentCount: 1567,
    tags: ['backend', 'nodejs', 'api', 'database', 'cloud', 'internship prep', 'system design']
  },
  {
    title: 'Data Engineer Roadmap',
    shortDescription: 'Master data engineering with Python, SQL, big data tools, and cloud platforms',
    description: 'Complete data engineering roadmap designed for students targeting data engineering roles at tech giants. Learn to build scalable data pipelines, work with big data technologies, and implement modern data architecture patterns used at companies like Netflix, Spotify, and LinkedIn.',
    level: 'Intermediate',
    category: 'Data Engineering',
    duration: '18 weeks',
    technologies: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'AWS', 'Docker', 'Terraform'],
    prerequisites: ['Python programming basics', 'SQL fundamentals', 'Basic understanding of databases'],
    learningOutcomes: [
      'Build and orchestrate complex data pipelines',
      'Work with big data technologies like Spark and Kafka',
      'Design efficient data storage and retrieval systems',
      'Implement real-time and batch data processing',
      'Deploy data infrastructure using cloud platforms',
      'Monitor and optimize data pipeline performance',
      'Apply data quality and governance principles'
    ],
    modules: [
      {
        title: 'Data Engineering Fundamentals',
        description: 'Core concepts of data engineering, ETL processes, and data pipeline architecture',
        duration: '2 weeks',
        topics: ['Data Pipeline Concepts', 'ETL vs ELT', 'Data Formats', 'Data Quality', 'Architecture Patterns'],
        resources: [
          {
            title: 'Data Engineering Explained',
            url: 'https://www.youtube.com/watch?v=qWru-b6m030',
            type: 'video',
            description: 'Introduction to data engineering concepts',
            duration: '15 minutes',
            difficulty: 'Beginner',
            estimatedTime: '30 minutes'
          },
          {
            title: 'The Fundamentals of Data Engineering',
            url: 'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/',
            type: 'book',
            description: 'Comprehensive guide to data engineering principles',
            difficulty: 'Intermediate',
            estimatedTime: '20 hours'
          },
          {
            title: 'Data Formats: JSON, Parquet, Avro',
            url: 'https://www.youtube.com/watch?v=jVCkqJGS_UM',
            type: 'video',
            description: 'Understanding different data formats and when to use them',
            duration: '45 minutes',
            difficulty: 'Beginner',
            estimatedTime: '1 hour'
          },
          {
            title: 'Data Pipeline Design Patterns',
            url: 'https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-i-4227c5c457d7',
            type: 'article',
            description: 'Common patterns in data pipeline design',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'Advanced SQL & Database Design',
        description: 'Master advanced SQL concepts and design efficient data warehouses',
        duration: '3 weeks',
        topics: ['Advanced SQL', 'Window Functions', 'Data Warehousing', 'Dimensional Modeling', 'OLAP vs OLTP'],
        resources: [
          {
            title: 'Advanced SQL Tutorial',
            url: 'https://www.youtube.com/watch?v=2Fn0WAyZV0E',
            type: 'video',
            description: 'Advanced SQL concepts including window functions and CTEs',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Data Warehouse Design Tutorial',
            url: 'https://www.youtube.com/watch?v=J326LIUrZM8',
            type: 'video',
            description: 'Learn dimensional modeling and star schema design',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          },
          {
            title: 'SQL for Data Analysis',
            url: 'https://mode.com/sql-tutorial/',
            type: 'tutorial',
            description: 'Interactive SQL tutorial focused on data analysis',
            difficulty: 'Intermediate',
            estimatedTime: '10 hours'
          },
          {
            title: 'PostgreSQL Performance Tuning',
            url: 'https://www.postgresql.org/docs/current/performance-tips.html',
            type: 'documentation',
            description: 'Optimize database queries for large datasets',
            difficulty: 'Advanced',
            estimatedTime: '5 hours'
          }
        ]
      },
      {
        title: 'Python for Data Engineering',
        description: 'Master Python libraries and frameworks essential for data engineering',
        duration: '4 weeks',
        topics: ['Pandas & NumPy', 'Data Processing', 'API Integration', 'File Handling', 'Parallel Processing'],
        resources: [
          {
            title: 'Python for Data Engineering',
            url: 'https://www.youtube.com/watch?v=DVviIWmwwPQ',
            type: 'video',
            description: 'Python essentials for data engineers',
            duration: '3 hours',
            difficulty: 'Intermediate',
            estimatedTime: '5 hours'
          },
          {
            title: 'Pandas for Data Processing',
            url: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            type: 'video',
            description: 'Complete pandas course for data manipulation',
            duration: '6 hours',
            difficulty: 'Intermediate',
            estimatedTime: '10 hours'
          },
          {
            title: 'Concurrent Programming in Python',
            url: 'https://realpython.com/python-concurrency/',
            type: 'article',
            description: 'Threading, multiprocessing, and async programming',
            difficulty: 'Advanced',
            estimatedTime: '4 hours'
          },
          {
            title: 'Working with APIs in Python',
            url: 'https://www.youtube.com/watch?v=tb8gHvYlCFs',
            type: 'video',
            description: 'Extract data from APIs using Python',
            duration: '1 hour',
            difficulty: 'Beginner',
            estimatedTime: '2 hours'
          }
        ]
      },
      {
        title: 'Apache Spark & Big Data Processing',
        description: 'Learn distributed computing with Apache Spark for large-scale data processing',
        duration: '4 weeks',
        topics: ['Spark Fundamentals', 'RDDs & DataFrames', 'Spark SQL', 'Streaming', 'Performance Tuning'],
        resources: [
          {
            title: 'Apache Spark Tutorial for Beginners',
            url: 'https://www.youtube.com/watch?v=_C8kWso4ne4',
            type: 'video',
            description: 'Complete Spark course covering core concepts',
            duration: '4 hours',
            difficulty: 'Intermediate',
            estimatedTime: '8 hours'
          },
          {
            title: 'PySpark Tutorial',
            url: 'https://www.youtube.com/watch?v=cZS5xYYIPzk',
            type: 'video',
            description: 'Apache Spark with Python',
            duration: '3 hours',
            difficulty: 'Intermediate',
            estimatedTime: '6 hours'
          },
          {
            title: 'Spark Streaming Tutorial',
            url: 'https://spark.apache.org/docs/latest/streaming-programming-guide.html',
            type: 'documentation',
            description: 'Real-time data processing with Spark',
            difficulty: 'Advanced',
            estimatedTime: '6 hours'
          },
          {
            title: 'Spark Performance Tuning',
            url: 'https://spark.apache.org/docs/latest/tuning.html',
            type: 'documentation',
            description: 'Optimize Spark applications for production',
            difficulty: 'Advanced',
            estimatedTime: '4 hours'
          }
        ]
      },
      {
        title: 'Data Pipeline Orchestration',
        description: 'Orchestrate complex data workflows using Apache Airflow and modern tools',
        duration: '3 weeks',
        topics: ['Apache Airflow', 'DAG Design', 'Task Dependencies', 'Monitoring', 'Error Handling'],
        resources: [
          {
            title: 'Apache Airflow Tutorial',
            url: 'https://www.youtube.com/watch?v=AHMm1wfGuHE',
            type: 'video',
            description: 'Complete Airflow course for beginners',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Airflow Best Practices',
            url: 'https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html',
            type: 'documentation',
            description: 'Production-ready Airflow practices',
            difficulty: 'Advanced',
            estimatedTime: '3 hours'
          },
          {
            title: 'Modern Data Stack with dbt',
            url: 'https://www.youtube.com/watch?v=M8oi7nSaWps',
            type: 'video',
            description: 'Data transformation with dbt',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          },
          {
            title: 'Prefect vs Airflow Comparison',
            url: 'https://medium.com/the-prefect-blog/why-we-built-prefect-the-modern-data-stack-needs-a-new-workflow-engine-5bb2ce3c4e73',
            type: 'article',
            description: 'Modern workflow orchestration tools',
            difficulty: 'Intermediate',
            estimatedTime: '1 hour'
          }
        ]
      },
      {
        title: 'Cloud Data Platforms',
        description: 'Deploy and manage data infrastructure on AWS, Azure, and GCP',
        duration: '2 weeks',
        topics: ['AWS Data Services', 'Infrastructure as Code', 'Data Security', 'Cost Optimization', 'Monitoring'],
        resources: [
          {
            title: 'AWS Data Engineering Services',
            url: 'https://www.youtube.com/watch?v=J1BVb1ZOMLw',
            type: 'video',
            description: 'Overview of AWS services for data engineering',
            duration: '1 hour',
            difficulty: 'Intermediate',
            estimatedTime: '2 hours'
          },
          {
            title: 'Terraform for AWS',
            url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
            type: 'video',
            description: 'Infrastructure as code with Terraform',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Data Lake vs Data Warehouse',
            url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/',
            type: 'article',
            description: 'Understanding modern data architecture patterns',
            difficulty: 'Beginner',
            estimatedTime: '1 hour'
          },
          {
            title: 'AWS Cost Optimization for Data Workloads',
            url: 'https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/cost-optimization.html',
            type: 'documentation',
            description: 'Optimize costs for data infrastructure',
            difficulty: 'Advanced',
            estimatedTime: '2 hours'
          }
        ]
      }
    ],
    projects: [
      {
        title: 'End-to-End Data Pipeline',
        description: 'Build a complete data pipeline from ingestion to visualization using modern tools',
        difficulty: 'Medium',
        technologies: ['Python', 'Airflow', 'PostgreSQL', 'Docker', 'Grafana']
      },
      {
        title: 'Real-time Analytics Platform',
        description: 'Process streaming data and provide real-time insights using Kafka and Spark',
        difficulty: 'Hard',
        technologies: ['Kafka', 'Spark Streaming', 'Redis', 'Elasticsearch', 'Kibana']
      },
      {
        title: 'Data Lake Architecture',
        description: 'Design and implement a scalable data lake on AWS with proper governance',
        difficulty: 'Hard',
        technologies: ['AWS S3', 'AWS Glue', 'Apache Spark', 'Terraform', 'dbt']
      }
    ],
    instructor: {
      name: 'David Kim',
      bio: 'Senior Data Engineer at Netflix with expertise in large-scale data processing and analytics',
      socialLinks: {
        github: 'https://github.com/davidkim-data',
        linkedin: 'https://linkedin.com/in/david-kim-data-engineer'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.7, count: 156 },
    enrollmentCount: 987,
    tags: ['data engineering', 'python', 'spark', 'airflow', 'aws', 'big data', 'internship prep']
  },
  {
    title: 'AI Engineer Roadmap',
    shortDescription: 'Complete pathway to become an AI engineer with LLMs, computer vision, and MLOps',
    description: 'Cutting-edge AI engineering roadmap covering machine learning, deep learning, large language models, and production AI systems. Perfect for students targeting AI engineer roles at OpenAI, Google DeepMind, and other AI-focused companies.',
    level: 'Advanced',
    category: 'AI/ML',
    duration: '20 weeks',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'Docker', 'Kubernetes', 'MLflow', 'FastAPI'],
    prerequisites: ['Python programming', 'Linear algebra', 'Statistics', 'Machine learning basics'],
    learningOutcomes: [
      'Build and fine-tune large language models',
      'Implement computer vision solutions with deep learning',
      'Deploy AI models at scale using MLOps practices',
      'Create conversational AI and chatbot systems',
      'Optimize model performance and inference speed',
      'Build end-to-end AI applications and APIs',
      'Understand cutting-edge AI research and implementations'
    ],
    modules: [
      {
        title: 'Deep Learning Fundamentals',
        description: 'Master neural networks, backpropagation, and optimization techniques',
        duration: '4 weeks',
        topics: ['Neural Networks', 'Backpropagation', 'Optimization Algorithms', 'Regularization', 'Architecture Design'],
        resources: [
          {
            title: 'Deep Learning Specialization - Andrew Ng',
            url: 'https://www.coursera.org/specializations/deep-learning',
            type: 'tutorial',
            description: 'Comprehensive deep learning course by Andrew Ng',
            difficulty: 'Intermediate',
            estimatedTime: '40 hours'
          },
          {
            title: 'PyTorch for Deep Learning',
            url: 'https://www.youtube.com/watch?v=Z_ikDlimN6A',
            type: 'video',
            description: 'Complete PyTorch course for deep learning',
            duration: '25 hours',
            difficulty: 'Intermediate',
            estimatedTime: '30 hours'
          },
          {
            title: 'Neural Networks from Scratch',
            url: 'https://www.youtube.com/watch?v=Wo5dMEP_BbI',
            type: 'video',
            description: 'Build neural networks from scratch to understand fundamentals',
            duration: '4 hours',
            difficulty: 'Advanced',
            estimatedTime: '8 hours'
          },
          {
            title: 'Deep Learning Book - Ian Goodfellow',
            url: 'https://www.deeplearningbook.org/',
            type: 'book',
            description: 'Comprehensive theoretical foundation of deep learning',
            difficulty: 'Advanced',
            estimatedTime: '80 hours'
          }
        ]
      },
      {
        title: 'Computer Vision & CNNs',
        description: 'Build computer vision systems using convolutional neural networks',
        duration: '4 weeks',
        topics: ['CNNs', 'Image Classification', 'Object Detection', 'Segmentation', 'Transfer Learning'],
        resources: [
          {
            title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
            url: 'http://cs231n.stanford.edu/',
            type: 'tutorial',
            description: 'Stanford\'s computer vision course',
            difficulty: 'Advanced',
            estimatedTime: '60 hours'
          },
          {
            title: 'Computer Vision with PyTorch',
            url: 'https://www.youtube.com/watch?v=GIsg-ZUy0MY',
            type: 'video',
            description: 'Practical computer vision with modern frameworks',
            duration: '6 hours',
            difficulty: 'Intermediate',
            estimatedTime: '10 hours'
          },
          {
            title: 'YOLO Object Detection',
            url: 'https://www.youtube.com/watch?v=Grir6TZbc1M',
            type: 'video',
            description: 'Implement real-time object detection',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'OpenCV Python Tutorial',
            url: 'https://www.youtube.com/watch?v=kdLM6AOd2vc',
            type: 'video',
            description: 'Computer vision with OpenCV',
            duration: '4 hours',
            difficulty: 'Beginner',
            estimatedTime: '6 hours'
          }
        ]
      },
      {
        title: 'Natural Language Processing & Transformers',
        description: 'Master NLP techniques and transformer architectures for language understanding',
        duration: '5 weeks',
        topics: ['NLP Fundamentals', 'Transformers', 'BERT', 'GPT', 'Fine-tuning', 'Text Generation'],
        resources: [
          {
            title: 'NLP with Transformers Course',
            url: 'https://huggingface.co/course/chapter1/1',
            type: 'tutorial',
            description: 'Official Hugging Face transformers course',
            difficulty: 'Intermediate',
            estimatedTime: '30 hours'
          },
          {
            title: 'CS224N: Natural Language Processing with Deep Learning',
            url: 'http://web.stanford.edu/class/cs224n/',
            type: 'tutorial',
            description: 'Stanford\'s NLP course',
            difficulty: 'Advanced',
            estimatedTime: '50 hours'
          },
          {
            title: 'Attention Is All You Need - Paper Explanation',
            url: 'https://www.youtube.com/watch?v=iDulhoQ2pro',
            type: 'video',
            description: 'Understanding the transformer architecture',
            duration: '1 hour',
            difficulty: 'Advanced',
            estimatedTime: '3 hours'
          },
          {
            title: 'Fine-tuning GPT Models',
            url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
            type: 'video',
            description: 'Fine-tune large language models for specific tasks',
            duration: '2 hours',
            difficulty: 'Advanced',
            estimatedTime: '6 hours'
          },
          {
            title: 'Building Chatbots with LangChain',
            url: 'https://www.youtube.com/watch?v=MlK6SIjcjE8',
            type: 'video',
            description: 'Create conversational AI applications',
            duration: '3 hours',
            difficulty: 'Intermediate',
            estimatedTime: '6 hours'
          }
        ]
      },
      {
        title: 'Large Language Models & LLMOps',
        description: 'Work with state-of-the-art language models and deploy them in production',
        duration: '4 weeks',
        topics: ['LLM Architecture', 'Prompt Engineering', 'Model Deployment', 'Vector Databases', 'RAG Systems'],
        resources: [
          {
            title: 'LLM Engineering Course',
            url: 'https://www.youtube.com/watch?v=T-D1OfcDW1M',
            type: 'video',
            description: 'Engineering practices for large language models',
            duration: '8 hours',
            difficulty: 'Advanced',
            estimatedTime: '15 hours'
          },
          {
            title: 'Prompt Engineering Guide',
            url: 'https://www.promptingguide.ai/',
            type: 'tutorial',
            description: 'Master prompt engineering techniques',
            difficulty: 'Intermediate',
            estimatedTime: '10 hours'
          },
          {
            title: 'Vector Databases for AI',
            url: 'https://www.youtube.com/watch?v=klTvEwg3oJ4',
            type: 'video',
            description: 'Build AI applications with vector databases',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Building RAG Systems',
            url: 'https://www.youtube.com/watch?v=tcqEUSNCn8I',
            type: 'video',
            description: 'Retrieval-Augmented Generation for AI applications',
            duration: '1.5 hours',
            difficulty: 'Advanced',
            estimatedTime: '4 hours'
          }
        ]
      },
      {
        title: 'MLOps & Production AI',
        description: 'Deploy, monitor, and scale AI models in production environments',
        duration: '3 weeks',
        topics: ['Model Deployment', 'Container Orchestration', 'Model Monitoring', 'A/B Testing', 'CI/CD for ML'],
        resources: [
          {
            title: 'MLOps Course - Made with ML',
            url: 'https://madewithml.com/#mlops',
            type: 'tutorial',
            description: 'Complete MLOps course covering production ML',
            difficulty: 'Advanced',
            estimatedTime: '40 hours'
          },
          {
            title: 'Deploying ML Models with FastAPI',
            url: 'https://www.youtube.com/watch?v=Nh64d7T6Uxo',
            type: 'video',
            description: 'Build production-ready ML APIs',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '4 hours'
          },
          {
            title: 'Kubernetes for Machine Learning',
            url: 'https://www.youtube.com/watch?v=cD2bFJuPVeY',
            type: 'video',
            description: 'Scale ML workloads with Kubernetes',
            duration: '3 hours',
            difficulty: 'Advanced',
            estimatedTime: '8 hours'
          },
          {
            title: 'Model Monitoring and Drift Detection',
            url: 'https://www.youtube.com/watch?v=QcJpYOGbL14',
            type: 'video',
            description: 'Monitor ML models in production',
            duration: '1 hour',
            difficulty: 'Advanced',
            estimatedTime: '3 hours'
          }
        ]
      }
    ],
    projects: [
      {
        title: 'AI-Powered Chatbot',
        description: 'Build an intelligent chatbot using LLMs with context awareness and memory',
        difficulty: 'Hard',
        technologies: ['Python', 'Transformers', 'LangChain', 'Vector DB', 'FastAPI']
      },
      {
        title: 'Computer Vision Pipeline',
        description: 'Create an end-to-end computer vision system for real-time object detection and tracking',
        difficulty: 'Hard',
        technologies: ['PyTorch', 'OpenCV', 'YOLO', 'Docker', 'Kubernetes']
      },
      {
        title: 'Production LLM Application',
        description: 'Deploy a large language model with proper monitoring, scaling, and cost optimization',
        difficulty: 'Hard',
        technologies: ['PyTorch', 'FastAPI', 'Docker', 'Kubernetes', 'MLflow']
      }
    ],
    instructor: {
      name: 'Dr. Sarah Chen',
      bio: 'AI Research Engineer with PhD in Computer Science, previously at OpenAI and Google Research',
      socialLinks: {
        github: 'https://github.com/sarahchen-ai',
        linkedin: 'https://linkedin.com/in/sarah-chen-ai-researcher'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 89 },
    enrollmentCount: 654,
    tags: ['ai engineering', 'machine learning', 'deep learning', 'llm', 'pytorch', 'internship prep']
  }
];

module.exports = { techRoadmaps };
