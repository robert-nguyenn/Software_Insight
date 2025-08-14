@echo off
echo 🚀 CodeLaunch Database Setup
echo =============================
echo.

echo 📝 Please enter your MongoDB Atlas connection details:
echo.

set /p username="Enter your MongoDB username: "
set /p password="Enter your MongoDB password: "
set /p database="Enter your database name (default: codelaunch): "

if "%database%"=="" set database=codelaunch

echo.
echo 🔗 Setting MONGODB_URI environment variable...
set MONGODB_URI=mongodb+srv://%username%:%password%@softwareinsightcluster.mongodb.net/%database%?retryWrites=true^&w=majority

echo ✅ Environment variable set!
echo.

echo 🧪 Testing database connection...
node setup.js

echo.
echo 📋 To make this permanent, you can:
echo 1. Create a .env file in the backend directory
echo 2. Add: MONGODB_URI=mongodb+srv://%username%:***@softwareinsightcluster.mongodb.net/%database%
echo 3. Or set it in your system environment variables
echo.

pause 