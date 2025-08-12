const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getCourseStats,
  markLessonComplete,
  markLessonIncomplete,
  getUserCourseProgress
} = require('../controllers/courseController');
const { protect, admin, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/stats', protect, admin, getCourseStats);
router.get('/:id', getCourse);

// Protected routes
router.post('/:id/enroll', protect, enrollCourse);
router.post('/:id/complete-lesson', protect, markLessonComplete);
router.delete('/:id/complete-lesson', protect, markLessonIncomplete);
router.get('/:id/progress', protect, getUserCourseProgress);

// Admin routes
router.post('/', protect, admin, createCourse);
router.put('/:id', protect, admin, updateCourse);
router.delete('/:id', protect, admin, deleteCourse);

module.exports = router;
