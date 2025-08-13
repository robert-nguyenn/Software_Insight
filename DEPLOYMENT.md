# 🚀 Production Deployment Guide

## Overview
This guide covers deploying the Software Insight platform to production hosting providers.

## Recommended Hosting Providers

### Backend Options
1. **Railway** (Recommended) - Easy Node.js deployment
2. **Heroku** - Popular PaaS platform
3. **DigitalOcean App Platform** - Scalable container hosting
4. **Vercel** - For Node.js APIs
5. **AWS Elastic Beanstalk** - Enterprise solution

### Frontend Options
1. **Vercel** (Recommended) - Optimized for React
2. **Netlify** - Static site hosting with CDN
3. **AWS S3 + CloudFront** - Enterprise solution
4. **GitHub Pages** - Free option

### Database
- **MongoDB Atlas** (Required) - Cloud MongoDB hosting

## Quick Deploy Guide

### 1. Database Setup (MongoDB Atlas)
```bash
1. Go to https://cloud.mongodb.com
2. Create account and cluster
3. Get connection string: mongodb+srv://username:password@cluster.mongodb.net/software_insight
4. Add your deployment IP addresses to whitelist
```

### 2. Backend Deployment (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Set environment variables
railway variables set NODE_ENV=production
railway variables set MONGODB_URI=your_atlas_connection_string
railway variables set JWT_SECRET=your_super_secure_production_secret_256_chars_minimum
railway variables set FRONTEND_URL=https://your-frontend-domain.vercel.app
railway variables set EMAIL_USER=robert.nguyenanh@gmail.com
railway variables set EMAIL_PASS=your_gmail_app_password

# Deploy
railway up
```

### 3. Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# From frontend directory
cd frontend

# Create .env.production file
echo "REACT_APP_API_URL=https://your-railway-backend.railway.app/api" > .env.production

# Deploy
vercel --prod
```

## Environment Variables

### Backend Production Variables
```bash
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/software_insight
JWT_SECRET=your_super_secure_production_secret_minimum_256_characters_long
FRONTEND_URL=https://your-frontend-domain.vercel.app
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=robert.nguyenanh@gmail.com
EMAIL_PASS=your_gmail_app_password
BCRYPT_SALT_ROUNDS=12
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Production Variables
```bash
REACT_APP_API_URL=https://your-backend-domain.railway.app/api
REACT_APP_APP_NAME=Software Insight
REACT_APP_COMPANY_EMAIL=robert.nguyenanh@gmail.com
REACT_APP_COMPANY_PHONE=(859) 691-8194
REACT_APP_GITHUB_URL=https://github.com/robert-nguyenn
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/robert-nguyenn
```

## Manual Deployment Steps

### Backend (Railway/Heroku)
1. Create account on hosting provider
2. Connect GitHub repository
3. Set environment variables in dashboard
4. Deploy from main branch
5. Run database seeding (one-time): Add build command `npm run seed:full`

### Frontend (Vercel/Netlify)
1. Create account on hosting provider  
2. Connect GitHub repository to frontend folder
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Add environment variables
6. Deploy from main branch

## Database Seeding

### Option 1: One-time build command
Add to your hosting provider's build script:
```bash
npm install && npm run seed:full && npm start
```

### Option 2: Manual trigger
After deployment, run in hosting console:
```bash
npm run seed:full
```

### Option 3: Local seeding to production DB
```bash
# Set production MONGODB_URI in local .env
MONGODB_URI=mongodb+srv://production-uri
npm run seed:full
```

## Post-Deployment Checklist

### ✅ Backend Health Checks
- [ ] API health endpoint: `https://your-backend.com/api/health`
- [ ] Database connection working
- [ ] CORS configured for frontend domain
- [ ] Email service working (test contact form)
- [ ] All routes responding correctly

### ✅ Frontend Checks  
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] API calls working
- [ ] Images loading from correct paths
- [ ] Contact form submits successfully
- [ ] User registration/login working

### ✅ Data Verification
- [ ] 27 courses loaded
- [ ] 26 internships loaded  
- [ ] 12 testimonials loaded
- [ ] Admin user created
- [ ] Course enrollment working
- [ ] Progress tracking functional

## Domain Configuration

### Custom Domain Setup
1. **Frontend (Vercel)**
   - Add custom domain in Vercel dashboard
   - Update DNS CNAME records
   - SSL automatically configured

2. **Backend (Railway)**
   - Add custom domain in Railway dashboard
   - Update DNS A records or CNAME
   - Update CORS settings with new domain

### DNS Configuration
```
Type    Name    Value
CNAME   www     your-vercel-deployment.vercel.app
CNAME   api     your-railway-deployment.railway.app
```

## Performance Optimization

### Backend
- Enable compression (already configured)
- Use CDN for static assets
- Configure caching headers
- Monitor API response times

### Frontend
- Optimize images for web
- Enable service worker caching
- Configure CDN through hosting provider
- Monitor Core Web Vitals

## Security Considerations

### Production Security Checklist
- [ ] Strong JWT secret (256+ characters)
- [ ] HTTPS enforced on both domains
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation working
- [ ] Environment variables secured
- [ ] Database access restricted
- [ ] No sensitive data in logs

## Monitoring & Maintenance

### Health Monitoring
- Monitor API uptime
- Set up error alerts
- Monitor database performance
- Track user registration/activity

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Backup database regularly
- Test deployment pipeline

## Troubleshooting

### Common Issues
1. **CORS errors**: Check FRONTEND_URL environment variable
2. **Database connection**: Verify MongoDB Atlas connection string and IP whitelist
3. **API not loading**: Check backend URL in frontend environment variables
4. **Images not showing**: Verify image paths and CDN configuration
5. **Email not sending**: Check email credentials and Gmail app password

### Debug Commands
```bash
# Check environment variables
railway variables

# View logs
railway logs

# Connect to database
mongosh "your-atlas-connection-string"
```

## Cost Estimates

### Monthly Hosting Costs
- **MongoDB Atlas**: Free tier (512MB) or $9/month (shared)
- **Railway**: Free tier or $5/month per service
- **Vercel**: Free tier or $20/month (pro)
- **Total**: $0-35/month depending on usage

### Scaling Considerations
- Database: Upgrade Atlas tier as data grows
- Backend: Railway auto-scales, Heroku has dyno limits
- Frontend: CDN handles traffic spikes automatically

---

## 🎯 Ready for Production!

Your Software Insight platform is now production-ready with:
- ✅ Professional hosting setup
- ✅ Secure environment configuration
- ✅ Comprehensive data seeding
- ✅ Performance optimizations
- ✅ Monitoring and maintenance guides

**Perfect for showcasing to big tech recruiters!** 🚀
