const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  level: {
    type: String,
    required: [true, 'Please specify course level'],
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  category: {
    type: String,
    required: [true, 'Please specify course category'],
    enum: ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps', 'Data Science', 'AI/ML', 'Other']
  },
  duration: {
    type: String,
    required: [true, 'Please specify course duration']
  },
  technologies: [{
    type: String,
    trim: true
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
  learningOutcomes: [{
    type: String,
    trim: true
  }],
  modules: [{
    title: {
      type: String,
      required: true
    },
    description: String,
    duration: String,
    topics: [String],
    resources: [{
      title: String,
      url: String,
      type: {
        type: String,
        enum: ['video', 'article', 'documentation', 'tutorial', 'book', 'interactive']
      },
      description: String,
      duration: String,
      difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Beginner'
      },
      isRequired: {
        type: Boolean,
        default: true
      },
      estimatedTime: String
    }]
  }],
  projects: [{
    title: {
      type: String,
      required: true
    },
    description: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium'
    },
    technologies: [String],
    githubUrl: String,
    demoUrl: String
  }],
  instructor: {
    name: {
      type: String,
      required: true
    },
    bio: String,
    avatar: String,
    socialLinks: {
      github: String,
      linkedin: String,
      portfolio: String
    }
  },
  thumbnail: {
    type: String,
    default: null
  },
  featured: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  enrollmentCount: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }]
}, {
  timestamps: true
});

// Generate slug before saving
courseSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '-');
  }
  
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Create indexes
courseSchema.index({ title: 'text', description: 'text', tags: 'text' });
courseSchema.index({ level: 1, category: 1 });
courseSchema.index({ rating: -1 });
courseSchema.index({ enrollmentCount: -1 });

module.exports = mongoose.model('Course', courseSchema);
