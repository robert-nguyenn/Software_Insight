import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Box,
  Button,
  Collapse,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Avatar,
  Paper,
  LinearProgress
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  LocationOn,
  AttachMoney,
  Schedule,
  Group,
  Assignment,
  CheckCircle,
  School,
  Code,
  Business,
  Star,
  TrendingUp,
  Language,
  OpenInNew
} from '@mui/icons-material';

interface InterviewRound {
  name: string;
  duration: string;
  format: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface Location {
  city: string;
  state?: string;
  country: string;
  headcount: string;
  isRemote?: boolean;
}

interface CompanyInternshipData {
  id: string;
  name: string;
  logo: string;
  position: string;
  duration: string;
  payRange: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  locations: Location[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  interviewProcess: {
    applicationDeadline: string;
    totalRounds: number;
    rounds: InterviewRound[];
    teamMatching?: {
      duration: string;
      description: string;
    };
  };
  skills: string[];
  difficulty: 'Competitive' | 'Very Competitive' | 'Extremely Competitive';
  acceptanceRate?: string;
  applicationTips: string[];
  companyInfo: {
    size: string;
    industry: string;
    founded: string;
    headquarters: string;
  };
}

interface CompanyInternshipCardProps {
  company: CompanyInternshipData;
}

const CompanyInternshipCard: React.FC<CompanyInternshipCardProps> = ({ company }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Competitive': return 'success';
      case 'Very Competitive': return 'warning';
      case 'Extremely Competitive': return 'error';
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'error';
      default: return 'default';
    }
  };

  const formatSalary = (payRange: any) => {
    return `$${payRange.min.toLocaleString()} - $${payRange.max.toLocaleString()} ${payRange.currency}/${payRange.period}`;
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Card 
      sx={{ 
        mb: 3, 
        border: '1px solid #e0e0e0',
        '&:hover': {
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          transform: 'translateY(-2px)',
          transition: 'all 0.3s ease'
        }
      }}
    >
      <CardHeader
        avatar={
          <Avatar 
            src={company.logo} 
            alt={company.name}
            sx={{ width: 60, height: 60 }}
          />
        }
        title={
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {company.name}
            </Typography>
            <Typography variant="h6" color="primary">
              {company.position}
            </Typography>
          </Box>
        }
        action={
          <Box sx={{ textAlign: 'right' }}>
            <Chip 
              label={company.difficulty} 
              color={getDifficultyColor(company.difficulty) as any}
              sx={{ mb: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {company.acceptanceRate && `${company.acceptanceRate} acceptance rate`}
            </Typography>
          </Box>
        }
        sx={{ pb: 1 }}
      />
      
      <CardContent sx={{ pt: 0 }}>
        {/* Quick Info */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AttachMoney color="primary" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Compensation
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {formatSalary(company.payRange)}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Schedule color="primary" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Duration
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {company.duration}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn color="primary" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Primary Location
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {company.locations[0].city}, {company.locations[0].state || company.locations[0].country}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Assignment color="primary" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Interview Rounds
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {company.interviewProcess.totalRounds} rounds
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Description Preview */}
        <Typography variant="body2" paragraph>
          {company.description}
        </Typography>

        {/* Skills */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Key Skills:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {company.skills.slice(0, 6).map((skill, index) => (
              <Chip 
                key={index}
                label={skill} 
                size="small" 
                variant="outlined"
              />
            ))}
            {company.skills.length > 6 && (
              <Chip 
                label={`+${company.skills.length - 6} more`} 
                size="small" 
                variant="outlined"
                color="primary"
              />
            )}
          </Box>
        </Box>

        {/* Expand/Collapse Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
            variant="outlined"
            fullWidth
          >
            {expanded ? 'Show Less' : 'View Detailed Information'}
          </Button>
        </Box>

        {/* Detailed Information */}
        <Collapse in={expanded}>
          <Box sx={{ mt: 3 }}>
            <Divider sx={{ mb: 2 }} />
            
            {/* Tab Navigation */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {[
                    { id: 'overview', label: 'Overview', icon: <Business /> },
                    { id: 'interview', label: 'Interview Process', icon: <Assignment /> },
                    { id: 'locations', label: 'Locations', icon: <LocationOn /> },
                    { id: 'requirements', label: 'Requirements', icon: <School /> },
                    { id: 'tips', label: 'Application Tips', icon: <Star /> }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      variant={activeTab === tab.id ? 'contained' : 'text'}
                      startIcon={tab.icon}
                      size="small"
                      sx={{ minWidth: 'auto' }}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Company Information
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><Business /></ListItemIcon>
                        <ListItemText 
                          primary="Industry" 
                          secondary={company.companyInfo.industry}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><TrendingUp /></ListItemIcon>
                        <ListItemText 
                          primary="Company Size" 
                          secondary={company.companyInfo.size}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><LocationOn /></ListItemIcon>
                        <ListItemText 
                          primary="Headquarters" 
                          secondary={company.companyInfo.headquarters}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><Schedule /></ListItemIcon>
                        <ListItemText 
                          primary="Founded" 
                          secondary={company.companyInfo.founded}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      What You'll Do
                    </Typography>
                    <List dense>
                      {company.responsibilities.map((responsibility, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircle color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={responsibility} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Benefits & Perks
                    </Typography>
                    <Grid container spacing={1}>
                      {company.benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircle color="success" sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="body2">{benefit}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            )}

            {activeTab === 'interview' && (
              <Box>
                <Paper sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Interview Timeline
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Application Deadline: {company.interviewProcess.applicationDeadline}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Process Duration: 3-4 weeks
                  </Typography>
                </Paper>

                <Box sx={{ mb: 3 }}>
                  {company.interviewProcess.rounds.map((round, index) => (
                    <Paper key={index} sx={{ p: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6">
                          Round {index + 1}: {round.name}
                        </Typography>
                        <Chip 
                          label={round.difficulty} 
                          color={getDifficultyColor(round.difficulty) as any}
                          size="small"
                        />
                      </Box>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Schedule sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              Duration: {round.duration}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Language sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="body2">
                              Format: {round.format}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            {round.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </Box>

                {company.interviewProcess.teamMatching && (
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Team Matching Round
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Schedule sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">
                        Duration: {company.interviewProcess.teamMatching.duration}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {company.interviewProcess.teamMatching.description}
                    </Typography>
                  </Paper>
                )}
              </Box>
            )}

            {activeTab === 'locations' && (
              <Box>
                <Grid container spacing={2}>
                  {company.locations.map((location, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6">
                            {location.city}
                          </Typography>
                          {location.isRemote && (
                            <Chip label="Remote" color="primary" size="small" />
                          )}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {location.state && `${location.state}, `}{location.country}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="primary">
                            Headcount: {location.headcount}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {activeTab === 'requirements' && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Requirements
                    </Typography>
                    <List>
                      {company.requirements.map((requirement, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircle color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={requirement} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Technical Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {company.skills.map((skill, index) => (
                        <Chip 
                          key={index}
                          label={skill} 
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}

            {activeTab === 'tips' && (
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Application Tips & Advice
                </Typography>
                <List>
                  {company.applicationTips.map((tip, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Star color="warning" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CompanyInternshipCard;
