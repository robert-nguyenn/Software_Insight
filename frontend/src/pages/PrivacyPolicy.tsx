import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
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
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We collect information you provide directly to us, such as when you create an account, 
            enroll in courses, or contact us for support. This includes:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
            borderRadius: 2,
            border: '1px solid #e0f2fe',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • Personal information (name, email address, phone number)<br />
              • Educational background and career interests<br />
              • Course progress and completion data<br />
              • Payment information (processed securely through third-party providers)
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
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We use the information we collect to:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
            borderRadius: 2,
            border: '1px solid #dcfce7',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • Provide, maintain, and improve our educational services<br />
              • Process transactions and send related information<br />
              • Send technical notices, updates, security alerts, and support messages<br />
              • Respond to your comments, questions, and requests<br />
              • Personalize your learning experience
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
            3. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this privacy policy. We may share your 
            information in the following situations:
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
              • With service providers who assist us in operating our platform<br />
              • To comply with legal obligations<br />
              • To protect and defend our rights and property<br />
              • With your consent or at your direction
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
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the internet is 100% secure.
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
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            You have the right to:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
            borderRadius: 2,
            border: '1px solid #e9d5ff',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • Access, update, or delete your personal information<br />
              • Object to or restrict certain processing of your data<br />
              • Request data portability<br />
              • Withdraw consent where applicable
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
            6. Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Box sx={{ 
            ml: 2,
            p: 3, 
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
            borderRadius: 2,
            border: '1px solid #cbd5e1',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              <strong>Email:</strong> privacy@codelaunch.com<br />
              <strong>Address:</strong> CodeLaunch, Inc.<br />
              123 Tech Street, San Francisco, CA 94105
            </Typography>
          </Box>
        </MotionBox>
      </MotionPaper>
    </Container>
  );
};

export default PrivacyPolicy;
