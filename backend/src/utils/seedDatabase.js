const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Course = require('../models/Course');
const Testimonial = require('../models/Testimonial');
const Internship = require('../models/Internship');
const Contact = require('../models/Contact');
require('dotenv').config();

// Import roadmap data
const {
  frontendRoadmap,
  backendRoadmap,
  fullStackRoadmap,
  machineLearningRoadmap,
  dataEngineeringRoadmap,
  aiEngineeringRoadmap
} = require('./techRoadmapSeeds');

// Sample users
const sampleUsers = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@codelaunch.com',
    password: 'admin123',
    role: 'admin',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Administrator of CodeLaunch platform',
    enrolledCourses: []
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'student',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Computer Science student passionate about web development',
    enrolledCourses: []
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'student',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Data science enthusiast looking to break into tech',
    enrolledCourses: []
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah@example.com',
    password: 'password123',
    role: 'student',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Self-taught developer transitioning from marketing',
    enrolledCourses: []
  }
];

// Sample testimonials
const sampleTestimonials = [
  {
    name: 'Alex Rodriguez',
    role: 'Software Engineer at Google',
    company: 'Google',
    content: 'CodeLaunch\'s comprehensive roadmaps helped me land my dream job at Google. The structured approach and real-world projects were exactly what I needed to prepare for big tech interviews.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    featured: true,
    approved: true,
    course: null // Will be set after course creation
  },
  {
    name: 'Emily Chen',
    role: 'Data Scientist at Facebook',
    company: 'Meta',
    content: 'The Machine Learning roadmap is outstanding! It covers everything from basics to advanced topics. I was able to transition from a non-tech background to a data scientist role in just 4 months.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    featured: true,
    approved: true,
    course: null
  },
  {
    name: 'Michael Thompson',
    role: 'Frontend Developer at Netflix',
    company: 'Netflix',
    content: 'Amazing platform! The frontend roadmap is comprehensive and well-structured. The progress tracking feature kept me motivated throughout my learning journey.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    featured: true,
    approved: true,
    course: null
  },
  {
    name: 'Priya Patel',
    role: 'Backend Engineer at Amazon',
    company: 'Amazon',
    content: 'The backend development course helped me understand system design and scalability concepts that were crucial for my Amazon interview. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    featured: false,
    approved: true,
    course: null
  }
];

// Sample internships
const sampleInternships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on cutting-edge technology with experienced software engineers. Contribute to products used by billions of users worldwide.',
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Strong programming skills in Python, Java, or C++',
      'Understanding of data structures and algorithms',
      'Previous internship or project experience preferred'
    ],
    responsibilities: [
      'Develop and maintain software applications',
      'Collaborate with cross-functional teams',
      'Participate in code reviews and design discussions',
      'Work on real projects that impact millions of users'
    ],
    qualifications: [
      'Strong problem-solving skills',
      'Excellent communication abilities',
      'Ability to work in a fast-paced environment',
      'Passion for technology and innovation'
    ],
    benefits: [
      'Competitive stipend',
      'Housing assistance',
      'Mentorship program',
      'Access to Google facilities and events',
      'Full-time offer potential'
    ],
    applicationDeadline: new Date('2024-03-15'),
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-30'),
    isRemote: false,
    salaryRange: {
      min: 7000,
      max: 9000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://careers.google.com/internships',
    featured: true,
    tags: ['Python', 'Java', 'C++', 'Software Engineering', 'Big Tech'],
    experienceLevel: 'entry',
    category: 'Software Engineering',
    applicationCount: 245
  },
  {
    title: 'Data Science Intern',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Join our data science team to work on machine learning models and data analysis projects that impact billions of Facebook and Instagram users.',
    requirements: [
      'Pursuing a degree in Data Science, Statistics, or related field',
      'Proficiency in Python and SQL',
      'Experience with machine learning libraries (scikit-learn, pandas)',
      'Strong analytical and statistical skills'
    ],
    responsibilities: [
      'Develop machine learning models',
      'Analyze large datasets to derive insights',
      'Collaborate with product teams',
      'Present findings to stakeholders'
    ],
    qualifications: [
      'Strong mathematical background',
      'Experience with data visualization tools',
      'Knowledge of A/B testing',
      'Previous data science projects'
    ],
    benefits: [
      'Competitive compensation',
      'Housing stipend',
      'Access to Meta facilities',
      'Networking opportunities',
      'Return offer consideration'
    ],
    applicationDeadline: new Date('2024-02-28'),
    startDate: new Date('2024-05-15'),
    endDate: new Date('2024-08-15'),
    isRemote: false,
    salaryRange: {
      min: 8000,
      max: 10000,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://careers.facebook.com/internships',
    featured: true,
    tags: ['Python', 'SQL', 'Machine Learning', 'Data Science', 'Analytics'],
    experienceLevel: 'entry',
    category: 'Data Science',
    applicationCount: 189
  },
  {
    title: 'Frontend Engineering Intern',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Help build the next generation of Netflix\'s user interface. Work with React, TypeScript, and modern web technologies.',
    requirements: [
      'Strong knowledge of JavaScript, HTML, and CSS',
      'Experience with React or similar frameworks',
      'Understanding of responsive design principles',
      'Portfolio of frontend projects'
    ],
    responsibilities: [
      'Develop user-facing features',
      'Optimize applications for speed and scalability',
      'Work closely with designers and product managers',
      'Implement UI/UX designs'
    ],
    qualifications: [
      'Experience with modern frontend tools',
      'Knowledge of version control (Git)',
      'Understanding of web performance optimization',
      'Strong attention to detail'
    ],
    benefits: [
      'Competitive salary',
      'Netflix content access',
      'Professional development opportunities',
      'Mentorship program',
      'Full-time conversion possibility'
    ],
    applicationDeadline: new Date('2024-03-01'),
    startDate: new Date('2024-06-10'),
    endDate: new Date('2024-09-10'),
    isRemote: true,
    salaryRange: {
      min: 6500,
      max: 8500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://jobs.netflix.com/internships',
    featured: true,
    tags: ['React', 'TypeScript', 'JavaScript', 'Frontend', 'UI/UX'],
    experienceLevel: 'entry',
    category: 'Frontend Development',
    applicationCount: 156
  },
  {
    title: 'Backend Engineering Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    type: 'internship',
    duration: '12 weeks',
    description: 'Work on scalable backend systems that power Amazon\'s e-commerce platform. Gain experience with distributed systems and cloud technologies.',
    requirements: [
      'Proficiency in Java, Python, or C++',
      'Understanding of data structures and algorithms',
      'Knowledge of database systems',
      'Experience with API development'
    ],
    responsibilities: [
      'Design and implement backend services',
      'Optimize system performance',
      'Work with AWS cloud services',
      'Participate in system design discussions'
    ],
    qualifications: [
      'Strong problem-solving skills',
      'Experience with cloud platforms',
      'Understanding of microservices architecture',
      'Knowledge of DevOps practices'
    ],
    benefits: [
      'Competitive compensation',
      'AWS certification opportunities',
      'Relocation assistance',
      'Employee discounts',
      'Return offer potential'
    ],
    applicationDeadline: new Date('2024-02-15'),
    startDate: new Date('2024-05-20'),
    endDate: new Date('2024-08-20'),
    isRemote: false,
    salaryRange: {
      min: 7500,
      max: 9500,
      currency: 'USD',
      period: 'monthly'
    },
    applicationUrl: 'https://amazon.jobs/internships',
    featured: false,
    tags: ['Java', 'Python', 'AWS', 'Backend', 'Distributed Systems'],
    experienceLevel: 'entry',
    category: 'Backend Development',
    applicationCount: 203
  }
];

// Sample contacts
const sampleContacts = [
  {
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@email.com',
    subject: 'Question about the Machine Learning course',
    message: 'Hi, I\'m interested in the Machine Learning roadmap. Can you provide more details about the prerequisites and expected timeline?',
    category: 'course_inquiry',
    status: 'new',
    priority: 'medium'
  },
  {
    firstName: 'Lisa',
    lastName: 'Brown',
    email: 'lisa.brown@email.com',
    subject: 'Partnership opportunity',
    message: 'We are a tech recruitment company and would like to explore partnership opportunities with CodeLaunch.',
    category: 'business',
    status: 'in_progress',
    priority: 'high'
  },
  {
    firstName: 'Mark',
    lastName: 'Davis',
    email: 'mark.davis@email.com',
    subject: 'Technical issue with progress tracking',
    message: 'I\'m experiencing issues with the lesson completion tracking in the Frontend Development course. The checkboxes are not saving my progress.',
    category: 'technical_support',
    status: 'new',
    priority: 'high'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/software_insight');
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await Course.deleteMany({});
    await Testimonial.deleteMany({});
    await Internship.deleteMany({});
    await Contact.deleteMany({});

    // Create users
    console.log('Creating users...');
    const hashedUsers = await Promise.all(
      sampleUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );
    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`Created ${createdUsers.length} users`);

    // Create courses (roadmaps)
    console.log('Creating courses...');
    const roadmaps = [
      frontendRoadmap,
      backendRoadmap,
      fullStackRoadmap,
      machineLearningRoadmap,
      dataEngineeringRoadmap,
      aiEngineeringRoadmap
    ];

    const createdCourses = await Course.insertMany(roadmaps);
    console.log(`Created ${createdCourses.length} courses`);

    // Update testimonials with course references
    console.log('Creating testimonials...');
    const testimonialsWithCourses = sampleTestimonials.map((testimonial, index) => ({
      ...testimonial,
      course: index < createdCourses.length ? createdCourses[index]._id : null
    }));
    const createdTestimonials = await Testimonial.insertMany(testimonialsWithCourses);
    console.log(`Created ${createdTestimonials.length} testimonials`);

    // Create internships
    console.log('Creating internships...');
    const createdInternships = await Internship.insertMany(sampleInternships);
    console.log(`Created ${createdInternships.length} internships`);

    // Create contacts
    console.log('Creating contacts...');
    const createdContacts = await Contact.insertMany(sampleContacts);
    console.log(`Created ${createdContacts.length} contacts`);

    // Enroll some users in courses for testing
    console.log('Enrolling users in courses...');
    const studentUsers = createdUsers.filter(user => user.role === 'student');
    
    if (studentUsers.length > 0 && createdCourses.length > 0) {
      // Enroll first student in Frontend course
      await User.findByIdAndUpdate(studentUsers[0]._id, {
        $push: {
          enrolledCourses: {
            course: createdCourses[0]._id, // Frontend course
            enrolledAt: new Date(),
            progress: 15,
            lastAccessedAt: new Date()
          }
        }
      });

      // Enroll second student in Machine Learning course
      if (studentUsers.length > 1 && createdCourses.length > 3) {
        await User.findByIdAndUpdate(studentUsers[1]._id, {
          $push: {
            enrolledCourses: {
              course: createdCourses[3]._id, // Machine Learning course
              enrolledAt: new Date(),
              progress: 8,
              lastAccessedAt: new Date()
            }
          }
        });
      }

      // Enroll third student in multiple courses
      if (studentUsers.length > 2) {
        await User.findByIdAndUpdate(studentUsers[2]._id, {
          $push: {
            enrolledCourses: [
              {
                course: createdCourses[0]._id, // Frontend
                enrolledAt: new Date(),
                progress: 25,
                lastAccessedAt: new Date()
              },
              {
                course: createdCourses[1]._id, // Backend
                enrolledAt: new Date(),
                progress: 5,
                lastAccessedAt: new Date()
              }
            ]
          }
        });
      }
    }

    // Update course enrollment counts
    console.log('Updating course enrollment counts...');
    for (const course of createdCourses) {
      const enrollmentCount = await User.countDocuments({
        'enrolledCourses.course': course._id
      });
      await Course.findByIdAndUpdate(course._id, { enrollmentCount });
    }

    console.log('Database seeded successfully!');
    console.log('\nSample login credentials:');
    console.log('Admin: admin@codelaunch.com / admin123');
    console.log('Student: john@example.com / password123');
    console.log('Student: jane@example.com / password123');
    console.log('Student: sarah@example.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeder
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
