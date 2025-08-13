const Course = require('../models/Course');
const User = require('../models/User');

class CourseService {
  static async getCourses(query) {
    const {
      page = 1,
      limit = 10,
      level,
      category,
      search,
      sort = '-createdAt',
      featured
    } = query;

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

    return {
      success: true,
      data: courses,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    };
  }

  static async getCourseById(id) {
    const course = await Course.findOne({
      $or: [
        { _id: id },
        { slug: id }
      ],
      isPublished: true
    });

    if (!course) {
      throw new Error('Course not found');
    }

    return { success: true, data: course };
  }

  static async createCourse(courseData) {
    const course = await Course.create(courseData);
    return {
      success: true,
      message: 'Course created successfully',
      data: course
    };
  }

  static async updateCourse(id, updateData) {
    const course = await Course.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      throw new Error('Course not found');
    }

    return {
      success: true,
      message: 'Course updated successfully',
      data: course
    };
  }

  static async deleteCourse(id) {
    const course = await Course.findById(id);

    if (!course) {
      throw new Error('Course not found');
    }

    await course.deleteOne();

    return {
      success: true,
      message: 'Course deleted successfully'
    };
  }

  static async getCourseStats() {
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

    return {
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
    };
  }
}

module.exports = CourseService;
