// Comprehensive courses collection with detailed content and pricing
const comprehensiveCourses = [
  // Frontend Development Courses
  {
    title: 'Advanced React Development with TypeScript',
    shortDescription: 'Master modern React patterns, hooks, and TypeScript for scalable frontend applications',
    description: 'Dive deep into advanced React concepts including custom hooks, context patterns, performance optimization, and TypeScript integration. Build production-ready applications with modern tooling and best practices.',
    level: 'Advanced',
    category: 'Frontend Development',
    duration: '16 weeks',
    price: 349,
    originalPrice: 449,
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Query', 'Testing Library', 'Webpack'],
    prerequisites: ['Solid JavaScript knowledge', 'Basic React experience', 'HTML/CSS proficiency'],
    learningOutcomes: [
      'Build complex React applications with TypeScript',
      'Implement advanced state management patterns',
      'Optimize React application performance',
      'Write comprehensive tests for React components',
      'Deploy applications with CI/CD pipelines',
      'Debug and profile React applications'
    ],
    modules: [
      {
        title: 'TypeScript Fundamentals for React',
        description: 'Master TypeScript concepts essential for React development',
        duration: '2 weeks',
        topics: ['Type annotations', 'Interfaces and types', 'Generics', 'React component typing'],
        resources: [
          {
            title: 'TypeScript for React Developers',
            url: 'https://www.youtube.com/watch?v=NjN00cM18Z4',
            type: 'video',
            description: 'Comprehensive TypeScript tutorial for React',
            duration: '4 hours',
            difficulty: 'Intermediate',
            estimatedTime: '6 hours'
          }
        ]
      },
      {
        title: 'Advanced React Patterns',
        description: 'Learn compound components, render props, and custom hooks',
        duration: '3 weeks',
        topics: ['Compound components', 'Render props', 'Higher-order components', 'Custom hooks'],
        resources: []
      },
      {
        title: 'State Management with Redux Toolkit',
        description: 'Modern Redux patterns with RTK Query',
        duration: '3 weeks',
        topics: ['Redux Toolkit setup', 'RTK Query', 'Async thunks', 'Redux DevTools'],
        resources: []
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize React applications for production',
        duration: '2 weeks',
        topics: ['React.memo', 'useMemo and useCallback', 'Code splitting', 'Bundle analysis'],
        resources: []
      },
      {
        title: 'Testing React Applications',
        description: 'Comprehensive testing strategies',
        duration: '3 weeks',
        topics: ['Unit testing', 'Integration testing', 'E2E testing', 'Test-driven development'],
        resources: []
      },
      {
        title: 'Production Deployment',
        description: 'Deploy and monitor React applications',
        duration: '3 weeks',
        topics: ['CI/CD pipelines', 'Performance monitoring', 'Error tracking', 'SEO optimization'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'E-commerce Dashboard',
        description: 'Build a complex admin dashboard with real-time data',
        difficulty: 'Hard',
        technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js']
      },
      {
        title: 'Social Media Platform',
        description: 'Create a full-featured social media application',
        difficulty: 'Expert',
        technologies: ['React', 'TypeScript', 'WebSockets', 'PWA']
      }
    ],
    instructor: {
      name: 'Sarah Chen',
      bio: 'Senior Frontend Engineer at Meta with 8+ years React experience',
      socialLinks: {
        github: 'https://github.com/sarah-chen',
        linkedin: 'https://linkedin.com/in/sarah-chen-react'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 312 },
    enrollmentCount: 1850,
    tags: ['react', 'typescript', 'frontend', 'advanced', 'redux', 'testing']
  },

  {
    title: 'Vue.js 3 Composition API Masterclass',
    shortDescription: 'Learn Vue.js 3 with Composition API, Pinia, and modern development practices',
    description: 'Master Vue.js 3 from basics to advanced concepts including Composition API, reactive systems, Pinia state management, and building production-ready applications.',
    level: 'Intermediate',
    category: 'Frontend Development',
    duration: '12 weeks',
    price: 279,
    originalPrice: 349,
    technologies: ['Vue.js 3', 'Composition API', 'Pinia', 'Vue Router', 'Vite', 'TypeScript'],
    prerequisites: ['JavaScript ES6+', 'Basic HTML/CSS', 'Node.js basics'],
    learningOutcomes: [
      'Build modern Vue.js 3 applications',
      'Master Composition API patterns',
      'Implement state management with Pinia',
      'Create reusable composables',
      'Build and deploy Vue applications',
      'Test Vue.js components effectively'
    ],
    modules: [
      {
        title: 'Vue.js 3 Fundamentals',
        description: 'Core concepts and reactive system',
        duration: '3 weeks',
        topics: ['Reactive data', 'Template syntax', 'Component composition', 'Event handling'],
        resources: []
      },
      {
        title: 'Composition API Deep Dive',
        description: 'Advanced Composition API patterns',
        duration: '3 weeks',
        topics: ['setup() function', 'Reactivity APIs', 'Lifecycle hooks', 'Custom composables'],
        resources: []
      },
      {
        title: 'State Management with Pinia',
        description: 'Modern state management patterns',
        duration: '2 weeks',
        topics: ['Store setup', 'Actions and getters', 'Store composition', 'DevTools integration'],
        resources: []
      },
      {
        title: 'Vue Router and Navigation',
        description: 'Client-side routing and navigation guards',
        duration: '2 weeks',
        topics: ['Route configuration', 'Navigation guards', 'Dynamic routing', 'Lazy loading'],
        resources: []
      },
      {
        title: 'Testing and Deployment',
        description: 'Testing strategies and production deployment',
        duration: '2 weeks',
        topics: ['Unit testing', 'Component testing', 'Build optimization', 'Deployment strategies'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Task Management App',
        description: 'Build a collaborative task management application',
        difficulty: 'Medium',
        technologies: ['Vue.js 3', 'Pinia', 'Vue Router']
      }
    ],
    instructor: {
      name: 'Marcus Rodriguez',
      bio: 'Vue.js Core Team member and Senior Frontend Developer',
      socialLinks: {
        github: 'https://github.com/marcus-vue',
        twitter: 'https://twitter.com/marcus_vue'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.7, count: 189 },
    enrollmentCount: 943,
    tags: ['vue', 'composition-api', 'pinia', 'frontend', 'javascript']
  },

  // Backend Development Courses
  {
    title: 'Node.js Microservices Architecture',
    shortDescription: 'Build scalable microservices with Node.js, Docker, and Kubernetes',
    description: 'Learn to design and implement microservices architecture using Node.js, Express, Docker containers, Kubernetes orchestration, and modern DevOps practices for enterprise-scale applications.',
    level: 'Advanced',
    category: 'Backend Development',
    duration: '20 weeks',
    price: 449,
    originalPrice: 599,
    technologies: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'MongoDB', 'Redis', 'RabbitMQ', 'GraphQL'],
    prerequisites: ['Strong Node.js experience', 'Database knowledge', 'Linux basics', 'Git proficiency'],
    learningOutcomes: [
      'Design microservices architecture',
      'Implement service communication patterns',
      'Deploy with Docker and Kubernetes',
      'Monitor and scale microservices',
      'Implement security best practices',
      'Handle distributed system challenges'
    ],
    modules: [
      {
        title: 'Microservices Fundamentals',
        description: 'Understanding microservices patterns and principles',
        duration: '3 weeks',
        topics: ['Service decomposition', 'Communication patterns', 'Data management', 'Design principles'],
        resources: []
      },
      {
        title: 'Building Services with Node.js',
        description: 'Creating robust Node.js services',
        duration: '4 weeks',
        topics: ['Service structure', 'API design', 'Error handling', 'Logging and monitoring'],
        resources: []
      },
      {
        title: 'Service Communication',
        description: 'Inter-service communication strategies',
        duration: '3 weeks',
        topics: ['REST APIs', 'GraphQL federation', 'Message queues', 'Event sourcing'],
        resources: []
      },
      {
        title: 'Containerization with Docker',
        description: 'Containerizing microservices',
        duration: '3 weeks',
        topics: ['Docker fundamentals', 'Multi-stage builds', 'Docker Compose', 'Registry management'],
        resources: []
      },
      {
        title: 'Kubernetes Orchestration',
        description: 'Deploying and managing services in Kubernetes',
        duration: '4 weeks',
        topics: ['Kubernetes basics', 'Deployments and services', 'ConfigMaps and secrets', 'Monitoring'],
        resources: []
      },
      {
        title: 'Production Considerations',
        description: 'Security, monitoring, and scalability',
        duration: '3 weeks',
        topics: ['Security patterns', 'Observability', 'Auto-scaling', 'Disaster recovery'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'E-commerce Microservices',
        description: 'Build a complete e-commerce platform with microservices',
        difficulty: 'Expert',
        technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis']
      }
    ],
    instructor: {
      name: 'David Kumar',
      bio: 'Principal Engineer at Netflix, Microservices Architecture Expert',
      socialLinks: {
        github: 'https://github.com/david-microservices',
        linkedin: 'https://linkedin.com/in/david-kumar-backend'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 267 },
    enrollmentCount: 1234,
    tags: ['nodejs', 'microservices', 'docker', 'kubernetes', 'backend', 'advanced']
  },

  {
    title: 'Python Django REST Framework Mastery',
    shortDescription: 'Build powerful REST APIs with Django, PostgreSQL, and modern Python practices',
    description: 'Master Django REST Framework to build scalable, secure APIs. Learn advanced Django patterns, database optimization, caching, authentication, and deployment strategies.',
    level: 'Intermediate',
    category: 'Backend Development',
    duration: '14 weeks',
    price: 329,
    originalPrice: 429,
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    prerequisites: ['Python fundamentals', 'Basic Django knowledge', 'SQL basics', 'HTTP concepts'],
    learningOutcomes: [
      'Build complex REST APIs with Django',
      'Implement authentication and authorization',
      'Optimize database queries and performance',
      'Handle background tasks with Celery',
      'Deploy Django applications to production',
      'Write comprehensive API tests'
    ],
    modules: [
      {
        title: 'Django REST Framework Basics',
        description: 'Core concepts and serializers',
        duration: '3 weeks',
        topics: ['Serializers', 'ViewSets', 'URL routing', 'Request/Response cycle'],
        resources: []
      },
      {
        title: 'Authentication and Permissions',
        description: 'Securing your APIs',
        duration: '2 weeks',
        topics: ['Token authentication', 'JWT tokens', 'Custom permissions', 'OAuth integration'],
        resources: []
      },
      {
        title: 'Advanced API Patterns',
        description: 'Complex API design patterns',
        duration: '3 weeks',
        topics: ['Filtering and pagination', 'Nested serializers', 'Custom fields', 'API versioning'],
        resources: []
      },
      {
        title: 'Database Optimization',
        description: 'Performance and scaling',
        duration: '2 weeks',
        topics: ['Query optimization', 'Database indexing', 'Connection pooling', 'Caching strategies'],
        resources: []
      },
      {
        title: 'Background Tasks and Queues',
        description: 'Asynchronous processing',
        duration: '2 weeks',
        topics: ['Celery setup', 'Task queues', 'Periodic tasks', 'Task monitoring'],
        resources: []
      },
      {
        title: 'Testing and Deployment',
        description: 'Production-ready applications',
        duration: '2 weeks',
        topics: ['API testing', 'Performance testing', 'Docker deployment', 'CI/CD pipelines'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Social Media API',
        description: 'Build a complete social media backend API',
        difficulty: 'Hard',
        technologies: ['Django', 'PostgreSQL', 'Redis', 'Celery']
      }
    ],
    instructor: {
      name: 'Elena Popov',
      bio: 'Senior Backend Engineer at Instagram, Django contributor',
      socialLinks: {
        github: 'https://github.com/elena-django',
        linkedin: 'https://linkedin.com/in/elena-popov-python'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.6, count: 198 },
    enrollmentCount: 876,
    tags: ['python', 'django', 'rest-api', 'backend', 'postgresql']
  },

  // Mobile Development Courses
  {
    title: 'React Native Cross-Platform Development',
    shortDescription: 'Build native iOS and Android apps with React Native and modern tooling',
    description: 'Learn to develop cross-platform mobile applications using React Native, Expo, and native modules. Master navigation, state management, and platform-specific features.',
    level: 'Intermediate',
    category: 'Mobile Development',
    duration: '16 weeks',
    price: 379,
    originalPrice: 479,
    technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'React Navigation', 'Firebase'],
    prerequisites: ['React knowledge', 'JavaScript ES6+', 'Mobile development basics'],
    learningOutcomes: [
      'Build cross-platform mobile applications',
      'Implement native device features',
      'Optimize app performance',
      'Publish apps to app stores',
      'Handle offline functionality',
      'Integrate with backend services'
    ],
    modules: [
      {
        title: 'React Native Fundamentals',
        description: 'Core concepts and components',
        duration: '3 weeks',
        topics: ['Components and styling', 'Platform differences', 'Debugging tools', 'Development workflow'],
        resources: []
      },
      {
        title: 'Navigation and Routing',
        description: 'App navigation patterns',
        duration: '2 weeks',
        topics: ['Stack navigation', 'Tab navigation', 'Drawer navigation', 'Deep linking'],
        resources: []
      },
      {
        title: 'State Management',
        description: 'Managing application state',
        duration: '3 weeks',
        topics: ['Context API', 'Redux setup', 'Async actions', 'Persistence'],
        resources: []
      },
      {
        title: 'Native Features Integration',
        description: 'Accessing device capabilities',
        duration: '3 weeks',
        topics: ['Camera and gallery', 'Geolocation', 'Push notifications', 'Biometric authentication'],
        resources: []
      },
      {
        title: 'Performance Optimization',
        description: 'Optimizing app performance',
        duration: '2 weeks',
        topics: ['List optimization', 'Image handling', 'Memory management', 'Bundle size'],
        resources: []
      },
      {
        title: 'Deployment and Distribution',
        description: 'Publishing to app stores',
        duration: '3 weeks',
        topics: ['Build processes', 'App Store guidelines', 'Code signing', 'Over-the-air updates'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Fitness Tracking App',
        description: 'Build a comprehensive fitness tracking mobile app',
        difficulty: 'Hard',
        technologies: ['React Native', 'Firebase', 'Maps', 'Health APIs']
      }
    ],
    instructor: {
      name: 'James Wilson',
      bio: 'Mobile Engineering Lead at Airbnb, React Native expert',
      socialLinks: {
        github: 'https://github.com/james-rn',
        linkedin: 'https://linkedin.com/in/james-wilson-mobile'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.7, count: 234 },
    enrollmentCount: 1567,
    tags: ['react-native', 'mobile', 'cross-platform', 'ios', 'android']
  },

  {
    title: 'iOS Development with Swift and SwiftUI',
    shortDescription: 'Master native iOS development with Swift, SwiftUI, and iOS frameworks',
    description: 'Learn native iOS development from fundamentals to advanced concepts. Build modern iOS apps with SwiftUI, Core Data, networking, and iOS-specific features.',
    level: 'Beginner',
    category: 'Mobile Development',
    duration: '18 weeks',
    price: 399,
    originalPrice: 499,
    technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'CloudKit', 'Combine'],
    prerequisites: ['Basic programming knowledge', 'Mac computer with Xcode'],
    learningOutcomes: [
      'Build native iOS applications',
      'Master SwiftUI framework',
      'Implement data persistence',
      'Integrate with iOS frameworks',
      'Handle app lifecycle and memory',
      'Publish apps to App Store'
    ],
    modules: [
      {
        title: 'Swift Programming Language',
        description: 'Swift fundamentals and advanced features',
        duration: '4 weeks',
        topics: ['Swift syntax', 'Optionals', 'Protocols', 'Generics', 'Memory management'],
        resources: []
      },
      {
        title: 'SwiftUI Fundamentals',
        description: 'Modern iOS UI development',
        duration: '4 weeks',
        topics: ['Views and modifiers', 'State management', 'Navigation', 'Animations'],
        resources: []
      },
      {
        title: 'Data and Networking',
        description: 'Handling data in iOS apps',
        duration: '3 weeks',
        topics: ['Core Data', 'CloudKit', 'URLSession', 'JSON parsing'],
        resources: []
      },
      {
        title: 'iOS Frameworks Integration',
        description: 'Working with iOS system frameworks',
        duration: '3 weeks',
        topics: ['MapKit', 'AVFoundation', 'Photos framework', 'HealthKit'],
        resources: []
      },
      {
        title: 'Advanced iOS Features',
        description: 'Push notifications, background tasks, and more',
        duration: '2 weeks',
        topics: ['Push notifications', 'Background processing', 'App extensions', 'Widgets'],
        resources: []
      },
      {
        title: 'App Store Deployment',
        description: 'Publishing and maintaining iOS apps',
        duration: '2 weeks',
        topics: ['App Store Connect', 'TestFlight', 'App review process', 'Analytics'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Weather App with Widgets',
        description: 'Build a feature-rich weather application',
        difficulty: 'Medium',
        technologies: ['SwiftUI', 'Core Location', 'Widgets', 'Core Data']
      }
    ],
    instructor: {
      name: 'Rachel Kim',
      bio: 'iOS Engineering Manager at Apple, Former Uber iOS Lead',
      socialLinks: {
        github: 'https://github.com/rachel-ios',
        linkedin: 'https://linkedin.com/in/rachel-kim-ios'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.8, count: 156 },
    enrollmentCount: 678,
    tags: ['swift', 'swiftui', 'ios', 'mobile', 'native']
  },

  // Data Science & Analytics
  {
    title: 'Machine Learning Engineering with Python',
    shortDescription: 'Production-ready ML systems with MLOps, deployment, and monitoring',
    description: 'Learn to build, deploy, and maintain machine learning systems in production. Cover MLOps practices, model serving, monitoring, and scaling ML applications.',
    level: 'Advanced',
    category: 'Data Science',
    duration: '22 weeks',
    price: 499,
    originalPrice: 649,
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'MLflow', 'Apache Airflow'],
    prerequisites: ['Python proficiency', 'Machine learning basics', 'Statistics knowledge', 'SQL experience'],
    learningOutcomes: [
      'Build production ML pipelines',
      'Deploy models at scale',
      'Implement MLOps practices',
      'Monitor model performance',
      'Handle model versioning',
      'Optimize ML infrastructure'
    ],
    modules: [
      {
        title: 'ML Engineering Fundamentals',
        description: 'Principles of production ML systems',
        duration: '3 weeks',
        topics: ['ML system design', 'Data pipelines', 'Model lifecycle', 'Production challenges'],
        resources: []
      },
      {
        title: 'Advanced Model Development',
        description: 'Building robust ML models',
        duration: '4 weeks',
        topics: ['Feature engineering', 'Model selection', 'Hyperparameter tuning', 'Cross-validation'],
        resources: []
      },
      {
        title: 'MLOps and Model Management',
        description: 'Managing ML workflows',
        duration: '4 weeks',
        topics: ['MLflow tracking', 'Model registry', 'Experiment management', 'CI/CD for ML'],
        resources: []
      },
      {
        title: 'Model Deployment Strategies',
        description: 'Serving models in production',
        duration: '4 weeks',
        topics: ['REST APIs', 'Batch processing', 'Real-time inference', 'Edge deployment'],
        resources: []
      },
      {
        title: 'Monitoring and Maintenance',
        description: 'Production model monitoring',
        duration: '3 weeks',
        topics: ['Data drift detection', 'Model performance monitoring', 'A/B testing', 'Retraining strategies'],
        resources: []
      },
      {
        title: 'Scaling ML Systems',
        description: 'Large-scale ML infrastructure',
        duration: '4 weeks',
        topics: ['Distributed training', 'Model serving at scale', 'Resource optimization', 'Cost management'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Recommendation System Pipeline',
        description: 'Build an end-to-end recommendation system',
        difficulty: 'Expert',
        technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'MLflow']
      }
    ],
    instructor: {
      name: 'Dr. Priya Sharma',
      bio: 'Principal ML Engineer at Google, PhD in Machine Learning',
      socialLinks: {
        github: 'https://github.com/priya-ml',
        linkedin: 'https://linkedin.com/in/dr-priya-sharma'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 178 },
    enrollmentCount: 892,
    tags: ['machine-learning', 'mlops', 'python', 'tensorflow', 'data-science']
  },

  {
    title: 'Data Engineering with Apache Spark and Kafka',
    shortDescription: 'Build scalable data pipelines with Spark, Kafka, and cloud platforms',
    description: 'Master big data processing and streaming with Apache Spark, Kafka, and modern data stack. Learn to build robust data pipelines for analytics and machine learning.',
    level: 'Advanced',
    category: 'Data Engineering',
    duration: '20 weeks',
    price: 459,
    originalPrice: 579,
    technologies: ['Apache Spark', 'Apache Kafka', 'Python', 'Scala', 'AWS', 'Databricks', 'Apache Airflow'],
    prerequisites: ['SQL proficiency', 'Python or Scala', 'Distributed systems basics', 'Cloud platforms'],
    learningOutcomes: [
      'Design scalable data architectures',
      'Build real-time streaming pipelines',
      'Process big data with Spark',
      'Implement data quality frameworks',
      'Deploy on cloud platforms',
      'Monitor data pipeline health'
    ],
    modules: [
      {
        title: 'Data Engineering Fundamentals',
        description: 'Core concepts and architecture patterns',
        duration: '3 weeks',
        topics: ['Data architecture', 'ETL vs ELT', 'Data modeling', 'Quality frameworks'],
        resources: []
      },
      {
        title: 'Apache Spark Deep Dive',
        description: 'Distributed data processing',
        duration: '5 weeks',
        topics: ['Spark Core', 'DataFrames and Datasets', 'Spark SQL', 'Performance tuning'],
        resources: []
      },
      {
        title: 'Real-time Streaming with Kafka',
        description: 'Event-driven data pipelines',
        duration: '4 weeks',
        topics: ['Kafka fundamentals', 'Producers and consumers', 'Stream processing', 'Kafka Connect'],
        resources: []
      },
      {
        title: 'Workflow Orchestration',
        description: 'Managing complex data workflows',
        duration: '3 weeks',
        topics: ['Apache Airflow', 'DAG design', 'Task dependencies', 'Monitoring and alerting'],
        resources: []
      },
      {
        title: 'Cloud Data Platforms',
        description: 'Deploying on cloud infrastructure',
        duration: '3 weeks',
        topics: ['AWS data services', 'Databricks platform', 'Data lakes and warehouses', 'Cost optimization'],
        resources: []
      },
      {
        title: 'Data Governance and Security',
        description: 'Enterprise data management',
        duration: '2 weeks',
        topics: ['Data lineage', 'Privacy compliance', 'Access control', 'Data cataloging'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Real-time Analytics Platform',
        description: 'Build a complete real-time data analytics platform',
        difficulty: 'Expert',
        technologies: ['Spark', 'Kafka', 'AWS', 'Airflow']
      }
    ],
    instructor: {
      name: 'Michael Chen',
      bio: 'Staff Data Engineer at LinkedIn, Apache Spark contributor',
      socialLinks: {
        github: 'https://github.com/michael-data',
        linkedin: 'https://linkedin.com/in/michael-chen-data'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.7, count: 145 },
    enrollmentCount: 567,
    tags: ['data-engineering', 'spark', 'kafka', 'big-data', 'streaming']
  },

  // DevOps & Cloud
  {
    title: 'AWS Cloud Solutions Architecture',
    shortDescription: 'Design and implement scalable cloud solutions on AWS platform',
    description: 'Master AWS cloud architecture patterns, services, and best practices. Learn to design resilient, scalable, and cost-effective cloud solutions for enterprise applications.',
    level: 'Intermediate',
    category: 'Cloud Computing',
    duration: '16 weeks',
    price: 389,
    originalPrice: 489,
    technologies: ['AWS', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes', 'Serverless'],
    prerequisites: ['Cloud computing basics', 'Networking fundamentals', 'Linux knowledge'],
    learningOutcomes: [
      'Design AWS cloud architectures',
      'Implement infrastructure as code',
      'Optimize costs and performance',
      'Ensure security and compliance',
      'Build serverless applications',
      'Prepare for AWS certifications'
    ],
    modules: [
      {
        title: 'AWS Fundamentals',
        description: 'Core AWS services and concepts',
        duration: '3 weeks',
        topics: ['EC2', 'VPC', 'S3', 'IAM', 'Route 53', 'CloudWatch'],
        resources: []
      },
      {
        title: 'Compute and Container Services',
        description: 'Modern compute patterns',
        duration: '3 weeks',
        topics: ['ECS and EKS', 'Lambda functions', 'Fargate', 'Auto Scaling'],
        resources: []
      },
      {
        title: 'Database and Storage Solutions',
        description: 'Data persistence strategies',
        duration: '2 weeks',
        topics: ['RDS', 'DynamoDB', 'ElastiCache', 'Storage classes'],
        resources: []
      },
      {
        title: 'Infrastructure as Code',
        description: 'Automated infrastructure management',
        duration: '3 weeks',
        topics: ['Terraform', 'CloudFormation', 'CDK', 'Best practices'],
        resources: []
      },
      {
        title: 'Security and Compliance',
        description: 'AWS security frameworks',
        duration: '2 weeks',
        topics: ['Security groups', 'Encryption', 'Compliance frameworks', 'Monitoring'],
        resources: []
      },
      {
        title: 'Serverless and Modern Architectures',
        description: 'Event-driven and serverless patterns',
        duration: '3 weeks',
        topics: ['Serverless framework', 'API Gateway', 'Event-driven architecture', 'Microservices'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Multi-tier Web Application',
        description: 'Deploy a scalable web application on AWS',
        difficulty: 'Hard',
        technologies: ['AWS', 'Terraform', 'EKS', 'RDS']
      }
    ],
    instructor: {
      name: 'Alex Thompson',
      bio: 'AWS Solutions Architect, Former Netflix Cloud Engineer',
      socialLinks: {
        github: 'https://github.com/alex-aws',
        linkedin: 'https://linkedin.com/in/alex-thompson-cloud'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 267 },
    enrollmentCount: 1456,
    tags: ['aws', 'cloud', 'architecture', 'devops', 'infrastructure']
  },

  // Cybersecurity
  {
    title: 'Ethical Hacking and Penetration Testing',
    shortDescription: 'Learn offensive security techniques and penetration testing methodologies',
    description: 'Master ethical hacking techniques, vulnerability assessment, and penetration testing. Learn to think like an attacker to better defend systems and networks.',
    level: 'Intermediate',
    category: 'Cybersecurity',
    duration: '18 weeks',
    price: 429,
    originalPrice: 549,
    technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Python'],
    prerequisites: ['Networking fundamentals', 'Linux command line', 'Basic programming', 'Security awareness'],
    learningOutcomes: [
      'Conduct professional penetration tests',
      'Identify and exploit vulnerabilities',
      'Write comprehensive security reports',
      'Understand attack methodologies',
      'Implement defensive strategies',
      'Prepare for security certifications'
    ],
    modules: [
      {
        title: 'Penetration Testing Fundamentals',
        description: 'Methodology and legal considerations',
        duration: '3 weeks',
        topics: ['Testing methodology', 'Legal framework', 'Scoping and planning', 'Documentation'],
        resources: []
      },
      {
        title: 'Reconnaissance and Information Gathering',
        description: 'Intelligence gathering techniques',
        duration: '3 weeks',
        topics: ['OSINT', 'Network scanning', 'Enumeration', 'Social engineering'],
        resources: []
      },
      {
        title: 'Vulnerability Assessment',
        description: 'Identifying security weaknesses',
        duration: '3 weeks',
        topics: ['Vulnerability scanners', 'Manual testing', 'Risk assessment', 'Prioritization'],
        resources: []
      },
      {
        title: 'Exploitation Techniques',
        description: 'Practical exploitation methods',
        duration: '4 weeks',
        topics: ['Web application attacks', 'Network exploitation', 'Privilege escalation', 'Post-exploitation'],
        resources: []
      },
      {
        title: 'Wireless and Mobile Security',
        description: 'Testing wireless and mobile platforms',
        duration: '2 weeks',
        topics: ['WiFi security', 'Mobile app testing', 'Bluetooth attacks', 'IoT security'],
        resources: []
      },
      {
        title: 'Reporting and Remediation',
        description: 'Professional reporting and recommendations',
        duration: '3 weeks',
        topics: ['Report writing', 'Executive summaries', 'Remediation strategies', 'Retesting'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete Penetration Test',
        description: 'Perform a full penetration test on a simulated environment',
        difficulty: 'Hard',
        technologies: ['Kali Linux', 'Metasploit', 'Burp Suite']
      }
    ],
    instructor: {
      name: 'Dr. Sarah Johnson',
      bio: 'CISSP, CEH, Senior Security Consultant at FireEye',
      socialLinks: {
        github: 'https://github.com/sarah-security',
        linkedin: 'https://linkedin.com/in/dr-sarah-johnson-security'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.6, count: 134 },
    enrollmentCount: 567,
    tags: ['cybersecurity', 'penetration-testing', 'ethical-hacking', 'security']
  },

  // Emerging Technologies
  {
    title: 'Blockchain Development with Solidity and Web3',
    shortDescription: 'Build decentralized applications with Ethereum, Solidity, and Web3 technologies',
    description: 'Learn blockchain development from fundamentals to advanced DApp creation. Master Solidity programming, smart contracts, and Web3 integration for decentralized applications.',
    level: 'Intermediate',
    category: 'Blockchain',
    duration: '14 weeks',
    price: 399,
    originalPrice: 499,
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Truffle', 'Hardhat', 'IPFS', 'React'],
    prerequisites: ['JavaScript proficiency', 'Basic cryptography', 'Blockchain concepts'],
    learningOutcomes: [
      'Develop smart contracts with Solidity',
      'Build decentralized applications',
      'Integrate Web3 with frontend',
      'Deploy on Ethereum networks',
      'Implement DeFi protocols',
      'Handle security best practices'
    ],
    modules: [
      {
        title: 'Blockchain Fundamentals',
        description: 'Core blockchain concepts and Ethereum',
        duration: '2 weeks',
        topics: ['Blockchain basics', 'Ethereum ecosystem', 'Wallets and accounts', 'Gas and transactions'],
        resources: []
      },
      {
        title: 'Solidity Programming',
        description: 'Smart contract development',
        duration: '4 weeks',
        topics: ['Solidity syntax', 'Contract structure', 'Data types', 'Inheritance and libraries'],
        resources: []
      },
      {
        title: 'Smart Contract Patterns',
        description: 'Common patterns and best practices',
        duration: '3 weeks',
        topics: ['Access control', 'Upgradeable contracts', 'Proxy patterns', 'Security considerations'],
        resources: []
      },
      {
        title: 'DApp Development',
        description: 'Frontend integration with Web3',
        duration: '3 weeks',
        topics: ['Web3.js integration', 'MetaMask connection', 'Transaction handling', 'Event listening'],
        resources: []
      },
      {
        title: 'Testing and Deployment',
        description: 'Testing strategies and deployment',
        duration: '2 weeks',
        topics: ['Unit testing', 'Integration testing', 'Testnet deployment', 'Mainnet considerations'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Decentralized Marketplace',
        description: 'Build a complete decentralized marketplace DApp',
        difficulty: 'Hard',
        technologies: ['Solidity', 'React', 'Web3.js', 'IPFS']
      }
    ],
    instructor: {
      name: 'Kevin Zhang',
      bio: 'Blockchain Engineer at ConsenSys, Ethereum contributor',
      socialLinks: {
        github: 'https://github.com/kevin-blockchain',
        linkedin: 'https://linkedin.com/in/kevin-zhang-blockchain'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.5, count: 89 },
    enrollmentCount: 234,
    tags: ['blockchain', 'solidity', 'ethereum', 'web3', 'dapp', 'smart-contracts']
  }
];

module.exports = { comprehensiveCourses };
