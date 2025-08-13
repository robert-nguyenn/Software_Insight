import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

interface Course {
  _id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  duration: string;
  thumbnail?: string;
  rating: {
    average: number;
  };
  enrollmentCount?: number;
}

interface FeaturedCoursesProps {
  courses?: {
    data: Course[];
  };
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  if (!courses?.data || courses.data.length === 0) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Featured Courses
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Start your learning journey with our most popular courses
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
        {courses.data.slice(0, 3).map((course, index) => (
          <MotionCard
            key={course._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            sx={{
              maxWidth: 350,
              '&:hover': {
                transform: 'translateY(-8px)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            {course.thumbnail && (
              <CardMedia
                component="img"
                height="200"
                image={course.thumbnail}
                alt={course.title}
              />
            )}
            <CardContent>
              <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                <Chip
                  label={course.level}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  label={course.category}
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              </Box>
              
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {course.title}
              </Typography>
              
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, height: '40px', overflow: 'hidden' }}
              >
                {course.description}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {course.duration}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Rating value={course.rating.average} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary">
                    ({course.enrollmentCount || 0})
                  </Typography>
                </Box>
              </Box>

              <Button
                component={Link}
                to={`/courses/${course._id}`}
                variant="contained"
                fullWidth
                endIcon={<ArrowForward />}
              >
                Learn More
              </Button>
            </CardContent>
          </MotionCard>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          component={Link}
          to="/courses"
          variant="outlined"
          size="large"
        >
          View All Courses
        </Button>
      </Box>
    </Container>
  );
};
