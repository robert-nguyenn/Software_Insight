// Simple script to add data via HTTP API
const https = require('http');

const courseData = {
  title: 'Frontend Development',
  description: 'Master frontend development with HTML, CSS, JavaScript, and React. Build responsive websites and interactive web applications.',
  shortDescription: 'Master frontend development with HTML, CSS, JavaScript, and React.',
  level: 'Beginner',
  category: 'Frontend Development',
  duration: '4-6 months',
  technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  prerequisites: ['Basic computer skills'],
  learningOutcomes: ['Build responsive websites', 'Master JavaScript', 'Create React apps'],
  modules: [
    {
      title: 'HTML Fundamentals',
      description: 'Learn HTML basics',
      duration: '2 hours',
      topics: ['HTML structure', 'Elements', 'Forms'],
      resources: []
    }
  ],
  projects: [],
  instructor: {
    name: 'David Malan',
    bio: 'Professor at Harvard',
    avatar: '/images/davidmalan.jpg'
  },
  thumbnail: '/images/frontend.jpg',
  featured: true,
  price: 0,
  rating: { average: 4.8, count: 324 },
  enrollmentCount: 1250,
  isPublished: true,
  tags: ['html', 'css', 'javascript', 'react']
};

console.log('Use MongoDB Compass or Robo 3T to manually add this data:');
console.log(JSON.stringify(courseData, null, 2));
