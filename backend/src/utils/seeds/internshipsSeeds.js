const internshipsData = [
  {
    company: 'Google',
    position: 'Software Engineer Intern',
    location: 'Mountain View, CA',
    description: 'Join Google\'s Software Engineering team to work on products that impact billions of users. You\'ll collaborate with experienced engineers, contribute to real projects, and learn cutting-edge technologies.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s in Computer Science or related field',
      'Strong programming skills in one or more languages (Java, C++, Python, JavaScript)',
      'Understanding of data structures and algorithms',
      'Previous internship or project experience preferred'
    ],
    applicationDeadline: new Date('2024-03-15'),
    duration: '12 weeks',
    compensation: '$8,000/month',
    benefits: [
      'Housing stipend',
      'Transportation benefits',
      'Free meals',
      'Access to Google facilities',
      'Mentorship program'
    ],
    applicationUrl: 'https://careers.google.com/students/',
    skills: ['Software Development', 'System Design', 'Algorithm Design', 'Testing'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-23')
  },
  {
    company: 'Microsoft',
    position: 'Software Development Engineer Intern',
    location: 'Redmond, WA',
    description: 'Work with Microsoft\'s engineering teams on Azure, Office, Windows, or other Microsoft products. Gain hands-on experience with cloud technologies and enterprise software development.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Engineering, or related field',
      'Proficiency in C#, Java, JavaScript, or Python',
      'Familiarity with software development lifecycle',
      'Strong problem-solving skills'
    ],
    applicationDeadline: new Date('2024-02-28'),
    duration: '12 weeks',
    compensation: '$7,500/month',
    benefits: [
      'Housing stipend',
      'Relocation assistance',
      'Health benefits',
      'Employee discounts',
      'Networking events'
    ],
    applicationUrl: 'https://careers.microsoft.com/students/',
    skills: ['C#', 'Azure', 'Software Architecture', 'Agile Development'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-03'),
    endDate: new Date('2024-08-25')
  },
  {
    company: 'Meta',
    position: 'Software Engineer Intern',
    location: 'Menlo Park, CA',
    description: 'Build the next generation of social technology at Meta. Work on Facebook, Instagram, WhatsApp, or emerging technologies like VR/AR and the metaverse.',
    requirements: [
      'Currently pursuing degree in Computer Science or related technical field',
      'Experience with at least one programming language (Python, Java, C++, JavaScript)',
      'Understanding of computer science fundamentals',
      'Ability to work in a fast-paced environment'
    ],
    applicationDeadline: new Date('2024-03-01'),
    duration: '12-16 weeks',
    compensation: '$8,500/month',
    benefits: [
      'Housing stipend',
      'Transportation',
      'Free meals and snacks',
      'Wellness benefits',
      'Learning and development programs'
    ],
    applicationUrl: 'https://www.metacareers.com/students/',
    skills: ['React', 'Mobile Development', 'Distributed Systems', 'Machine Learning'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-05-28'),
    endDate: new Date('2024-08-30')
  },
  {
    company: 'Amazon',
    position: 'Software Development Engineer Intern',
    location: 'Seattle, WA',
    description: 'Work on Amazon\'s world-class products and services including AWS, Alexa, Prime, and more. Learn about large-scale distributed systems and customer-obsessed development.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s degree program in Computer Science or related field',
      'Programming experience in Java, C++, Python, or similar',
      'Understanding of fundamental computer science concepts',
      'Previous internship or relevant project experience'
    ],
    applicationDeadline: new Date('2024-02-15'),
    duration: '12 weeks',
    compensation: '$7,800/month',
    benefits: [
      'Housing stipend',
      'Transportation stipend',
      'Employee discounts',
      'Health and wellness programs',
      'Mentorship opportunities'
    ],
    applicationUrl: 'https://amazon.jobs/students/',
    skills: ['AWS', 'Distributed Systems', 'Java', 'System Design'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-10'),
    endDate: new Date('2024-09-01')
  },
  {
    company: 'Apple',
    position: 'Software Engineering Intern',
    location: 'Cupertino, CA',
    description: 'Join Apple\'s software engineering teams working on iOS, macOS, watchOS, tvOS, or other Apple platforms. Contribute to products used by millions worldwide.',
    requirements: [
      'Pursuing Bachelor\'s or Master\'s in Computer Science or equivalent experience',
      'Strong programming fundamentals',
      'Experience with Swift, Objective-C, or other relevant languages',
      'Passion for creating exceptional user experiences'
    ],
    applicationDeadline: new Date('2024-03-10'),
    duration: '12 weeks',
    compensation: '$8,200/month',
    benefits: [
      'Housing assistance',
      'Transportation benefits',
      'Employee purchase program',
      'Fitness center access',
      'Professional development'
    ],
    applicationUrl: 'https://jobs.apple.com/students/',
    skills: ['Swift', 'iOS Development', 'macOS Development', 'UI/UX Design'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-23')
  },
  {
    company: 'Netflix',
    position: 'Software Engineer Intern',
    location: 'Los Gatos, CA',
    description: 'Work on Netflix\'s streaming platform, recommendation systems, or content delivery systems. Experience the culture of freedom and responsibility while building entertainment technology.',
    requirements: [
      'Currently enrolled in a degree program (Bachelor\'s or Master\'s) in Computer Science or related field',
      'Strong programming skills in Java, Python, JavaScript, or similar',
      'Understanding of software engineering principles',
      'Interest in streaming technology and entertainment'
    ],
    applicationDeadline: new Date('2024-02-20'),
    duration: '12 weeks',
    compensation: '$9,000/month',
    benefits: [
      'Housing stipend',
      'Transportation allowance',
      'Free Netflix subscription',
      'Catered meals',
      'Learning and development budget'
    ],
    applicationUrl: 'https://jobs.netflix.com/students/',
    skills: ['Microservices', 'Stream Processing', 'Data Engineering', 'Scalability'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-23')
  },
  {
    company: 'Uber',
    position: 'Software Engineer Intern',
    location: 'San Francisco, CA',
    description: 'Build technology that moves the world. Work on Uber\'s marketplace, mapping, safety, or payments systems that connect millions of riders and drivers globally.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s in Computer Science, Engineering, or related field',
      'Proficiency in one or more programming languages (Go, Java, Python, JavaScript)',
      'Understanding of algorithms and data structures',
      'Previous software development experience'
    ],
    applicationDeadline: new Date('2024-03-05'),
    duration: '12 weeks',
    compensation: '$8,300/month',
    benefits: [
      'Housing stipend',
      'Uber credits',
      'Health and wellness benefits',
      'Professional development',
      'Team events and networking'
    ],
    applicationUrl: 'https://www.uber.com/careers/students/',
    skills: ['Go', 'Microservices', 'Real-time Systems', 'Mobile APIs'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-03'),
    endDate: new Date('2024-08-25')
  },
  {
    company: 'Spotify',
    position: 'Backend Engineer Intern',
    location: 'New York, NY',
    description: 'Help build the audio platform that connects millions of listeners with their favorite music and podcasts. Work on recommendation systems, streaming infrastructure, or creator tools.',
    requirements: [
      'Enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Experience with backend technologies (Java, Scala, Python)',
      'Understanding of distributed systems concepts',
      'Passion for music and audio technology'
    ],
    applicationDeadline: new Date('2024-02-25'),
    duration: '10-12 weeks',
    compensation: '$7,200/month',
    benefits: [
      'Housing allowance',
      'Spotify Premium',
      'Team lunches',
      'Professional development',
      'Music industry networking'
    ],
    applicationUrl: 'https://www.lifeatspotify.com/students/',
    skills: ['Java', 'Scala', 'Distributed Systems', 'Audio Processing'],
    isActive: true,
    remote: false,
    type: 'Summer Internship',
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-16')
  }
];

module.exports = { internshipsData };
