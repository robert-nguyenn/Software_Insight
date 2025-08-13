const coursesData = [
  {
    title: 'Data Structures and Algorithms Fundamentals',
    description: 'Master the essential data structures and algorithms needed for technical interviews. Learn arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, and searching techniques.',
    category: 'Computer Science',
    difficulty: 'Beginner',
    duration: '8 weeks',
    instructor: 'Dr. Sarah Johnson',
    price: 0,
    isActive: true,
    syllabus: [
      'Introduction to Data Structures',
      'Arrays and Strings',
      'Linked Lists',
      'Stacks and Queues',
      'Trees and Binary Search Trees',
      'Graphs and Graph Algorithms',
      'Sorting Algorithms',
      'Dynamic Programming Basics'
    ],
    prerequisites: ['Basic programming knowledge in any language'],
    learningOutcomes: [
      'Understand fundamental data structures',
      'Implement common algorithms',
      'Analyze time and space complexity',
      'Solve coding interview problems'
    ]
  },
  {
    title: 'System Design for Interviews',
    description: 'Learn how to approach system design interviews at top tech companies. Cover scalability, distributed systems, databases, caching, and real-world system architecture.',
    category: 'Software Engineering',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    instructor: 'Mark Chen',
    price: 0,
    isActive: true,
    syllabus: [
      'System Design Fundamentals',
      'Scalability Principles',
      'Database Design',
      'Caching Strategies',
      'Load Balancing',
      'Microservices Architecture',
      'Case Study: Designing Twitter',
      'Case Study: Designing Netflix'
    ],
    prerequisites: ['Basic understanding of web applications', 'Data structures knowledge'],
    learningOutcomes: [
      'Design scalable systems',
      'Understand distributed system concepts',
      'Communicate design decisions clearly',
      'Handle system design interview questions'
    ]
  },
  {
    title: 'Behavioral Interview Mastery',
    description: 'Develop strong behavioral interview skills using the STAR method. Learn to craft compelling stories and answer common behavioral questions effectively.',
    category: 'Career Development',
    difficulty: 'Beginner',
    duration: '4 weeks',
    instructor: 'Jennifer Adams',
    price: 0,
    isActive: true,
    syllabus: [
      'Introduction to Behavioral Interviews',
      'The STAR Method',
      'Leadership and Teamwork Questions',
      'Problem-Solving Scenarios',
      'Conflict Resolution',
      'Career Goals and Motivation',
      'Company-Specific Questions',
      'Mock Interview Practice'
    ],
    prerequisites: ['None'],
    learningOutcomes: [
      'Master the STAR method',
      'Prepare compelling stories',
      'Handle difficult questions confidently',
      'Present professional experiences effectively'
    ]
  },
  {
    title: 'JavaScript for Technical Interviews',
    description: 'Focus on JavaScript-specific concepts commonly tested in technical interviews. Cover closures, prototypes, async programming, and modern ES6+ features.',
    category: 'Programming Languages',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    instructor: 'Alex Rodriguez',
    price: 0,
    isActive: true,
    syllabus: [
      'JavaScript Fundamentals Review',
      'Closures and Scope',
      'Prototypes and Inheritance',
      'Async Programming (Promises, async/await)',
      'ES6+ Features',
      'Common Interview Patterns',
      'Debugging Techniques',
      'Performance Optimization'
    ],
    prerequisites: ['Basic JavaScript knowledge'],
    learningOutcomes: [
      'Deep understanding of JavaScript concepts',
      'Solve complex JavaScript problems',
      'Optimize code performance',
      'Handle language-specific interview questions'
    ]
  },
  {
    title: 'Mock Interview Workshop',
    description: 'Practice real interview scenarios with peers and receive feedback. Includes technical coding rounds, system design discussions, and behavioral interviews.',
    category: 'Interview Preparation',
    difficulty: 'All Levels',
    duration: '2 weeks',
    instructor: 'Multiple Instructors',
    price: 0,
    isActive: true,
    syllabus: [
      'Interview Format Overview',
      'Technical Coding Practice',
      'System Design Practice',
      'Behavioral Interview Practice',
      'Peer Review Sessions',
      'Feedback and Improvement',
      'Final Mock Interview',
      'Post-Interview Debrief'
    ],
    prerequisites: ['Completion of at least one other course'],
    learningOutcomes: [
      'Gain real interview experience',
      'Receive constructive feedback',
      'Build confidence',
      'Identify areas for improvement'
    ]
  }
];

module.exports = { coursesData };
