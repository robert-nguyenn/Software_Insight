Write-Host "🚀 CodeLaunch Database Setup" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📝 Please enter your MongoDB Atlas connection details:" -ForegroundColor Yellow
Write-Host ""

$username = Read-Host "robertnguyenanh"
$password = Read-Host "115079Mongodb" -AsSecureString
$database = Read-Host "codelaunch"

if ([string]::IsNullOrEmpty($database)) {
    $database = "codelaunch"
}

Write-Host ""
Write-Host "🔗 Setting MONGODB_URI environment variable..." -ForegroundColor Green

# Convert secure string to plain text
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password)
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

$env:MONGODB_URI = "mongodb+srv://$username`:$plainPassword@softwareinsightcluster.mongodb.net/$database?retryWrites=true&w=majority"

Write-Host "✅ Environment variable set!" -ForegroundColor Green
Write-Host ""

Write-Host "🧪 Testing database connection..." -ForegroundColor Yellow
node setup.js

Write-Host ""
Write-Host "📋 To make this permanent, you can:" -ForegroundColor Cyan
Write-Host "1. Create a .env file in the backend directory"
Write-Host "2. Add: MONGODB_URI=mongodb+srv://$username:***@softwareinsightcluster.mongodb.net/$database"
Write-Host "3. Or set it in your system environment variables"
Write-Host ""

Read-Host "Press Enter to continue" 