const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide an internship title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  company: {
    name: {
      type: String,
      required: [true, 'Please provide company name'],
      trim: true,
      maxlength: [100, 'Company name cannot be more than 100 characters']
    },
    logo: {
      type: String,
      default: null
    },
    website: {
      type: String,
      default: null
    },
    description: {
      type: String,
      maxlength: [500, 'Company description cannot be more than 500 characters']
    }
  },
  location: {
    city: {
      type: String,
      required: [true, 'Please provide city'],
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      required: [true, 'Please provide country'],
      trim: true
    },
    remote: {
      type: Boolean,
      default: false
    }
  },
  description: {
    type: String,
    required: [true, 'Please provide internship description'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  requirements: [{
    type: String,
    trim: true
  }],
  responsibilities: [{
    type: String,
    trim: true
  }],
  skills: [{
    type: String,
    trim: true
  }],
  duration: {
    type: String,
    required: [true, 'Please specify internship duration']
  },
  stipend: {
    amount: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'USD'
    },
    period: {
      type: String,
      enum: ['hourly', 'weekly', 'monthly', 'total'],
      default: 'monthly'
    }
  },
  applicationDeadline: {
    type: Date,
    required: [true, 'Please provide application deadline']
  },
  startDate: {
    type: Date,
    required: [true, 'Please provide start date']
  },
  endDate: {
    type: Date
  },
  applicationUrl: {
    type: String,
    required: [true, 'Please provide application URL']
  },
  contactEmail: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  category: {
    type: String,
    required: [true, 'Please specify category'],
    enum: ['Software Engineering', 'Data Science', 'Product Management', 'Design', 'DevOps', 'Mobile Development', 'AI/ML', 'Cybersecurity', 'Other']
  },
  level: {
    type: String,
    enum: ['Entry Level', 'Intermediate', 'Advanced'],
    default: 'Entry Level'
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Project-based'],
    default: 'Full-time'
  },
  featured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  applicationCount: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Create indexes
internshipSchema.index({ 'company.name': 'text', title: 'text', description: 'text' });
internshipSchema.index({ category: 1, level: 1 });
internshipSchema.index({ 'location.country': 1, 'location.remote': 1 });
internshipSchema.index({ applicationDeadline: 1 });
internshipSchema.index({ featured: -1, createdAt: -1 });

// Check if internship is expired
internshipSchema.virtual('isExpired').get(function() {
  return this.applicationDeadline < new Date();
});

module.exports = mongoose.model('Internship', internshipSchema);
