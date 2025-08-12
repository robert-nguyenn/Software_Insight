import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
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
  Paper,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
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
  PlayArrow,
  CheckBox,
  CheckBoxOutlineBlank,
  OpenInNew,
  VideoLibrary,
  Article,
  MenuBook,
  Code,
  Quiz
} from '@mui/icons-material';
import { coursesAPI } from '../services/api';
import { Course, CompletedLesson } from '../types';
import { useAuth } from '../contexts/AuthContext';

const EnhancedCourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [userProgress, setUserProgress] = useState<{
    progress: number;
    completedLessons: CompletedLesson[];
    totalLessons: number;
  }>({ progress: 0, completedLessons: [], totalLessons: 0 });
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    url: string;
    type: string;
    description?: string;
  } | null>(null);
  const [resourceDialogOpen, setResourceDialogOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  useEffect(() => {
    // Check if user is enrolled and fetch progress
    if (user && course) {
      const isEnrolled = user.enrolledCourses.some(
        enrollment => typeof enrollment.course === 'string' 
          ? enrollment.course === course._id 
          : enrollment.course._id === course._id
      );
      setEnrolled(isEnrolled);
      
      if (isEnrolled) {
        fetchUserProgress();
      }
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

  const fetchUserProgress = async () => {
    if (!id || !user) return;
    
    try {
      const response = await coursesAPI.getUserCourseProgress(id);
      setUserProgress({
        progress: response.data.progress,
        completedLessons: response.data.completedLessons,
        totalLessons: response.data.totalLessons
      });
    } catch (err) {
      console.error('Error fetching user progress:', err);
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

  const isLessonCompleted = (moduleIndex: number, resourceIndex: number): boolean => {
    return userProgress.completedLessons.some(
      lesson => lesson.moduleIndex === moduleIndex && lesson.resourceIndex === resourceIndex
    );
  };

  const handleLessonToggle = async (moduleIndex: number, resourceIndex: number, completed: boolean) => {
    if (!enrolled || !course) return;

    try {
      if (completed) {
        await coursesAPI.markLessonComplete(course._id, moduleIndex, resourceIndex);
      } else {
        await coursesAPI.markLessonIncomplete(course._id, moduleIndex, resourceIndex);
      }
      
      // Refresh progress
      await fetchUserProgress();
    } catch (err: any) {
      console.error('Error updating lesson progress:', err);
      alert(err.response?.data?.message || 'Failed to update lesson progress');
    }
  };

  const handleResourceClick = (resource: any) => {
    setSelectedResource(resource);
    setResourceDialogOpen(true);
  };

  const openResourceInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setResourceDialogOpen(false);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <VideoLibrary />;
      case 'article': return <Article />;
      case 'documentation': return <MenuBook />;
      case 'tutorial': return <Code />;
      case 'interactive': return <Quiz />;
      default: return <PlayArrow />;
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
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '2fr 1fr'
        },
        gap: 4
      }}>
        {/* Main Content */}
        <Box>
          {/* Course Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
              {course.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {course.shortDescription}
            </Typography>
            
            {/* Progress Bar for Enrolled Users */}
            {enrolled && (
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Course Progress
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProgress.progress}% ({userProgress.completedLessons.length}/{userProgress.totalLessons} lessons)
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={userProgress.progress} 
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
            )}
            
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

          {/* Course Modules with Lesson Tracking */}
          {course.modules.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Course Content
                </Typography>
                {course.modules.map((module, moduleIndex) => (
                  <Accordion key={moduleIndex}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                          Module {moduleIndex + 1}: {module.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
                          {enrolled && (
                            <Typography variant="caption" color="text.secondary">
                              {module.resources.filter((_, resourceIndex) => 
                                isLessonCompleted(moduleIndex, resourceIndex)
                              ).length}/{module.resources.length} completed
                            </Typography>
                          )}
                          <Typography variant="body2" color="text.secondary">
                            {module.duration}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" paragraph>
                        {module.description}
                      </Typography>
                      
                      {/* Module Topics */}
                      {module.topics.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Topics Covered:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {module.topics.map((topic, topicIndex) => (
                              <Chip 
                                key={topicIndex}
                                label={topic} 
                                size="small" 
                                variant="outlined"
                              />
                            ))}
                          </Box>
                        </Box>
                      )}

                      {/* Module Resources with Progress Tracking */}
                      {module.resources.length > 0 && (
                        <Box>
                          <Typography variant="subtitle2" gutterBottom>
                            Lessons:
                          </Typography>
                          <List dense>
                            {module.resources.map((resource, resourceIndex) => {
                              const completed = enrolled ? isLessonCompleted(moduleIndex, resourceIndex) : false;
                              
                              return (
                                <ListItem 
                                  key={resourceIndex}
                                  sx={{ 
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 1,
                                    mb: 1,
                                    bgcolor: completed ? 'success.light' : 'background.paper',
                                    opacity: completed ? 0.8 : 1
                                  }}
                                >
                                  <ListItemIcon>
                                    {getResourceIcon(resource.type)}
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary={
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography 
                                          variant="body2" 
                                          sx={{ 
                                            textDecoration: completed ? 'line-through' : 'none',
                                            flexGrow: 1
                                          }}
                                        >
                                          {resource.title}
                                        </Typography>
                                        {resource.estimatedTime && (
                                          <Chip 
                                            label={resource.estimatedTime} 
                                            size="small" 
                                            variant="outlined"
                                          />
                                        )}
                                        {resource.difficulty && (
                                          <Chip 
                                            label={resource.difficulty} 
                                            size="small" 
                                            color={getDifficultyColor(resource.difficulty) as any}
                                          />
                                        )}
                                      </Box>
                                    }
                                    secondary={resource.description}
                                  />
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {enrolled && (
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={completed}
                                            onChange={(e) => handleLessonToggle(moduleIndex, resourceIndex, e.target.checked)}
                                            icon={<CheckBoxOutlineBlank />}
                                            checkedIcon={<CheckBox />}
                                            color="primary"
                                          />
                                        }
                                        label=""
                                        sx={{ margin: 0 }}
                                      />
                                    )}
                                    <Tooltip title="Open lesson">
                                      <IconButton
                                        size="small"
                                        onClick={() => handleResourceClick(resource)}
                                        color="primary"
                                      >
                                        <OpenInNew />
                                      </IconButton>
                                    </Tooltip>
                                  </Box>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Box>
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
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(2, 1fr)'
                  },
                  gap: 2
                }}>
                  {course.projects.map((project, index) => (
                    <Paper key={index} sx={{ p: 2 }}>
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
                  ))}
                </Box>
              </CardContent>
            </Card>
          )}
        </Box>

        {/* Sidebar */}
        <Box>
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
                  Enrolled - {userProgress.progress}% Complete
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
                <ListItem>
                  <ListItemIcon>
                    <PlayArrow />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Total Lessons" 
                    secondary={`${course.modules.reduce((total, module) => total + module.resources.length, 0)} lessons`}
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
        </Box>
      </Box>

      {/* Resource Dialog */}
      <Dialog 
        open={resourceDialogOpen} 
        onClose={() => setResourceDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {selectedResource && getResourceIcon(selectedResource.type)}
            {selectedResource?.title}
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedResource?.description && (
            <Typography variant="body2" paragraph>
              {selectedResource.description}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            Type: {selectedResource?.type}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResourceDialogOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="contained"
            onClick={() => selectedResource && openResourceInNewTab(selectedResource.url)}
            startIcon={<OpenInNew />}
          >
            Open Lesson
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EnhancedCourseDetail;
