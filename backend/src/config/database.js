const mongoose = require('mongoose');

// Database configuration
const getMongoURI = () => {
  // Check if MONGODB_URI is set in environment
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }
  
  // Fallback to local MongoDB if no environment variable
  const dbName = process.env.DB_NAME || 'codelaunch';
  return `mongodb://localhost:27017/${dbName}`;
};

const connectDB = async () => {
  try {
    const mongoURI = getMongoURI();
    console.log(`🔌 Attempting to connect to MongoDB...`);
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    
    // Provide helpful troubleshooting information
    console.log('\n=== DATABASE CONNECTION TROUBLESHOOTING ===');
    console.log('1. Set MONGODB_URI environment variable:');
    console.log('   MONGODB_URI=mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>');
    console.log('');
    console.log('2. Or use local MongoDB:');
    console.log('   - Install MongoDB Community Server');
    console.log('   - Start MongoDB service');
    console.log('   - Default connection: mongodb://localhost:27017/codelaunch');
    console.log('');
    console.log('3. For MongoDB Atlas:');
    console.log('   - Get connection string from your cluster');
    console.log('   - Replace <username>, <password>, and <database_name>');
    console.log('==========================================\n');
    
    return false;
  }
};

module.exports = { connectDB, getMongoURI }; 