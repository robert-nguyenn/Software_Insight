# Software Insight - Course Platform Setup Guide

## 🎯 Overview

Software Insight is now a comprehensive course platform designed to help college students prepare for big tech internships in 3-6 months. The platform features detailed roadmaps for various tech career paths with lesson-by-lesson progress tracking.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd Software_Insight

# Setup Backend
cd backend
npm install

# Setup Frontend
cd ../frontend
npm install
```

### 2. Environment Configuration

Create `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/software_insight

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Cloudinary (optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

Create `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Database Setup

```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with comprehensive roadmaps
cd backend
npm run seed:full
```

This will create:
- ✅ 6 comprehensive tech roadmaps (Frontend, Backend, Full Stack, ML, Data Engineering, AI Engineering)
- ✅ Sample users (admin and students)
- ✅ Real testimonials from big tech employees
- ✅ Sample internship listings
- ✅ Test data with some users enrolled in courses

### 4. Start the Application

```bash
# Terminal 1: Start Backend
cd backend
npm run dev

# Terminal 2: Start Frontend
cd frontend
npm start
```

Visit: http://localhost:3000

## 🎓 Course Platform Features

### ✅ Comprehensive Roadmaps

1. **Frontend Development** (12 weeks)
   - HTML/CSS fundamentals
   - JavaScript & ES6+
   - React ecosystem
   - State management
   - Build tools & deployment

2. **Backend Development** (14 weeks)
   - Server fundamentals
   - Node.js & Express
   - Database design
   - API development
   - System design basics

3. **Full Stack Development** (16 weeks)
   - Combined frontend + backend
   - Authentication systems
   - Real-time features
   - DevOps basics
   - Portfolio projects

4. **Machine Learning** (12 weeks)
   - Python & data science stack
   - ML algorithms & theory
   - Deep learning with TensorFlow
   - MLOps and deployment
   - Industry applications

5. **Data Engineering** (14 weeks)
   - Data pipeline architecture
   - Big data tools (Spark, Kafka)
   - Cloud platforms (AWS, GCP)
   - Data warehousing
   - Real-time processing

6. **AI Engineering** (16 weeks)
   - Advanced ML concepts
   - Natural Language Processing
   - Computer Vision
   - MLOps at scale
   - Ethics and deployment

### ✅ Progress Tracking System

- **Lesson-level tracking**: Check off individual lessons as you complete them
- **Progress visualization**: See your completion percentage for each course
- **Module organization**: Courses are divided into digestible modules
- **Resource variety**: Videos, articles, documentation, tutorials, and interactive content
- **Estimated time**: Each lesson shows expected completion time
- **Difficulty levels**: Beginner, Intermediate, Advanced markers

### ✅ Sample Login Credentials

```
Admin Account:
Email: admin@softwareinsight.com
Password: admin123

Student Accounts:
Email: john@example.com
Password: password123

Email: jane@example.com  
Password: password123

Email: sarah@example.com
Password: password123
```

## 🛠 How to Use the Course Platform

### For Students:

1. **Browse Courses**: Visit the courses page to see all available roadmaps
2. **Course Details**: Click on any course to see detailed curriculum
3. **Enroll**: Click "Enroll Now" to start learning
4. **Track Progress**: Use checkboxes to mark lessons as complete
5. **Access Resources**: Click on lesson titles to open learning materials
6. **Monitor Progress**: See your completion percentage in real-time

### For Admins:

1. **User Management**: View and manage all registered users
2. **Course Analytics**: Monitor enrollment and completion rates
3. **Content Updates**: Add new courses or update existing ones
4. **Progress Monitoring**: Track student engagement and success

## 📚 Course Content Structure

Each roadmap includes:

### Real Learning Resources
- **YouTube Videos**: Curated playlists from top educators
- **Documentation**: Official docs from technology providers
- **Interactive Tutorials**: Hands-on coding exercises
- **Articles**: In-depth technical blog posts
- **Projects**: Real-world applications to build

### Progress Tracking
- **Module-based organization**: Clear learning paths
- **Checkbox completion**: Mark individual lessons complete
- **Progress bars**: Visual representation of course completion
- **Time estimates**: Plan your learning schedule
- **Difficulty indicators**: Know what to expect

### Learning Outcomes
- **Technical Skills**: Programming languages and frameworks
- **System Design**: Architecture and scalability concepts
- **Interview Prep**: Algorithm and data structure practice
- **Portfolio Building**: Projects to showcase your abilities
- **Industry Knowledge**: Current trends and best practices

## 🎯 3-6 Month Learning Plan

### Months 1-2: Foundation
- Choose your primary track (Frontend, Backend, etc.)
- Complete foundational modules
- Build first projects
- Start networking

### Months 3-4: Specialization
- Deep dive into advanced topics
- Work on larger projects
- Practice technical interviews
- Apply to internships

### Months 5-6: Interview Prep
- System design practice
- Mock interviews
- Portfolio refinement
- Final applications

## 🔧 Technical Architecture

### Backend Features:
- **Lesson Progress API**: Track completion at granular level
- **Course Enrollment**: Manage student registrations
- **Progress Analytics**: Calculate completion percentages
- **User Management**: Authentication and authorization
- **Real-time Updates**: Sync progress across devices

### Frontend Features:
- **Interactive UI**: Material-UI components
- **Progress Visualization**: Linear progress bars and completion stats
- **Resource Management**: Easy access to learning materials
- **Responsive Design**: Works on all devices
- **Real-time Sync**: Instant progress updates

### Database Schema:
- **Detailed Progress Tracking**: moduleIndex + resourceIndex system
- **Flexible Course Structure**: Nested modules and resources
- **User Enrollment Data**: Comprehensive learning analytics
- **Resource Metadata**: Types, durations, difficulty levels

## 🚀 Next Steps

The course platform is now fully functional! Here's what you can do next:

1. **Test the Platform**: Enroll in courses and test the progress tracking
2. **Add More Content**: Create additional roadmaps or update existing ones
3. **Implement Interview Prep**: Add algorithm practice and mock interviews
4. **Internship Integration**: Connect courses to relevant internship opportunities
5. **Analytics Dashboard**: Build detailed progress analytics for students

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify MongoDB is running
3. Ensure all environment variables are set
4. Check that both frontend and backend servers are running
5. Review the sample data was seeded correctly

The platform is now ready to help students achieve their big tech internship goals! 🎉
