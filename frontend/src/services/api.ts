import axios from 'axios';
import { 
  User, 
  Course, 
  Testimonial, 
  Internship, 
  Contact, 
  ApiResponse, 
  LoginCredentials, 
  RegisterData,
  ContactFormData,
  TestimonialFormData
} from '../types';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> =>
    api.post('/auth/login', credentials).then(res => res.data),
  
  register: (data: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> =>
    api.post('/auth/register', data).then(res => res.data),
  
  getMe: (): Promise<ApiResponse<User>> =>
    api.get('/auth/me').then(res => res.data),
  
  updateProfile: (data: Partial<User>): Promise<ApiResponse<User>> =>
    api.put('/auth/profile', data).then(res => res.data),
  
  changePassword: (data: { currentPassword: string; newPassword: string }): Promise<ApiResponse<void>> =>
    api.put('/auth/change-password', data).then(res => res.data),
  
  logout: (): Promise<ApiResponse<void>> =>
    api.post('/auth/logout').then(res => res.data),
};

// Courses API
export const coursesAPI = {
  getCourses: (params?: {
    page?: number;
    limit?: number;
    level?: string;
    category?: string;
    search?: string;
    featured?: boolean;
  }): Promise<ApiResponse<Course[]>> =>
    api.get('/courses', { params }).then(res => res.data),
  
  getCourse: (id: string): Promise<ApiResponse<Course>> =>
    api.get(`/courses/${id}`).then(res => res.data),
  
  enrollCourse: (id: string): Promise<ApiResponse<any>> =>
    api.post(`/courses/${id}/enroll`).then(res => res.data),
  
  // Admin only
  createCourse: (data: Partial<Course>): Promise<ApiResponse<Course>> =>
    api.post('/courses', data).then(res => res.data),
  
  updateCourse: (id: string, data: Partial<Course>): Promise<ApiResponse<Course>> =>
    api.put(`/courses/${id}`, data).then(res => res.data),
  
  deleteCourse: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/courses/${id}`).then(res => res.data),
  
  getCourseStats: (): Promise<ApiResponse<any>> =>
    api.get('/courses/stats').then(res => res.data),
};

// Testimonials API
export const testimonialsAPI = {
  getTestimonials: (params?: {
    page?: number;
    limit?: number;
    featured?: boolean;
    course?: string;
    rating?: number;
  }): Promise<ApiResponse<Testimonial[]>> =>
    api.get('/testimonials', { params }).then(res => res.data),
  
  getFeaturedTestimonials: (): Promise<ApiResponse<Testimonial[]>> =>
    api.get('/testimonials/featured').then(res => res.data),
  
  getTestimonial: (id: string): Promise<ApiResponse<Testimonial>> =>
    api.get(`/testimonials/${id}`).then(res => res.data),
  
  createTestimonial: (data: TestimonialFormData): Promise<ApiResponse<Testimonial>> =>
    api.post('/testimonials', data).then(res => res.data),
  
  // Admin only
  updateTestimonial: (id: string, data: Partial<Testimonial>): Promise<ApiResponse<Testimonial>> =>
    api.put(`/testimonials/${id}`, data).then(res => res.data),
  
  approveTestimonial: (id: string): Promise<ApiResponse<Testimonial>> =>
    api.put(`/testimonials/${id}/approve`).then(res => res.data),
  
  deleteTestimonial: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/testimonials/${id}`).then(res => res.data),
};

// Internships API
export const internshipsAPI = {
  getInternships: (params?: {
    page?: number;
    limit?: number;
    category?: string;
    level?: string;
    location?: string;
    remote?: boolean;
    company?: string;
    search?: string;
    featured?: boolean;
  }): Promise<ApiResponse<Internship[]>> =>
    api.get('/internships', { params }).then(res => res.data),
  
  getFeaturedInternships: (): Promise<ApiResponse<Internship[]>> =>
    api.get('/internships/featured').then(res => res.data),
  
  getInternship: (id: string): Promise<ApiResponse<Internship>> =>
    api.get(`/internships/${id}`).then(res => res.data),
  
  trackApplication: (id: string): Promise<ApiResponse<{ applicationUrl: string; applicationCount: number }>> =>
    api.post(`/internships/${id}/apply`).then(res => res.data),
  
  // Admin only
  createInternship: (data: Partial<Internship>): Promise<ApiResponse<Internship>> =>
    api.post('/internships', data).then(res => res.data),
  
  updateInternship: (id: string, data: Partial<Internship>): Promise<ApiResponse<Internship>> =>
    api.put(`/internships/${id}`, data).then(res => res.data),
  
  deleteInternship: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/internships/${id}`).then(res => res.data),
  
  getInternshipStats: (): Promise<ApiResponse<any>> =>
    api.get('/internships/admin/stats').then(res => res.data),
};

// Contact API
export const contactAPI = {
  submitContact: (data: ContactFormData): Promise<ApiResponse<{ id: string; submittedAt: string }>> =>
    api.post('/contact', data).then(res => res.data),
  
  // Admin only
  getContacts: (params?: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
    priority?: string;
    search?: string;
  }): Promise<ApiResponse<Contact[]>> =>
    api.get('/contact', { params }).then(res => res.data),
  
  getContact: (id: string): Promise<ApiResponse<Contact>> =>
    api.get(`/contact/${id}`).then(res => res.data),
  
  updateContact: (id: string, data: { status?: string; priority?: string; assignedTo?: string }): Promise<ApiResponse<Contact>> =>
    api.put(`/contact/${id}`, data).then(res => res.data),
  
  respondToContact: (id: string, message: string): Promise<ApiResponse<Contact>> =>
    api.post(`/contact/${id}/respond`, { message }).then(res => res.data),
  
  deleteContact: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/contact/${id}`).then(res => res.data),
  
  getContactStats: (): Promise<ApiResponse<any>> =>
    api.get('/contact/stats').then(res => res.data),
};

// Users API (Admin only)
export const usersAPI = {
  getUsers: (params?: {
    page?: number;
    limit?: number;
    role?: string;
    search?: string;
  }): Promise<ApiResponse<User[]>> =>
    api.get('/users', { params }).then(res => res.data),
  
  getUser: (id: string): Promise<ApiResponse<User>> =>
    api.get(`/users/${id}`).then(res => res.data),
  
  updateUser: (id: string, data: { role?: string; isActive?: boolean }): Promise<ApiResponse<User>> =>
    api.put(`/users/${id}`, data).then(res => res.data),
  
  deleteUser: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/users/${id}`).then(res => res.data),
  
  getUserStats: (): Promise<ApiResponse<any>> =>
    api.get('/users/admin/stats').then(res => res.data),
};

// Upload API
export const uploadAPI = {
  uploadImage: (file: File): Promise<ApiResponse<{ filename: string; url: string }>> => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(res => res.data);
  },
  
  uploadImages: (files: File[]): Promise<ApiResponse<{ filename: string; url: string }[]>> => {
    const formData = new FormData();
    files.forEach(file => formData.append('images', file));
    return api.post('/upload/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(res => res.data);
  },
};

export default api;
