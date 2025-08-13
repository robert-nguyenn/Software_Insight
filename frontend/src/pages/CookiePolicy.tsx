import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const CookiePolicy: React.FC = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(true);
  const [marketingEnabled, setMarketingEnabled] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionPaper 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        elevation={3} 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          },
        }}
      >
        <MotionBox variants={itemVariants}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Cookie Policy
          </Typography>
        </MotionBox>
        
        <MotionBox variants={itemVariants}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Chip 
              label="Last updated: August 13, 2025" 
              color="primary" 
              variant="outlined"
              sx={{ fontSize: '0.9rem', px: 2 }}
            />
          </Box>
        </MotionBox>
        
        <Divider sx={{ mb: 4, background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)' }} />

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            What Are Cookies?
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            Cookies are small text files that are placed on your computer or mobile device when you 
            visit our website. They help us provide you with a better experience by remembering your 
            preferences and improving our services.
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            How We Use Cookies
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We use cookies for various purposes:
          </Typography>
          
          <MotionBox variants={itemVariants} sx={{ ml: 2, mb: 3 }}>
            <Box sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
              borderRadius: 2,
              border: '1px solid #e0f2fe',
              mb: 2,
            }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Essential Cookies
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, user authentication, and access to secure areas.
              </Typography>
            </Box>
          </MotionBox>

          <MotionBox variants={itemVariants} sx={{ ml: 2, mb: 3 }}>
            <Box sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
              borderRadius: 2,
              border: '1px solid #dcfce7',
              mb: 2,
            }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ color: 'success.main', fontWeight: '600' }}
              >
                Analytics Cookies
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously. This helps us improve our platform.
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  />
                }
                label="Allow Analytics Cookies"
                sx={{ mt: 1 }}
              />
            </Box>
          </MotionBox>

          <MotionBox variants={itemVariants} sx={{ ml: 2, mb: 3 }}>
            <Box sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
              borderRadius: 2,
              border: '1px solid #e9d5ff',
              mb: 2,
            }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ color: 'secondary.main', fontWeight: '600' }}
              >
                Marketing Cookies
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                These cookies are used to deliver advertisements that are relevant to you and your interests. 
                They may also be used to limit the number of times you see an advertisement.
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                  />
                }
                label="Allow Marketing Cookies"
                sx={{ mt: 1 }}
              />
            </Box>
          </MotionBox>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            Managing Your Cookie Preferences
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            You can control and manage cookies in various ways. Please note that removing or blocking 
            cookies can impact your user experience and parts of our website may no longer be fully accessible.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            Most web browsers allow you to:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            borderRadius: 2,
            border: '1px solid #fed7aa',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • View what cookies are stored on your device<br />
              • Delete cookies from your device<br />
              • Block cookies from being stored<br />
              • Set preferences for specific websites
            </Typography>
          </Box>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            Third-Party Cookies
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We may use third-party services that set cookies on our website. These include:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
            borderRadius: 2,
            border: '1px solid #d8b4fe',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • Google Analytics for website analytics<br />
              • Payment processors for secure transactions<br />
              • Social media platforms for content sharing<br />
              • Educational content providers
            </Typography>
          </Box>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            Updates to This Policy
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons.
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: '600',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: 40,
                height: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: 2,
              },
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            If you have any questions about our use of cookies, please contact us at:
          </Typography>
          <Box sx={{ 
            ml: 2,
            mb: 3,
            p: 3, 
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
            borderRadius: 2,
            border: '1px solid #cbd5e1',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              <strong>Email:</strong> robert.nguyenanh@gmail.com<br />
              <strong>Address:</strong> CodeLaunch, Inc.<br />
              Danville, Kentucky, USA
            </Typography>
          </Box>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  },
                }}
              >
                Save Preferences
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outlined" 
                size="large"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    background: 'primary.50',
                  },
                }}
              >
                Accept All Cookies
              </Button>
            </motion.div>
          </Box>
        </MotionBox>
      </MotionPaper>
    </Container>
  );
};

export default CookiePolicy;
