const Course = require('../models/Course');
const User = require('../models/User');

class EnrollmentService {
  static async enrollUserInCourse(userId, courseId) {
    const course = await Course.findById(courseId);

    if (!course || !course.isPublished) {
      throw new Error('Course not found');
    }

    const user = await User.findById(userId);

    // Check if already enrolled
    const alreadyEnrolled = user.enrolledCourses.some(
      enrollment => enrollment.course.toString() === course._id.toString()
    );

    if (alreadyEnrolled) {
      throw new Error('Already enrolled in this course');
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

    return {
      success: true,
      message: 'Successfully enrolled in course',
      data: {
        course: course,
        enrolledAt: new Date(),
        progress: 0
      }
    };
  }

  static async getUserCourseProgress(userId, courseId) {
    // Find the user with enrolled course progress
    const user = await User.findById(userId).populate('enrolledCourses.course');
    if (!user) {
      throw new Error('User not found');
    }

    // Find the enrolled course
    const enrolledCourse = user.enrolledCourses.find(
      enrollment => enrollment.course._id.toString() === courseId
    );

    if (!enrolledCourse) {
      throw new Error('User is not enrolled in this course');
    }

    // Get course details
    const course = await Course.findById(courseId);
    const totalLessons = course.modules.reduce((total, module) => total + module.resources.length, 0);

    return {
      success: true,
      data: {
        courseId,
        progress: enrolledCourse.progress,
        completedLessons: enrolledCourse.completedLessons,
        totalLessons,
        enrolledAt: enrolledCourse.enrolledAt,
        lastAccessedAt: enrolledCourse.lastAccessedAt
      }
    };
  }
}

module.exports = EnrollmentService;
