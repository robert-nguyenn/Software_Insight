// Specialized and emerging technology courses
const emergingTechCourses = [
  // AI/ML Specialized Courses
  {
    title: 'Computer Vision with Deep Learning',
    shortDescription: 'Master computer vision techniques using PyTorch, OpenCV, and modern neural networks',
    description: 'Deep dive into computer vision applications using deep learning. Learn image processing, object detection, facial recognition, and advanced CV techniques for real-world applications.',
    level: 'Advanced',
    category: 'Artificial Intelligence',
    duration: '16 weeks',
    price: 459,
    originalPrice: 579,
    technologies: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow', 'CUDA', 'Docker'],
    prerequisites: ['Python proficiency', 'Linear algebra', 'Deep learning basics', 'Statistics'],
    learningOutcomes: [
      'Build image classification systems',
      'Implement object detection models',
      'Create facial recognition systems',
      'Develop real-time CV applications',
      'Deploy CV models in production',
      'Optimize models for edge devices'
    ],
    modules: [
      {
        title: 'Computer Vision Fundamentals',
        description: 'Image processing and feature extraction',
        duration: '3 weeks',
        topics: ['Image preprocessing', 'Feature detection', 'Image transformations', 'Histogram analysis'],
        resources: []
      },
      {
        title: 'Convolutional Neural Networks',
        description: 'Deep learning for computer vision',
        duration: '4 weeks',
        topics: ['CNN architectures', 'Transfer learning', 'Data augmentation', 'Training strategies'],
        resources: []
      },
      {
        title: 'Object Detection and Segmentation',
        description: 'Advanced detection techniques',
        duration: '4 weeks',
        topics: ['YOLO', 'R-CNN variants', 'Semantic segmentation', 'Instance segmentation'],
        resources: []
      },
      {
        title: 'Advanced CV Applications',
        description: 'Specialized computer vision tasks',
        duration: '3 weeks',
        topics: ['Facial recognition', 'OCR systems', 'Medical imaging', 'Autonomous vehicles'],
        resources: []
      },
      {
        title: 'Model Optimization and Deployment',
        description: 'Production-ready CV systems',
        duration: '2 weeks',
        topics: ['Model compression', 'Edge deployment', 'Real-time processing', 'Performance optimization'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Autonomous Vehicle Vision System',
        description: 'Build a complete vision system for autonomous driving',
        difficulty: 'Expert',
        technologies: ['PyTorch', 'OpenCV', 'CUDA', 'ROS']
      }
    ],
    instructor: {
      name: 'Dr. Jennifer Lee',
      bio: 'Computer Vision Researcher at Tesla, PhD from Stanford',
      socialLinks: {
        github: 'https://github.com/jennifer-cv',
        linkedin: 'https://linkedin.com/in/dr-jennifer-lee-cv'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 167 },
    enrollmentCount: 734,
    tags: ['computer-vision', 'deep-learning', 'pytorch', 'opencv', 'ai']
  },

  {
    title: 'Natural Language Processing with Transformers',
    shortDescription: 'Build modern NLP applications with BERT, GPT, and transformer architectures',
    description: 'Master state-of-the-art NLP techniques using transformer models. Learn to build chatbots, language models, and text analysis systems with modern deep learning approaches.',
    level: 'Advanced',
    category: 'Artificial Intelligence',
    duration: '18 weeks',
    price: 479,
    originalPrice: 599,
    technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'NLTK', 'spaCy'],
    prerequisites: ['Python expertise', 'Machine learning knowledge', 'Linear algebra', 'Statistics'],
    learningOutcomes: [
      'Build transformer models from scratch',
      'Fine-tune pre-trained language models',
      'Create conversational AI systems',
      'Implement text classification systems',
      'Develop language generation models',
      'Deploy NLP models at scale'
    ],
    modules: [
      {
        title: 'NLP Fundamentals',
        description: 'Text processing and linguistic concepts',
        duration: '3 weeks',
        topics: ['Text preprocessing', 'Tokenization', 'POS tagging', 'Named entity recognition'],
        resources: []
      },
      {
        title: 'Traditional NLP Techniques',
        description: 'Classical approaches and feature engineering',
        duration: '2 weeks',
        topics: ['Bag of words', 'TF-IDF', 'Word embeddings', 'N-gram models'],
        resources: []
      },
      {
        title: 'Transformer Architecture',
        description: 'Understanding attention mechanisms',
        duration: '4 weeks',
        topics: ['Attention mechanisms', 'BERT architecture', 'GPT models', 'T5 and variants'],
        resources: []
      },
      {
        title: 'Fine-tuning and Transfer Learning',
        description: 'Adapting pre-trained models',
        duration: '4 weeks',
        topics: ['Model fine-tuning', 'Task-specific adaptation', 'Few-shot learning', 'Prompt engineering'],
        resources: []
      },
      {
        title: 'Advanced NLP Applications',
        description: 'Building real-world NLP systems',
        duration: '3 weeks',
        topics: ['Question answering', 'Text summarization', 'Machine translation', 'Sentiment analysis'],
        resources: []
      },
      {
        title: 'Production NLP Systems',
        description: 'Deploying and scaling NLP models',
        duration: '2 weeks',
        topics: ['Model serving', 'API design', 'Performance optimization', 'Monitoring'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Intelligent Customer Support Bot',
        description: 'Build an AI-powered customer support system',
        difficulty: 'Expert',
        technologies: ['Transformers', 'Hugging Face', 'FastAPI', 'Docker']
      }
    ],
    instructor: {
      name: 'Dr. Roberto Martinez',
      bio: 'NLP Research Scientist at OpenAI, Former Google AI',
      socialLinks: {
        github: 'https://github.com/roberto-nlp',
        linkedin: 'https://linkedin.com/in/dr-roberto-martinez-nlp'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 201 },
    enrollmentCount: 1023,
    tags: ['nlp', 'transformers', 'bert', 'gpt', 'ai', 'deep-learning']
  },

  // Game Development
  {
    title: 'Unity 3D Game Development Mastery',
    shortDescription: 'Create professional 3D games with Unity, C#, and modern game development practices',
    description: 'Master Unity 3D game development from concept to publication. Learn C# scripting, physics, animation, UI design, and multiplayer networking for creating engaging games.',
    level: 'Intermediate',
    category: 'Game Development',
    duration: '20 weeks',
    price: 389,
    originalPrice: 489,
    technologies: ['Unity 3D', 'C#', 'Blender', 'Photon', 'Firebase', 'Version Control'],
    prerequisites: ['Basic programming knowledge', 'Understanding of 3D concepts'],
    learningOutcomes: [
      'Build complete 3D games',
      'Master Unity engine features',
      'Implement game physics and AI',
      'Create engaging UI/UX',
      'Publish games to multiple platforms',
      'Optimize game performance'
    ],
    modules: [
      {
        title: 'Unity Fundamentals',
        description: 'Unity interface and basic concepts',
        duration: '3 weeks',
        topics: ['Unity interface', 'Scene management', 'GameObjects', 'Components', 'Prefabs'],
        resources: []
      },
      {
        title: 'C# Scripting for Unity',
        description: 'Programming game logic',
        duration: '4 weeks',
        topics: ['C# basics', 'MonoBehaviour', 'Coroutines', 'Events and delegates', 'Design patterns'],
        resources: []
      },
      {
        title: 'Physics and Animation',
        description: 'Game physics and character animation',
        duration: '4 weeks',
        topics: ['Rigidbody physics', 'Collision detection', 'Animation system', 'State machines'],
        resources: []
      },
      {
        title: 'Game AI and Behavior',
        description: 'Creating intelligent game entities',
        duration: '3 weeks',
        topics: ['AI navigation', 'Behavior trees', 'State machines', 'Pathfinding'],
        resources: []
      },
      {
        title: 'UI/UX and Audio',
        description: 'User interface and audio systems',
        duration: '2 weeks',
        topics: ['Canvas system', 'UI components', 'Audio mixer', 'Sound effects'],
        resources: []
      },
      {
        title: 'Multiplayer and Networking',
        description: 'Online multiplayer games',
        duration: '2 weeks',
        topics: ['Photon networking', 'Client-server architecture', 'Synchronization', 'Lobby systems'],
        resources: []
      },
      {
        title: 'Optimization and Publishing',
        description: 'Performance optimization and deployment',
        duration: '2 weeks',
        topics: ['Performance profiling', 'Asset optimization', 'Platform-specific builds', 'Store submission'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Multiplayer Racing Game',
        description: 'Build a complete multiplayer racing game',
        difficulty: 'Hard',
        technologies: ['Unity 3D', 'C#', 'Photon', 'Blender']
      }
    ],
    instructor: {
      name: 'Mark Stevens',
      bio: 'Senior Game Developer at Ubisoft, 10+ years in game industry',
      socialLinks: {
        github: 'https://github.com/mark-gamedev',
        linkedin: 'https://linkedin.com/in/mark-stevens-gamedev'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.7, count: 289 },
    enrollmentCount: 1456,
    tags: ['unity', 'game-development', 'csharp', '3d', 'multiplayer']
  },

  // IoT and Hardware
  {
    title: 'IoT Development with Arduino and Raspberry Pi',
    shortDescription: 'Build connected devices and IoT solutions with microcontrollers and embedded systems',
    description: 'Learn Internet of Things development using Arduino, Raspberry Pi, and cloud platforms. Create smart devices, sensor networks, and automated systems.',
    level: 'Beginner',
    category: 'Internet of Things',
    duration: '14 weeks',
    price: 289,
    originalPrice: 369,
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'C++', 'MQTT', 'AWS IoT', 'Node-RED'],
    prerequisites: ['Basic programming knowledge', 'Electronics fundamentals'],
    learningOutcomes: [
      'Build IoT prototypes and devices',
      'Program microcontrollers',
      'Implement wireless communication',
      'Create sensor-based systems',
      'Deploy IoT solutions to cloud',
      'Design secure IoT architectures'
    ],
    modules: [
      {
        title: 'Electronics and Hardware Basics',
        description: 'Fundamental electronics concepts',
        duration: '2 weeks',
        topics: ['Circuit basics', 'Components', 'Breadboard prototyping', 'Multimeter usage'],
        resources: []
      },
      {
        title: 'Arduino Programming',
        description: 'Microcontroller programming with Arduino',
        duration: '3 weeks',
        topics: ['Arduino IDE', 'Digital/analog I/O', 'Sensors and actuators', 'Libraries'],
        resources: []
      },
      {
        title: 'Raspberry Pi Development',
        description: 'Single-board computer programming',
        duration: '3 weeks',
        topics: ['Linux basics', 'GPIO programming', 'Python for Pi', 'Camera and display'],
        resources: []
      },
      {
        title: 'Wireless Communication',
        description: 'Connecting devices wirelessly',
        duration: '2 weeks',
        topics: ['WiFi modules', 'Bluetooth', 'LoRa', 'Mesh networking'],
        resources: []
      },
      {
        title: 'IoT Protocols and Cloud Integration',
        description: 'Internet protocols and cloud services',
        duration: '2 weeks',
        topics: ['MQTT', 'HTTP/HTTPS', 'AWS IoT Core', 'Data visualization'],
        resources: []
      },
      {
        title: 'Advanced IoT Projects',
        description: 'Complex IoT system development',
        duration: '2 weeks',
        topics: ['Home automation', 'Industrial IoT', 'Security considerations', 'Scaling'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Smart Home Automation System',
        description: 'Build a complete home automation solution',
        difficulty: 'Medium',
        technologies: ['Arduino', 'Raspberry Pi', 'AWS IoT', 'Node-RED']
      }
    ],
    instructor: {
      name: 'Dr. Lisa Chang',
      bio: 'IoT Solutions Architect at Amazon, Embedded Systems Expert',
      socialLinks: {
        github: 'https://github.com/lisa-iot',
        linkedin: 'https://linkedin.com/in/dr-lisa-chang-iot'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.6, count: 156 },
    enrollmentCount: 678,
    tags: ['iot', 'arduino', 'raspberry-pi', 'embedded', 'hardware']
  },

  // UI/UX Design
  {
    title: 'Advanced UI/UX Design with Figma and Design Systems',
    shortDescription: 'Master user interface and experience design with modern tools and methodologies',
    description: 'Learn comprehensive UI/UX design including user research, wireframing, prototyping, design systems, and usability testing using industry-standard tools.',
    level: 'Intermediate',
    category: 'Design',
    duration: '16 weeks',
    price: 339,
    originalPrice: 429,
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Miro'],
    prerequisites: ['Basic design knowledge', 'Understanding of web/mobile interfaces'],
    learningOutcomes: [
      'Conduct user research and testing',
      'Create wireframes and prototypes',
      'Design comprehensive design systems',
      'Build interactive prototypes',
      'Optimize user experience flows',
      'Collaborate effectively with developers'
    ],
    modules: [
      {
        title: 'UX Research and Strategy',
        description: 'Understanding users and business goals',
        duration: '3 weeks',
        topics: ['User research methods', 'Personas', 'User journey mapping', 'Information architecture'],
        resources: []
      },
      {
        title: 'Wireframing and Prototyping',
        description: 'Creating low and high-fidelity designs',
        duration: '3 weeks',
        topics: ['Wireframing techniques', 'Rapid prototyping', 'Interactive prototypes', 'User flows'],
        resources: []
      },
      {
        title: 'Visual Design Principles',
        description: 'Typography, color, and layout',
        duration: '3 weeks',
        topics: ['Typography systems', 'Color theory', 'Grid systems', 'Visual hierarchy'],
        resources: []
      },
      {
        title: 'Design Systems and Components',
        description: 'Scalable design frameworks',
        duration: '3 weeks',
        topics: ['Component libraries', 'Design tokens', 'Style guides', 'Design system governance'],
        resources: []
      },
      {
        title: 'Usability Testing and Iteration',
        description: 'Validating and improving designs',
        duration: '2 weeks',
        topics: ['Usability testing methods', 'A/B testing', 'Analytics interpretation', 'Design iteration'],
        resources: []
      },
      {
        title: 'Advanced Design Tools',
        description: 'Mastering professional design tools',
        duration: '2 weeks',
        topics: ['Advanced Figma techniques', 'Design handoff', 'Version control', 'Collaboration workflows'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete App Redesign',
        description: 'Redesign an existing app with full UX process',
        difficulty: 'Hard',
        technologies: ['Figma', 'Principle', 'User Testing']
      }
    ],
    instructor: {
      name: 'Emma Rodriguez',
      bio: 'Principal Designer at Airbnb, Former Design Lead at Spotify',
      socialLinks: {
        github: 'https://github.com/emma-design',
        linkedin: 'https://linkedin.com/in/emma-rodriguez-design'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.8, count: 234 },
    enrollmentCount: 1123,
    tags: ['ui-ux', 'design', 'figma', 'prototyping', 'user-research']
  },

  // No-Code/Low-Code
  {
    title: 'No-Code App Development with Bubble and Webflow',
    shortDescription: 'Build professional web applications without coding using modern no-code platforms',
    description: 'Master no-code development platforms to create sophisticated web applications, landing pages, and business tools without traditional programming.',
    level: 'Beginner',
    category: 'No-Code Development',
    duration: '12 weeks',
    price: 259,
    originalPrice: 329,
    technologies: ['Bubble', 'Webflow', 'Zapier', 'Airtable', 'Notion API', 'Stripe'],
    prerequisites: ['Basic computer skills', 'Understanding of web concepts'],
    learningOutcomes: [
      'Build full-stack web applications',
      'Create responsive designs',
      'Implement complex workflows',
      'Integrate third-party services',
      'Launch and monetize applications',
      'Automate business processes'
    ],
    modules: [
      {
        title: 'No-Code Fundamentals',
        description: 'Introduction to no-code development',
        duration: '2 weeks',
        topics: ['No-code vs traditional coding', 'Platform selection', 'Design thinking', 'Project planning'],
        resources: []
      },
      {
        title: 'Webflow Mastery',
        description: 'Professional website design and development',
        duration: '4 weeks',
        topics: ['Webflow interface', 'Responsive design', 'CMS integration', 'E-commerce setup'],
        resources: []
      },
      {
        title: 'Bubble App Development',
        description: 'Full-stack web application creation',
        duration: '4 weeks',
        topics: ['Database design', 'User authentication', 'Workflows and logic', 'API integrations'],
        resources: []
      },
      {
        title: 'Automation and Integration',
        description: 'Connecting tools and automating workflows',
        duration: '2 weeks',
        topics: ['Zapier automation', 'API connections', 'Data synchronization', 'Payment processing'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'SaaS Product Launch',
        description: 'Build and launch a complete SaaS application',
        difficulty: 'Medium',
        technologies: ['Bubble', 'Stripe', 'Zapier', 'Airtable']
      }
    ],
    instructor: {
      name: 'Jason Park',
      bio: 'No-Code Consultant, Built 50+ apps without coding',
      socialLinks: {
        github: 'https://github.com/jason-nocode',
        linkedin: 'https://linkedin.com/in/jason-park-nocode'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.5, count: 167 },
    enrollmentCount: 892,
    tags: ['no-code', 'bubble', 'webflow', 'automation', 'saas']
  }
];

module.exports = { emergingTechCourses };
