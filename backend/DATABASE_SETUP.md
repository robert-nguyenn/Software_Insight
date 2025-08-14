# 🗄️ Database Setup Guide

This guide will help you set up the MongoDB database connection for CodeLaunch.

## 🚀 Quick Setup (Recommended)

### Option 1: Windows Batch File
1. Double-click `setup-database.bat`
2. Enter your MongoDB Atlas credentials when prompted
3. The script will test the connection and set up your environment

### Option 2: PowerShell Script
1. Right-click `setup-database.ps1` and select "Run with PowerShell"
2. Enter your MongoDB Atlas credentials when prompted
3. The script will test the connection and set up your environment

### Option 3: Manual Setup
1. Run `npm run setup` to check your current configuration
2. Set the environment variable manually (see below)

## 🔧 Manual Environment Variable Setup

### For PowerShell (Current Session)
```powershell
$env:MONGODB_URI="mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>?retryWrites=true&w=majority"
```

### For Command Prompt (Current Session)
```cmd
set MONGODB_URI=mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>?retryWrites=true&w=majority
```

### For Permanent Setup
Create a `.env` file in the backend directory with:
```
MONGODB_URI=mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>?retryWrites=true&w=majority
DB_NAME=codelaunch
NODE_ENV=development
```

## 📊 MongoDB Atlas Connection String

Your connection string should look like this:
```
mongodb+srv://<username>:<password>@softwareinsightcluster.mongodb.net/<database_name>?retryWrites=true&w=majority
```

**Replace:**
- `<username>`: Your MongoDB Atlas username
- `<password>`: Your MongoDB Atlas password  
- `<database_name>`: The name of your database (e.g., `codelaunch`)

## 🧪 Testing the Connection

After setting the environment variable, test the connection:

```bash
npm run setup
```

This will:
- Check if MONGODB_URI is set
- Test the database connection
- Provide troubleshooting information if needed

## 🌱 Seeding the Database

Once connected, seed your database with sample data:

```bash
# Quick seed (recommended for testing)
npm run quick-seed

# Full seed (comprehensive data)
npm run seed:full
```

## 🚀 Starting the Server

After successful connection and seeding:

```bash
npm start
```

## 🔍 Troubleshooting

### Common Issues:

1. **"MONGODB_URI is not defined"**
   - Make sure you've set the environment variable
   - Use one of the setup scripts above

2. **"Authentication failed"**
   - Check your username and password
   - Ensure your IP is whitelisted in MongoDB Atlas

3. **"Connection timeout"**
   - Check your internet connection
   - Verify the cluster name in your connection string

4. **"Database not found"**
   - The database will be created automatically when you first connect
   - Make sure the database name in your connection string is correct

### Getting Help:

1. Run `npm run setup` for diagnostic information
2. Check the console output for specific error messages
3. Verify your MongoDB Atlas cluster is running
4. Ensure your network allows outbound connections to MongoDB Atlas

## 📚 Next Steps

After successful setup:
1. ✅ Database connection established
2. ✅ Sample data seeded
3. ✅ Server running
4. 🎉 Your courses and internships should now appear in the frontend!

## 🔐 Security Notes

- Never commit your `.env` file to version control
- Use strong, unique passwords for your MongoDB Atlas account
- Consider using MongoDB Atlas IP whitelisting for additional security
- Regularly rotate your database credentials 