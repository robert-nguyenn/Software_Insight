import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  Rating,
  CircularProgress,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Paper
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  School,
  AccessTime,
  Person,
  Language,
  Assignment,
  GitHub,
  LinkedIn,
  Web,
  PlayArrow
} from '@mui/icons-material';
import { coursesAPI } from '../services/api';
import { Course } from '../types';
import { useAuth } from '../contexts/AuthContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  useEffect(() => {
    // Check if user is enrolled
    if (user && course) {
      const isEnrolled = user.enrolledCourses.some(
        enrollment => typeof enrollment.course === 'string' 
          ? enrollment.course === course._id 
          : enrollment.course._id === course._id
      );
      setEnrolled(isEnrolled);
    }
  }, [user, course]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const response = await coursesAPI.getCourse(id!);
      setCourse(response.data);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching course:', err);
      setError(err.response?.data?.message || 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      setEnrolling(true);
      await coursesAPI.enrollCourse(course!._id);
      setEnrolled(true);
      // Refresh user data to update enrolled courses
      window.location.reload();
    } catch (err: any) {
      console.error('Error enrolling in course:', err);
      alert(err.response?.data?.message || 'Failed to enroll in course');
    } finally {
      setEnrolling(false);
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !course) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">
          {error || 'Course not found'}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Course Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
              {course.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {course.shortDescription}
            </Typography>
            
            {/* Course Meta */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              <Chip 
                label={course.level} 
                color={getDifficultyColor(course.level) as any}
              />
              <Chip label={course.category} variant="outlined" />
              {course.featured && (
                <Chip label="Featured" color="primary" />
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={course.rating.average} readOnly precision={0.1} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {course.rating.average.toFixed(1)} ({course.rating.count} reviews)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Person sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {course.enrollmentCount} students enrolled
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {course.duration}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Course Description */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About This Course
              </Typography>
              <Typography variant="body1" paragraph>
                {course.description}
              </Typography>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                What You'll Learn
              </Typography>
              <List>
                {course.learningOutcomes.map((outcome, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={outcome} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          {course.prerequisites.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Prerequisites
                </Typography>
                <List>
                  {course.prerequisites.map((prerequisite, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Assignment color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={prerequisite} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}

          {/* Course Modules */}
          {course.modules.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Course Content
                </Typography>
                {course.modules.map((module, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="h6">
                        Module {index + 1}: {module.title}
                      </Typography>
                      <Box sx={{ ml: 'auto', mr: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {module.duration}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" paragraph>
                        {module.description}
                      </Typography>
                      {module.topics.length > 0 && (
                        <>
                          <Typography variant="subtitle2" gutterBottom>
                            Topics Covered:
                          </Typography>
                          <List dense>
                            {module.topics.map((topic, topicIndex) => (
                              <ListItem key={topicIndex}>
                                <ListItemIcon>
                                  <PlayArrow />
                                </ListItemIcon>
                                <ListItemText primary={topic} />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Projects */}
          {course.projects.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Projects You'll Build
                </Typography>
                <Grid container spacing={2}>
                  {course.projects.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {project.description}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Chip 
                            label={project.difficulty} 
                            size="small"
                            color={project.difficulty === 'Easy' ? 'success' : 
                                   project.difficulty === 'Medium' ? 'warning' : 'error'}
                          />
                        </Box>
                        <Box>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip 
                              key={techIndex}
                              label={tech} 
                              size="small" 
                              variant="outlined"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Course Thumbnail */}
          {course.thumbnail && (
            <Card sx={{ mb: 3 }}>
              <Box
                component="img"
                src={course.thumbnail}
                alt={course.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
            </Card>
          )}

          {/* Pricing & Enrollment */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {course.price === 0 ? 'Free' : `$${course.price}`}
                </Typography>
              </Box>
              
              {enrolled ? (
                <Button
                  fullWidth
                  variant="outlined"
                  color="success"
                  size="large"
                  startIcon={<CheckCircle />}
                  disabled
                >
                  Enrolled
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleEnroll}
                  disabled={enrolling}
                >
                  {enrolling ? 'Enrolling...' : 'Enroll Now'}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Course Info */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Course Details
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Level" 
                    secondary={course.level}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessTime />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Duration" 
                    secondary={course.duration}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Category" 
                    secondary={course.category}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Technologies
              </Typography>
              <Box>
                {course.technologies.map((tech, index) => (
                  <Chip 
                    key={index}
                    label={tech} 
                    variant="outlined"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Instructor */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Instructor
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  src={course.instructor.avatar} 
                  sx={{ mr: 2, width: 56, height: 56 }}
                >
                  {course.instructor.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {course.instructor.name}
                  </Typography>
                  {course.instructor.bio && (
                    <Typography variant="body2" color="text.secondary">
                      {course.instructor.bio}
                    </Typography>
                  )}
                </Box>
              </Box>
              
              {/* Instructor Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {course.instructor.socialLinks.github && (
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={course.instructor.socialLinks.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
                {course.instructor.socialLinks.linkedin && (
                  <Button
                    size="small"
                    startIcon={<LinkedIn />}
                    href={course.instructor.socialLinks.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                )}
                {course.instructor.socialLinks.portfolio && (
                  <Button
                    size="small"
                    startIcon={<Web />}
                    href={course.instructor.socialLinks.portfolio}
                    target="_blank"
                  >
                    Portfolio
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetail;
