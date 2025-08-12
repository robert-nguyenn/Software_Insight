const Course = require('../models/Course');
const User = require('../models/User');
const mongoose = require('mongoose');

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

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  try {
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      // Return mock data when DB is not connected
      const {
        featured,
        limit = 10,
        category,
        level
      } = req.query;

      let filteredMockData = mockCourses;
      
      if (featured === 'true') {
        filteredMockData = mockCourses.filter(c => c.featured);
      }
      if (category) {
        filteredMockData = filteredMockData.filter(c => c.category === category);
      }
      if (level) {
        filteredMockData = filteredMockData.filter(c => c.level === level);
      }

      const limitedData = filteredMockData.slice(0, parseInt(limit));

      return res.status(200).json({
        success: true,
        data: limitedData,
        pagination: {
          page: 1,
          pages: 1,
          count: limitedData.length,
          total: filteredMockData.length
        },
        message: 'Using mock data - Database not connected'
      });
    }

    const {
      page = 1,
      limit = 10,
      level,
      category,
      search,
      sort = '-createdAt',
      featured
    } = req.query;

    // Build filter object
    const filter = { isPublished: true };

    if (level) filter.level = level;
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === 'true';

    if (search) {
      filter.$text = { $search: search };
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get courses with pagination
    const courses = await Course.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-modules'); // Exclude modules for list view

    // Get total count for pagination
    const total = await Course.countDocuments(filter);

    res.json({
      success: true,
      data: courses,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
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
    const course = await Course.findOne({
      $or: [
        { _id: req.params.id },
        { slug: req.params.id }
      ],
      isPublished: true
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Get course error:', error);
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
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course
    });
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
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      message: 'Course updated successfully',
      data: course
    });
  } catch (error) {
    console.error('Update course error:', error);
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
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    await course.deleteOne();

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Delete course error:', error);
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
    const course = await Course.findById(req.params.id);

    if (!course || !course.isPublished) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    const user = await User.findById(req.user.id);

    // Check if already enrolled
    const alreadyEnrolled = user.enrolledCourses.some(
      enrollment => enrollment.course.toString() === course._id.toString()
    );

    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: 'Already enrolled in this course'
      });
    }

    // Add course to user's enrolled courses
    user.enrolledCourses.push({
      course: course._id,
      enrolledAt: new Date(),
      progress: 0
    });

    await user.save();

    // Update course enrollment count
    course.enrollmentCount += 1;
    await course.save();

    res.json({
      success: true,
      message: 'Successfully enrolled in course',
      data: {
        course: course,
        enrolledAt: new Date(),
        progress: 0
      }
    });
  } catch (error) {
    console.error('Enroll course error:', error);
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
    const stats = await Course.aggregate([
      {
        $group: {
          _id: null,
          totalCourses: { $sum: 1 },
          publishedCourses: {
            $sum: { $cond: [{ $eq: ['$isPublished', true] }, 1, 0] }
          },
          totalEnrollments: { $sum: '$enrollmentCount' },
          averageRating: { $avg: '$rating.average' }
        }
      }
    ]);

    const levelStats = await Course.aggregate([
      { $match: { isPublished: true } },
      {
        $group: {
          _id: '$level',
          count: { $sum: 1 },
          totalEnrollments: { $sum: '$enrollmentCount' }
        }
      }
    ]);

    const categoryStats = await Course.aggregate([
      { $match: { isPublished: true } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          totalEnrollments: { $sum: '$enrollmentCount' }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || {
          totalCourses: 0,
          publishedCourses: 0,
          totalEnrollments: 0,
          averageRating: 0
        },
        byLevel: levelStats,
        byCategory: categoryStats
      }
    });
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
    const courseId = req.params.id;
    const userId = req.user.id;

    // Validate input
    if (moduleIndex === undefined || resourceIndex === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Module index and resource index are required'
      });
    }

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Validate module and resource indices
    if (moduleIndex >= course.modules.length || 
        resourceIndex >= course.modules[moduleIndex].resources.length) {
      return res.status(400).json({
        success: false,
        message: 'Invalid module or resource index'
      });
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Find the enrolled course
    const enrolledCourseIndex = user.enrolledCourses.findIndex(
      enrollment => enrollment.course.toString() === courseId
    );

    if (enrolledCourseIndex === -1) {
      return res.status(400).json({
        success: false,
        message: 'User is not enrolled in this course'
      });
    }

    // Check if lesson is already completed
    const existingCompletion = user.enrolledCourses[enrolledCourseIndex].completedLessons.find(
      lesson => lesson.moduleIndex === moduleIndex && lesson.resourceIndex === resourceIndex
    );

    if (existingCompletion) {
      return res.status(400).json({
        success: false,
        message: 'Lesson already completed'
      });
    }

    // Mark lesson as completed
    user.enrolledCourses[enrolledCourseIndex].completedLessons.push({
      moduleIndex,
      resourceIndex,
      completedAt: new Date()
    });

    // Update last accessed time
    user.enrolledCourses[enrolledCourseIndex].lastAccessedAt = new Date();

    // Calculate new progress
    const totalLessons = course.modules.reduce((total, module) => total + module.resources.length, 0);
    const completedLessons = user.enrolledCourses[enrolledCourseIndex].completedLessons.length;
    const newProgress = Math.round((completedLessons / totalLessons) * 100);
    
    user.enrolledCourses[enrolledCourseIndex].progress = newProgress;

    await user.save();

    res.json({
      success: true,
      message: 'Lesson marked as completed',
      data: {
        progress: newProgress,
        completedLessons,
        totalLessons
      }
    });
  } catch (error) {
    console.error('Mark lesson complete error:', error);
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
    const courseId = req.params.id;
    const userId = req.user.id;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Find the enrolled course
    const enrolledCourseIndex = user.enrolledCourses.findIndex(
      enrollment => enrollment.course.toString() === courseId
    );

    if (enrolledCourseIndex === -1) {
      return res.status(400).json({
        success: false,
        message: 'User is not enrolled in this course'
      });
    }

    // Remove the completed lesson
    user.enrolledCourses[enrolledCourseIndex].completedLessons = user.enrolledCourses[enrolledCourseIndex].completedLessons.filter(
      lesson => !(lesson.moduleIndex === moduleIndex && lesson.resourceIndex === resourceIndex)
    );

    // Update last accessed time
    user.enrolledCourses[enrolledCourseIndex].lastAccessedAt = new Date();

    // Calculate new progress
    const course = await Course.findById(courseId);
    const totalLessons = course.modules.reduce((total, module) => total + module.resources.length, 0);
    const completedLessons = user.enrolledCourses[enrolledCourseIndex].completedLessons.length;
    const newProgress = Math.round((completedLessons / totalLessons) * 100);
    
    user.enrolledCourses[enrolledCourseIndex].progress = newProgress;

    await user.save();

    res.json({
      success: true,
      message: 'Lesson marked as incomplete',
      data: {
        progress: newProgress,
        completedLessons,
        totalLessons
      }
    });
  } catch (error) {
    console.error('Mark lesson incomplete error:', error);
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
    const courseId = req.params.id;
    const userId = req.user.id;

    // Find the user with enrolled course progress
    const user = await User.findById(userId).populate('enrolledCourses.course');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Find the enrolled course
    const enrolledCourse = user.enrolledCourses.find(
      enrollment => enrollment.course._id.toString() === courseId
    );

    if (!enrolledCourse) {
      return res.status(404).json({
        success: false,
        message: 'User is not enrolled in this course'
      });
    }

    // Get course details
    const course = await Course.findById(courseId);
    const totalLessons = course.modules.reduce((total, module) => total + module.resources.length, 0);

    res.json({
      success: true,
      data: {
        courseId,
        progress: enrolledCourse.progress,
        completedLessons: enrolledCourse.completedLessons,
        totalLessons,
        enrolledAt: enrolledCourse.enrolledAt,
        lastAccessedAt: enrolledCourse.lastAccessedAt
      }
    });
  } catch (error) {
    console.error('Get user course progress error:', error);
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
