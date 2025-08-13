import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  CircularProgress,
  Alert,
  Pagination,
  LinearProgress,
  Badge,
  Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { coursesAPI } from '../services/api';
import { Course } from '../types';
import { School, AccessTime, Person, TrendingUp, Login, BookmarkBorder, Bookmark, Info } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Get user's enrolled courses and progress
  const getUserProgress = (courseId: string) => {
    if (!user?.enrolledCourses) return null;
    return user.enrolledCourses.find(enrollment => enrollment.course === courseId);
  };

  const categories = [
    'Frontend',
    'Backend', 
    'Full Stack',
    'Mobile',
    'DevOps',
    'Data Science',
    'AI/ML',
    'Other'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    fetchCourses();
  }, [page, selectedLevel, selectedCategory, searchTerm]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await coursesAPI.getCourses({
        page,
        limit: 12,
        level: selectedLevel || undefined,
        category: selectedCategory || undefined,
        search: searchTerm || undefined
      });
      
      setCourses(response.data);
      if (response.pagination) {
        setTotalPages(response.pagination.pages);
      }
      setError(null);
    } catch (err: any) {
      console.error('Error fetching courses:', err);
      setError(err.response?.data?.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleCourseClick = (course: Course) => {
    navigate(`/courses/${course._id}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handleLevelChange = (event: any) => {
    setSelectedLevel(event.target.value);
    setPage(1);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Explore Our Courses
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Master software engineering with our comprehensive collection of expert-led courses
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: 'center'
        }}>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '200px' } }}>
            <TextField
              fullWidth
              label="Search courses..."
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by title, description, or technology"
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '200px' } }}>
            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select
                value={selectedLevel}
                label="Level"
                onChange={handleLevelChange}
              >
                <MenuItem value="">All Levels</MenuItem>
                {levels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '200px' } }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Sign-in Prompt for Non-authenticated Users */}
      {!isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box 
            sx={{ 
              mb: 4,
              p: 4,
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
              border: '1px solid rgba(37, 99, 235, 0.15)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1, minWidth: '300px' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: '600',
                  color: 'primary.main',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Info color="primary" />
                Sign in to track your progress!
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                Unlock features like saving your course progress, bookmarking favorites, 
                and accessing personalized recommendations.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
              <Button 
                variant="contained"
                size="large"
                startIcon={<Login />}
                onClick={() => navigate('/login')}
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: '600',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="outlined"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: '600',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    background: 'rgba(59, 130, 246, 0.04)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </motion.div>
      )}

      {/* Courses Grid */}
      {!loading && !error && (
        <>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            mb: 4
          }}>
            {courses.map((course) => {
              const userProgress = getUserProgress(course._id);
              const isEnrolled = !!userProgress;
              const progressPercentage = userProgress?.progress || 0;

              return (
                <motion.div
                  key={course._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: isEnrolled ? '2px solid' : '1px solid',
                      borderColor: isEnrolled ? 'primary.main' : 'divider',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                      }
                    }}
                    onClick={() => handleCourseClick(course)}
                  >
                    {/* Progress Badge for Enrolled Users */}
                    {isEnrolled && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 2,
                          background: 'rgba(37, 99, 235, 0.9)',
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {progressPercentage}% Complete
                      </Box>
                    )}

                    {/* Bookmark Icon for Authenticated Users */}
                    {isAuthenticated && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          zIndex: 2,
                        }}
                      >
                        <Tooltip title={isEnrolled ? "Enrolled" : "Click to bookmark"}>
                          <Badge 
                            color="primary" 
                            variant="dot" 
                            invisible={!isEnrolled}
                          >
                            {isEnrolled ? (
                              <Bookmark sx={{ color: 'primary.main' }} />
                            ) : (
                              <BookmarkBorder sx={{ color: 'action.active' }} />
                            )}
                          </Badge>
                        </Tooltip>
                      </Box>
                    )}

                    {course.thumbnail && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={course.thumbnail}
                        alt={course.title}
                        sx={{
                          filter: isEnrolled ? 'brightness(1.1)' : 'none',
                        }}
                      />
                    )}

                    {/* Progress Bar for Enrolled Courses */}
                    {isEnrolled && (
                      <LinearProgress 
                        variant="determinate" 
                        value={progressPercentage} 
                        sx={{ 
                          height: 4,
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'primary.main',
                          }
                        }}
                      />
                    )}

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography gutterBottom variant="h6" component="h2" fontWeight="bold">
                          {course.title}
                          {isEnrolled && (
                            <Chip 
                              label="Enrolled" 
                              size="small" 
                              color="primary" 
                              sx={{ ml: 1, fontSize: '0.7rem' }}
                            />
                          )}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {course.shortDescription}
                        </Typography>
                      </Box>

                      {/* Course Meta */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <School sx={{ mr: 1, fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {course.instructor.name}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <AccessTime sx={{ mr: 1, fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {course.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Person sx={{ mr: 1, fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {course.enrollmentCount} students
                          </Typography>
                        </Box>
                      </Box>

                      {/* Rating */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating 
                          value={course.rating.average} 
                          readOnly 
                          size="small" 
                          precision={0.1}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({course.rating.count})
                        </Typography>
                      </Box>

                      {/* Tags */}
                      <Box sx={{ mb: 2 }}>
                        <Chip 
                          label={course.level} 
                          size="small" 
                          color={getDifficultyColor(course.level) as any}
                          sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip 
                          label={course.category} 
                          size="small" 
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                        {course.featured && (
                          <Chip 
                            label="Featured" 
                            size="small" 
                            color="primary"
                            icon={<TrendingUp />}
                            sx={{ mb: 1 }}
                          />
                        )}
                      </Box>

                      {/* Technologies */}
                      <Box>
                        {course.technologies.slice(0, 3).map((tech, index) => (
                          <Chip 
                            key={index}
                            label={tech} 
                            size="small" 
                            variant="outlined"
                            sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem' }}
                          />
                        ))}
                        {course.technologies.length > 3 && (
                          <Chip 
                            label={`+${course.technologies.length - 3} more`}
                            size="small" 
                            variant="outlined"
                            sx={{ mb: 0.5, fontSize: '0.7rem' }}
                          />
                        )}
                      </Box>
                    </CardContent>
                    
                    <CardActions>
                      <Button 
                        size="small" 
                        color="primary"
                        variant={isEnrolled ? "contained" : "outlined"}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCourseClick(course);
                        }}
                      >
                        {isEnrolled ? 'Continue Learning' : 'View Details'}
                      </Button>
                      {!isAuthenticated && (
                        <Tooltip title="Sign in to save progress">
                          <Button 
                            size="small" 
                            startIcon={<Login />}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate('/login');
                            }}
                          >
                            Sign In
                          </Button>
                        </Tooltip>
                      )}
                      <Box sx={{ ml: 'auto' }}>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                          {course.price === 0 ? 'Free' : `$${course.price}`}
                        </Typography>
                      </Box>
                    </CardActions>
                  </Card>
                </motion.div>
              );
            })}
          </Box>

          {/* No results */}
          {courses.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No courses found matching your criteria
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search filters
              </Typography>
            </Box>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
};

export default Courses;
