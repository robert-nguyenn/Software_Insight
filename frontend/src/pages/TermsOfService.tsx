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

const TermsOfService: React.FC = () => {
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
            Terms of Service
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
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            By accessing and using CodeLaunch's platform, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
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
            2. Description of Service
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            CodeLaunch provides online educational content, courses, and career preparation 
            resources for software engineering and technology roles. Our services include:
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
              • Interactive online courses and tutorials<br />
              • Career guidance and internship information<br />
              • Mock interview practice and feedback<br />
              • Technical skill assessments<br />
              • Community forums and peer interaction
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
            3. User Accounts and Responsibilities
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            To access certain features, you must create an account. You are responsible for:
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
              • Maintaining the confidentiality of your account credentials<br />
              • All activities that occur under your account<br />
              • Providing accurate and complete information<br />
              • Notifying us immediately of any unauthorized use
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
            4. Payment and Refunds
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            Course fees are clearly displayed before purchase. We offer a 30-day money-back guarantee 
            for premium courses if you're not satisfied with the content. Refund requests must be 
            submitted within 30 days of purchase and before completing more than 50% of the course material.
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
            5. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            All content on CodeLaunch, including text, graphics, logos, images, audio clips, 
            video clips, digital downloads, and software, is the property of CodeLaunch or its 
            content suppliers and is protected by copyright laws.
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
            6. Prohibited Uses
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            You may not use our service:
          </Typography>
          <Box sx={{ 
            ml: 2, 
            mb: 2, 
            p: 3, 
            background: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
            borderRadius: 2,
            border: '1px solid #fca5a5',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              • For any unlawful purpose or to solicit others to unlawful acts<br />
              • To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances<br />
              • To infringe upon or violate our intellectual property rights or the intellectual property rights of others<br />
              • To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate<br />
              • To submit false or misleading information
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
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            CodeLaunch shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use of or inability to use the service.
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
            8. Contact Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
            Questions about the Terms of Service should be sent to us at:
          </Typography>
          <Box sx={{ 
            ml: 2,
            p: 3, 
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
            borderRadius: 2,
            border: '1px solid #cbd5e1',
          }}>
            <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
              <strong>Email:</strong> legal@codelaunch.com<br />
              <strong>Address:</strong> CodeLaunch, Inc.<br />
              123 Tech Street, San Francisco, CA 94105
            </Typography>
          </Box>
        </MotionBox>
      </MotionPaper>
    </Container>
  );
};

export default TermsOfService;
