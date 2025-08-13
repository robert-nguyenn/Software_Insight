const CourseService = require('./courseService');
const EnrollmentService = require('./enrollmentService');
const ProgressService = require('./progressService');
const { getMockCourses } = require('./mockDataService');

module.exports = {
  CourseService,
  EnrollmentService,
  ProgressService,
  getMockCourses
};
