import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Paper
} from '@mui/material';
import {
  CheckCircle,
  LocationOn,
  AccessTime,
  AttachMoney,
  CalendarToday,
  Launch,
  Email,
  Web,
  Work,
  Assignment,
  Psychology,
  Visibility,
  People
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';

const InternshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchInternship();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchInternship = async () => {
    try {
      setLoading(true);
      const response = await internshipsAPI.getInternship(id!);
      setInternship(response.data);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching internship:', err);
      setError(err.response?.data?.message || 'Failed to fetch internship');
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    if (!internship) return;
    
    try {
      await internshipsAPI.trackApplication(internship._id);
      window.open(internship.applicationUrl, '_blank');
    } catch (err: any) {
      console.error('Error tracking application:', err);
      window.open(internship.applicationUrl, '_blank');
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Entry Level': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'primary';
      case 'Part-time': return 'secondary';
      case 'Project-based': return 'info';
      default: return 'default';
    }
  };

  const formatSalary = (stipend: Internship['stipend']) => {
    if (!stipend.amount) return 'Unpaid';
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: stipend.currency || 'USD',
      minimumFractionDigits: 0
    }).format(stipend.amount);
    
    return `${formattedAmount}/${stipend.period}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDeadlineStatus = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: 'Application deadline has passed', color: 'error' };
    if (diffDays === 0) return { text: 'Application deadline is today!', color: 'warning' };
    if (diffDays <= 7) return { text: `${diffDays} days left to apply`, color: 'warning' };
    
    return { text: `Application deadline: ${formatDate(deadline)}`, color: 'info' };
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !internship) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">
          {error || 'Internship not found'}
        </Alert>
      </Container>
    );
  }

  const deadlineStatus = getDeadlineStatus(internship.applicationDeadline);

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
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2, width: 64, height: 64, bgcolor: 'primary.main' }}>
                {internship.company.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h3" component="h1" fontWeight="bold">
                  {internship.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {internship.company.name}
                </Typography>
              </Box>
            </Box>
            
            {/* Tags */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              <Chip 
                label={internship.level} 
                color={getLevelColor(internship.level) as any}
              />
              <Chip 
                label={internship.type} 
                color={getTypeColor(internship.type) as any}
                variant="outlined"
              />
              <Chip label={internship.category} variant="outlined" />
              {internship.featured && (
                <Chip label="Featured" color="primary" />
              )}
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Visibility sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {internship.viewCount} views
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <People sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {internship.applicationCount} applications
                </Typography>
              </Box>
            </Box>

            {/* Deadline Alert */}
            <Alert severity={deadlineStatus.color as any} sx={{ mb: 3 }}>
              {deadlineStatus.text}
            </Alert>
          </Box>

          {/* Description */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About This Internship
              </Typography>
              <Typography variant="body1" paragraph>
                {internship.description}
              </Typography>
            </CardContent>
          </Card>

          {/* Company Info */}
          {internship.company.description && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  About {internship.company.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {internship.company.description}
                </Typography>
                {internship.company.website && (
                  <Button
                    startIcon={<Web />}
                    href={internship.company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Company Website
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Responsibilities */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Key Responsibilities
              </Typography>
              <List>
                {internship.responsibilities.map((responsibility, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Work color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Requirements
              </Typography>
              <List>
                {internship.requirements.map((requirement, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Assignment color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={requirement} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Required Skills
              </Typography>
              <Box>
                {internship.skills.map((skill, index) => (
                  <Chip 
                    key={index}
                    label={skill} 
                    variant="outlined"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Sidebar */}
        <Box>
          {/* Apply Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {formatSalary(internship.stipend)}
                </Typography>
              </Box>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Launch />}
                onClick={handleApply}
                disabled={new Date(internship.applicationDeadline) < new Date()}
              >
                {new Date(internship.applicationDeadline) < new Date() 
                  ? 'Application Closed' 
                  : 'Apply Now'
                }
              </Button>

              {internship.contactEmail && (
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Email />}
                  href={`mailto:${internship.contactEmail}`}
                  sx={{ mt: 1 }}
                >
                  Contact Recruiter
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Internship Details */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Internship Details
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Location" 
                    secondary={
                      internship.location.remote 
                        ? 'Remote' 
                        : `${internship.location.city}, ${internship.location.state || internship.location.country}`
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessTime />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Duration" 
                    secondary={internship.duration}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Type" 
                    secondary={internship.type}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Psychology />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Level" 
                    secondary={internship.level}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Important Dates
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Application Deadline" 
                    secondary={formatDate(internship.applicationDeadline)}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Start Date" 
                    secondary={formatDate(internship.startDate)}
                  />
                </ListItem>
                {internship.endDate && (
                  <ListItem>
                    <ListItemIcon>
                      <CalendarToday />
                    </ListItemIcon>
                    <ListItemText 
                      primary="End Date" 
                      secondary={formatDate(internship.endDate)}
                    />
                  </ListItem>
                )}
              </List>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tags
              </Typography>
              <Box>
                {internship.tags.map((tag, index) => (
                  <Chip 
                    key={index}
                    label={tag} 
                    size="small"
                    variant="outlined"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default InternshipDetail;
