import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Rating,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import {
  School,
  Work,
  TrendingUp,
  Psychology,
  Group,
  Star,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFeaturedTestimonials, useCourses } from '../hooks/useApi';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Home: React.FC = () => {
  const theme = useTheme();

  const { data: testimonials } = useFeaturedTestimonials();
  const { data: courses } = useCourses({ featured: true, limit: 3 });

  const features = [
    {
      icon: <School />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience in top tech companies.',
    },
    {
      icon: <Work />,
      title: 'Internship Opportunities',
      description: 'Access exclusive internship positions at leading technology companies.',
    },
    {
      icon: <Psychology />,
      title: 'Interview Preparation',
      description: 'Master technical interviews with our comprehensive preparation resources.',
    },
    {
      icon: <Group />,
      title: 'Community Support',
      description: 'Join a thriving community of learners and professionals supporting each other.',
    },
  ];

  const stats = [
    { number: '1,000+', label: 'Students Enrolled', icon: <Group /> },
    { number: '50+', label: 'Courses Available', icon: <School /> },
    { number: '120+', label: 'Job Placements', icon: <Work /> },
    { number: '85%', label: 'Success Rate', icon: <TrendingUp /> },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                mb: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Launch Your Software Engineering Career
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              Master the skills, land internships, and ace interviews with our comprehensive platform
              designed by industry experts.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 6 }}
            >
              <Button
                component={Link}
                to="/courses"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Browse Courses
              </Button>
              
              <Button
                component={Link}
                to="/internships"
                variant="outlined"
                size="large"
                endIcon={<Work />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                Find Internships
              </Button>
            </Stack>

            {/* Trust Indicators */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                flexWrap: 'wrap',
                opacity: 0.8,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle fontSize="small" />
                <Typography variant="body2">Free to Start</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Star fontSize="small" />
                <Typography variant="body2">4.7/5 Rating</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Group fontSize="small" />
                <Typography variant="body2">1,000+ Students</Typography>
              </Box>
            </Box>
          </MotionBox>
        </Container>

        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(100px)',
          }}
        />
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          {stats.map((stat, index) => (
            <MotionBox
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                textAlign: 'center',
                minWidth: '150px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                {React.cloneElement(stat.icon, { fontSize: 'large' })}
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.number}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.label}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Why Choose Software Insight?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              We provide everything you need to succeed in your software engineering journey,
              from beginner-friendly courses to advanced career preparation.
            </Typography>
          </MotionBox>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            {features.map((feature, index) => (
              <MotionCard
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  maxWidth: 280,
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {React.cloneElement(feature.icon, { fontSize: 'large' })}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      {courses?.data && courses.data.length > 0 && (
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
      )}

      {/* Testimonials Section */}
      {testimonials?.data && testimonials.data.length > 0 && (
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
      )}

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join hundreds of students who have transformed their careers with Software Insight
            </Typography>
            
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Get Started Free
              </Button>
              
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
