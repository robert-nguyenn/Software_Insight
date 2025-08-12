import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  CircularProgress,
  Alert,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tab,
  Tabs,
  Paper
} from '@mui/material';
import {
  School,
  Work,
  People,
  RateReview,
  Add,
  TrendingUp,
  Assessment
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

interface DashboardStats {
  totalCourses: number;
  totalInternships: number;
  totalUsers: number;
  totalTestimonials: number;
  recentCourses: Array<{
    _id: string;
    title: string;
    enrollmentCount: number;
    createdAt: string;
  }>;
  recentInternships: Array<{
    _id: string;
    title: string;
    company: string;
    applicationsCount: number;
    createdAt: string;
  }>;
  recentUsers: Array<{
    _id: string;
    name: string;
    email: string;
    createdAt: string;
  }>;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // Redirect non-admin users
    if (user && user.role !== 'admin') {
      navigate('/');
      return;
    }
    
    fetchDashboardStats();
  }, [user, navigate]);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const [coursesRes, internshipsRes, usersRes, testimonialsRes] = await Promise.all([
        api.get('/courses'),
        api.get('/internships'),
        api.get('/auth/users'),
        api.get('/testimonials')
      ]);

      const dashboardStats: DashboardStats = {
        totalCourses: coursesRes.data.length,
        totalInternships: internshipsRes.data.length,
        totalUsers: usersRes.data.length,
        totalTestimonials: testimonialsRes.data.length,
        recentCourses: coursesRes.data.slice(0, 5),
        recentInternships: internshipsRes.data.slice(0, 5),
        recentUsers: usersRes.data.slice(0, 5)
      };

      setStats(dashboardStats);
    } catch (error) {
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">
          Access denied. Admin privileges required.
        </Alert>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !stats) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error || 'Failed to load dashboard'}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Welcome back, {user.name}! Here's what's happening on your platform.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)'
        },
        gap: 3,
        mb: 4
      }}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <School color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalCourses}
            </Typography>
            <Typography color="text.secondary">
              Total Courses
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Work color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalInternships}
            </Typography>
            <Typography color="text.secondary">
              Total Internships
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <People color="success" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalUsers}
            </Typography>
            <Typography color="text.secondary">
              Total Users
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <RateReview color="warning" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {stats.totalTestimonials}
            </Typography>
            <Typography color="text.secondary">
              Testimonials
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Quick Actions */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 2
          }}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => navigate('/admin/courses/new')}
              fullWidth
            >
              Add Course
            </Button>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => navigate('/admin/internships/new')}
              fullWidth
            >
              Add Internship
            </Button>
            <Button
              variant="outlined"
              startIcon={<Assessment />}
              onClick={() => navigate('/admin/analytics')}
              fullWidth
            >
              View Analytics
            </Button>
            <Button
              variant="outlined"
              startIcon={<People />}
              onClick={() => navigate('/admin/users')}
              fullWidth
            >
              Manage Users
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Detailed Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, newValue) => setTabValue(newValue)}
            aria-label="dashboard tabs"
          >
            <Tab label="Recent Courses" icon={<School />} />
            <Tab label="Recent Internships" icon={<Work />} />
            <Tab label="Recent Users" icon={<People />} />
          </Tabs>
        </Box>

        {/* Recent Courses Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            Recently Added Courses
          </Typography>
          <List>
            {stats.recentCourses.map((course) => (
              <ListItem key={course._id} divider>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText
                  primary={course.title}
                  secondary={`${course.enrollmentCount} students enrolled • Created ${new Date(course.createdAt).toLocaleDateString()}`}
                />
                <Button
                  size="small"
                  onClick={() => navigate(`/courses/${course._id}`)}
                >
                  View
                </Button>
              </ListItem>
            ))}
          </List>
        </TabPanel>

        {/* Recent Internships Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Recently Added Internships
          </Typography>
          <List>
            {stats.recentInternships.map((internship) => (
              <ListItem key={internship._id} divider>
                <ListItemIcon>
                  <Work />
                </ListItemIcon>
                <ListItemText
                  primary={internship.title}
                  secondary={`${internship.company} • ${internship.applicationsCount} applications • Created ${new Date(internship.createdAt).toLocaleDateString()}`}
                />
                <Button
                  size="small"
                  onClick={() => navigate(`/internships/${internship._id}`)}
                >
                  View
                </Button>
              </ListItem>
            ))}
          </List>
        </TabPanel>

        {/* Recent Users Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Recently Registered Users
          </Typography>
          <List>
            {stats.recentUsers.map((user) => (
              <ListItem key={user._id} divider>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={user.name}
                  secondary={`${user.email} • Joined ${new Date(user.createdAt).toLocaleDateString()}`}
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      </Card>
    </Container>
  );
};

export default Dashboard;
