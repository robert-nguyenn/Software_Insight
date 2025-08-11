const express = require('express');
const { body } = require('express-validator');
const {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  approveTestimonial,
  deleteTestimonial,
  getFeaturedTestimonials,
  getTestimonialStats
} = require('../controllers/testimonialController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const testimonialValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('content')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Testimonial content must be between 10 and 1000 characters'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5')
];

// Public routes
router.get('/featured', getFeaturedTestimonials);
router.get('/', getTestimonials);
router.get('/:id', getTestimonial);
router.post('/', testimonialValidation, createTestimonial);

// Admin routes
router.get('/admin/stats', protect, admin, getTestimonialStats);
router.put('/:id', protect, admin, updateTestimonial);
router.put('/:id/approve', protect, admin, approveTestimonial);
router.delete('/:id', protect, admin, deleteTestimonial);

module.exports = router;
