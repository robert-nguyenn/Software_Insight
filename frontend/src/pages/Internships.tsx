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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  Pagination,
  Avatar,
  FormControlLabel,
  Switch,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LocationOn,
  Business,
  AccessTime,
  AttachMoney,
  Launch,
  Visibility,
  People,
  Search,
  School,
  Star,
  ExpandMore,
  Info
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';
import CompanyInternshipCard from '../components/CompanyInternshipCard';
import { bigTechInternships } from '../data/bigTechInternships';

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
      id={`internship-tabpanel-${index}`}
      aria-labelledby={`internship-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Internships: React.FC = () => {
  const navigate = useNavigate();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tabValue, setTabValue] = useState(0);
  
  // Filters for regular internships
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Filters for big tech companies
  const [companySearchTerm, setCompanySearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Filter big tech companies
  const filteredBigTechCompanies = bigTechInternships.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(companySearchTerm.toLowerCase()) ||
                         company.position.toLowerCase().includes(companySearchTerm.toLowerCase()) ||
                         company.skills.some((skill: string) => skill.toLowerCase().includes(companySearchTerm.toLowerCase()));
    
    const matchesDifficulty = !difficultyFilter || company.difficulty === difficultyFilter;
    
    const matchesSalary = !salaryFilter ||
      (salaryFilter === 'high' && company.payRange.min >= 8000) ||
      (salaryFilter === 'medium' && company.payRange.min >= 7000 && company.payRange.min < 8000) ||
      (salaryFilter === 'entry' && company.payRange.min < 7000);    return matchesSearch && matchesDifficulty && matchesSalary;
  });

  const bigTechStats = {
    totalCompanies: bigTechInternships.length,
    avgSalary: Math.round(bigTechInternships.reduce((sum, company) => sum + company.payRange.min, 0) / bigTechInternships.length),
    totalPositions: bigTechInternships.reduce((sum, company) =>
      sum + company.locations.reduce((locSum: number, loc: any) =>
        locSum + parseInt(loc.headcount.replace(/[^\d]/g, '')) || 0, 0), 0),
    competitiveRate: Math.round((bigTechInternships.filter(c => c.difficulty === 'Extremely Competitive').length / bigTechInternships.length) * 100)      
  };  const handleInternshipClick = (internship: Internship) => {
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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Big Tech Internships Guide
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive information about internship opportunities at top tech companies
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Get detailed insights into application processes, interview rounds, compensation, 
          and insider tips for landing internships at Google, Meta, Amazon, Microsoft, and more.
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Summer 2025 Big Tech Overview
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {bigTechStats.totalCompanies}
            </Typography>
            <Typography variant="body1">
              Top Companies
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              ${bigTechStats.avgSalary.toLocaleString()}
            </Typography>
            <Typography variant="body1">
              Average Monthly Pay
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {(bigTechStats.totalPositions / 1000).toFixed(0)}K+
            </Typography>
            <Typography variant="body1">
              Total Intern Positions
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {bigTechStats.competitiveRate}%
            </Typography>
            <Typography variant="body1">
              Extremely Competitive
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="internship tabs">
          <Tab 
            label={`Big Tech Companies (${bigTechInternships.length})`} 
            icon={<Star />}
            iconPosition="start"
          />
          <Tab 
            label={`All Internships (${internships.length})`} 
            icon={<Business />}
            iconPosition="start"
          />
          <Tab 
            label="Application Guide" 
            icon={<School />}
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {/* Big Tech Companies Tab */}
      <TabPanel value={tabValue} index={0}>
        {/* Search and Filters */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Search & Filter Big Tech Companies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: 1, minWidth: 250 }}>
              <TextField
                fullWidth
                placeholder="Search companies, positions, or skills..."
                value={companySearchTerm}
                onChange={(e) => setCompanySearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel>Difficulty Level</InputLabel>
                <Select
                  value={difficultyFilter}
                  label="Difficulty Level"
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <MenuItem value="">All Levels</MenuItem>
                  <MenuItem value="Competitive">Competitive</MenuItem>
                  <MenuItem value="Very Competitive">Very Competitive</MenuItem>
                  <MenuItem value="Extremely Competitive">Extremely Competitive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1, minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel>Salary Range</InputLabel>
                <Select
                  value={salaryFilter}
                  label="Salary Range"
                  onChange={(e) => setSalaryFilter(e.target.value)}
                >
                  <MenuItem value="">All Ranges</MenuItem>
                  <MenuItem value="high">$8,000+ / month</MenuItem>
                  <MenuItem value="medium">$7,000 - $8,000 / month</MenuItem>
                  <MenuItem value="entry">Under $7,000 / month</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Paper>

        {/* Results count */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Showing {filteredBigTechCompanies.length} of {bigTechInternships.length} companies
          </Typography>
        </Box>

        {/* Company Cards */}
        <Box>
          {filteredBigTechCompanies.map((company) => (
            <CompanyInternshipCard key={company.id} company={company} />
          ))}
        </Box>

        {filteredBigTechCompanies.length === 0 && (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No companies match your search criteria
            </Typography>
            <Button 
              onClick={() => {
                setCompanySearchTerm('');
                setDifficultyFilter('');
                setSalaryFilter('');
              }}
              sx={{ mt: 2 }}
            >
              Clear Filters
            </Button>
          </Paper>
        )}
      </TabPanel>

      {/* Regular Internships Tab */}
      <TabPanel value={tabValue} index={1}>
        {/* Search and Filters for regular internships */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Search & Filter Internships
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 2,
            alignItems: 'center'
          }}>
            <TextField
              fullWidth
              label="Search internships..."
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by title, company, or skills"
            />
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
          </Box>
        </Paper>

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

        {/* Regular Internship Cards */}
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
              {internships.map((internship) => (
                <Card 
                  key={internship._id}
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
              ))}
            </Box>

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
      </TabPanel>

      {/* Filters */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: 2,
          alignItems: 'center'
        }}>
          <TextField
            fullWidth
            label="Search internships..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by title, company, or skills"
          />
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

      {/* Internships Grid */}
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
            {internships.map((internship) => (
              <Card 
                key={internship._id}
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
            ))}
          </Box>

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

      {/* Application Guide Tab */}
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Big Tech Internship Application Guide
          </Typography>
          
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Application Timeline</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Big tech companies typically open internship applications between August and October for the following summer. 
                Here's a typical timeline:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li><strong>August-September:</strong> Applications open (Google, Apple)</li>
                <li><strong>October-December:</strong> Most applications due</li>
                <li><strong>January-March:</strong> Interview rounds</li>
                <li><strong>April-May:</strong> Final decisions and offers</li>
                <li><strong>June-August:</strong> Internship period</li>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Technical Preparation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Technical interviews are the most important part of the process. Here's what to focus on:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li><strong>Data Structures:</strong> Arrays, Linked Lists, Trees, Graphs, Hash Tables</li>
                <li><strong>Algorithms:</strong> Sorting, Searching, Dynamic Programming, Greedy</li>
                <li><strong>System Design:</strong> Scalability, Databases, APIs, Caching</li>
                <li><strong>Coding Practice:</strong> LeetCode, HackerRank, CodeSignal</li>
                <li><strong>Mock Interviews:</strong> Practice with peers or platforms like Pramp</li>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Application Tips</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Stand out from thousands of applicants with these strategies:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li><strong>Strong Resume:</strong> Highlight relevant projects, internships, and achievements</li>
                <li><strong>Referrals:</strong> Network with current employees for internal referrals</li>
                <li><strong>Projects:</strong> Build impressive projects showcasing technical skills</li>
                <li><strong>Open Source:</strong> Contribute to popular open-source projects</li>
                <li><strong>Apply Early:</strong> Submit applications as soon as they open</li>
                <li><strong>Multiple Companies:</strong> Apply to several companies to increase chances</li>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Interview Preparation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Each company has different interview styles. Prepare for:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li><strong>Behavioral Questions:</strong> Use STAR method, prepare company-specific examples</li>
                <li><strong>Technical Coding:</strong> Practice live coding, explain your thought process</li>
                <li><strong>System Design:</strong> Understand scalability, trade-offs, and architecture</li>
                <li><strong>Company Research:</strong> Know the company's products, values, and culture</li>
                <li><strong>Questions to Ask:</strong> Prepare thoughtful questions about the role and team</li>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Paper sx={{ p: 3, mt: 3, bgcolor: 'info.light', color: 'info.contrastText' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Info sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Pro Tip
              </Typography>
            </Box>
            <Typography>
              Start preparing at least 3-6 months before application deadlines. 
              Consistency in practice is more important than cramming. Focus on 
              understanding concepts rather than memorizing solutions.
            </Typography>
          </Paper>
        </Box>
      </TabPanel>
    </Container>
  );
};

export default Internships;
