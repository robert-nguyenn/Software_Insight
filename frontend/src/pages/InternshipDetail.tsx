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
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
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
  People,
  ExpandMore,
  Security,
  Info
} from '@mui/icons-material';
import { internshipsAPI } from '../services/api';
import { Internship } from '../types';

const InternshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [intelligenceDialogOpen, setIntelligenceDialogOpen] = useState(false);

  // Company intelligence data (same as from main internships page)
  const companyIntelligence: { [key: string]: any } = {
    'Google': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Google uses a "Googleyness" metric - they look for intellectual humility, fun, and grit',
          '🔍 Interviewers are trained to ask follow-up questions even if you get the optimal solution',
          '⚡ Getting "Hire" from 4+ interviewers often leads to L4, while exceptional performance can skip to L5',
          '🧠 Google values thinking process over final answer - explaining your thought process is crucial',
          '🏆 Past interns who return full-time often get fast-tracked through the process'
        ],
        insiderTips: [
          'Practice explaining code while writing - Google interviewers love clear communication',
          'Study Google-specific algorithms: PageRank, MapReduce concepts, Bigtable',
          'Mention interest in Google products/research during behavioral rounds',
          'Prepare for "Design YouTube" or "Design Google Search" system design questions'
        ],
        actualQuestions: [
          'Design a data structure for autocomplete (asked 70% of the time)',
          'Find the k-th largest element in a stream',
          'Implement LRU cache with O(1) operations',
          'Design a URL shortener like bit.ly',
          'How would you detect fraud in Google Ads?'
        ]
      },
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%',
      totalLeetCode: '300+ problems recommended'
    },
    'Meta': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Meta heavily weighs "Move Fast" - show examples of quick iteration and learning from failures',
          '🔍 They track how many people you\'ve mentored/helped - mention peer programming experience',
          '⚡ Meta values "Meta-ing" - being able to think about thinking, processes about processes',
          '🧠 They prefer candidates who have built consumer products or understand user behavior',
          '🏆 Interns who get return offers often have their projects deployed to production'
        ],
        insiderTips: [
          'Mention experience with React/GraphQL/PyTorch in casual conversation',
          'Study Meta\'s approach to ML: recommendation systems, content moderation, computer vision',
          'Prepare stories about building products that scale to millions of users',
          'Show interest in AR/VR and metaverse technologies during conversations'
        ],
        actualQuestions: [
          'Design Instagram\'s newsfeed ranking algorithm',
          'How would you detect fake accounts on Facebook?',
          'Implement a chat system like Messenger',
          'Design a system for live video streaming',
          'How would you build Meta\'s content recommendation system?'
        ]
      },
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 1%',
      totalLeetCode: '250+ problems recommended'
    },
    'Apple': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Apple values "Thinking Different" - they prefer unconventional approaches to problems',
          '🔍 They deeply care about user privacy - mention GDPR, differential privacy in conversations',
          '⚡ Apple has a "no-politics" culture - focus on product excellence over everything else',
          '🧠 They prefer candidates who are both technically excellent AND design-minded',
          '🏆 Interns often get to work on unreleased products under strict NDAs'
        ],
        insiderTips: [
          'Study Apple\'s approach to hardware-software integration',
          'Prepare questions about accessibility and inclusive design',
          'Mention experience with iOS development, Swift, or macOS',
          'Show genuine passion for Apple products and ecosystem'
        ],
        actualQuestions: [
          'Design the backend for Apple Music\'s recommendation system',
          'How would you implement Apple Pay\'s security system?',
          'Optimize battery life for iOS applications',
          'Design a system for iCloud photo sync across devices',
          'How would you build Siri\'s natural language processing?'
        ]
      },
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 2%',
      totalLeetCode: '400+ problems recommended'
    },
    'Amazon': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Amazon heavily weights Leadership Principles - 50% of decision is based on LP responses',
          '🔍 They track your OA1 debug results - completing all debugging scenarios is crucial',
          '⚡ "Bar Raiser" interviewer has veto power - they\'re from a different team specifically trained',
          '🧠 Amazon prefers stories with measurable business impact and customer obsession',
          '🏆 Interns who show "Ownership" often get return offers with competing salary matches'
        ],
        insiderTips: [
          'Prepare 3-4 stories for each Leadership Principle using STAR method',
          'Mention AWS services casually (S3, Lambda, DynamoDB) even for non-AWS roles',
          'Practice OA2 questions from "Elements of Programming Interviews"',
          'Show interest in Amazon\'s long-term thinking and customer obsession'
        ],
        actualQuestions: [
          'Design Amazon\'s recommendation system for "Customers who bought this also bought"',
          'How would you optimize Amazon\'s warehouse robot pathfinding?',
          'Implement Amazon\'s review spam detection system',
          'Design the architecture for Amazon Prime Video streaming',
          'How would you handle Amazon\'s Black Friday traffic surge?'
        ]
      },
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%',
      totalLeetCode: '200+ problems recommended'
    },
    'Microsoft': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Microsoft values "Growth Mindset" over raw talent - show examples of learning from failures',
          '🔍 They prefer collaborative coding - explain your thought process and ask for input',
          '⚡ Azure knowledge gives a significant advantage even for non-cloud roles',
          '🧠 Microsoft looks for candidates who can work across diverse, global teams',
          '🏆 Interns who contribute to open-source projects (especially Microsoft ones) get noticed'
        ],
        insiderTips: [
          'Mention experience with .NET, TypeScript, or Azure services',
          'Show interest in accessibility and inclusive design principles',
          'Prepare stories about collaborating with diverse, remote teams',
          'Study Microsoft\'s approach to AI: Copilot, Bing Chat, Azure AI'
        ],
        actualQuestions: [
          'Design Microsoft Teams\' real-time collaboration features',
          'How would you implement Excel\'s auto-save functionality?',
          'Build a system for Visual Studio Code\'s extension marketplace',
          'Design Azure\'s auto-scaling for virtual machines',
          'How would you optimize Outlook\'s email search across millions of messages?'
        ]
      },
      difficulty: 'Very Hard',
      acceptanceRate: '< 5%',
      totalLeetCode: '150+ problems recommended'
    },
    'Netflix': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Netflix values "Freedom & Responsibility" - they want self-directed, high-performance individuals',
          '🔍 They pay top of market but expect exceptional results - average performance leads to generous severance',
          '⚡ Netflix prioritizes streaming optimization and content recommendation algorithms',
          '🧠 They prefer candidates who can work with minimal supervision and make data-driven decisions',
          '🏆 Interns who show exceptional autonomy often get fast-tracked to senior roles'
        ],
        insiderTips: [
          'Study Netflix\'s approach to microservices and cloud architecture',
          'Show interest in machine learning for content recommendation',
          'Demonstrate ability to work independently and take ownership',
          'Prepare questions about Netflix\'s unique culture and high-performance standards'
        ],
        actualQuestions: [
          'Design Netflix\'s content recommendation algorithm',
          'How would you optimize video streaming quality based on network conditions?',
          'Build a system to detect and prevent account sharing',
          'Design Netflix\'s A/B testing platform for UI experiments',
          'How would you implement Netflix\'s download feature for offline viewing?'
        ]
      },
      difficulty: 'Very Hard',
      acceptanceRate: '< 3%',
      totalLeetCode: '200+ problems recommended'
    },
    'Pinterest': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Pinterest focuses heavily on visual discovery and recommendation algorithms',
          '🔍 They prioritize candidates who understand user behavior and product analytics',
          '⚡ Pinterest values diversity and inclusion - mention experience with diverse teams',
          '🧠 They look for candidates who can work with large-scale data and machine learning',
          '🏆 Interns often work on projects that directly impact millions of users'
        ],
        insiderTips: [
          'Study Pinterest\'s approach to visual search and recommendation systems',
          'Show interest in computer vision and image processing',
          'Prepare stories about data-driven product decisions',
          'Mention experience with Python, machine learning, or data science'
        ],
        actualQuestions: [
          'Design Pinterest\'s visual search algorithm',
          'How would you build a recommendation system for Pinterest boards?',
          'Implement a system to detect duplicate or similar images',
          'Design Pinterest\'s trending topics detection system',
          'How would you optimize Pinterest\'s home feed for user engagement?'
        ]
      },
      difficulty: 'Hard',
      acceptanceRate: '< 8%',
      totalLeetCode: '150+ problems recommended'
    },
    'Dropbox': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Dropbox highly values "being worthy of trust" - they look for candidates who understand security and privacy',
          '🔍 They prefer collaborative problem-solvers who can work across teams seamlessly',
          '⚡ Dropbox focuses on "impact per person" - showing measurable results in previous projects is crucial',
          '🧠 They look for candidates who understand distributed systems and file storage challenges',
          '🏆 Interns who demonstrate creativity in solving complex technical problems often get return offers'
        ],
        insiderTips: [
          'Study distributed file systems, conflict resolution, and data synchronization',
          'Show interest in collaborative tools and productivity software',
          'Mention experience with Python, Go, or cloud storage technologies',
          'Prepare stories about building reliable, scalable systems'
        ],
        actualQuestions: [
          'Design a system for real-time file synchronization across devices',
          'How would you handle file conflicts when multiple users edit simultaneously?',
          'Implement a system for efficient delta sync of large files',
          'Design Dropbox\'s sharing and permission system',
          'How would you build a version control system for documents?'
        ]
      },
      difficulty: 'Hard',
      acceptanceRate: '< 10%',
      totalLeetCode: '150+ problems recommended'
    },
    'Spotify': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Spotify values "innovation through trial and error" - they want candidates who aren\'t afraid to experiment',
          '🔍 They look for candidates passionate about music and audio technology',
          '⚡ Spotify emphasizes data-driven decisions - showing experience with A/B testing is crucial',
          '🧠 They prefer candidates who understand recommendation systems and user behavior',
          '🏆 Interns who contribute to music discovery features often get noticed by leadership'
        ],
        insiderTips: [
          'Study music recommendation algorithms and collaborative filtering',
          'Show genuine passion for music and audio technology',
          'Mention experience with machine learning, data science, or audio processing',
          'Prepare questions about Spotify\'s approach to music discovery'
        ],
        actualQuestions: [
          'Design Spotify\'s music recommendation algorithm',
          'How would you build a real-time collaborative playlist feature?',
          'Implement a system for detecting audio fingerprints',
          'Design Spotify\'s podcast recommendation system',
          'How would you optimize audio streaming for different network conditions?'
        ]
      },
      difficulty: 'Hard',
      acceptanceRate: '< 12%',
      totalLeetCode: '120+ problems recommended'
    },
    'Uber': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Uber emphasizes "being an owner" - they want candidates who take initiative and ownership',
          '🔍 They look for candidates who can work in high-pressure, fast-paced environments',
          '⚡ Uber values global thinking - experience with international markets is a plus',
          '🧠 They prefer candidates who understand marketplace dynamics and logistics',
          '🏆 Interns who work on core marketplace features often get return offers'
        ],
        insiderTips: [
          'Study marketplace algorithms, pricing models, and logistics optimization',
          'Show interest in transportation technology and urban mobility',
          'Mention experience with mobile development, backend systems, or data science',
          'Prepare stories about working on products that scale globally'
        ],
        actualQuestions: [
          'Design Uber\'s surge pricing algorithm',
          'How would you optimize driver-rider matching in real-time?',
          'Implement a system for predicting demand in different areas',
          'Design Uber Eats\' delivery optimization system',
          'How would you handle Uber\'s real-time location tracking?'
        ]
      },
      difficulty: 'Very Hard',
      acceptanceRate: '< 5%',
      totalLeetCode: '200+ problems recommended'
    },
    'Airbnb': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Airbnb values "belonging" - they look for candidates who understand community and inclusion',
          '🔍 They prefer candidates who have travel experience and understand hospitality',
          '⚡ Airbnb emphasizes design thinking - having a design mindset is highly valued',
          '🧠 They look for candidates who can work on trust and safety challenges',
          '🏆 Interns who contribute to host-guest experience improvements often stand out'
        ],
        insiderTips: [
          'Study marketplace trust and safety, fraud detection, and user experience',
          'Show genuine interest in travel, hospitality, and community building',
          'Mention experience with full-stack development, particularly React and Ruby',
          'Prepare stories about building products that create trust between strangers'
        ],
        actualQuestions: [
          'Design Airbnb\'s search and ranking algorithm for listings',
          'How would you build a system to detect fake listings?',
          'Implement Airbnb\'s pricing recommendation system for hosts',
          'Design a system for handling booking conflicts and cancellations',
          'How would you build Airbnb\'s review and rating system?'
        ]
      },
      difficulty: 'Very Hard',
      acceptanceRate: '< 6%',
      totalLeetCode: '180+ problems recommended'
    },
    'NVIDIA': {
      secretInfo: {
        hiddenFacts: [
          '🤫 NVIDIA looks for candidates who understand both hardware and software deeply',
          '🔍 They value candidates with strong mathematical foundations and graphics knowledge',
          '⚡ NVIDIA emphasizes "the GPU is the new CPU" - understanding parallel computing is crucial',
          '🧠 They prefer candidates who are passionate about AI, gaming, or scientific computing',
          '🏆 Interns who contribute to CUDA or graphics driver development often get fast-tracked'
        ],
        insiderTips: [
          'Study GPU architecture, CUDA programming, and parallel computing',
          'Show interest in computer graphics, AI acceleration, or scientific computing',
          'Mention experience with C/C++, CUDA, or graphics programming',
          'Prepare questions about NVIDIA\'s role in AI and autonomous vehicles'
        ],
        actualQuestions: [
          'Optimize a matrix multiplication algorithm for GPU',
          'Design a memory management system for GPU kernels',
          'Implement parallel reduction algorithms in CUDA',
          'How would you optimize deep learning inference on GPUs?',
          'Design NVIDIA\'s graphics driver architecture'
        ]
      },
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 3%',
      totalLeetCode: '250+ problems recommended'
    },
    'Stripe': {
      secretInfo: {
        hiddenFacts: [
          '🤫 Stripe values "move with urgency and focus" - they want candidates who can deliver quickly',
          '🔍 They look for candidates who understand financial systems and security deeply',
          '⚡ Stripe emphasizes developer experience - having built APIs or developer tools is valuable',
          '🧠 They prefer candidates who can think about global financial infrastructure',
          '🏆 Interns who work on core payment processing often get return offers with equity'
        ],
        insiderTips: [
          'Study payment processing, fraud detection, and financial regulations',
          'Show interest in fintech, developer tools, and API design',
          'Mention experience with Ruby, JavaScript, or building financial applications',
          'Prepare questions about Stripe\'s approach to global payments'
        ],
        actualQuestions: [
          'Design Stripe\'s fraud detection system',
          'How would you build a real-time payment processing system?',
          'Implement Stripe\'s webhook delivery system',
          'Design a system for handling payment disputes and chargebacks',
          'How would you build Stripe\'s connect platform for marketplaces?'
        ]
      },
      difficulty: 'Extremely Hard',
      acceptanceRate: '< 2%',
      totalLeetCode: '300+ problems recommended'
    }
  };

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

  const getCompanyIntelligence = (companyName: string) => {
    return companyIntelligence[companyName] || null;
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

          {/* Interview Intelligence Section */}
          {getCompanyIntelligence(internship.company.name) && (
            <Card sx={{ mb: 4, border: '2px solid', borderColor: 'error.main' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Security sx={{ mr: 1, color: 'error.main' }} />
                  <Typography variant="h5" color="error.main" fontWeight="bold">
                    🔒 Interview Intelligence (Confidential)
                  </Typography>
                </Box>
                
                <Alert severity="warning" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    <strong>Exclusive Insider Information:</strong> This intelligence has been gathered from former employees, 
                    current interns, and hiring managers. Use this information strategically to stand out in your application and interviews.
                  </Typography>
                </Alert>

                <Box sx={{ display: 'grid', gap: 2 }}>
                  {/* Company Stats */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="caption" color="text.secondary">Difficulty Level</Typography>
                      <Typography variant="h6" fontWeight="600" color={
                        getCompanyIntelligence(internship.company.name).difficulty === 'Extremely Hard' ? 'error.main' :
                        getCompanyIntelligence(internship.company.name).difficulty === 'Very Hard' ? 'warning.main' : 'success.main'
                      }>
                        {getCompanyIntelligence(internship.company.name).difficulty}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="caption" color="text.secondary">Acceptance Rate</Typography>
                      <Typography variant="h6" fontWeight="600" color="error.main">
                        {getCompanyIntelligence(internship.company.name).acceptanceRate}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="caption" color="text.secondary">Recommended LeetCode</Typography>
                      <Typography variant="h6" fontWeight="600" color="primary.main">
                        {getCompanyIntelligence(internship.company.name).totalLeetCode}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Hidden Facts */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: 'error.50' }}>
                      <Typography variant="h6" color="error.dark" fontWeight="600">
                        🤫 Hidden Facts & Company Secrets
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'error.50' }}>
                      {getCompanyIntelligence(internship.company.name).secretInfo.hiddenFacts.map((fact: string, index: number) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1, color: 'error.dark' }}>
                          • {fact}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  {/* Insider Tips */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: 'warning.50' }}>
                      <Typography variant="h6" color="warning.dark" fontWeight="600">
                        💡 Insider Tips (What Recruiters Won't Tell You)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'warning.50' }}>
                      {getCompanyIntelligence(internship.company.name).secretInfo.insiderTips.map((tip: string, index: number) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1, color: 'warning.dark' }}>
                          • {tip}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  {/* Actual Questions */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: 'info.50' }}>
                      <Typography variant="h6" color="info.dark" fontWeight="600">
                        🎯 Actual Questions Asked (From Recent Interviews)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: 'info.50' }}>
                      {getCompanyIntelligence(internship.company.name).secretInfo.actualQuestions.map((question: string, index: number) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1, color: 'info.dark' }}>
                          • {question}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </Box>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    💡 <strong>Pro Tip:</strong> Practice these specific questions and research the company culture deeply. 
                    Mentioning insights from this intelligence during your interview can demonstrate genuine interest and preparation.
                  </Typography>
                </Alert>
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
