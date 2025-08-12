import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Avatar,
  TextField,
  CircularProgress,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tab,
  Tabs,
  Chip
} from '@mui/material';
import {
  Person,
  Email,
  Edit,
  School,
  Work,
  Save,
  Cancel
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

interface UserProfile {
  name: string;
  email: string;
  bio?: string;
  company?: string;
  title?: string;
  enrolledCourses: Array<{
    _id: string;
    title: string;
    progress: number;
  }>;
  appliedInternships: Array<{
    _id: string;
    title: string;
    company: string;
    status: string;
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
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    company: '',
    title: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users/profile');
      setProfile(response.data);
      setFormData({
        name: response.data.name || '',
        bio: response.data.bio || '',
        company: response.data.company || '',
        title: response.data.title || ''
      });
    } catch (error) {
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setError(null);
      await api.put('/users/profile', formData);
      setSuccess('Profile updated successfully');
      setEditing(false);
      fetchProfile();
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setEditing(false);
    if (profile) {
      setFormData({
        name: profile.name || '',
        bio: profile.bio || '',
        company: profile.company || '',
        title: profile.title || ''
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'error';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!profile) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">Failed to load profile</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Avatar
          sx={{ 
            width: 120, 
            height: 120, 
            mx: 'auto', 
            mb: 2,
            bgcolor: 'primary.main',
            fontSize: '3rem'
          }}
        >
          {profile.name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {profile.email}
        </Typography>
      </Box>

      {/* Alerts */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess(null)}>
          {success}
        </Alert>
      )}

      {/* Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, newValue) => setTabValue(newValue)}
            aria-label="profile tabs"
          >
            <Tab label="Profile Info" icon={<Person />} />
            <Tab label="Courses" icon={<School />} />
            <Tab label="Internships" icon={<Work />} />
          </Tabs>
        </Box>

        {/* Profile Info Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Personal Information</Typography>
            {!editing ? (
              <Button
                startIcon={<Edit />}
                onClick={() => setEditing(true)}
                variant="outlined"
              >
                Edit Profile
              </Button>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  startIcon={<Save />}
                  onClick={handleSave}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button
                  startIcon={<Cancel />}
                  onClick={handleCancel}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Box>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!editing}
            />
            <TextField
              fullWidth
              label="Bio"
              multiline
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              disabled={!editing}
              placeholder="Tell us about yourself..."
            />
            <TextField
              fullWidth
              label="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              disabled={!editing}
            />
            <TextField
              fullWidth
              label="Job Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              disabled={!editing}
            />
          </Box>
        </TabPanel>

        {/* Courses Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Enrolled Courses
          </Typography>
          {profile.enrolledCourses.length === 0 ? (
            <Typography color="text.secondary">
              You haven't enrolled in any courses yet.
            </Typography>
          ) : (
            <List>
              {profile.enrolledCourses.map((course) => (
                <ListItem key={course._id} divider>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary={course.title}
                    secondary={`Progress: ${course.progress}%`}
                  />
                  <Box sx={{ minWidth: 100 }}>
                    <Typography variant="body2" color="text.secondary" align="right">
                      {course.progress}%
                    </Typography>
                    <Box sx={{ 
                      width: '100%', 
                      height: 4, 
                      bgcolor: 'grey.200', 
                      borderRadius: 2,
                      mt: 0.5
                    }}>
                      <Box sx={{
                        width: `${course.progress}%`,
                        height: '100%',
                        bgcolor: 'primary.main',
                        borderRadius: 2
                      }} />
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </TabPanel>

        {/* Internships Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Applied Internships
          </Typography>
          {profile.appliedInternships.length === 0 ? (
            <Typography color="text.secondary">
              You haven't applied to any internships yet.
            </Typography>
          ) : (
            <List>
              {profile.appliedInternships.map((internship) => (
                <ListItem key={internship._id} divider>
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText
                    primary={internship.title}
                    secondary={internship.company}
                  />
                  <Chip
                    label={internship.status}
                    color={getStatusColor(internship.status) as any}
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          )}
        </TabPanel>
      </Card>
    </Container>
  );
};

export default Profile;
