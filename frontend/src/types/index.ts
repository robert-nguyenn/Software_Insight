export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  bio?: string;
  skills: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  enrolledCourses: EnrolledCourse[];
  isActive: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export interface EnrolledCourse {
  course: string | Course;
  enrolledAt: string;
  progress: number;
  completedLessons: CompletedLesson[];
  lastAccessedAt: string;
}

export interface CompletedLesson {
  moduleIndex: number;
  resourceIndex: number;
  completedAt: string;
}

export interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  technologies: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  modules: CourseModule[];
  projects: CourseProject[];
  instructor: Instructor;
  thumbnail?: string;
  featured: boolean;
  price: number;
  currency: string;
  rating: {
    average: number;
    count: number;
  };
  enrollmentCount: number;
  isPublished: boolean;
  publishedAt?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseModule {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  resources: CourseResource[];
}

export interface CourseResource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'documentation' | 'tutorial' | 'book' | 'interactive';
  description?: string;
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  isRequired?: boolean;
  estimatedTime?: string;
}

export interface CourseProject {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Instructor {
  name: string;
  bio?: string;
  avatar?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export interface Testimonial {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  course?: string | Course;
  featured: boolean;
  isApproved: boolean;
  approvedBy?: string | User;
  approvedAt?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Internship {
  _id: string;
  title: string;
  company: {
    name: string;
    logo?: string;
    website?: string;
    description?: string;
  };
  location: {
    city: string;
    state?: string;
    country: string;
    remote: boolean;
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  duration: string;
  stipend: {
    amount?: number;
    currency: string;
    period: 'hourly' | 'weekly' | 'monthly' | 'total';
  };
  applicationDeadline: string;
  startDate: string;
  endDate?: string;
  applicationUrl: string;
  contactEmail?: string;
  category: string;
  level: 'Entry Level' | 'Intermediate' | 'Advanced';
  type: 'Full-time' | 'Part-time' | 'Project-based';
  featured: boolean;
  isActive: boolean;
  viewCount: number;
  applicationCount: number;
  tags: string[];
  postedBy: string | User;
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string | User;
  response?: {
    message: string;
    respondedBy: string | User;
    respondedAt: string;
  };
  isRead: boolean;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: string;
}

export interface TestimonialFormData {
  name: string;
  email: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  course?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}
