const mongoose = require('mongoose');
const { 
  CourseService, 
  EnrollmentService, 
  ProgressService, 
  getMockCourses 
} = require('../services');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Return mock data when DB is not connected
      const result = getMockCourses(req.query);
      return res.status(200).json(result);
    }

    const result = await CourseService.getCourses(req.query);
    res.json(result);
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
const getCourse = async (req, res) => {
  try {
    const result = await CourseService.getCourseById(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Get course error:', error);
    if (error.message === 'Course not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = async (req, res) => {
  try {
    const result = await CourseService.createCourse(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private/Admin
const updateCourse = async (req, res) => {
  try {
    const result = await CourseService.updateCourse(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Update course error:', error);
    if (error.message === 'Course not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = async (req, res) => {
  try {
    const result = await CourseService.deleteCourse(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Delete course error:', error);
    if (error.message === 'Course not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Enroll in course
// @route   POST /api/courses/:id/enroll
// @access  Private
const enrollCourse = async (req, res) => {
  try {
    const result = await EnrollmentService.enrollUserInCourse(req.user.id, req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Enroll course error:', error);
    if (error.message === 'Course not found' || error.message === 'Already enrolled in this course') {
      const statusCode = error.message === 'Course not found' ? 404 : 400;
      return res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get course statistics
// @route   GET /api/courses/stats
// @access  Private/Admin
const getCourseStats = async (req, res) => {
  try {
    const result = await CourseService.getCourseStats();
    res.json(result);
  } catch (error) {
    console.error('Get course stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Mark lesson as completed
// @route   POST /api/courses/:id/complete-lesson
// @access  Private
const markLessonComplete = async (req, res) => {
  try {
    const { moduleIndex, resourceIndex } = req.body;
    const result = await ProgressService.markLessonComplete(
      req.user.id, 
      req.params.id, 
      moduleIndex, 
      resourceIndex
    );
    res.json(result);
  } catch (error) {
    console.error('Mark lesson complete error:', error);
    if (error.message.includes('required') || 
        error.message.includes('Invalid') || 
        error.message.includes('not found') ||
        error.message.includes('not enrolled') ||
        error.message.includes('already completed')) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      return res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Mark lesson as incomplete
// @route   DELETE /api/courses/:id/complete-lesson
// @access  Private
const markLessonIncomplete = async (req, res) => {
  try {
    const { moduleIndex, resourceIndex } = req.body;
    const result = await ProgressService.markLessonIncomplete(
      req.user.id, 
      req.params.id, 
      moduleIndex, 
      resourceIndex
    );
    res.json(result);
  } catch (error) {
    console.error('Mark lesson incomplete error:', error);
    if (error.message.includes('not found') || error.message.includes('not enrolled')) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      return res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get user's course progress
// @route   GET /api/courses/:id/progress
// @access  Private
const getUserCourseProgress = async (req, res) => {
  try {
    const result = await EnrollmentService.getUserCourseProgress(req.user.id, req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Get user course progress error:', error);
    if (error.message.includes('not found') || error.message.includes('not enrolled')) {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
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
};
