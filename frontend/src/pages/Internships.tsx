import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  TextField,
  Grid,
  CircularProgress,
  Alert,
  Pagination,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LocationOn,
  Business,
  AttachMoney,
  Search,
  Language,
  CalendarToday,
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';

const Internships: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 12;

  // Company-specific data with detailed information
  const companyData: { [key: string]: any } = {
    'Google': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      headquarters: 'Mountain View, CA',
      employees: '150,000+',
      founded: '1998',
      website: 'https://careers.google.com',
      industry: 'Technology',
      interviewProcess: [
        'Online Application',
        'Phone/Video Screen (45 mins)',
        'Technical Phone Interview (45 mins)',
        'Onsite/Virtual Interviews (4-5 rounds)',
        'Final Review & Decision'
      ],
      applicationPeriod: 'September - November',
      avgSalary: '$8,500/month',
      locations: ['Mountain View', 'New York', 'Seattle', 'Austin', 'Chicago'],
      benefits: ['Housing stipend', 'Free meals', 'Transportation', 'Health insurance', 'Gym access'],
      techStack: ['Java', 'Python', 'C++', 'Go', 'JavaScript', 'TensorFlow'],
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%'
    },
    'Meta': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      headquarters: 'Menlo Park, CA',
      employees: '77,000+',
      founded: '2004',
      website: 'https://careers.facebook.com',
      industry: 'Social Media & Technology',
      interviewProcess: [
        'Online Application',
        'Recruiter Phone Screen (30 mins)',
        'Technical Phone Screen (45 mins)',
        'Onsite Interviews (4-5 rounds)',
        'Final Review'
      ],
      applicationPeriod: 'August - October',
      avgSalary: '$8,800/month',
      locations: ['Menlo Park', 'New York', 'Seattle', 'Austin', 'London'],
      benefits: ['Housing allowance', 'Free meals', 'Transportation', 'Health benefits', 'Wellness programs'],
      techStack: ['React', 'Python', 'C++', 'Hack', 'GraphQL', 'PyTorch'],
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%'
    },
    'Apple': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      headquarters: 'Cupertino, CA',
      employees: '164,000+',
      founded: '1976',
      website: 'https://jobs.apple.com',
      industry: 'Consumer Electronics & Technology',
      interviewProcess: [
        'Online Application',
        'Recruiter Screen (30 mins)',
        'Technical Phone Interview (60 mins)',
        'Onsite Interviews (4-6 rounds)',
        'Executive Review'
      ],
      applicationPeriod: 'September - December',
      avgSalary: '$8,200/month',
      locations: ['Cupertino', 'Austin', 'Seattle', 'San Diego', 'Boston'],
      benefits: ['Relocation assistance', 'Employee discount', 'Health insurance', 'Fitness centers'],
      techStack: ['Swift', 'Objective-C', 'C++', 'Python', 'Machine Learning', 'iOS/macOS'],
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 2%'
    },
    'Amazon': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      headquarters: 'Seattle, WA',
      employees: '1,500,000+',
      founded: '1994',
      website: 'https://amazon.jobs',
      industry: 'E-commerce & Cloud Computing',
      interviewProcess: [
        'Online Application',
        'Online Assessment (OA)',
        'Technical Phone Screen (45 mins)',
        'Final Round Interviews (3-4 rounds)',
        'Bar Raiser Review'
      ],
      applicationPeriod: 'August - November',
      avgSalary: '$7,800/month',
      locations: ['Seattle', 'Austin', 'Boston', 'New York', 'Bay Area'],
      benefits: ['Relocation assistance', 'Health insurance', 'AWS credits', 'Career development'],
      techStack: ['Java', 'Python', 'C++', 'AWS', 'DynamoDB', 'Lambda'],
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%'
    },
    'Microsoft': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      headquarters: 'Redmond, WA',
      employees: '220,000+',
      founded: '1975',
      website: 'https://careers.microsoft.com',
      industry: 'Software & Cloud Services',
      interviewProcess: [
        'Online Application',
        'Recruiter Screen (30 mins)',
        'Technical Phone Screen (45 mins)',
        'Onsite/Virtual Final Round (4-5 interviews)',
        'Final Decision'
      ],
      applicationPeriod: 'August - October',
      avgSalary: '$7,600/month',
      locations: ['Redmond', 'San Francisco', 'New York', 'Austin', 'Atlanta'],
      benefits: ['Housing assistance', 'Health insurance', 'Azure credits', 'Learning resources'],
      techStack: ['C#', 'Python', 'TypeScript', 'Azure', '.NET', 'React'],
      difficulty: 'Very Hard',
      acceptanceRate: '< 5%'
    },
    'Netflix': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      headquarters: 'Los Gatos, CA',
      employees: '12,000+',
      founded: '1997',
      website: 'https://jobs.netflix.com',
      industry: 'Streaming & Entertainment',
      interviewProcess: [
        'Online Application',
        'Recruiter Call (30 mins)',
        'Technical Screen (60 mins)',
        'Onsite Interviews (4-5 rounds)',
        'Final Review'
      ],
      applicationPeriod: 'September - November',
      avgSalary: '$8,000/month',
      locations: ['Los Gatos', 'Los Angeles', 'New York', 'Amsterdam'],
      benefits: ['Unlimited PTO', 'Stock options', 'Health insurance', 'Content access'],
      techStack: ['Java', 'Python', 'Node.js', 'React', 'AWS', 'Microservices'],
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%'
    }
  };

  const fetchInternships = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      };

      const response = await internshipsAPI.getInternships(params);
      
      if (response.success) {
        setInternships(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      } else {
        setError('Failed to fetch internships');
      }
    } catch (err) {
      console.error('Error fetching internships:', err);
      setError('Failed to load internships. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, [currentPage, searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (internshipId: string) => {
    navigate(`/internships/${internshipId}`);
  };

  const getCompanyInfo = (companyName: string) => {
    return companyData[companyName] || {
      logo: '',
      headquarters: 'N/A',
      employees: 'N/A',
      founded: 'N/A',
      website: '#',
      industry: 'Technology',
      interviewProcess: ['Application Review', 'Technical Interview', 'Final Interview'],
      applicationPeriod: 'Varies',
      avgSalary: 'Competitive',
      locations: ['Multiple locations'],
      benefits: ['Competitive benefits package'],
      techStack: ['Various technologies'],
      difficulty: 'Hard',
      acceptanceRate: 'Competitive'
    };
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress size={48} />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Technology Internships 2025
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Discover internship opportunities at the world's leading technology companies
        </Typography>

        {/* Search Bar */}
        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search companies, positions, or skills..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                borderRadius: 3,
              },
            }}
          />
        </Box>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Internships Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 3,
        }}
      >
        {internships.map((internship) => {
          const companyInfo = getCompanyInfo(internship.company.name);
          
          return (
            <Card
              key={internship._id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                },
              }}
              onClick={() => handleViewDetails(internship._id)}
            >
                {/* Company Header */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: 'white',
                      border: '2px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {companyInfo.logo ? (
                      <img
                        src={companyInfo.logo}
                        alt={internship.company.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <Business sx={{ color: 'primary.main', fontSize: 30 }} />
                    )}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {internship.company.name}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {companyInfo.industry}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Position Title */}
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {internship.title}
                  </Typography>

                  {/* Key Info */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {internship.location.city}{internship.location.state ? `, ${internship.location.state}` : ''}{internship.location.remote ? ' (Remote)' : ''}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AttachMoney sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {companyInfo.avgSalary}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        Applications: {companyInfo.applicationPeriod}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Company Stats */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ flex: 1, textAlign: 'center', p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="caption" color="text.secondary">
                          Employees
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          {companyInfo.employees}
                        </Typography>
                      </Box>
                      <Box sx={{ flex: 1, textAlign: 'center', p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                        <Typography variant="caption" color="text.secondary">
                          Difficulty
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight="600"
                          color={
                            companyInfo.difficulty === 'Extremely Hard'
                              ? 'error.main'
                              : companyInfo.difficulty === 'Very Hard'
                              ? 'warning.main'
                              : 'success.main'
                          }
                        >
                          {companyInfo.difficulty}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>                  {/* Tech Stack */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                      Tech Stack
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {companyInfo.techStack.slice(0, 4).map((tech: string, index: number) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: 10 }}
                        />
                      ))}
                      {companyInfo.techStack.length > 4 && (
                        <Chip
                          label={`+${companyInfo.techStack.length - 4}`}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: 10 }}
                        />
                      )}
                    </Box>
                  </Box>
                </CardContent>

                <Divider />

                <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                  <Tooltip title="Company Website">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(companyInfo.website, '_blank');
                      }}
                    >
                      <Language />
                    </IconButton>
                  </Tooltip>
                  
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(internship._id);
                    }}
                    sx={{ borderRadius: 20 }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
          );
        })}
      </Box>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}

      {/* No results message */}
      {!loading && internships.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No internships found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search criteria or check back later for new opportunities.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Internships;
