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
  Paper,
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
  School,
  Work,
  Timeline,
  PlayArrow,
  OpenInNew
} from '@mui/icons-material';

interface Resource {
  title: string;
  description: string;
  url: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'coding' | 'system-design' | 'behavioral' | 'general';
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
      id={`interview-tabpanel-${index}`}
      aria-labelledby={`interview-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Interview: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const resources: Resource[] = [
    {
      title: "LeetCode",
      description: "Practice coding problems used by top tech companies",
      url: "https://leetcode.com",
      difficulty: "Beginner",
      type: "coding"
    },
    {
      title: "Grind 75",
      description: "Curated list of 75 essential coding problems for internships",
      url: "https://www.techinterviewhandbook.org/grind75",
      difficulty: "Intermediate",
      type: "coding"
    },
    {
      title: "Cracking the Coding Interview",
      description: "Comprehensive guide to programming interviews",
      url: "https://www.crackingthecodinginterview.com",
      difficulty: "Intermediate",
      type: "coding"
    },
    {
      title: "System Design Primer",
      description: "Learn how to design large-scale systems",
      url: "https://github.com/donnemartin/system-design-primer",
      difficulty: "Advanced",
      type: "system-design"
    },
    {
      title: "Behavioral Interview Guide",
      description: "Master the STAR method and common behavioral questions",
      url: "https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions",
      difficulty: "Beginner",
      type: "behavioral"
    },
    {
      title: "Simplify - Internship Application Tracker",
      description: "Track your internship applications and deadlines",
      url: "https://simplify.jobs",
      difficulty: "Beginner",
      type: "general"
    },
    {
      title: "GitHub Student Pack",
      description: "Free developer tools and resources for students",
      url: "https://education.github.com/pack",
      difficulty: "Beginner",
      type: "general"
    }
  ];

  const leetcodeProblems = {
    'Arrays & Strings': [
      { name: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum/', companies: ['Google', 'Meta', 'Amazon'] },
      { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', companies: ['Google', 'Meta'] },
      { name: 'Contains Duplicate', difficulty: 'Easy', url: 'https://leetcode.com/problems/contains-duplicate/', companies: ['Meta', 'Amazon'] },
      { name: 'Valid Anagram', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-anagram/', companies: ['Google', 'Spotify'] },
      { name: 'Group Anagrams', difficulty: 'Medium', url: 'https://leetcode.com/problems/group-anagrams/', companies: ['Google', 'Uber'] },
      { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', companies: ['Meta', 'Google'] },
      { name: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water/', companies: ['Google', 'Amazon'] },
      { name: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/', companies: ['Google', 'Apple'] }
    ],
    'Trees & Graphs': [
      { name: 'Binary Tree Inorder Traversal', difficulty: 'Easy', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/', companies: ['Google', 'Meta'] },
      { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', companies: ['Meta', 'LinkedIn'] },
      { name: 'Same Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/same-tree/', companies: ['Google', 'Bloomberg'] },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/validate-binary-search-tree/', companies: ['Meta', 'Amazon'] },
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', companies: ['Google', 'Microsoft'] },
      { name: 'Course Schedule', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule/', companies: ['Google', 'Airbnb'] },
      { name: 'Number of Islands', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-islands/', companies: ['Google', 'Meta', 'Amazon'] },
      { name: 'Word Ladder', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-ladder/', companies: ['Google', 'Meta'] }
    ],
    'Dynamic Programming': [
      { name: 'Climbing Stairs', difficulty: 'Easy', url: 'https://leetcode.com/problems/climbing-stairs/', companies: ['Google', 'Amazon'] },
      { name: 'House Robber', difficulty: 'Medium', url: 'https://leetcode.com/problems/house-robber/', companies: ['Airbnb', 'LinkedIn'] },
      { name: 'Coin Change', difficulty: 'Medium', url: 'https://leetcode.com/problems/coin-change/', companies: ['Google', 'Uber'] },
      { name: 'Longest Increasing Subsequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', companies: ['Google', 'Microsoft'] },
      { name: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray/', companies: ['Meta', 'LinkedIn'] },
      { name: 'Edit Distance', difficulty: 'Hard', url: 'https://leetcode.com/problems/edit-distance/', companies: ['Google', 'Meta'] }
    ],
    'Linked Lists': [
      { name: 'Reverse Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-linked-list/', companies: ['Google', 'Meta', 'Amazon'] },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', companies: ['Amazon', 'Apple'] },
      { name: 'Linked List Cycle', difficulty: 'Easy', url: 'https://leetcode.com/problems/linked-list-cycle/', companies: ['Meta', 'Microsoft'] },
      { name: 'Remove Nth Node From End of List', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', companies: ['Google', 'Meta'] },
      { name: 'Reorder List', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorder-list/', companies: ['Meta', 'Microsoft'] },
      { name: 'Copy List with Random Pointer', difficulty: 'Medium', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/', companies: ['Amazon', 'Microsoft'] }
    ]
  };

  const internshipPlatforms = [
    {
      name: 'Simplify',
      url: 'https://simplify.jobs/',
      description: 'One-click apply to hundreds of internships, track applications',
      type: 'Application Platform'
    },
    {
      name: 'GitHub Student Pack',
      url: 'https://education.github.com/pack',
      description: 'Free developer tools, hosting, and resources for students',
      type: 'Student Resources'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/jobs/',
      description: 'Professional network with internship opportunities',
      type: 'Job Board'
    },
    {
      name: 'Handshake',
      url: 'https://joinhandshake.com/',
      description: 'University career platform with exclusive student opportunities',
      type: 'University Platform'
    },
    {
      name: 'AngelList (Wellfound)',
      url: 'https://wellfound.com/',
      description: 'Startup internships and entry-level positions',
      type: 'Startup Platform'
    },
    {
      name: 'Indeed',
      url: 'https://indeed.com/',
      description: 'Large job board with internship filters',
      type: 'Job Board'
    }
  ];

  const codingTopics = [
    "Arrays and Strings",
    "Linked Lists",
    "Trees and Graphs", 
    "Dynamic Programming",
    "Recursion and Backtracking",
    "Sorting and Searching",
    "Hash Tables",
    "Two Pointers",
    "Sliding Window",
    "Binary Search"
  ];

  const systemDesignTopics = [
    "Scalability Basics",
    "Load Balancing",
    "Database Design",
    "Caching Strategies", 
    "Microservices Architecture",
    "Message Queues",
    "API Design",
    "CDN and Storage",
    "Security Considerations",
    "Monitoring and Logging"
  ];

  const behavioralQuestions = [
    "Tell me about yourself",
    "Why do you want to work here?",
    "Describe a challenging project you worked on",
    "How do you handle conflict in a team?",
    "Tell me about a time you failed",
    "Where do you see yourself in 5 years?",
    "Why are you leaving your current job?",
    "Describe your ideal work environment",
    "How do you prioritize tasks?",
    "Tell me about a time you learned something new"
  ];

  const interviewTips = [
    {
      category: "Before the Interview",
      tips: [
        "Research the company thoroughly",
        "Review your resume and be ready to discuss each experience",
        "Practice coding problems daily for 2-3 weeks",
        "Prepare questions to ask the interviewer",
        "Set up your coding environment"
      ]
    },
    {
      category: "During Technical Interviews",
      tips: [
        "Think out loud and explain your approach",
        "Ask clarifying questions about the problem",
        "Start with a brute force solution if needed",
        "Test your code with examples",
        "Discuss time and space complexity"
      ]
    },
    {
      category: "During Behavioral Interviews",
      tips: [
        "Use the STAR method (Situation, Task, Action, Result)",
        "Be specific and provide concrete examples",
        "Show your impact with numbers when possible",
        "Demonstrate growth mindset and learning ability",
        "Ask thoughtful questions about the role and team"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  const getFilteredResources = (type: string) => {
    return resources.filter(resource => resource.type === type);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Interview Preparation Hub
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Master technical interviews with comprehensive resources, practice problems, and expert guidance
        </Typography>
      </Box>

      {/* Quick Stats */}
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
            <Code color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              500+
            </Typography>
            <Typography color="text.secondary">
              Coding Problems
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Architecture color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              50+
            </Typography>
            <Typography color="text.secondary">
              System Design Cases
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Psychology color="success" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              100+
            </Typography>
            <Typography color="text.secondary">
              Behavioral Questions
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Quiz color="warning" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              25+
            </Typography>
            <Typography color="text.secondary">
              Mock Interviews
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, newValue) => setTabValue(newValue)}
            aria-label="interview preparation tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="LeetCode Problems" icon={<Code />} />
            <Tab label="Coding Practice" icon={<Quiz />} />
            <Tab label="System Design" icon={<Architecture />} />
            <Tab label="Behavioral Prep" icon={<Psychology />} />
            <Tab label="Platforms" icon={<Work />} />
            <Tab label="Tips & Strategy" icon={<Timeline />} />
          </Tabs>
        </Box>

        {/* LeetCode Problems Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            Essential LeetCode Problems by Topic
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Curated problems frequently asked at Google, Meta, Amazon, and other top tech companies for internships
          </Typography>

          {Object.entries(leetcodeProblems).map(([topic, problems]) => (
            <Accordion key={topic} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" fontWeight="bold">{topic}</Typography>
                <Chip 
                  label={`${problems.length} problems`} 
                  size="small" 
                  sx={{ ml: 2 }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(2, 1fr)'
                  },
                  gap: 2
                }}>
                  {problems.map((problem, index) => (
                    <Card key={index} variant="outlined">
                      <CardContent sx={{ pb: 1 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {problem.name}
                          </Typography>
                          <Chip 
                            label={problem.difficulty} 
                            size="small"
                            color={problem.difficulty === 'Easy' ? 'success' : problem.difficulty === 'Medium' ? 'warning' : 'error'}
                            variant="outlined"
                          />
                        </Box>
                        <Box display="flex" gap={1} flexWrap="wrap">
                          {problem.companies.map(company => (
                            <Chip 
                              key={company} 
                              label={company} 
                              size="small" 
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          href={problem.url} 
                          target="_blank"
                          startIcon={<PlayArrow />}
                        >
                          Solve Problem
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>

        {/* Coding Practice Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Essential Coding Topics
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Master these fundamental topics to excel in coding interviews
          </Typography>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 2,
            mb: 4
          }}>
            {codingTopics.map((topic, index) => (
              <Paper 
                key={index}
                sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <CheckCircle color="primary" sx={{ mb: 1 }} />
                <Typography variant="body1" fontWeight="medium">
                  {topic}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recommended Coding Resources
            </Typography>
            <List>
              {getFilteredResources('coding').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* System Design Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            System Design Topics
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Learn to design scalable and reliable systems
          </Typography>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 2,
            mb: 4
          }}>
            {systemDesignTopics.map((topic, index) => (
              <Paper 
                key={index}
                sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Architecture color="secondary" sx={{ mb: 1 }} />
                <Typography variant="body1" fontWeight="medium">
                  {topic}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Design Resources
            </Typography>
            <List>
              {getFilteredResources('system-design').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* Behavioral Prep Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Common Behavioral Questions
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Practice these questions using the STAR method
          </Typography>

          <List>
            {behavioralQuestions.map((question, index) => (
              <ListItem key={index} divider>
                <ListItemIcon>
                  <Psychology />
                </ListItemIcon>
                <ListItemText primary={question} />
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Behavioral Interview Resources
            </Typography>
            <List>
              {getFilteredResources('behavioral').map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* Platforms Tab */}
        <TabPanel value={tabValue} index={4}>
          <Typography variant="h6" gutterBottom>
            Internship Application Platforms
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Essential platforms and tools for finding and applying to internships
          </Typography>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            mb: 4
          }}>
            {internshipPlatforms.map((platform, index) => (
              <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {platform.name}
                  </Typography>
                  <Chip 
                    label={platform.type} 
                    size="small" 
                    sx={{ mb: 2 }}
                    variant="outlined"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {platform.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    href={platform.url} 
                    target="_blank"
                    endIcon={<OpenInNew />}
                    fullWidth
                    variant="outlined"
                  >
                    Visit Platform
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </TabPanel>

        {/* Resources Tab - Now index 5 */}
        <TabPanel value={tabValue} index={5}>
          <Typography variant="h6" gutterBottom>
            Interview Tips & Strategy
          </Typography>
          
          {interviewTips.map((section, sectionIndex) => (
            <Accordion key={sectionIndex} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">{section.category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {section.tips.map((tip, tipIndex) => (
                    <ListItem key={tipIndex}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={tip} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              All Interview Resources
            </Typography>
            <List>
              {resources.map((resource, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Launch />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </Link>
                        <Chip
                          label={resource.difficulty}
                          size="small"
                          color={getDifficultyColor(resource.difficulty) as any}
                        />
                        <Chip
                          label={resource.type}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>
      </Card>
    </Container>
  );
};

export default Interview;
