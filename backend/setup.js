const { connectDB } = require('./src/config/database');
const mongoose = require('mongoose');

console.log('🚀 CodeLaunch Database Setup');
console.log('=============================\n');

// Check if MONGODB_URI is set
if (process.env.MONGODB_URI) {
  console.log('✅ MONGODB_URI environment variable is set');
  console.log(`🔗 Connection string: ${process.env.MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`);
} else {
  console.log('⚠️  MONGODB_URI environment variable is NOT set');
  console.log('\n📝 To set it, run one of these commands:');
  console.log('\nFor PowerShell:');
  console.log('$env:MONGODB_URI="mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>"');
  console.log('\nFor Command Prompt:');
  console.log('set MONGODB_URI=mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>');
  console.log('\nFor permanent setup, create a .env file in the backend directory with:');
  console.log('MONGODB_URI=mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>');
  console.log('\n🔍 Replace <username>, <password>, and <database_name> with your actual values');
}

console.log('\n📊 Current database configuration:');
console.log(`Database Name: ${process.env.DB_NAME || 'codelaunch'}`);
console.log(`Node Environment: ${process.env.NODE_ENV || 'development'}`);

console.log('\n🔄 Testing database connection...');

// Test connection
connectDB()
  .then((connected) => {
    if (connected) {
      console.log('\n✅ Database connection successful!');
      console.log('🎉 You can now run the seed script or start the server');
      console.log('\nTo seed the database:');
      console.log('npm run seed');
      console.log('\nTo start the server:');
      console.log('npm start');
    } else {
      console.log('\n❌ Database connection failed');
      console.log('Please check your connection string and try again');
    }
    
    // Close connection
    if (mongoose.connection.readyState === 1) {
      mongoose.connection.close();
    }
    
    process.exit(connected ? 0 : 1);
  })
  .catch((error) => {
    console.error('❌ Setup error:', error.message);
    process.exit(1);
  }); 