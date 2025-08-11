# Backend - Software Insight API

This is the backend API for the Software Insight platform, built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Course Management**: Full CRUD operations for courses with enrollment tracking
- **Testimonial System**: User testimonials with admin approval workflow
- **Internship Portal**: Job posting and application tracking system
- **Contact Management**: Contact form handling with email notifications
- **File Upload**: Image upload functionality with validation
- **Admin Dashboard**: Complete admin panel with statistics and management tools

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer
- **File Upload**: Multer
- **Validation**: Joi & Express-validator
- **Security**: Helmet, CORS, Rate limiting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/software_insight
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   FRONTEND_URL=http://localhost:3000
   ```

5. Seed the database with sample data:
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password
- `POST /api/auth/logout` - Logout user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/stats` - Get course statistics (Admin)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/featured` - Get featured testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial (Admin)
- `PUT /api/testimonials/:id/approve` - Approve testimonial (Admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (Admin)

### Internships
- `GET /api/internships` - Get all internships
- `GET /api/internships/featured` - Get featured internships
- `GET /api/internships/:id` - Get single internship
- `POST /api/internships` - Create internship (Admin)
- `PUT /api/internships/:id` - Update internship (Admin)
- `DELETE /api/internships/:id` - Delete internship (Admin)
- `POST /api/internships/:id/apply` - Track application

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (Admin)
- `GET /api/contact/:id` - Get single message (Admin)
- `PUT /api/contact/:id` - Update message status (Admin)
- `POST /api/contact/:id/respond` - Respond to message (Admin)
- `DELETE /api/contact/:id` - Delete message (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get single user (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)

### Upload
- `POST /api/upload/image` - Upload single image
- `POST /api/upload/images` - Upload multiple images

## Default Admin Account

After running the seed script, you can login with:
- **Email**: admin@softwareinsight.com
- **Password**: admin123

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/software_insight |
| JWT_SECRET | JWT secret key | - |
| JWT_EXPIRE | JWT expiration time | 7d |
| EMAIL_HOST | SMTP host | smtp.gmail.com |
| EMAIL_PORT | SMTP port | 587 |
| EMAIL_USER | SMTP username | - |
| EMAIL_PASS | SMTP password | - |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data
- `npm test` - Run tests

## Security Features

- Helmet for security headers
- CORS protection
- Rate limiting
- Input validation and sanitization
- Password hashing with bcrypt
- JWT authentication
- Role-based access control

## Error Handling

The API includes comprehensive error handling with:
- Custom error classes
- Centralized error handler middleware
- Detailed error responses in development
- Sanitized error responses in production

## Database Schema

The application uses MongoDB with the following main collections:
- **users** - User accounts and profiles
- **courses** - Course information and content
- **testimonials** - User testimonials and reviews
- **internships** - Internship opportunities
- **contacts** - Contact form submissions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
