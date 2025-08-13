// Manual data insertion script using HTTP requests
const courses = [
  {
    title: 'Frontend Development',
    description: 'Master the skills, land internships, and ace interviews with our comprehensive platform designed by industry experts.',
    category: 'Technology',
    level: 'Beginner to Advanced',
    duration: '4-6 months',
    price: 0,
    featured: true,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Frontend'],
    instructor: {
      name: 'David Malan',
      bio: 'Professor of Computer Science at Harvard University',
      avatar: '/images/davidmalan.jpg'
    },
    thumbnail: '/images/frontend.jpg',
    enrollmentCount: 1250,
    rating: 4.8,
    reviewCount: 324,
    lessons: [
      {
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        duration: '2 hours',
        type: 'video',
        completed: false
      }
    ]
  }
];

const internships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers.',
    requirements: ['Currently pursuing a degree in Computer Science', 'Strong programming skills'],
    responsibilities: ['Develop software applications', 'Collaborate with teams'],
    qualifications: ['Strong problem-solving skills', 'Excellent communication'],
    benefits: ['Competitive stipend', 'Housing assistance', 'Mentorship program'],
    applicationDeadline: '2024-12-15',
    startDate: '2025-06-01',
    endDate: '2025-08-30',
    isRemote: false,
    salaryRange: {
      min: 7000,
      max: 9000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://careers.google.com/internships',
    featured: true,
    tags: ['Python', 'Java', 'C++', 'Software Engineering'],
    experienceLevel: 'entry',
    category: 'Software Engineering',
    applicationCount: 245
  }
];

// You can copy these objects and manually insert them via your API or MongoDB directly
