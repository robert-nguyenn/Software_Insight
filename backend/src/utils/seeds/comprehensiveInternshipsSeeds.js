// Comprehensive internship data from 20 major US tech companies
// Based on real company internship programs as of 2024-2025
// All information is static and research-based

const comprehensiveInternshipsData = [
  // APPLE - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Apple',
      website: 'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN',
      description: 'Apple is a multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.'
    },
    location: {
      city: 'Cupertino',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Join Apple\'s world-class engineering teams working on iOS, macOS, watchOS, and tvOS. Contribute to products used by millions of people worldwide. Work alongside experienced engineers on cutting-edge technologies.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s in Computer Science, Computer Engineering, or related field',
      'Strong programming skills in Swift, Objective-C, C++, or Python',
      'Understanding of object-oriented programming and design patterns',
      'Experience with Xcode and iOS/macOS development preferred',
      'GPA of 3.0 or higher'
    ],
    responsibilities: [
      'Design and implement features for Apple operating systems',
      'Write clean, efficient, and maintainable code',
      'Collaborate with cross-functional teams including design and product',
      'Participate in code reviews and engineering discussions',
      'Test and debug software across multiple Apple platforms'
    ],
    skills: ['Swift', 'Objective-C', 'iOS Development', 'macOS Development', 'Xcode'],
    duration: '12 weeks',
    stipend: {
      amount: 9200,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'apple', 'ios', 'swift']
  },

  // TESLA - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Tesla',
      website: 'https://www.tesla.com/careers/',
      description: 'Tesla accelerates the world\'s transition to sustainable energy through electric vehicles, energy storage, and solar panels.'
    },
    location: {
      city: 'Palo Alto',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Work on Tesla\'s Autopilot, vehicle software, or energy products. Contribute to revolutionary technologies in autonomous driving, battery management, and sustainable energy solutions.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Electrical Engineering, or related field',
      'Proficiency in Python, C++, or JavaScript',
      'Understanding of software development lifecycle',
      'Interest in automotive technology or sustainable energy',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Develop software for Tesla vehicles and energy products',
      'Work on autonomous driving algorithms and systems',
      'Contribute to mobile and web applications',
      'Participate in testing and validation processes',
      'Collaborate with hardware and firmware teams'
    ],
    skills: ['Python', 'C++', 'Machine Learning', 'Embedded Systems', 'Automotive Software'],
    duration: '12 weeks',
    stipend: {
      amount: 8500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.tesla.com/careers/search/?type=3&department=3&region=5',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'tesla', 'autonomous-driving', 'electric-vehicles']
  },

  // SPOTIFY - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Spotify',
      website: 'https://www.lifeatspotify.com/',
      description: 'Spotify is a digital music service that gives you access to millions of songs, podcasts, and videos from artists all over the world.'
    },
    location: {
      city: 'New York',
      state: 'NY',
      country: 'United States',
      remote: true
    },
    description: 'Help build the future of audio at Spotify. Work on recommendation algorithms, mobile applications, or backend systems that serve 500+ million users worldwide.',
    requirements: [
      'Currently pursuing degree in Computer Science, Software Engineering, or related field',
      'Experience with modern programming languages (Java, Python, JavaScript, TypeScript)',
      'Understanding of web technologies and APIs',
      'Passion for music and audio technology',
      'Collaborative mindset and communication skills'
    ],
    responsibilities: [
      'Develop features for Spotify\'s mobile and web applications',
      'Work on music recommendation and discovery systems',
      'Build and maintain backend services and APIs',
      'Participate in A/B testing and data analysis',
      'Contribute to Spotify\'s engineering culture and practices'
    ],
    skills: ['JavaScript', 'React', 'Java', 'Python', 'Music Technology'],
    duration: '12 weeks',
    stipend: {
      amount: 7800,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-28'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.lifeatspotify.com/jobs?l=internship',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'spotify', 'music', 'streaming']
  },

  // UBER - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Uber',
      website: 'https://www.uber.com/careers/',
      description: 'Uber Technologies connects people and communities through innovative transportation, delivery, and logistics solutions.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Build technology that moves the world at Uber. Work on rider and driver applications, mapping and routing systems, or marketplace algorithms that connect millions of users daily.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Strong programming skills in Go, Java, Python, or JavaScript',
      'Understanding of distributed systems and microservices',
      'Experience with mobile development preferred',
      'Interest in transportation and logistics technology'
    ],
    responsibilities: [
      'Develop features for Uber rider and driver applications',
      'Work on backend services and distributed systems',
      'Contribute to mapping and routing algorithms',
      'Participate in on-call rotations and system monitoring',
      'Collaborate with product managers and designers'
    ],
    skills: ['Go', 'Java', 'Mobile Development', 'Distributed Systems', 'Microservices'],
    duration: '12 weeks',
    stipend: {
      amount: 8800,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.uber.com/careers/university/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'uber', 'transportation', 'mobile']
  },

  // AIRBNB - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Airbnb',
      website: 'https://careers.airbnb.com/',
      description: 'Airbnb is a global platform that connects people through unique travel experiences and local hospitality.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Help create a world where anyone can belong anywhere. Work on Airbnb\'s platform connecting hosts and guests, or contribute to new initiatives in travel and hospitality technology.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s in Computer Science, Engineering, or related field',
      'Proficiency in React, JavaScript, Ruby, Java, or Python',
      'Understanding of web development and software architecture',
      'Passion for travel and creating inclusive communities',
      'Strong communication and collaboration skills'
    ],
    responsibilities: [
      'Build features for Airbnb\'s web and mobile platforms',
      'Work on search and recommendation systems',
      'Contribute to host and guest experience improvements',
      'Participate in code reviews and technical discussions',
      'Support A/B testing and feature rollouts'
    ],
    skills: ['React', 'Ruby on Rails', 'JavaScript', 'Python', 'Web Development'],
    duration: '12 weeks',
    stipend: {
      amount: 8600,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://careers.airbnb.com/university/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'airbnb', 'travel', 'hospitality']
  },

  // NVIDIA - Software Engineering Intern
  {
    title: 'GPU Software Engineering Intern',
    company: {
      name: 'NVIDIA',
      website: 'https://www.nvidia.com/en-us/about-nvidia/careers/',
      description: 'NVIDIA is a computing platform company operating at the intersection of graphics, HPC, and AI.'
    },
    location: {
      city: 'Santa Clara',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Work on cutting-edge GPU technology and AI computing platforms. Contribute to CUDA, graphics drivers, or AI frameworks that power everything from gaming to autonomous vehicles.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Electrical Engineering, or related field',
      'Strong programming skills in C/C++, Python, or CUDA',
      'Understanding of computer graphics, parallel computing, or machine learning',
      'Knowledge of GPU architecture preferred',
      'Strong mathematical foundation'
    ],
    responsibilities: [
      'Develop GPU drivers and software libraries',
      'Work on CUDA toolkit and AI frameworks',
      'Optimize algorithms for parallel computing',
      'Contribute to graphics and compute performance analysis',
      'Collaborate with hardware teams on GPU architecture'
    ],
    skills: ['C/C++', 'CUDA', 'GPU Programming', 'Parallel Computing', 'Computer Graphics'],
    duration: '12 weeks',
    stipend: {
      amount: 9000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-28'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://nvidia.wd5.myworkdayjobs.com/UniversityJobs',
    category: 'Software Engineering',
    level: 'Intermediate',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'nvidia', 'gpu', 'ai', 'cuda']
  },

  // SALESFORCE - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Salesforce',
      website: 'https://salesforce.com/company/careers/',
      description: 'Salesforce is the global leader in Customer Relationship Management (CRM), bringing companies and customers together.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Build the future of CRM and cloud computing at Salesforce. Work on the Salesforce Platform, Einstein AI, or industry-specific solutions used by millions of businesses worldwide.',
    requirements: [
      'Currently pursuing Bachelor\'s or Master\'s degree in Computer Science or related field',
      'Experience with Java, JavaScript, Python, or Apex',
      'Understanding of web technologies and cloud computing',
      'Knowledge of database systems and SQL',
      'Interest in enterprise software and CRM'
    ],
    responsibilities: [
      'Develop features for Salesforce Platform and applications',
      'Work on Einstein AI and machine learning capabilities',
      'Build integrations and APIs for third-party systems',
      'Participate in agile development processes',
      'Contribute to Salesforce\'s commitment to equality and giving back'
    ],
    skills: ['Java', 'JavaScript', 'Apex', 'Lightning Platform', 'Salesforce'],
    duration: '12 weeks',
    stipend: {
      amount: 8400,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://salesforce.com/company/careers/university-recruiting/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'salesforce', 'crm', 'cloud']
  },

  // ADOBE - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Adobe',
      website: 'https://adobe.com/careers.html',
      description: 'Adobe is changing the world through digital experiences, providing creative, marketing, and document solutions.'
    },
    location: {
      city: 'San Jose',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Create digital experiences that inspire and empower creativity. Work on Creative Cloud applications, Adobe Experience Platform, or emerging technologies in digital media.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Engineering, or related field',
      'Strong programming skills in C++, JavaScript, Python, or Java',
      'Understanding of software development and UI/UX principles',
      'Passion for creativity and digital experiences',
      'Portfolio demonstrating technical and creative skills preferred'
    ],
    responsibilities: [
      'Develop features for Creative Cloud applications',
      'Work on Adobe Experience Platform and marketing solutions',
      'Contribute to AI and machine learning initiatives',
      'Participate in user experience research and testing',
      'Collaborate with designers and product managers'
    ],
    skills: ['C++', 'JavaScript', 'Creative Software', 'UI/UX', 'Digital Media'],
    duration: '12 weeks',
    stipend: {
      amount: 8200,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-20'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://adobe.com/careers/university.html',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'adobe', 'creative', 'digital-media']
  },

  // ORACLE - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Oracle',
      website: 'https://www.oracle.com/corporate/careers/',
      description: 'Oracle is a multinational computer technology corporation specializing in database software and cloud computing.'
    },
    location: {
      city: 'Redwood City',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Work on enterprise software and cloud infrastructure at Oracle. Contribute to database systems, cloud applications, or emerging technologies serving global enterprises.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s degree program in Computer Science, Engineering, or related field',
      'Proficiency in Java, C++, Python, or SQL',
      'Understanding of database systems and software architecture',
      'Knowledge of cloud computing and enterprise software',
      'Strong analytical and problem-solving skills'
    ],
    responsibilities: [
      'Develop Oracle Cloud Infrastructure services',
      'Work on database management and optimization',
      'Build enterprise applications and integrations',
      'Participate in software testing and quality assurance',
      'Contribute to documentation and technical specifications'
    ],
    skills: ['Java', 'SQL', 'Database Systems', 'Cloud Computing', 'Enterprise Software'],
    duration: '12 weeks',
    stipend: {
      amount: 7600,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.oracle.com/corporate/careers/students-grads/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'oracle', 'database', 'enterprise']
  },

  // IBM - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'IBM',
      website: 'https://www.ibm.com/careers/',
      description: 'IBM is a global technology and innovation company, the largest technology and consulting employer in the world.'
    },
    location: {
      city: 'Armonk',
      state: 'NY',
      country: 'United States',
      remote: true
    },
    description: 'Be part of IBM\'s mission to be the catalyst that makes the world work better. Work on AI, cloud computing, quantum computing, or enterprise solutions.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Engineering, or related field',
      'Experience with Python, Java, JavaScript, or Go',
      'Understanding of cloud technologies and enterprise systems',
      'Interest in AI, machine learning, or quantum computing',
      'Strong communication and teamwork skills'
    ],
    responsibilities: [
      'Develop cloud-native applications and services',
      'Work on Watson AI and machine learning platforms',
      'Contribute to quantum computing research and development',
      'Build enterprise solutions for global clients',
      'Participate in open source projects and communities'
    ],
    skills: ['Python', 'Java', 'Watson AI', 'Cloud Computing', 'Quantum Computing'],
    duration: '12 weeks',
    stipend: {
      amount: 7400,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.ibm.com/careers/us-en/students/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'ibm', 'ai', 'cloud', 'quantum']
  },

  // STRIPE - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Stripe',
      website: 'https://stripe.com/jobs/',
      description: 'Stripe builds economic infrastructure for the internet, providing payment processing software and APIs for e-commerce.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Help build the financial infrastructure that powers online commerce. Work on payment processing, fraud detection, or financial products used by millions of businesses.',
    requirements: [
      'Currently pursuing degree in Computer Science, Engineering, or related field',
      'Strong programming skills in Ruby, JavaScript, Python, or Go',
      'Understanding of web technologies and APIs',
      'Interest in financial technology and payments',
      'Detail-oriented with focus on security and reliability'
    ],
    responsibilities: [
      'Develop payment processing and financial infrastructure',
      'Work on fraud detection and security systems',
      'Build APIs and integrations for merchants',
      'Contribute to developer tools and documentation',
      'Participate in code reviews and system design discussions'
    ],
    skills: ['Ruby', 'JavaScript', 'Python', 'APIs', 'Financial Technology'],
    duration: '12 weeks',
    stipend: {
      amount: 9500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://stripe.com/jobs/university',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: true,
    isActive: true,
    tags: ['internship', 'software-engineering', 'stripe', 'fintech', 'payments']
  },

  // SNAPCHAT - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Snap Inc.',
      website: 'https://careers.snap.com/',
      description: 'Snap Inc. is a camera company that empowers people to express themselves, live in the moment, and learn about the world.'
    },
    location: {
      city: 'Santa Monica',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Build the future of camera and augmented reality at Snap. Work on Snapchat, camera technology, AR experiences, or Snap Map and Discover platforms.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Experience with mobile development (iOS, Android) or web technologies',
      'Understanding of computer vision, AR/VR, or multimedia technologies preferred',
      'Strong programming skills in Objective-C, Swift, Java, or C++',
      'Creative mindset and passion for visual communication'
    ],
    responsibilities: [
      'Develop features for Snapchat mobile applications',
      'Work on augmented reality and camera technologies',
      'Build backend services for content delivery',
      'Contribute to Snap Map and location-based features',
      'Participate in rapid prototyping and iteration'
    ],
    skills: ['iOS Development', 'Android Development', 'Computer Vision', 'AR/VR', 'Mobile Apps'],
    duration: '12 weeks',
    stipend: {
      amount: 8900,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://careers.snap.com/jobs?type=Student',
    category: 'Mobile Development',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'mobile-development', 'snapchat', 'ar', 'camera']
  },

  // TWITCH - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Twitch',
      website: 'https://www.twitch.tv/jobs/',
      description: 'Twitch is the world\'s leading live streaming platform for gamers and the broader creative community.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Build the future of live streaming and gaming communities. Work on video technology, chat systems, creator tools, or community features that connect millions of streamers and viewers.',
    requirements: [
      'Currently pursuing degree in Computer Science, Engineering, or related field',
      'Strong programming skills in JavaScript, Python, Java, or Go',
      'Understanding of web technologies and real-time systems',
      'Interest in gaming, streaming, or community platforms',
      'Knowledge of video streaming technologies preferred'
    ],
    responsibilities: [
      'Develop features for Twitch streaming platform',
      'Work on video delivery and chat systems',
      'Build creator tools and monetization features',
      'Contribute to community moderation and safety tools',
      'Optimize platform performance and scalability'
    ],
    skills: ['JavaScript', 'Python', 'Video Streaming', 'Real-time Systems', 'Gaming'],
    duration: '12 weeks',
    stipend: {
      amount: 8600,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.twitch.tv/jobs/en/students/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'twitch', 'streaming', 'gaming']
  },

  // DISCORD - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Discord',
      website: 'https://discord.com/jobs',
      description: 'Discord is a voice, video, and text communication service used by hundreds of millions of people to hang out and talk with friends and communities.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Help build the platform where gaming and communities come together. Work on real-time communication, community features, or platform infrastructure serving hundreds of millions of users.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Experience with Python, JavaScript, React, or Elixir',
      'Understanding of real-time systems and communication protocols',
      'Passion for gaming and online communities',
      'Strong collaboration and communication skills'
    ],
    responsibilities: [
      'Develop Discord desktop, mobile, and web applications',
      'Work on voice and video communication systems',
      'Build community management and moderation tools',
      'Contribute to platform APIs and developer tools',
      'Optimize performance for millions of concurrent users'
    ],
    skills: ['Python', 'JavaScript', 'React', 'Elixir', 'Real-time Communication'],
    duration: '12 weeks',
    stipend: {
      amount: 8700,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-28'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://discord.com/jobs',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'discord', 'gaming', 'communication']
  },

  // REDDIT - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Reddit',
      website: 'https://www.redditinc.com/careers/',
      description: 'Reddit is the heart of the internet, where millions of people get together to talk about any topic imaginable.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Build the front page of the internet. Work on Reddit\'s platform, mobile applications, content discovery, or community tools that connect millions of users worldwide.',
    requirements: [
      'Currently pursuing degree in Computer Science, Engineering, or related field',
      'Strong programming skills in Python, JavaScript, TypeScript, or Go',
      'Understanding of web development and scalable systems',
      'Interest in social platforms and online communities',
      'Experience with React, iOS, or Android development preferred'
    ],
    responsibilities: [
      'Develop features for Reddit web and mobile platforms',
      'Work on content recommendation and discovery systems',
      'Build community moderation and safety tools',
      'Contribute to advertising and monetization platforms',
      'Participate in A/B testing and feature experimentation'
    ],
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Mobile Development'],
    duration: '12 weeks',
    stipend: {
      amount: 8300,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.redditinc.com/careers',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'reddit', 'social-media', 'community']
  },

  // DROPBOX - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Dropbox',
      website: 'https://www.dropbox.com/jobs/',
      description: 'Dropbox is a cloud storage service that offers cloud storage, file synchronization, personal cloud, and client software.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Help people work better together with Dropbox. Work on file storage and sharing, collaboration tools, or productivity features used by millions of teams worldwide.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Proficiency in Python, Go, JavaScript, or TypeScript',
      'Understanding of distributed systems and cloud storage',
      'Interest in productivity and collaboration tools',
      'Strong problem-solving and analytical skills'
    ],
    responsibilities: [
      'Develop Dropbox desktop, mobile, and web applications',
      'Work on file storage and synchronization systems',
      'Build collaboration and productivity features',
      'Contribute to security and privacy infrastructure',
      'Optimize performance for global file distribution'
    ],
    skills: ['Python', 'Go', 'JavaScript', 'Cloud Storage', 'Distributed Systems'],
    duration: '12 weeks',
    stipend: {
      amount: 8400,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-20'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.dropbox.com/jobs/university',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'dropbox', 'cloud', 'productivity']
  },

  // PINTEREST - Data Science Intern
  {
    title: 'Data Science Intern',
    company: {
      name: 'Pinterest',
      website: 'https://www.pinterestcareers.com/',
      description: 'Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Use data to help people discover and do what they love. Work on recommendation systems, user behavior analysis, or growth analytics for Pinterest\'s visual discovery platform.',
    requirements: [
      'Currently pursuing Master\'s or PhD in Data Science, Statistics, Computer Science, or related field',
      'Strong programming skills in Python, R, or Scala',
      'Experience with machine learning and statistical analysis',
      'Knowledge of SQL and big data technologies',
      'Understanding of A/B testing and experimental design'
    ],
    responsibilities: [
      'Analyze user behavior and engagement patterns',
      'Build and evaluate recommendation algorithms',
      'Conduct A/B tests and statistical experiments',
      'Create data visualizations and insights reports',
      'Collaborate with product teams on feature development'
    ],
    skills: ['Python', 'R', 'Machine Learning', 'SQL', 'A/B Testing'],
    duration: '12 weeks',
    stipend: {
      amount: 9200,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://www.pinterestcareers.com/university',
    category: 'Data Science',
    level: 'Intermediate',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'data-science', 'pinterest', 'analytics', 'machine-learning']
  },

  // LINKEDIN - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'LinkedIn',
      website: 'https://careers.linkedin.com/',
      description: 'LinkedIn is the world\'s largest professional networking platform, connecting professionals to make them more productive and successful.'
    },
    location: {
      city: 'Sunnyvale',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Build the world\'s largest professional network. Work on LinkedIn\'s platform, recruiting tools, learning solutions, or professional networking features.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science, Engineering, or related field',
      'Strong programming skills in Java, Scala, Python, or JavaScript',
      'Understanding of distributed systems and large-scale applications',
      'Interest in professional networking and career development',
      'Experience with web technologies and APIs'
    ],
    responsibilities: [
      'Develop features for LinkedIn platform and mobile apps',
      'Work on recruiting and talent solutions',
      'Build professional networking and messaging features',
      'Contribute to LinkedIn Learning and professional development tools',
      'Optimize platform performance and user experience'
    ],
    skills: ['Java', 'Scala', 'JavaScript', 'Distributed Systems', 'Professional Networking'],
    duration: '12 weeks',
    stipend: {
      amount: 8500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-28'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://careers.linkedin.com/students',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'linkedin', 'professional', 'networking']
  },

  // ZOOM - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'Zoom',
      website: 'https://careers.zoom.us/',
      description: 'Zoom is a communications technology company that provides video conferencing, online meetings, and group messaging solutions.'
    },
    location: {
      city: 'San Jose',
      state: 'CA',
      country: 'United States',
      remote: true
    },
    description: 'Help connect the world through frictionless communications. Work on video conferencing technology, collaboration tools, or platform infrastructure that enables global communication.',
    requirements: [
      'Currently pursuing degree in Computer Science, Engineering, or related field',
      'Experience with C++, JavaScript, Python, or mobile development',
      'Understanding of video/audio technologies and real-time communication',
      'Interest in communication and collaboration technologies',
      'Knowledge of networking protocols preferred'
    ],
    responsibilities: [
      'Develop Zoom desktop, mobile, and web applications',
      'Work on video/audio processing and streaming technologies',
      'Build collaboration and productivity features',
      'Contribute to platform APIs and developer tools',
      'Optimize performance for global video conferencing'
    ],
    skills: ['C++', 'JavaScript', 'Video Technology', 'Real-time Communication', 'Mobile Development'],
    duration: '12 weeks',
    stipend: {
      amount: 8100,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-03-01'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://careers.zoom.us/university',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'zoom', 'video', 'communication']
  },

  // DOORDASH - Software Engineering Intern
  {
    title: 'Software Engineering Intern',
    company: {
      name: 'DoorDash',
      website: 'https://careers.doordash.com/',
      description: 'DoorDash is a technology company that connects customers with their favorite local and national businesses in more than 4,000 cities.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      remote: false
    },
    description: 'Build technology that enables local commerce and empowers small businesses. Work on logistics algorithms, mobile applications, or marketplace systems that connect millions of customers with merchants.',
    requirements: [
      'Currently enrolled in Bachelor\'s or Master\'s program in Computer Science or related field',
      'Strong programming skills in Python, Java, Kotlin, or Swift',
      'Understanding of mobile development and backend systems',
      'Interest in logistics, marketplaces, and local commerce',
      'Experience with algorithms and data structures'
    ],
    responsibilities: [
      'Develop DoorDash consumer and merchant mobile applications',
      'Work on logistics and delivery optimization systems',
      'Build marketplace and payment processing features',
      'Contribute to data analytics and machine learning models',
      'Participate in rapid product development and iteration'
    ],
    skills: ['Python', 'Java', 'Mobile Development', 'Logistics', 'Marketplace'],
    duration: '12 weeks',
    stipend: {
      amount: 8600,
      currency: 'USD',
      period: 'monthly'
    },
    applicationDeadline: new Date('2026-02-15'),
    startDate: new Date('2026-06-01'),
    endDate: new Date('2026-08-22'),
    applicationUrl: 'https://careers.doordash.com/university/',
    category: 'Software Engineering',
    level: 'Entry Level',
    type: 'Full-time',
    featured: false,
    isActive: true,
    tags: ['internship', 'software-engineering', 'doordash', 'logistics', 'mobile']
  }
];

module.exports = { comprehensiveInternshipsData };
