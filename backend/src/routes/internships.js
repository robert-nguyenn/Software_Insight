const express = require('express');
const { body } = require('express-validator');
const {
  getInternships,
  getInternship,
  createInternship,
  updateInternship,
  deleteInternship,
  getFeaturedInternships,
  trackApplication,
  getInternshipStats
} = require('../controllers/internshipController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const internshipValidation = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Title must be between 5 and 100 characters'),
  body('company.name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Company name must be between 2 and 100 characters'),
  body('location.city')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('City must be between 2 and 50 characters'),
  body('location.country')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Country must be between 2 and 50 characters'),
  body('description')
    .trim()
    .isLength({ min: 50, max: 2000 })
    .withMessage('Description must be between 50 and 2000 characters'),
  body('duration')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Duration must be between 3 and 50 characters'),
  body('applicationDeadline')
    .isISO8601()
    .withMessage('Please provide a valid application deadline'),
  body('startDate')
    .isISO8601()
    .withMessage('Please provide a valid start date'),
  body('applicationUrl')
    .isURL()
    .withMessage('Please provide a valid application URL'),
  body('category')
    .isIn(['Software Engineering', 'Data Science', 'Product Management', 'Design', 'DevOps', 'Mobile Development', 'AI/ML', 'Cybersecurity', 'Other'])
    .withMessage('Please provide a valid category')
];

// Public routes
router.get('/featured', getFeaturedInternships);
router.get('/', getInternships);
router.get('/:id', getInternship);
router.post('/:id/apply', trackApplication);

// Admin routes
router.get('/admin/stats', protect, admin, getInternshipStats);
router.post('/', protect, admin, internshipValidation, createInternship);
router.put('/:id', protect, admin, updateInternship);
router.delete('/:id', protect, admin, deleteInternship);

module.exports = router;
