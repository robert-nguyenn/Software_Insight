import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

interface Testimonial {
  _id: string;
  name: string;
  content: string;
  rating: number;
  position?: string;
  company?: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: {
    data: Testimonial[];
  };
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials?.data || testimonials.data.length === 0) {
    return null;
  }

  return (
    <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Student Success Stories
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Hear from our graduates who are now working at top tech companies
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {testimonials.data.slice(0, 3).map((testimonial, index) => (
            <MotionCard
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                maxWidth: 350,
                p: 3,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardContent>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  "{testimonial.content}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.position} {testimonial.company && `at ${testimonial.company}`}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
