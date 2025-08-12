import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Collapse,
  Paper,
  Tabs,
  Tab,
  Divider,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess,
  AttachMoney,
  Schedule,
  LocationOn,
  Assignment,
  Group,
  Business,
  School,
  Code,
  CheckCircle,
  Star,
  OpenInNew
} from '@mui/icons-material';

interface CompanyInternshipData {
  id: number;
  name: string;
  logo: string;
  description: string;
  payRange: [number, number];
  duration: string;
  locations: Array<{
    city: string;
    state?: string;
    country: string;
    headcount: number;
  }>;
  skills: string[];
  requirements: string[];
  benefits: string[];
  applicationDeadline: string;
  difficulty: string;
  openRoles: number;
  companySize: string;
  industry: string;
  website: string;
  interviewProcess: {
    totalRounds: number;
    rounds: Array<{
      name: string;
      duration: string;
      description: string;
      tips: string[];
    }>;
    timeline: string;
    onlineAssessment: boolean;
  };
  applicationTips: string[];
  techStack: string[];
  companyValues: string[];
}

interface CompanyInternshipCardProps {
  company: CompanyInternshipData;
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
      id={`company-tabpanel-${index}`}
      aria-labelledby={`company-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CompanyInternshipCard: React.FC<CompanyInternshipCardProps> = ({ company }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const formatSalary = (range: [number, number]): string => {
    const [min, max] = range;
    if (min === max) {
      return `$${min.toLocaleString()}/month`;
    }
    return `$${min.toLocaleString()} - $${max.toLocaleString()}/month`;
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Card 
      sx={{ 
        mb: 3, 
        borderRadius: 2,
        boxShadow: expanded ? 4 : 2,
        transition: 'box-shadow 0.3s ease',
        border: company.difficulty === 'Extremely Competitive' ? '2px solid #f44336' : 
               company.difficulty === 'Very Competitive' ? '2px solid #ff9800' : 
               '1px solid #e0e0e0'
      }}
    >
      <CardHeader
        avatar={
          <Avatar 
            src={company.logo} 
            alt={company.name}
            sx={{ width: 56, height: 56 }}
          />
        }
        title={
          <Typography variant="h5" fontWeight="bold">
            {company.name}
          </Typography>
        }
        subheader={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Chip 
              label={company.difficulty} 
              size="small" 
              color={
                company.difficulty === 'Extremely Competitive' ? 'error' : 
                company.difficulty === 'Very Competitive' ? 'warning' : 'success'
              }
            />
            <Chip label={company.industry} size="small" variant="outlined" />
            <Chip label={company.companySize} size="small" variant="outlined" />
          </Box>
        }
        action={
          <IconButton onClick={() => window.open(company.website, '_blank')}>
            <OpenInNew />
          </IconButton>
        }
      />
      
      <CardContent sx={{ pt: 0 }}>
        {/* Quick Info */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1, minWidth: 200 }}>
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
          </Box>
          
          <Box sx={{ flex: 1, minWidth: 200 }}>
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
          </Box>
          
          <Box sx={{ flex: 1, minWidth: 200 }}>
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
          </Box>
          
          <Box sx={{ flex: 1, minWidth: 200 }}>
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
          </Box>
        </Box>

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
            {/* Tabs */}
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="company details tabs">
              <Tab label="Overview" />
              <Tab label="Interview Process" />
              <Tab label="Locations" />
              <Tab label="Requirements" />
            </Tabs>

            {/* Overview Tab */}
            <TabPanel value={activeTab} index={0}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <Box sx={{ flex: 1, minWidth: 300 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Company Information
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <Business />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Industry" 
                          secondary={company.industry}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Group />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Company Size" 
                          secondary={company.companySize}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Assignment />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Open Roles" 
                          secondary={`${company.openRoles}+ positions`}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>

                <Box sx={{ flex: 1, minWidth: 300 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      What You'll Do
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {company.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Application Deadline: {company.applicationDeadline}
                    </Typography>
                  </Paper>
                </Box>

                <Box sx={{ flex: '1 1 100%' }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Benefits & Perks
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {company.benefits.map((benefit, index) => (
                        <Box key={index} sx={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center' }}>
                          <CheckCircle color="success" sx={{ mr: 1, fontSize: 20 }} />
                          <Typography variant="body2">{benefit}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </TabPanel>

            {/* Interview Process Tab */}
            <TabPanel value={activeTab} index={1}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Interview Process Overview
                </Typography>
                <Typography variant="body2" paragraph color="text.secondary">
                  Timeline: {company.interviewProcess.timeline}
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" gutterBottom>
                    Online Assessment: {company.interviewProcess.onlineAssessment ? 'Required' : 'Not Required'}
                  </Typography>
                </Box>

                {company.interviewProcess.rounds.map((round, index) => (
                  <Paper key={index} sx={{ mb: 2, p: 2, backgroundColor: 'grey.50' }}>
                    <Typography variant="h6" gutterBottom>
                      Round {index + 1}: {round.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                      <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Schedule sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">
                            Duration: {round.duration}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 200 }}>
                        <Typography variant="body2" color="text.secondary">
                          {round.description}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Tips for Success:
                    </Typography>
                    <List dense>
                      {round.tips.map((tip, tipIndex) => (
                        <ListItem key={tipIndex}>
                          <ListItemIcon>
                            <Star color="primary" sx={{ fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={
                              <Typography variant="body2">{tip}</Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                ))}
              </Paper>
            </TabPanel>

            {/* Locations Tab */}
            <TabPanel value={activeTab} index={2}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Office Locations
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {company.locations.map((location, index) => (
                    <Box key={index} sx={{ flex: 1, minWidth: 250 }}>
                      <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6">
                            {location.city}
                          </Typography>
                          <Chip 
                            label={`${location.headcount} employees`} 
                            size="small" 
                            color="primary"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {location.state ? `${location.state}, ` : ''}{location.country}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          This is one of our {location.headcount > 5000 ? 'major' : location.headcount > 1000 ? 'significant' : 'growing'} offices
                        </Typography>
                      </Paper>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </TabPanel>

            {/* Requirements Tab */}
            <TabPanel value={activeTab} index={3}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ flex: 1, minWidth: 300 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Requirements
                    </Typography>
                    <List>
                      {company.requirements.map((req, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircle color="success" />
                          </ListItemIcon>
                          <ListItemText primary={req} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Box>

                <Box sx={{ flex: 1, minWidth: 300 }}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Technical Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {company.techStack.map((tech, index) => (
                        <Chip 
                          key={index}
                          label={tech} 
                          variant="outlined" 
                          size="small"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Box>
              </Box>

              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Application Tips
                </Typography>
                <List>
                  {company.applicationTips.map((tip, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Star color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </TabPanel>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CompanyInternshipCard;
