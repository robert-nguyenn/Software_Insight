// Import all course collections
const { comprehensiveCourses } = require('./comprehensiveCoursesSeeds');
const { emergingTechCourses } = require('./emergingTechCoursesSeeds');
const { businessSkillsCourses } = require('./businessSkillsCoursesSeeds');

// Original foundational courses for interview preparation
const foundationalCourses = [
  {
    title: 'Data Structures and Algorithms Fundamentals',
    shortDescription: 'Master essential data structures and algorithms for technical interviews',
    description: 'Master the essential data structures and algorithms needed for technical interviews. Learn arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, and searching techniques.',
    level: 'Beginner',
    category: 'Computer Science',
    duration: '8 weeks',
    price: 89,
    originalPrice: 129,
    technologies: ['Python', 'JavaScript', 'Java', 'C++'],
    prerequisites: ['Basic programming knowledge in any language'],
    learningOutcomes: [
      'Understand fundamental data structures',
      'Implement common algorithms',
      'Analyze time and space complexity',
      'Solve coding interview problems'
    ],
    modules: [
      {
        title: 'Introduction to Data Structures',
        description: 'Basic concepts and analysis',
        duration: '1 week',
        topics: ['Big O notation', 'Space complexity', 'Problem solving approach'],
        resources: []
      },
      {
        title: 'Arrays and Strings',
        description: 'Linear data structures',
        duration: '1 week',
        topics: ['Array manipulation', 'String algorithms', 'Two pointers technique'],
        resources: []
      },
      {
        title: 'Linked Lists',
        description: 'Dynamic data structures',
        duration: '1 week',
        topics: ['Singly linked lists', 'Doubly linked lists', 'Cycle detection'],
        resources: []
      },
      {
        title: 'Stacks and Queues',
        description: 'LIFO and FIFO structures',
        duration: '1 week',
        topics: ['Stack applications', 'Queue implementations', 'Priority queues'],
        resources: []
      },
      {
        title: 'Trees and Binary Search Trees',
        description: 'Hierarchical data structures',
        duration: '2 weeks',
        topics: ['Binary trees', 'BST operations', 'Tree traversals', 'Balanced trees'],
        resources: []
      },
      {
        title: 'Graphs and Algorithms',
        description: 'Graph theory and algorithms',
        duration: '1 week',
        topics: ['Graph representations', 'BFS and DFS', 'Shortest path algorithms'],
        resources: []
      },
      {
        title: 'Sorting and Searching',
        description: 'Fundamental algorithms',
        duration: '1 week',
        topics: ['Comparison sorts', 'Non-comparison sorts', 'Binary search variations'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Algorithm Visualizer',
        description: 'Build a web app to visualize sorting algorithms',
        difficulty: 'Medium',
        technologies: ['JavaScript', 'HTML5 Canvas', 'CSS']
      }
    ],
    instructor: {
      name: 'Dr. Sarah Johnson',
      bio: 'Computer Science Professor at Stanford, Former Google SWE',
      socialLinks: {
        github: 'https://github.com/sarah-cs',
        linkedin: 'https://linkedin.com/in/sarah-johnson-cs'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 892 },
    enrollmentCount: 2341,
    tags: ['data-structures', 'algorithms', 'interview-prep', 'computer-science']
  },

  {
    title: 'System Design for Interviews',
    shortDescription: 'Learn scalable system architecture for technical interviews',
    description: 'Learn how to approach system design interviews at top tech companies. Cover scalability, distributed systems, databases, caching, and real-world system architecture.',
    level: 'Intermediate',
    category: 'Software Engineering',
    duration: '6 weeks',
    price: 149,
    originalPrice: 199,
    technologies: ['System Architecture', 'Database Design', 'Microservices', 'Cloud Platforms'],
    prerequisites: ['Basic understanding of web applications', 'Data structures knowledge'],
    learningOutcomes: [
      'Design scalable systems',
      'Understand distributed system concepts',
      'Communicate design decisions clearly',
      'Handle system design interview questions'
    ],
    modules: [
      {
        title: 'System Design Fundamentals',
        description: 'Core principles of system design',
        duration: '1 week',
        topics: ['Scalability principles', 'Reliability patterns', 'Performance optimization'],
        resources: []
      },
      {
        title: 'Database Design',
        description: 'Data storage and retrieval',
        duration: '1 week',
        topics: ['SQL vs NoSQL', 'Sharding strategies', 'Replication patterns'],
        resources: []
      },
      {
        title: 'Caching Strategies',
        description: 'Improving system performance',
        duration: '1 week',
        topics: ['Cache patterns', 'CDN usage', 'Memory caching'],
        resources: []
      },
      {
        title: 'Load Balancing',
        description: 'Distributing traffic effectively',
        duration: '1 week',
        topics: ['Load balancer types', 'Routing algorithms', 'Health checks'],
        resources: []
      },
      {
        title: 'Microservices Architecture',
        description: 'Service-oriented design',
        duration: '1 week',
        topics: ['Service decomposition', 'Inter-service communication', 'Service discovery'],
        resources: []
      },
      {
        title: 'Case Studies',
        description: 'Real-world system designs',
        duration: '1 week',
        topics: ['Designing Twitter', 'Designing Netflix', 'Designing Uber'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Distributed Chat System',
        description: 'Design a scalable real-time chat application',
        difficulty: 'Hard',
        technologies: ['WebSockets', 'Redis', 'Load Balancers', 'Microservices']
      }
    ],
    instructor: {
      name: 'Mark Chen',
      bio: 'Principal Engineer at Netflix, System Architecture Expert',
      socialLinks: {
        github: 'https://github.com/mark-systems',
        linkedin: 'https://linkedin.com/in/mark-chen-systems'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 567 },
    enrollmentCount: 1234,
    tags: ['system-design', 'architecture', 'scalability', 'interview-prep']
  },

  {
    title: 'Behavioral Interview Mastery',
    shortDescription: 'Master behavioral interviews with STAR method and compelling stories',
    description: 'Develop strong behavioral interview skills using the STAR method. Learn to craft compelling stories and answer common behavioral questions effectively.',
    level: 'Beginner',
    category: 'Career Development',
    duration: '4 weeks',
    price: 79,
    originalPrice: 99,
    technologies: ['Communication Skills', 'STAR Method', 'Interview Techniques'],
    prerequisites: ['None'],
    learningOutcomes: [
      'Master the STAR method',
      'Prepare compelling stories',
      'Handle difficult questions confidently',
      'Present professional experiences effectively'
    ],
    modules: [
      {
        title: 'Introduction to Behavioral Interviews',
        description: 'Understanding the purpose and format',
        duration: '1 week',
        topics: ['Interview formats', 'Company expectations', 'Preparation strategies'],
        resources: []
      },
      {
        title: 'The STAR Method',
        description: 'Structured storytelling technique',
        duration: '1 week',
        topics: ['Situation setup', 'Task identification', 'Action planning', 'Result measurement'],
        resources: []
      },
      {
        title: 'Common Question Categories',
        description: 'Leadership, teamwork, and problem-solving',
        duration: '1 week',
        topics: ['Leadership scenarios', 'Teamwork examples', 'Conflict resolution', 'Innovation stories'],
        resources: []
      },
      {
        title: 'Advanced Techniques',
        description: 'Handling challenging situations',
        duration: '1 week',
        topics: ['Failure and learning', 'Ethical dilemmas', 'Career motivation', 'Culture fit'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Personal Story Portfolio',
        description: 'Develop a collection of STAR-method stories',
        difficulty: 'Easy',
        technologies: ['Storytelling', 'Self-reflection', 'Communication']
      }
    ],
    instructor: {
      name: 'Jennifer Adams',
      bio: 'HR Director at Microsoft, Behavioral Interview Expert',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/jennifer-adams-hr'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.7, count: 445 },
    enrollmentCount: 987,
    tags: ['behavioral-interviews', 'star-method', 'career-development', 'communication']
  }
];

// Combine all course collections
const coursesData = [
  ...foundationalCourses,
  ...comprehensiveCourses,
  ...emergingTechCourses,
  ...businessSkillsCourses
];

// Also export individual collections for flexibility
module.exports = { 
  coursesData,
  foundationalCourses,
  comprehensiveCourses,
  emergingTechCourses,
  businessSkillsCourses
};
