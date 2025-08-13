const Course = require('../models/Course');
const User = require('../models/User');

class ProgressService {
  static async markLessonComplete(userId, courseId, moduleIndex, resourceIndex) {
    // Validate input
    if (moduleIndex === undefined || resourceIndex === undefined) {
      throw new Error('Module index and resource index are required');
    }

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    // Validate module and resource indices
    if (moduleIndex >= course.modules.length || 
        resourceIndex >= course.modules[moduleIndex].resources.length) {
      throw new Error('Invalid module or resource index');
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Find the enrolled course
    const enrolledCourseIndex = user.enrolledCourses.findIndex(
      enrollment => enrollment.course.toString() === courseId
    );

    if (enrolledCourseIndex === -1) {
      throw new Error('User is not enrolled in this course');
    }

    // Check if lesson is already completed
    const existingCompletion = user.enrolledCourses[enrolledCourseIndex].completedLessons.find(
      lesson => lesson.moduleIndex === moduleIndex && lesson.resourceIndex === resourceIndex
    );

    if (existingCompletion) {
      throw new Error('Lesson already completed');
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

    return {
      success: true,
      message: 'Lesson marked as completed',
      data: {
        progress: newProgress,
        completedLessons,
        totalLessons
      }
    };
  }

  static async markLessonIncomplete(userId, courseId, moduleIndex, resourceIndex) {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Find the enrolled course
    const enrolledCourseIndex = user.enrolledCourses.findIndex(
      enrollment => enrollment.course.toString() === courseId
    );

    if (enrolledCourseIndex === -1) {
      throw new Error('User is not enrolled in this course');
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

    return {
      success: true,
      message: 'Lesson marked as incomplete',
      data: {
        progress: newProgress,
        completedLessons,
        totalLessons
      }
    };
  }
}

module.exports = ProgressService;
