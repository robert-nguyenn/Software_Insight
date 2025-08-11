import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  Pagination,
  Avatar,
  FormControlLabel,
  Switch
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LocationOn,
  Business,
  AccessTime,
  AttachMoney,
  Launch,
  Visibility,
  People
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';

const Internships: React.FC = () => {
  const navigate = useNavigate();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = [
    'Software Engineering',
    'Data Science',
    'Product Management',
    'Design',
    'Marketing',
    'Sales',
    'Other'
  ];

  const levels = ['Entry Level', 'Intermediate', 'Advanced'];

  useEffect(() => {
    fetchInternships();
  }, [page, selectedCategory, selectedLevel, searchTerm, remoteOnly]);

  const fetchInternships = async () => {
    try {
      setLoading(true);
      const response = await internshipsAPI.getInternships({
        page,
        limit: 12,
        category: selectedCategory || undefined,
        level: selectedLevel || undefined,
        search: searchTerm || undefined,
        remote: remoteOnly || undefined
      });
      
      setInternships(response.data);
      if (response.pagination) {
        setTotalPages(response.pagination.pages);
      }
      setError(null);
    } catch (err: any) {
      console.error('Error fetching internships:', err);
      setError(err.response?.data?.message || 'Failed to fetch internships');
    } finally {
      setLoading(false);
    }
  };

  const handleInternshipClick = (internship: Internship) => {
    navigate(`/internships/${internship._id}`);
  };

  const handleApply = async (internship: Internship) => {
    try {
      const response = await internshipsAPI.trackApplication(internship._id);
      // Open application URL in new tab
      window.open(internship.applicationUrl, '_blank');
    } catch (err: any) {
      console.error('Error tracking application:', err);
      // Still open the application URL even if tracking fails
      window.open(internship.applicationUrl, '_blank');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handleLevelChange = (event: any) => {
    setSelectedLevel(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `${diffDays} days left`;
    
    return date.toLocaleDateString();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Internship Opportunities
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Discover exciting internship positions at top technology companies
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Search internships..."
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by title, company, or skills"
            />
          </Grid>
          <Grid item xs={12} md={3}>
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
          </Grid>
          <Grid item xs={12} md={3}>
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
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControlLabel
              control={
                <Switch
                  checked={remoteOnly}
                  onChange={(e) => {
                    setRemoteOnly(e.target.checked);
                    setPage(1);
                  }}
                />
              }
              label="Remote only"
            />
          </Grid>
        </Grid>
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

      {/* Internships Grid */}
      {!loading && !error && (
        <>
          <Grid container spacing={3}>
            {internships.map((internship) => (
              <Grid item xs={12} md={6} lg={4} key={internship._id}>
                <Card 
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
                  onClick={() => handleInternshipClick(internship)}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Company Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        {internship.company.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h2" fontWeight="bold">
                          {internship.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {internship.company.name}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {internship.description.substring(0, 150)}
                      {internship.description.length > 150 ? '...' : ''}
                    </Typography>

                    {/* Location & Remote */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="body2" color="text.secondary">
                        {internship.location.remote 
                          ? 'Remote' 
                          : `${internship.location.city}, ${internship.location.state || internship.location.country}`
                        }
                        {internship.location.remote && internship.location.city && 
                          ` • ${internship.location.city}, ${internship.location.state || internship.location.country}`
                        }
                      </Typography>
                    </Box>

                    {/* Duration */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTime sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="body2" color="text.secondary">
                        {internship.duration}
                      </Typography>
                    </Box>

                    {/* Stipend */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AttachMoney sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="body2" color="text.secondary">
                        {formatSalary(internship.stipend)}
                      </Typography>
                    </Box>

                    {/* Stats */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Visibility sx={{ mr: 0.5, fontSize: 14 }} />
                        <Typography variant="caption" color="text.secondary">
                          {internship.viewCount} views
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <People sx={{ mr: 0.5, fontSize: 14 }} />
                        <Typography variant="caption" color="text.secondary">
                          {internship.applicationCount} applications
                        </Typography>
                      </Box>
                    </Box>

                    {/* Tags */}
                    <Box sx={{ mb: 2 }}>
                      <Chip 
                        label={internship.level} 
                        size="small" 
                        color={getLevelColor(internship.level) as any}
                        sx={{ mr: 1, mb: 1 }}
                      />
                      <Chip 
                        label={internship.type} 
                        size="small" 
                        color={getTypeColor(internship.type) as any}
                        variant="outlined"
                        sx={{ mr: 1, mb: 1 }}
                      />
                      {internship.featured && (
                        <Chip 
                          label="Featured" 
                          size="small" 
                          color="primary"
                          sx={{ mb: 1 }}
                        />
                      )}
                    </Box>

                    {/* Skills */}
                    <Box>
                      {internship.skills.slice(0, 3).map((skill, index) => (
                        <Chip 
                          key={index}
                          label={skill} 
                          size="small" 
                          variant="outlined"
                          sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem' }}
                        />
                      ))}
                      {internship.skills.length > 3 && (
                        <Chip 
                          label={`+${internship.skills.length - 3} more`}
                          size="small" 
                          variant="outlined"
                          sx={{ mb: 0.5, fontSize: '0.7rem' }}
                        />
                      )}
                    </Box>

                    {/* Deadline */}
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        Deadline: {formatDeadline(internship.applicationDeadline)}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                  <CardActions>
                    <Button 
                      size="small" 
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInternshipClick(internship);
                      }}
                    >
                      View Details
                    </Button>
                    <Button 
                      size="small" 
                      variant="contained"
                      color="primary"
                      startIcon={<Launch />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApply(internship);
                      }}
                      sx={{ ml: 'auto' }}
                    >
                      Apply
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* No results */}
          {internships.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No internships found matching your criteria
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

export default Internships;
