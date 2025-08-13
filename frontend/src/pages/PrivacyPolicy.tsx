import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={1} sx={{ p: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Privacy Policy
        </Typography>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Last updated: August 12, 2025
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information you provide directly to us, such as when you create an account, 
            enroll in courses, or contact us for support. This includes:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Personal information (name, email address, phone number)<br />
            • Educational background and career interests<br />
            • Course progress and completion data<br />
            • Payment information (processed securely through third-party providers)
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Provide, maintain, and improve our educational services<br />
            • Process transactions and send related information<br />
            • Send technical notices, updates, security alerts, and support messages<br />
            • Respond to your comments, questions, and requests<br />
            • Personalize your learning experience
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            3. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this privacy policy. We may share your 
            information in the following situations:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • With service providers who assist us in operating our platform<br />
            • To comply with legal obligations<br />
            • To protect and defend our rights and property<br />
            • With your consent or at your direction
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the internet is 100% secure.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Access, update, or delete your personal information<br />
            • Object to or restrict certain processing of your data<br />
            • Request data portability<br />
            • Withdraw consent where applicable
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            6. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2 }}>
            Email: privacy@softwareinsight.com<br />
            Address: Software Insight, Inc.<br />
            123 Tech Street, San Francisco, CA 94105
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
