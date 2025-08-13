import React, { useState, useEffect, useCallback } from 'react';
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
  CircularProgress,
  Alert,
  Pagination,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Badge,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LocationOn,
  Business,
  AttachMoney,
  Search,
  Language,
  CalendarToday,
  Login,
  BookmarkBorder,
  Bookmark,
  Info,
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Internships: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [interviewDialogOpen, setInterviewDialogOpen] = useState(false);
  const [bookmarkedInternships, setBookmarkedInternships] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const itemsPerPage = 12;

  // Company-specific data with detailed interview information
  const companyData: { [key: string]: any } = {
    'Google': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      industry: 'Search & Cloud Technology',
      interviewRounds: 4,
      interviewProcess: {
        round1: {
          name: 'Phone Screen',
          duration: '45-60 mins',
          type: 'Technical + Behavioral',
          format: 'Google Doc coding',
          questions: '1-2 Medium LeetCode problems',
          topics: ['Arrays', 'Strings', 'Hash Tables', 'Basic DP'],
          tips: 'Focus on clean code and communication'
        },
        round2: {
          name: 'Technical Phone',
          duration: '45 mins',
          type: 'Deep Technical',
          format: 'Google Doc',
          questions: '1 Hard LeetCode problem',
          topics: ['Trees', 'Graphs', 'Advanced DP', 'System Design basics'],
          tips: 'Think out loud, optimize time/space complexity'
        },
        round3: {
          name: 'Onsite Round 1',
          duration: '45 mins',
          type: 'Coding',
          format: 'Whiteboard/Google Doc',
          questions: '1-2 Medium-Hard problems',
          topics: ['Graph algorithms', 'Tree traversal', 'Dynamic Programming'],
          tips: 'Ask clarifying questions first'
        },
        round4: {
          name: 'Onsite Round 2',
          duration: '45 mins',
          type: 'System Design',
          format: 'Whiteboard discussion',
          questions: 'Design a simple system (URL shortener, Chat app)',
          topics: ['Scalability', 'Database design', 'Load balancing'],
          tips: 'Start high-level, then dive into details'
        }
      },
      applicationPeriod: 'September - November',
      avgSalary: '$8,500/month',
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%',
      onlineAssessment: 'None typically, but may have coding challenges',
      totalLeetCode: '300+ problems recommended',
      focusAreas: ['Algorithms', 'Data Structures', 'System Design', 'Googleyness']
    },
    'Meta': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      industry: 'Social Media & VR/AR',
      interviewRounds: 4,
      interviewProcess: {
        round1: {
          name: 'Recruiter Screen',
          duration: '30 mins',
          type: 'Behavioral',
          format: 'Video call',
          questions: 'Background, interest in Meta, basic technical questions',
          topics: ['Resume walkthrough', 'Why Meta', 'Past projects'],
          tips: 'Show passion for connecting people'
        },
        round2: {
          name: 'Technical Screen',
          duration: '45 mins',
          type: 'Coding',
          format: 'CoderPad',
          questions: '1-2 Medium LeetCode problems',
          topics: ['Arrays', 'Strings', 'Trees', 'Hash Tables'],
          tips: 'Code in your preferred language, explain approach'
        },
        round3: {
          name: 'Onsite - Coding',
          duration: '45 mins',
          type: 'Technical',
          format: 'CoderPad',
          questions: '1-2 Medium-Hard problems',
          topics: ['Graphs', 'Dynamic Programming', 'Tree algorithms'],
          tips: 'Optimize for both time and space'
        },
        round4: {
          name: 'Onsite - Behavioral',
          duration: '45 mins',
          type: 'Leadership & Behavioral',
          format: 'Discussion',
          questions: 'Meta values and past experiences',
          topics: ['Meta values', 'Leadership', 'Impact', 'Challenges'],
          tips: 'Use STAR method, show growth mindset'
        }
      },
      applicationPeriod: 'August - October',
      avgSalary: '$8,800/month',
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%',
      onlineAssessment: 'Possible coding assessment before phone screen',
      totalLeetCode: '250+ problems recommended',
      focusAreas: ['Coding', 'Product Sense', 'Meta Values', 'Communication']
    },
    'Apple': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      industry: 'Consumer Electronics',
      interviewRounds: 5,
      interviewProcess: {
        round1: {
          name: 'Recruiter Screen',
          duration: '30 mins',
          type: 'Behavioral',
          format: 'Phone/Video',
          questions: 'Background, interest in Apple, availability',
          topics: ['Resume review', 'Why Apple', 'Technical background'],
          tips: 'Show passion for Apple products and innovation'
        },
        round2: {
          name: 'Technical Phone',
          duration: '60 mins',
          type: 'Technical Deep Dive',
          format: 'Shared screen coding',
          questions: '2-3 Medium LeetCode problems',
          topics: ['Algorithms', 'Data structures', 'Problem solving'],
          tips: 'Be thorough, test your solutions'
        },
        round3: {
          name: 'Onsite - Technical 1',
          duration: '60 mins',
          type: 'Advanced Coding',
          format: 'Whiteboard',
          questions: '1-2 Hard problems',
          topics: ['Complex algorithms', 'Optimization', 'Edge cases'],
          tips: 'Think through edge cases carefully'
        },
        round4: {
          name: 'Onsite - Technical 2',
          duration: '60 mins',
          type: 'System Design',
          format: 'Whiteboard',
          questions: 'Design iOS app backend or Apple service',
          topics: ['Scalability', 'iOS integration', 'Performance'],
          tips: 'Consider Apple ecosystem integration'
        },
        round5: {
          name: 'Onsite - Team Fit',
          duration: '45 mins',
          type: 'Behavioral + Technical',
          format: 'Discussion',
          questions: 'Team dynamics, past projects, Apple values',
          topics: ['Collaboration', 'Innovation', 'Attention to detail'],
          tips: 'Demonstrate attention to detail and quality'
        }
      },
      applicationPeriod: 'September - December',
      avgSalary: '$8,200/month',
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 2%',
      onlineAssessment: 'Rare, mostly direct to phone screen',
      totalLeetCode: '400+ problems recommended',
      focusAreas: ['Technical Excellence', 'Attention to Detail', 'Innovation', 'Quality']
    },
    'Amazon': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      industry: 'E-commerce & Cloud',
      interviewRounds: 4,
      interviewProcess: {
        round1: {
          name: 'Online Assessment (OA)',
          duration: '90 mins',
          type: 'Coding + Behavioral',
          format: 'Online platform',
          questions: '2 Medium coding + workplace scenarios',
          topics: ['Arrays', 'Strings', 'Trees', 'Amazon Leadership Principles'],
          tips: 'Complete all test cases, be honest in behavioral'
        },
        round2: {
          name: 'Technical Phone',
          duration: '45 mins',
          type: 'Coding',
          format: 'Amazon Chime + coding platform',
          questions: '1-2 Medium LeetCode problems',
          topics: ['Data structures', 'Algorithms', 'Time complexity'],
          tips: 'Explain your thought process clearly'
        },
        round3: {
          name: 'Final Round - Technical',
          duration: '45 mins',
          type: 'Advanced Coding',
          format: 'Video call + shared screen',
          questions: '1 Hard LeetCode problem',
          topics: ['Advanced algorithms', 'Dynamic programming', 'Graph algorithms'],
          tips: 'Start with brute force, then optimize'
        },
        round4: {
          name: 'Final Round - Behavioral',
          duration: '45 mins',
          type: 'Leadership Principles',
          format: 'Video discussion',
          questions: 'Amazon Leadership Principles scenarios',
          topics: ['Customer Obsession', 'Ownership', 'Invent and Simplify', 'Bias for Action'],
          tips: 'Use STAR method, focus on impact and data'
        }
      },
      applicationPeriod: 'August - November',
      avgSalary: '$7,800/month',
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%',
      onlineAssessment: 'Always required - 2 coding + behavioral questions',
      totalLeetCode: '200+ problems recommended',
      focusAreas: ['Coding', 'Leadership Principles', 'Customer Focus', 'Data-driven decisions']
    },
    'Microsoft': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      industry: 'Software & Cloud',
      interviewRounds: 4,
      interviewProcess: {
        round1: {
          name: 'Recruiter Screen',
          duration: '30 mins',
          type: 'Behavioral',
          format: 'Video call',
          questions: 'Background, interest in Microsoft, basic technical',
          topics: ['Resume walkthrough', 'Why Microsoft', 'Technical interests'],
          tips: 'Show passion for technology and learning'
        },
        round2: {
          name: 'Technical Screen',
          duration: '45 mins',
          type: 'Coding',
          format: 'Microsoft Teams + coding platform',
          questions: '1-2 Medium LeetCode problems',
          topics: ['Arrays', 'Linked Lists', 'Trees', 'Basic algorithms'],
          tips: 'Write clean, readable code'
        },
        round3: {
          name: 'Virtual Onsite 1',
          duration: '45 mins',
          type: 'Technical',
          format: 'Whiteboard/screen share',
          questions: '1-2 Medium-Hard problems',
          topics: ['Data structures', 'Algorithms', 'Problem solving'],
          tips: 'Ask clarifying questions, think out loud'
        },
        round4: {
          name: 'Virtual Onsite 2',
          duration: '45 mins',
          type: 'Behavioral + Technical',
          format: 'Discussion',
          questions: 'Microsoft values, past projects, technical challenges',
          topics: ['Growth mindset', 'Collaboration', 'Innovation', 'Inclusion'],
          tips: 'Show growth mindset and inclusive leadership'
        }
      },
      applicationPeriod: 'August - October',
      avgSalary: '$7,600/month',
      difficulty: 'Very Hard',
      acceptanceRate: '< 5%',
      onlineAssessment: 'Sometimes - depends on role and recruiter',
      totalLeetCode: '150+ problems recommended',
      focusAreas: ['Technical Skills', 'Growth Mindset', 'Collaboration', 'Problem Solving']
    },
    'Netflix': {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      industry: 'Streaming Entertainment',
      interviewRounds: 4,
      interviewProcess: {
        round1: {
          name: 'Recruiter Call',
          duration: '30 mins',
          type: 'Cultural Fit',
          format: 'Video call',
          questions: 'Netflix culture, background, motivation',
          topics: ['Netflix culture', 'Freedom & responsibility', 'High performance'],
          tips: 'Understand Netflix culture deeply'
        },
        round2: {
          name: 'Technical Screen',
          duration: '60 mins',
          type: 'System Design + Coding',
          format: 'Video + shared coding',
          questions: '1 Medium coding + basic system design',
          topics: ['Microservices', 'Scalability', 'Streaming concepts'],
          tips: 'Think about scale and performance'
        },
        round3: {
          name: 'Onsite - Technical',
          duration: '60 mins',
          type: 'Advanced Technical',
          format: 'Whiteboard',
          questions: '1-2 Hard problems related to streaming/media',
          topics: ['Distributed systems', 'Data processing', 'Optimization'],
          tips: 'Consider real-world Netflix problems'
        },
        round4: {
          name: 'Onsite - Culture',
          duration: '45 mins',
          type: 'Cultural Assessment',
          format: 'Discussion',
          questions: 'Netflix values, decision-making, autonomy',
          topics: ['Freedom & Responsibility', 'High Performance', 'Context not Control'],
          tips: 'Show you can thrive with high autonomy'
        }
      },
      applicationPeriod: 'September - November',
      avgSalary: '$8,000/month',
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%',
      onlineAssessment: 'Rare - usually direct to technical screen',
      totalLeetCode: '200+ problems recommended',
      focusAreas: ['System Design', 'Culture Fit', 'Autonomy', 'High Performance']
    }
  };

  const fetchInternships = useCallback(async () => {
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
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
    fetchInternships();
  }, [currentPage, searchTerm, fetchInternships]);

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
      acceptanceRate: 'Competitive',
      focusAreas: ['General Skills', 'Problem Solving', 'Communication'],
      interviewRounds: 3,
      onlineAssessment: 'Yes - coding challenge',
      totalLeetCode: 'Varies',
      rounds: [],
      proTip: 'Practice coding problems and system design.'
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
                Sign in to save your favorite internships!
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                Track your application progress, bookmark opportunities, 
                and get personalized recommendations based on your interests.
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
          const isBookmarked = bookmarkedInternships.has(internship._id);
          
          const handleBookmarkToggle = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (!isAuthenticated) {
              navigate('/login');
              return;
            }
            
            const newBookmarks = new Set(bookmarkedInternships);
            if (isBookmarked) {
              newBookmarks.delete(internship._id);
            } else {
              newBookmarks.add(internship._id);
            }
            setBookmarkedInternships(newBookmarks);
          };
          
          return (
            <motion.div
              key={internship._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: isBookmarked ? '2px solid' : '1px solid',
                  borderColor: isBookmarked ? 'primary.main' : 'divider',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                }}
                onClick={() => handleViewDetails(internship._id)}
              >
                {/* Bookmark Button */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    zIndex: 2,
                  }}
                >
                  <Tooltip title={isAuthenticated ? (isBookmarked ? "Remove bookmark" : "Bookmark internship") : "Sign in to bookmark"}>
                    <IconButton
                      onClick={handleBookmarkToggle}
                      sx={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 1)',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <Badge 
                        color="primary" 
                        variant="dot" 
                        invisible={!isBookmarked}
                      >
                        {isBookmarked ? (
                          <Bookmark sx={{ color: 'primary.main' }} />
                        ) : (
                          <BookmarkBorder sx={{ color: 'action.active' }} />
                        )}
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Box>

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
                      {isBookmarked && (
                        <Chip 
                          label="Bookmarked" 
                          size="small" 
                          sx={{ 
                            ml: 1, 
                            fontSize: '0.7rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                          }}
                        />
                      )}
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

                  {/* Interview Process Summary */}
                  <Box 
                    sx={{ 
                      mb: 3, 
                      p: 2, 
                      bgcolor: 'primary.50', 
                      borderRadius: 2, 
                      border: '1px solid', 
                      borderColor: 'primary.100',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'primary.100',
                        transform: 'translateY(-1px)',
                        boxShadow: 2
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => {
                      setSelectedCompany(companyInfo);
                      setInterviewDialogOpen(true);
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight="600" color="primary.main" gutterBottom>
                      🎯 Interview Intelligence ({companyInfo.interviewRounds} rounds) - Click for details
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                      OA: {companyInfo.onlineAssessment}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Total LeetCode: {companyInfo.totalLeetCode}
                    </Typography>
                  </Box>

                  {/* Key Stats */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
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
                    <Box sx={{ flex: 1, textAlign: 'center', p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        Acceptance
                      </Typography>
                      <Typography variant="body2" fontWeight="600" color="error.main">
                        {companyInfo.acceptanceRate}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Focus Areas */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                      Key Focus Areas
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {companyInfo.focusAreas && companyInfo.focusAreas.slice(0, 3).map((area: string, index: number) => (
                        <Chip
                          key={index}
                          label={area}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: 10, height: 20 }}
                        />
                      ))}
                      {companyInfo.focusAreas && companyInfo.focusAreas.length > 3 && (
                        <Chip
                          label={`+${companyInfo.focusAreas.length - 3}`}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: 10, height: 20 }}
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
            </motion.div>
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

      {/* Interview Details Dialog */}
      <Dialog 
        open={interviewDialogOpen} 
        onClose={() => setInterviewDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ bgcolor: 'primary.50', color: 'primary.dark' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {selectedCompany?.logo && (
              <img 
                src={selectedCompany.logo} 
                alt={`${selectedCompany.name} logo`}
                style={{ height: 32, width: 'auto' }}
              />
            )}
            <Typography variant="h6" fontWeight="600">
              {selectedCompany?.name} - Interview Process Intelligence
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          {selectedCompany && (
            <Box>
              {/* Overview */}
              <Box sx={{ mb: 4, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  📊 Overview
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Total Rounds</Typography>
                    <Typography variant="body1" fontWeight="600">{selectedCompany.interviewRounds}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Total LeetCode</Typography>
                    <Typography variant="body1" fontWeight="600">{selectedCompany.totalLeetCode}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Acceptance Rate</Typography>
                    <Typography variant="body1" fontWeight="600" color="error.main">{selectedCompany.acceptanceRate}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Difficulty</Typography>
                    <Typography 
                      variant="body1" 
                      fontWeight="600"
                      color={
                        selectedCompany.difficulty === 'Extremely Hard' ? 'error.main' :
                        selectedCompany.difficulty === 'Very Hard' ? 'warning.main' : 'success.main'
                      }
                    >
                      {selectedCompany.difficulty}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Online Assessment */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  💻 Online Assessment
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>{selectedCompany.onlineAssessment}</Typography>
              </Box>

              {/* Interview Rounds */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  🎯 Interview Rounds
                </Typography>
                {selectedCompany.rounds && selectedCompany.rounds.map((round: any, index: number) => (
                  <Box key={index} sx={{ mb: 3, p: 2, border: '1px solid', borderColor: 'grey.200', borderRadius: 2 }}>
                    <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                      Round {index + 1}: {round.type}
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 2, mb: 2 }}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">Duration</Typography>
                        <Typography variant="body2">{round.duration}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">LeetCode Questions</Typography>
                        <Typography variant="body2">{round.leetcodeCount}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">Focus</Typography>
                        <Typography variant="body2">{round.focus}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      <strong>Topics:</strong> {round.topics}
                    </Typography>
                    <Typography variant="body2" color="primary.dark">
                      <strong>💡 Tip:</strong> {round.tip}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Focus Areas */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  🎯 Key Focus Areas
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedCompany.focusAreas && selectedCompany.focusAreas.map((area: string, index: number) => (
                    <Chip key={index} label={area} variant="outlined" color="primary" />
                  ))}
                </Box>
              </Box>

              {/* Pro Tips */}
              <Box sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.200' }}>
                <Typography variant="h6" gutterBottom color="success.dark">
                  💡 Pro Tips
                </Typography>
                <Typography variant="body2" color="success.dark">
                  {selectedCompany.proTip}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setInterviewDialogOpen(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Internships;
