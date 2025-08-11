const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getCourseStats
} = require('../controllers/courseController');
const { protect, admin, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/stats', protect, admin, getCourseStats);
router.get('/:id', getCourse);

// Protected routes
router.post('/:id/enroll', protect, enrollCourse);

// Admin routes
router.post('/', protect, admin, createCourse);
router.put('/:id', protect, admin, updateCourse);
router.delete('/:id', protect, admin, deleteCourse);

module.exports = router;
