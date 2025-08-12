require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

// Route imports
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const testimonialRoutes = require('./routes/testimonials');
const contactRoutes = require('./routes/contact');
const internshipRoutes = require('./routes/internships');
const userRoutes = require('./routes/users');
const uploadRoutes = require('./routes/upload');

// Middleware imports
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api', limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Software Insight API Server',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/api/health',
      courses: '/api/courses',
      internships: '/api/internships',
      auth: '/api/auth',
      testimonials: '/api/testimonials',
      contact: '/api/contact',
      users: '/api/users'
    }
  });
});

// Handle favicon requests to prevent 404 errors
app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('\n=== DATABASE CONNECTION TROUBLESHOOTING ===');
    console.log('1. Make sure MongoDB is installed and running locally');
    console.log('2. Install MongoDB Community Server from: https://www.mongodb.com/try/download/community');
    console.log('3. Start MongoDB service:');
    console.log('   - Windows: net start MongoDB');
    console.log('   - macOS/Linux: brew services start mongodb-community');
    console.log('4. Or use MongoDB Atlas (cloud): https://cloud.mongodb.com/');
    console.log('==========================================\n');
    return false;
  }
};

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const dbConnected = await connectDB();
  
  if (!dbConnected) {
    console.log('⚠️  Server starting without database connection');
    console.log('📝 API endpoints will return mock data until DB is connected');
  }
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`🌐 Backend API: http://localhost:${PORT}`);
    console.log(`📱 Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3001'}`);
  });
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

module.exports = app;
