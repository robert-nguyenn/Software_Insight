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
  Pagination
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { coursesAPI } from '../services/api';
import { Course } from '../types';
import { School, AccessTime, Person, TrendingUp } from '@mui/icons-material';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
            {courses.map((course) => (
              <Card 
                key={course._id}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
                onClick={() => handleCourseClick(course)}
              >
                  {course.thumbnail && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={course.thumbnail}
                      alt={course.title}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography gutterBottom variant="h6" component="h2" fontWeight="bold">
                        {course.title}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(course);
                      }}
                    >
                      View Details
                    </Button>
                    <Box sx={{ ml: 'auto' }}>
                      <Typography variant="h6" color="primary" fontWeight="bold">
                        {course.price === 0 ? 'Free' : `$${course.price}`}
                      </Typography>
                    </Box>
                  </CardActions>
                </Card>
            ))}
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
