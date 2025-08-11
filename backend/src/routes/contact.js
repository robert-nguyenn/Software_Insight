const express = require('express');
const { body } = require('express-validator');
const {
  submitContact,
  getContacts,
  getContact,
  updateContact,
  respondToContact,
  deleteContact,
  getContactStats
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

const responseValidation = [
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Response message must be between 10 and 2000 characters')
];

// Public routes
router.post('/', contactValidation, submitContact);

// Admin routes
router.get('/', protect, admin, getContacts);
router.get('/stats', protect, admin, getContactStats);
router.get('/:id', protect, admin, getContact);
router.put('/:id', protect, admin, updateContact);
router.post('/:id/respond', protect, admin, responseValidation, respondToContact);
router.delete('/:id', protect, admin, deleteContact);

module.exports = router;
