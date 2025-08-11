import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  coursesAPI, 
  testimonialsAPI, 
  internshipsAPI, 
  contactAPI,
  usersAPI,
  uploadAPI 
} from '../services/api';
import { 
  Course, 
  Internship,
  ContactFormData,
  TestimonialFormData
} from '../types';
import { toast } from 'react-toastify';

// Query Keys
export const queryKeys = {
  courses: 'courses',
  course: (id: string) => ['course', id],
  testimonials: 'testimonials',
  featuredTestimonials: 'featured-testimonials',
  internships: 'internships',
  featuredInternships: 'featured-internships',
  internship: (id: string) => ['internship', id],
  contacts: 'contacts',
  users: 'users',
  user: (id: string) => ['user', id],
  courseStats: 'course-stats',
  internshipStats: 'internship-stats',
  contactStats: 'contact-stats',
  userStats: 'user-stats',
};

// Courses Hooks
export const useCourses = (params?: {
  page?: number;
  limit?: number;
  level?: string;
  category?: string;
  search?: string;
  featured?: boolean;
}) => {
  return useQuery({
    queryKey: [queryKeys.courses, params],
    queryFn: () => coursesAPI.getCourses(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: queryKeys.course(id),
    queryFn: () => coursesAPI.getCourse(id),
    enabled: !!id,
  });
};

export const useEnrollCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (courseId: string) => coursesAPI.enrollCourse(courseId),
    onSuccess: () => {
      toast.success('Successfully enrolled in course!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.courses] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to enroll in course');
    },
  });
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Course>) => coursesAPI.createCourse(data),
    onSuccess: () => {
      toast.success('Course created successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.courses] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to create course');
    },
  });
};

export const useUpdateCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Course> }) => 
      coursesAPI.updateCourse(id, data),
    onSuccess: (_, { id }) => {
      toast.success('Course updated successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.courses] });
      queryClient.invalidateQueries({ queryKey: queryKeys.course(id) });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to update course');
    },
  });
};

export const useDeleteCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => coursesAPI.deleteCourse(id),
    onSuccess: () => {
      toast.success('Course deleted successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.courses] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to delete course');
    },
  });
};

// Testimonials Hooks
export const useTestimonials = (params?: {
  page?: number;
  limit?: number;
  featured?: boolean;
  course?: string;
  rating?: number;
}) => {
  return useQuery({
    queryKey: [queryKeys.testimonials, params],
    queryFn: () => testimonialsAPI.getTestimonials(params),
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedTestimonials = () => {
  return useQuery({
    queryKey: [queryKeys.featuredTestimonials],
    queryFn: () => testimonialsAPI.getFeaturedTestimonials(),
    staleTime: 10 * 60 * 1000, // 10 minutes for featured content
  });
};

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: TestimonialFormData) => testimonialsAPI.createTestimonial(data),
    onSuccess: () => {
      toast.success('Thank you for your testimonial! It will be reviewed shortly.');
      queryClient.invalidateQueries({ queryKey: [queryKeys.testimonials] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to submit testimonial');
    },
  });
};

export const useApproveTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => testimonialsAPI.approveTestimonial(id),
    onSuccess: () => {
      toast.success('Testimonial approved successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.testimonials] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.featuredTestimonials] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to approve testimonial');
    },
  });
};

// Internships Hooks
export const useInternships = (params?: {
  page?: number;
  limit?: number;
  category?: string;
  level?: string;
  location?: string;
  remote?: boolean;
  company?: string;
  search?: string;
  featured?: boolean;
}) => {
  return useQuery({
    queryKey: [queryKeys.internships, params],
    queryFn: () => internshipsAPI.getInternships(params),
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedInternships = () => {
  return useQuery({
    queryKey: [queryKeys.featuredInternships],
    queryFn: () => internshipsAPI.getFeaturedInternships(),
    staleTime: 10 * 60 * 1000,
  });
};

export const useInternship = (id: string) => {
  return useQuery({
    queryKey: queryKeys.internship(id),
    queryFn: () => internshipsAPI.getInternship(id),
    enabled: !!id,
  });
};

export const useTrackApplication = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => internshipsAPI.trackApplication(id),
    onSuccess: (data, id) => {
      toast.success('Application tracked! Good luck!');
      queryClient.invalidateQueries({ queryKey: queryKeys.internship(id) });
      queryClient.invalidateQueries({ queryKey: [queryKeys.internships] });
      
      // Open application URL if provided
      if (data.data.applicationUrl) {
        window.open(data.data.applicationUrl, '_blank');
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to track application');
    },
  });
};

export const useCreateInternship = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Internship>) => internshipsAPI.createInternship(data),
    onSuccess: () => {
      toast.success('Internship created successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.internships] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to create internship');
    },
  });
};

// Contact Hooks
export const useSubmitContact = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => contactAPI.submitContact(data),
    onSuccess: () => {
      toast.success('Thank you for your message! We\'ll get back to you soon.');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to send message');
    },
  });
};

export const useContacts = (params?: {
  page?: number;
  limit?: number;
  status?: string;
  category?: string;
  priority?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: [queryKeys.contacts, params],
    queryFn: () => contactAPI.getContacts(params),
    staleTime: 2 * 60 * 1000, // 2 minutes for admin data
  });
};

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { 
      id: string; 
      data: { status?: string; priority?: string; assignedTo?: string } 
    }) => contactAPI.updateContact(id, data),
    onSuccess: () => {
      toast.success('Contact updated successfully!');
      queryClient.invalidateQueries({ queryKey: [queryKeys.contacts] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to update contact');
    },
  });
};

// Upload Hooks
export const useUploadImage = () => {
  return useMutation({
    mutationFn: (file: File) => uploadAPI.uploadImage(file),
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to upload image');
    },
  });
};

export const useUploadImages = () => {
  return useMutation({
    mutationFn: (files: File[]) => uploadAPI.uploadImages(files),
    onError: (error: any) => {
      toast.error(error.response?.data?.error || 'Failed to upload images');
    },
  });
};

// Statistics Hooks
export const useCourseStats = () => {
  return useQuery({
    queryKey: [queryKeys.courseStats],
    queryFn: () => coursesAPI.getCourseStats(),
    staleTime: 15 * 60 * 1000, // 15 minutes for stats
  });
};

export const useInternshipStats = () => {
  return useQuery({
    queryKey: [queryKeys.internshipStats],
    queryFn: () => internshipsAPI.getInternshipStats(),
    staleTime: 15 * 60 * 1000,
  });
};

export const useContactStats = () => {
  return useQuery({
    queryKey: [queryKeys.contactStats],
    queryFn: () => contactAPI.getContactStats(),
    staleTime: 5 * 60 * 1000, // 5 minutes for contact stats
  });
};

export const useUserStats = () => {
  return useQuery({
    queryKey: [queryKeys.userStats],
    queryFn: () => usersAPI.getUserStats(),
    staleTime: 15 * 60 * 1000,
  });
};
