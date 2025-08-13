import React from 'react';
import { Box } from '@mui/material';
import { useFeaturedTestimonials, useCourses } from '../hooks/useApi';
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  FeaturedCoursesSection,
  TestimonialsSection,
  CTASection,
} from '../components/home';

const Home: React.FC = () => {
  const { data: testimonials } = useFeaturedTestimonials();
  const { data: courses } = useCourses({ featured: true, limit: 3 });

  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FeaturedCoursesSection courses={courses} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </Box>
  );
};

export default Home;
