// Mock data fallback when DB is not connected
const mockCourses = [
  {
    _id: '1',
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    description: 'Learn modern web development with React, Node.js, and MongoDB',
    category: 'Web Development',
    level: 'Intermediate',
    price: 299,
    duration: '12 weeks',
    featured: true,
    thumbnail: '/images/course1.jpg',
    instructor: { _id: '1', name: 'John Doe' },
    studentsEnrolled: 150,
    rating: 4.8,
    isPublished: true,
    createdAt: new Date('2024-01-01')
  },
  {
    _id: '2',
    title: 'React Development Masterclass',
    slug: 'react-development-masterclass',
    description: 'Master React with hooks, context, and modern patterns',
    category: 'Frontend',
    level: 'Intermediate',
    price: 199,
    duration: '8 weeks',
    featured: true,
    thumbnail: '/images/course2.jpg',
    instructor: { _id: '2', name: 'Jane Smith' },
    studentsEnrolled: 120,
    rating: 4.9,
    isPublished: true,
    createdAt: new Date('2024-01-15')
  },
  {
    _id: '3',
    title: 'Backend Development with Node.js',
    slug: 'backend-development-nodejs',
    description: 'Build scalable backend applications with Node.js and Express',
    category: 'Backend',
    level: 'Beginner',
    price: 249,
    duration: '10 weeks',
    featured: true,
    thumbnail: '/images/course3.jpg',
    instructor: { _id: '3', name: 'Mike Johnson' },
    studentsEnrolled: 95,
    rating: 4.7,
    isPublished: true,
    createdAt: new Date('2024-02-01')
  }
];

const getMockCourses = (query = {}) => {
  const {
    featured,
    limit = 10,
    category,
    level
  } = query;

  let filteredData = mockCourses;
  
  if (featured === 'true') {
    filteredData = mockCourses.filter(c => c.featured);
  }
  if (category) {
    filteredData = filteredData.filter(c => c.category === category);
  }
  if (level) {
    filteredData = filteredData.filter(c => c.level === level);
  }

  const limitedData = filteredData.slice(0, parseInt(limit));

  return {
    success: true,
    data: limitedData,
    pagination: {
      page: 1,
      pages: 1,
      count: limitedData.length,
      total: filteredData.length
    },
    message: 'Using mock data - Database not connected'
  };
};

module.exports = {
  mockCourses,
  getMockCourses
};
