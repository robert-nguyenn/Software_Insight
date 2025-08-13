// Frontend Development Roadmap
const frontendRoadmap = {
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
    },
    {
      title: 'JavaScript Basics',
      description: 'Programming fundamentals with JavaScript',
      duration: '4 hours',
      topics: ['Variables', 'Functions', 'DOM manipulation', 'Event handling'],
      resources: [
        {
          title: 'JavaScript Tutorial',
          url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
          type: 'video',
          description: 'Complete JavaScript course',
          duration: '3 hours',
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
};

// Backend Development Roadmap
const backendRoadmap = {
  title: 'Backend Development Mastery',
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
    },
    {
      title: 'Node.js Basics',
      description: 'Introduction to Node.js runtime',
      duration: '3 hours',
      topics: ['Node.js fundamentals', 'NPM packages', 'File system operations'],
      resources: [
        {
          title: 'Node.js Tutorial',
          url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
          type: 'video',
          description: 'Complete Node.js course',
          duration: '2 hours',
          difficulty: 'Intermediate',
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
};

// Full Stack Development Roadmap
const fullStackRoadmap = {
  title: 'Full Stack Web Development',
  description: 'Complete web development course covering both frontend and backend technologies. Master the MERN stack and build production-ready applications.',
  shortDescription: 'Complete web development with MERN stack (MongoDB, Express, React, Node.js).',
  level: 'Intermediate',
  category: 'Full Stack Development',
  duration: '8-12 months',
  technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
  prerequisites: ['Basic HTML, CSS, JavaScript', 'Programming fundamentals'],
  learningOutcomes: [
    'Build full-stack web applications',
    'Master the MERN stack',
    'Implement user authentication and authorization',
    'Deploy applications to production'
  ],
  modules: [
    {
      title: 'Frontend with React',
      description: 'Building modern UIs with React',
      duration: '8 hours',
      topics: ['React components', 'State management', 'Hooks', 'Routing'],
      resources: [
        {
          title: 'React Complete Guide',
          url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
          type: 'video',
          description: 'Master React from basics to advanced',
          duration: '6 hours',
          difficulty: 'Intermediate',
          isRequired: true
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Social Media App',
      description: 'Build a complete social media application with React and Node.js',
      difficulty: 'Expert',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io']
    }
  ],
  instructor: {
    name: 'Full Stack Pro',
    bio: 'Full Stack Developer and Technical Lead',
    avatar: '/images/instructor2.jpg'
  },
  thumbnail: '/images/fullstack.jpg',
  featured: true,
  price: 0,
  rating: {
    average: 4.9,
    count: 145
  },
  enrollmentCount: 567,
  isPublished: true,
  tags: ['react', 'nodejs', 'mongodb', 'fullstack', 'mern']
};

// Machine Learning Roadmap
const machineLearningRoadmap = {
  title: 'Machine Learning & AI',
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
};

// Data Engineering Roadmap
const dataEngineeringRoadmap = {
  title: 'Data Engineering Pipeline',
  description: 'Build robust data pipelines and infrastructure for big data processing. Learn Apache Spark, SQL, and cloud technologies.',
  shortDescription: 'Build data pipelines with Apache Spark, SQL, and cloud technologies.',
  level: 'Advanced',
  category: 'Data Engineering',
  duration: '6-8 months',
  technologies: ['Python', 'SQL', 'Apache Spark', 'AWS', 'Docker'],
  prerequisites: ['Python programming', 'SQL basics', 'Database concepts'],
  learningOutcomes: [
    'Design and build data pipelines',
    'Work with big data technologies',
    'Implement ETL processes',
    'Deploy data solutions to cloud platforms'
  ],
  modules: [
    {
      title: 'Data Engineering Basics',
      description: 'Introduction to data engineering concepts',
      duration: '2 hours',
      topics: ['Data pipelines', 'ETL vs ELT', 'Data warehousing'],
      resources: [
        {
          title: 'Data Engineering 101',
          url: 'https://www.youtube.com/watch?v=qWru-b6m030',
          type: 'video',
          description: 'Introduction to data engineering',
          duration: '1 hour',
          difficulty: 'Beginner',
          isRequired: true
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Real-time Data Pipeline',
      description: 'Build a real-time data processing pipeline with Apache Spark',
      difficulty: 'Expert',
      technologies: ['Apache Spark', 'Kafka', 'Python', 'AWS']
    }
  ],
  instructor: {
    name: 'Data Engineer Pro',
    bio: 'Senior Data Engineer at Netflix',
    avatar: '/images/data_instructor.jpg'
  },
  thumbnail: '/images/dataeng.jpg',
  featured: false,
  price: 0,
  rating: {
    average: 4.6,
    count: 98
  },
  enrollmentCount: 423,
  isPublished: true,
  tags: ['python', 'sql', 'spark', 'data-engineering', 'etl']
};

// AI Engineering Roadmap
const aiEngineeringRoadmap = {
  title: 'AI Engineering & MLOps',
  description: 'Build and deploy AI applications in production environments. Learn MLOps, model deployment, and AI system architecture.',
  shortDescription: 'Build and deploy AI applications with MLOps and production best practices.',
  level: 'Advanced',
  category: 'Artificial Intelligence',
  duration: '8-10 months',
  technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'MLFlow'],
  prerequisites: ['Machine learning basics', 'Python programming', 'Cloud platforms'],
  learningOutcomes: [
    'Design AI system architecture',
    'Implement MLOps practices',
    'Deploy AI models at scale',
    'Monitor and maintain AI systems'
  ],
  modules: [
    {
      title: 'AI Engineering Fundamentals',
      description: 'Core concepts of AI engineering',
      duration: '3 hours',
      topics: ['AI system design', 'Model lifecycle', 'Production considerations'],
      resources: [
        {
          title: 'AI Engineering Basics',
          url: 'https://www.youtube.com/watch?v=21EiKfQYZXc',
          type: 'video',
          description: 'Introduction to AI engineering',
          duration: '2 hours',
          difficulty: 'Advanced',
          isRequired: true
        }
      ]
    }
  ],
  projects: [
    {
      title: 'AI-Powered Recommendation System',
      description: 'Build and deploy a scalable recommendation system',
      difficulty: 'Expert',
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Redis', 'FastAPI']
    }
  ],
  instructor: {
    name: 'AI Solutions Architect',
    bio: 'AI Engineering Lead at OpenAI',
    avatar: '/images/ai_eng_instructor.jpg'
  },
  thumbnail: '/images/aieng.jpg',
  featured: false,
  price: 0,
  rating: {
    average: 4.9,
    count: 67
  },
  enrollmentCount: 312,
  isPublished: true,
  tags: ['ai', 'mlops', 'tensorflow', 'pytorch', 'deployment']
};

module.exports = {
  frontendRoadmap,
  backendRoadmap,
  fullStackRoadmap,
  machineLearningRoadmap,
  dataEngineeringRoadmap,
  aiEngineeringRoadmap
};