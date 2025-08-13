// Business, management, and soft skills courses for tech professionals
const businessSkillsCourses = [
  // Product Management
  {
    title: 'Technical Product Management Mastery',
    shortDescription: 'Lead technical products from conception to launch with data-driven strategies',
    description: 'Master product management for technical products including roadmap planning, stakeholder management, agile methodologies, and data-driven decision making.',
    level: 'Intermediate',
    category: 'Product Management',
    duration: '14 weeks',
    price: 379,
    originalPrice: 479,
    technologies: ['Jira', 'Confluence', 'Figma', 'Analytics Tools', 'A/B Testing', 'SQL'],
    prerequisites: ['Basic business knowledge', 'Understanding of software development', 'Project experience'],
    learningOutcomes: [
      'Develop comprehensive product strategies',
      'Create and manage product roadmaps',
      'Lead cross-functional teams effectively',
      'Make data-driven product decisions',
      'Conduct market research and analysis',
      'Manage product launches successfully'
    ],
    modules: [
      {
        title: 'Product Strategy and Vision',
        description: 'Defining product direction and strategy',
        duration: '3 weeks',
        topics: ['Product vision', 'Market analysis', 'Competitive research', 'Value proposition'],
        resources: [
          {
            title: 'Product Strategy Framework',
            url: 'https://www.youtube.com/watch?v=K8d5wPG_pyw',
            type: 'video',
            description: 'Comprehensive guide to product strategy',
            duration: '2 hours',
            difficulty: 'Intermediate',
            estimatedTime: '3 hours'
          }
        ]
      },
      {
        title: 'User Research and Validation',
        description: 'Understanding customer needs',
        duration: '3 weeks',
        topics: ['User interviews', 'Survey design', 'Usability testing', 'Customer journey mapping'],
        resources: []
      },
      {
        title: 'Product Roadmapping',
        description: 'Planning product development',
        duration: '2 weeks',
        topics: ['Roadmap frameworks', 'Prioritization methods', 'Timeline planning', 'Stakeholder alignment'],
        resources: []
      },
      {
        title: 'Agile Product Development',
        description: 'Working with development teams',
        duration: '3 weeks',
        topics: ['Scrum methodology', 'Sprint planning', 'Backlog management', 'User story writing'],
        resources: []
      },
      {
        title: 'Data-Driven Decision Making',
        description: 'Using analytics for product insights',
        duration: '2 weeks',
        topics: ['Product metrics', 'A/B testing', 'Analytics tools', 'KPI tracking'],
        resources: []
      },
      {
        title: 'Product Launch and Growth',
        description: 'Taking products to market',
        duration: '1 week',
        topics: ['Go-to-market strategy', 'Launch planning', 'Growth metrics', 'Post-launch optimization'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete Product Launch',
        description: 'Plan and execute a full product launch strategy',
        difficulty: 'Hard',
        technologies: ['Jira', 'Analytics', 'Figma', 'A/B Testing']
      }
    ],
    instructor: {
      name: 'Michael Thompson',
      bio: 'Senior Product Manager at Google, Former Amazon PM',
      socialLinks: {
        github: 'https://github.com/michael-pm',
        linkedin: 'https://linkedin.com/in/michael-thompson-pm'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.8, count: 201 },
    enrollmentCount: 956,
    tags: ['product-management', 'strategy', 'agile', 'analytics', 'leadership']
  },

  // Business Analytics
  {
    title: 'Business Analytics and Data Visualization',
    shortDescription: 'Transform business data into actionable insights with modern analytics tools',
    description: 'Learn to analyze business data, create compelling visualizations, and drive data-driven decision making using Excel, SQL, Tableau, and Power BI.',
    level: 'Beginner',
    category: 'Business Analytics',
    duration: '12 weeks',
    price: 299,
    originalPrice: 389,
    technologies: ['Excel', 'SQL', 'Tableau', 'Power BI', 'Python', 'Google Analytics'],
    prerequisites: ['Basic computer skills', 'Mathematical reasoning'],
    learningOutcomes: [
      'Analyze complex business datasets',
      'Create professional data visualizations',
      'Build interactive dashboards',
      'Perform statistical analysis',
      'Present insights to stakeholders',
      'Automate reporting processes'
    ],
    modules: [
      {
        title: 'Data Analysis Fundamentals',
        description: 'Core concepts and Excel mastery',
        duration: '3 weeks',
        topics: ['Excel advanced functions', 'Data cleaning', 'Pivot tables', 'Statistical functions'],
        resources: []
      },
      {
        title: 'SQL for Business Analysis',
        description: 'Database querying and manipulation',
        duration: '3 weeks',
        topics: ['SQL basics', 'Joins and subqueries', 'Aggregation', 'Window functions'],
        resources: []
      },
      {
        title: 'Data Visualization with Tableau',
        description: 'Creating compelling visualizations',
        duration: '3 weeks',
        topics: ['Tableau interface', 'Chart types', 'Interactive dashboards', 'Calculated fields'],
        resources: []
      },
      {
        title: 'Business Intelligence with Power BI',
        description: 'Microsoft BI ecosystem',
        duration: '2 weeks',
        topics: ['Power BI Desktop', 'Data modeling', 'DAX formulas', 'Report sharing'],
        resources: []
      },
      {
        title: 'Statistical Analysis',
        description: 'Statistical methods for business',
        duration: '1 week',
        topics: ['Descriptive statistics', 'Hypothesis testing', 'Regression analysis', 'Forecasting'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Executive Dashboard',
        description: 'Build a comprehensive business intelligence dashboard',
        difficulty: 'Medium',
        technologies: ['Tableau', 'SQL', 'Excel']
      }
    ],
    instructor: {
      name: 'Dr. Amanda Foster',
      bio: 'Data Analytics Director at McKinsey, MBA from Wharton',
      socialLinks: {
        github: 'https://github.com/amanda-analytics',
        linkedin: 'https://linkedin.com/in/dr-amanda-foster'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.6, count: 178 },
    enrollmentCount: 734,
    tags: ['business-analytics', 'tableau', 'sql', 'data-visualization', 'excel']
  },

  // Digital Marketing
  {
    title: 'Digital Marketing for Tech Companies',
    shortDescription: 'Master digital marketing strategies specifically for technology products and services',
    description: 'Learn comprehensive digital marketing including SEO, content marketing, social media, paid advertising, and growth hacking techniques for tech businesses.',
    level: 'Beginner',
    category: 'Digital Marketing',
    duration: '14 weeks',
    price: 329,
    originalPrice: 419,
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'SEMrush'],
    prerequisites: ['Basic marketing knowledge', 'Understanding of web technologies'],
    learningOutcomes: [
      'Develop comprehensive marketing strategies',
      'Execute effective SEO campaigns',
      'Create engaging content marketing',
      'Manage paid advertising campaigns',
      'Build marketing automation workflows',
      'Measure and optimize marketing ROI'
    ],
    modules: [
      {
        title: 'Digital Marketing Strategy',
        description: 'Foundation of digital marketing',
        duration: '2 weeks',
        topics: ['Marketing fundamentals', 'Customer personas', 'Marketing funnel', 'Channel selection'],
        resources: []
      },
      {
        title: 'Search Engine Optimization',
        description: 'Organic search visibility',
        duration: '3 weeks',
        topics: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Link building'],
        resources: []
      },
      {
        title: 'Content Marketing',
        description: 'Creating valuable content',
        duration: '3 weeks',
        topics: ['Content strategy', 'Blog writing', 'Video marketing', 'Content distribution'],
        resources: []
      },
      {
        title: 'Paid Advertising',
        description: 'PPC and social media ads',
        duration: '3 weeks',
        topics: ['Google Ads', 'Facebook advertising', 'Campaign optimization', 'Bid strategies'],
        resources: []
      },
      {
        title: 'Email Marketing and Automation',
        description: 'Direct customer communication',
        duration: '2 weeks',
        topics: ['Email campaigns', 'Marketing automation', 'Lead nurturing', 'Segmentation'],
        resources: []
      },
      {
        title: 'Analytics and Optimization',
        description: 'Measuring marketing performance',
        duration: '1 week',
        topics: ['Google Analytics', 'Conversion tracking', 'A/B testing', 'ROI measurement'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete Marketing Campaign',
        description: 'Launch a multi-channel marketing campaign',
        difficulty: 'Medium',
        technologies: ['Google Ads', 'Analytics', 'HubSpot', 'Mailchimp']
      }
    ],
    instructor: {
      name: 'Sarah Mitchell',
      bio: 'Growth Marketing Lead at Slack, Former HubSpot',
      socialLinks: {
        github: 'https://github.com/sarah-growth',
        linkedin: 'https://linkedin.com/in/sarah-mitchell-marketing'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.5, count: 234 },
    enrollmentCount: 1123,
    tags: ['digital-marketing', 'seo', 'content-marketing', 'google-ads', 'growth']
  },

  // Leadership and Management
  {
    title: 'Engineering Leadership and Team Management',
    shortDescription: 'Lead technical teams effectively with modern management practices and methodologies',
    description: 'Develop leadership skills specifically for engineering managers including team building, performance management, technical decision making, and organizational growth.',
    level: 'Advanced',
    category: 'Leadership',
    duration: '16 weeks',
    price: 429,
    originalPrice: 549,
    technologies: ['1:1 Frameworks', 'OKRs', 'Performance Tools', 'Communication Platforms'],
    prerequisites: ['Management experience', 'Technical background', 'Team leadership experience'],
    learningOutcomes: [
      'Build and lead high-performing teams',
      'Make effective technical decisions',
      'Manage performance and growth',
      'Navigate organizational challenges',
      'Develop strategic thinking skills',
      'Foster innovation and creativity'
    ],
    modules: [
      {
        title: 'Transition to Leadership',
        description: 'From individual contributor to manager',
        duration: '3 weeks',
        topics: ['Leadership mindset', 'Role transition', 'Delegation skills', 'Time management'],
        resources: []
      },
      {
        title: 'Building High-Performance Teams',
        description: 'Team dynamics and culture',
        duration: '3 weeks',
        topics: ['Team formation', 'Psychological safety', 'Diversity and inclusion', 'Remote team management'],
        resources: []
      },
      {
        title: 'Performance Management',
        description: 'Managing individual and team performance',
        duration: '3 weeks',
        topics: ['Goal setting', 'Regular feedback', 'Performance reviews', 'Career development'],
        resources: []
      },
      {
        title: 'Technical Decision Making',
        description: 'Architecture and technical strategy',
        duration: '2 weeks',
        topics: ['Technical debt management', 'Architecture decisions', 'Technology selection', 'Risk assessment'],
        resources: []
      },
      {
        title: 'Communication and Influence',
        description: 'Effective leadership communication',
        duration: '3 weeks',
        topics: ['Stakeholder management', 'Conflict resolution', 'Meeting facilitation', 'Presentation skills'],
        resources: []
      },
      {
        title: 'Strategic Leadership',
        description: 'Long-term thinking and planning',
        duration: '2 weeks',
        topics: ['Strategic planning', 'Resource allocation', 'Organizational change', 'Innovation management'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Team Transformation Plan',
        description: 'Develop a comprehensive team improvement strategy',
        difficulty: 'Hard',
        technologies: ['OKR Framework', 'Performance Tools']
      }
    ],
    instructor: {
      name: 'David Chen',
      bio: 'VP Engineering at Stripe, Former Engineering Director at Facebook',
      socialLinks: {
        github: 'https://github.com/david-leadership',
        linkedin: 'https://linkedin.com/in/david-chen-engineering'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.9, count: 156 },
    enrollmentCount: 567,
    tags: ['leadership', 'management', 'team-building', 'engineering', 'strategy']
  },

  // Entrepreneurship
  {
    title: 'Tech Startup Development and Launch',
    shortDescription: 'Build and launch a successful tech startup from idea to market',
    description: 'Complete guide to building a tech startup including idea validation, business model development, funding strategies, product development, and scaling.',
    level: 'Intermediate',
    category: 'Entrepreneurship',
    duration: '18 weeks',
    price: 449,
    originalPrice: 599,
    technologies: ['Lean Canvas', 'MVP Tools', 'Analytics', 'Pitch Decks', 'Financial Models'],
    prerequisites: ['Business basics', 'Product development experience', 'Market awareness'],
    learningOutcomes: [
      'Validate business ideas systematically',
      'Develop viable business models',
      'Build minimum viable products',
      'Secure funding and investment',
      'Scale operations effectively',
      'Navigate legal and regulatory issues'
    ],
    modules: [
      {
        title: 'Idea Generation and Validation',
        description: 'Finding and validating startup ideas',
        duration: '3 weeks',
        topics: ['Problem identification', 'Market research', 'Customer interviews', 'Idea validation'],
        resources: []
      },
      {
        title: 'Business Model Development',
        description: 'Creating sustainable business models',
        duration: '3 weeks',
        topics: ['Lean Canvas', 'Value propositions', 'Revenue models', 'Market sizing'],
        resources: []
      },
      {
        title: 'Product Development Strategy',
        description: 'Building your first product',
        duration: '4 weeks',
        topics: ['MVP development', 'Agile methodologies', 'User feedback loops', 'Product iteration'],
        resources: []
      },
      {
        title: 'Funding and Investment',
        description: 'Raising capital for growth',
        duration: '3 weeks',
        topics: ['Funding stages', 'Investor relations', 'Pitch preparation', 'Valuation methods'],
        resources: []
      },
      {
        title: 'Marketing and Customer Acquisition',
        description: 'Growing your customer base',
        duration: '2 weeks',
        topics: ['Growth strategies', 'Customer acquisition', 'Retention tactics', 'Viral marketing'],
        resources: []
      },
      {
        title: 'Operations and Scaling',
        description: 'Building scalable operations',
        duration: '2 weeks',
        topics: ['Team building', 'Process optimization', 'Technology scaling', 'International expansion'],
        resources: []
      },
      {
        title: 'Legal and Compliance',
        description: 'Navigating startup legal requirements',
        duration: '1 week',
        topics: ['Company formation', 'Intellectual property', 'Contracts', 'Compliance requirements'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete Startup Launch',
        description: 'Develop and launch a real startup',
        difficulty: 'Expert',
        technologies: ['MVP Platform', 'Analytics', 'Marketing Tools']
      }
    ],
    instructor: {
      name: 'Jennifer Walsh',
      bio: 'Serial Entrepreneur, 3 successful exits, Former YCombinator Partner',
      socialLinks: {
        github: 'https://github.com/jennifer-startup',
        linkedin: 'https://linkedin.com/in/jennifer-walsh-entrepreneur'
      }
    },
    featured: true,
    isPublished: true,
    rating: { average: 4.7, count: 189 },
    enrollmentCount: 445,
    tags: ['entrepreneurship', 'startup', 'business-model', 'funding', 'mvp']
  },

  // Financial Technology
  {
    title: 'Financial Technology and Cryptocurrency Development',
    shortDescription: 'Build fintech applications and understand cryptocurrency technologies',
    description: 'Learn to develop financial technology applications including payment systems, trading platforms, and blockchain-based financial products.',
    level: 'Advanced',
    category: 'Financial Technology',
    duration: '20 weeks',
    price: 499,
    originalPrice: 649,
    technologies: ['Python', 'JavaScript', 'Blockchain', 'APIs', 'Security', 'Compliance'],
    prerequisites: ['Programming experience', 'Financial concepts', 'Security awareness'],
    learningOutcomes: [
      'Build secure payment systems',
      'Develop trading algorithms',
      'Implement blockchain solutions',
      'Ensure regulatory compliance',
      'Handle financial data securely',
      'Create cryptocurrency applications'
    ],
    modules: [
      {
        title: 'Financial Technology Fundamentals',
        description: 'Core fintech concepts and regulations',
        duration: '3 weeks',
        topics: ['Financial systems', 'Regulatory landscape', 'Security requirements', 'Compliance frameworks'],
        resources: []
      },
      {
        title: 'Payment Systems Development',
        description: 'Building payment processing systems',
        duration: '4 weeks',
        topics: ['Payment gateways', 'API integration', 'Security protocols', 'Transaction processing'],
        resources: []
      },
      {
        title: 'Trading Platform Development',
        description: 'Creating financial trading systems',
        duration: '4 weeks',
        topics: ['Market data APIs', 'Order management', 'Risk management', 'Real-time processing'],
        resources: []
      },
      {
        title: 'Blockchain and Cryptocurrency',
        description: 'Decentralized financial systems',
        duration: '4 weeks',
        topics: ['Blockchain fundamentals', 'Smart contracts', 'DeFi protocols', 'Token development'],
        resources: []
      },
      {
        title: 'Security and Compliance',
        description: 'Financial security best practices',
        duration: '3 weeks',
        topics: ['Encryption methods', 'PCI compliance', 'Anti-money laundering', 'Fraud detection'],
        resources: []
      },
      {
        title: 'Advanced Fintech Topics',
        description: 'Emerging fintech technologies',
        duration: '2 weeks',
        topics: ['Machine learning in finance', 'Robo-advisors', 'Open banking', 'Central bank digital currencies'],
        resources: []
      }
    ],
    projects: [
      {
        title: 'Complete Trading Platform',
        description: 'Build a full-featured trading application',
        difficulty: 'Expert',
        technologies: ['Python', 'React', 'Blockchain', 'Security']
      }
    ],
    instructor: {
      name: 'Robert Kim',
      bio: 'Fintech Architect at Square, Former Goldman Sachs Quant',
      socialLinks: {
        github: 'https://github.com/robert-fintech',
        linkedin: 'https://linkedin.com/in/robert-kim-fintech'
      }
    },
    featured: false,
    isPublished: true,
    rating: { average: 4.8, count: 123 },
    enrollmentCount: 378,
    tags: ['fintech', 'cryptocurrency', 'blockchain', 'trading', 'payments']
  }
];

module.exports = { businessSkillsCourses };
