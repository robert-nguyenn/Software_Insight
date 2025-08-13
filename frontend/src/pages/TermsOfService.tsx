import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={1} sx={{ p: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Terms of Service
        </Typography>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Last updated: August 12, 2025
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using Software Insight's platform, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            2. Description of Service
          </Typography>
          <Typography variant="body1" paragraph>
            Software Insight provides online educational content, courses, and career preparation 
            resources for software engineering and technology roles. Our services include:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Interactive online courses and tutorials<br />
            • Career guidance and internship information<br />
            • Mock interview practice and feedback<br />
            • Technical skill assessments<br />
            • Community forums and peer interaction
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            3. User Accounts and Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            To access certain features, you must create an account. You are responsible for:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Maintaining the confidentiality of your account credentials<br />
            • All activities that occur under your account<br />
            • Providing accurate and complete information<br />
            • Notifying us immediately of any unauthorized use
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            4. Payment and Refunds
          </Typography>
          <Typography variant="body1" paragraph>
            Course fees are clearly displayed before purchase. We offer a 30-day money-back guarantee 
            for premium courses if you're not satisfied with the content. Refund requests must be 
            submitted within 30 days of purchase and before completing more than 50% of the course material.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            5. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph>
            All content on Software Insight, including text, graphics, logos, images, audio clips, 
            video clips, digital downloads, and software, is the property of Software Insight or its 
            content suppliers and is protected by copyright laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            6. Prohibited Uses
          </Typography>
          <Typography variant="body1" paragraph>
            You may not use our service:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • For any unlawful purpose or to solicit others to unlawful acts<br />
            • To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances<br />
            • To infringe upon or violate our intellectual property rights or the intellectual property rights of others<br />
            • To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate<br />
            • To submit false or misleading information
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            Software Insight shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use of or inability to use the service.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            8. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            Questions about the Terms of Service should be sent to us at:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2 }}>
            Email: legal@softwareinsight.com<br />
            Address: Software Insight, Inc.<br />
            123 Tech Street, San Francisco, CA 94105
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
