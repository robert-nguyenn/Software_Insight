import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  CardActions
} from '@mui/material';
import {
  Code,
  Psychology,
  Architecture,
  Quiz,
  CheckCircle,
  ExpandMore,
  Launch,
  Work,
  Timeline,
  PlayArrow,
  OpenInNew
} from '@mui/icons-material';

// Import data from separate files
import {
  interviewResources,
  leetcodeProblems,
  internshipPlatforms,
  systemDesignTopics,
  behavioralQuestions,
  interviewTips
} from '../data/interview';

// Import components and utilities
import { TabPanel } from '../components/interview/TabPanel';
import { getDifficultyColor, getFilteredResources } from '../components/interview/utils';

const Interview: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ 
        mb: 6, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        borderRadius: 2,
        p: 4,
        color: 'white'
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Interview Preparation Hub
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
          Your complete guide to acing technical interviews at top tech companies. 
          Practice coding problems, master system design, and nail behavioral questions.
        </Typography>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={(_, newValue) => setTabValue(newValue)} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minWidth: 120,
              fontWeight: 600,
            }
          }}
        >
          <Tab icon={<Code />} label="Coding Practice" />
          <Tab icon={<Architecture />} label="System Design" />
          <Tab icon={<Psychology />} label="Behavioral" />
          <Tab icon={<Work />} label="Job Platforms" />
          <Tab icon={<Quiz />} label="Resources" />
          <Tab icon={<CheckCircle />} label="Tips" />
        </Tabs>
      </Box>

      {/* Coding Practice Tab */}
      <TabPanel value={tabValue} index={0}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
          LeetCode Problem Sets
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Curated problems organized by topic, difficulty, and company frequency. Start with fundamentals and progress to advanced concepts.
        </Typography>

        {Object.entries(leetcodeProblems).map(([category, problems]) => (
          <Accordion key={category} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {category}
                </Typography>
                <Chip 
                  label={`${problems.length} problems`} 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {problems.map((problem, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <PlayArrow color="action" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Link href={problem.url} target="_blank" sx={{ textDecoration: 'none', fontWeight: 500 }}>
                            {problem.name}
                          </Link>
                          <Chip 
                            label={problem.difficulty} 
                            size="small" 
                            color={getDifficultyColor(problem.difficulty) as any}
                            variant="outlined"
                          />
                          <Chip 
                            label={problem.frequency} 
                            size="small" 
                            color="default"
                            variant="filled"
                          />
                        </Box>
                      }
                      secondary={`Companies: ${problem.companies.join(', ')}`}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>

      {/* System Design Tab */}
      <TabPanel value={tabValue} index={1}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Architecture sx={{ mr: 1, verticalAlign: 'middle' }} />
          System Design Topics
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Master the fundamentals of distributed systems, scalability, and system architecture design patterns.
        </Typography>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
          {systemDesignTopics.map((topic, index) => (
            <Card key={index} sx={{ height: 'fit-content' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {topic.topic}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {topic.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Resources:
                </Typography>
                <List dense>
                  {topic.resources.map((resource, resIndex) => (
                    <ListItem key={resIndex} sx={{ py: 0.5, pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <OpenInNew fontSize="small" color="action" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Link href={resource.url} target="_blank" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
                            {resource.title}
                          </Link>
                        }
                        secondary={resource.type}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </TabPanel>

      {/* Behavioral Questions Tab */}
      <TabPanel value={tabValue} index={2}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Psychology sx={{ mr: 1, verticalAlign: 'middle' }} />
          Behavioral Interview Questions
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Practice common behavioral questions with the STAR method. Each question includes templates, sample answers, and expert tips.
        </Typography>

        {behavioralQuestions.map((question, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {question.question}
                </Typography>
                <Chip 
                  label={question.category} 
                  size="small" 
                  color="secondary" 
                  variant="outlined"
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                  STAR Framework:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="Situation" 
                      secondary={question.template.situation}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Task" 
                      secondary={question.template.task}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Action" 
                      secondary={question.template.action}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Result" 
                      secondary={question.template.result}
                    />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                  Sample Answer:
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "{question.sampleAnswer}"
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                  Tips:
                </Typography>
                <List dense>
                  {question.tips.map((tip, tipIndex) => (
                    <ListItem key={tipIndex}>
                      <ListItemIcon>
                        <CheckCircle color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>

      {/* Job Platforms Tab */}
      <TabPanel value={tabValue} index={3}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Work sx={{ mr: 1, verticalAlign: 'middle' }} />
          Internship & Job Platforms
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Discover the best platforms to find internships and entry-level positions at top tech companies.
        </Typography>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
          {internshipPlatforms.map((platform, index) => (
            <Card key={index} sx={{ height: 'fit-content' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {platform.name}
                  </Typography>
                  <Chip 
                    label={platform.type} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {platform.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  href={platform.url} 
                  target="_blank" 
                  startIcon={<Launch />}
                  variant="outlined"
                  size="small"
                >
                  Visit Platform
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </TabPanel>

      {/* Resources Tab */}
      <TabPanel value={tabValue} index={4}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Timeline sx={{ mr: 1, verticalAlign: 'middle' }} />
          Interview Resources
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Essential resources organized by interview type to help you prepare effectively.
        </Typography>

        {['coding', 'system-design', 'behavioral', 'general'].map((type) => {
          const filteredResources = getFilteredResources(interviewResources, type);
          const typeLabels: Record<string, string> = {
            'coding': 'Coding Practice',
            'system-design': 'System Design',
            'behavioral': 'Behavioral Interviews',
            'general': 'General Resources'
          };

          return (
            <Box key={type} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                {typeLabels[type]}
              </Typography>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
                {filteredResources.map((resource, index) => (
                  <Card key={index}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {resource.title}
                        </Typography>
                        <Chip 
                          label={resource.difficulty} 
                          size="small" 
                          color={getDifficultyColor(resource.difficulty) as any}
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {resource.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button 
                        href={resource.url} 
                        target="_blank" 
                        startIcon={<Launch />}
                        variant="outlined"
                        size="small"
                      >
                        Open Resource
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Box>
            </Box>
          );
        })}
      </TabPanel>

      {/* Tips Tab */}
      <TabPanel value={tabValue} index={5}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <CheckCircle sx={{ mr: 1, verticalAlign: 'middle' }} />
          Interview Tips & Best Practices
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Expert tips and strategies to help you succeed in every stage of the interview process.
        </Typography>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' } }}>
          {interviewTips.map((tipCategory, index) => (
            <Card key={index} sx={{ height: 'fit-content' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {tipCategory.category}
                </Typography>
                <List dense>
                  {tipCategory.tips.map((tip, tipIndex) => (
                    <ListItem key={tipIndex}>
                      <ListItemIcon>
                        <CheckCircle color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </TabPanel>

      {/* Call to Action */}
      <Box sx={{ 
        mt: 6, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
        borderRadius: 2,
        p: 4,
        color: 'white'
      }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Land Your Dream Internship?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Join thousands of students who have successfully prepared for their tech interviews using our platform.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
          href="/courses"
        >
          Explore Our Courses
        </Button>
      </Box>
    </Container>
  );
};

export default Interview;
