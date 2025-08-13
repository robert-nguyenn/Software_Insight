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
} from '@mui/material';

const CookiePolicy: React.FC = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(true);
  const [marketingEnabled, setMarketingEnabled] = React.useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={1} sx={{ p: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Cookie Policy
        </Typography>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Last updated: August 12, 2025
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            What Are Cookies?
          </Typography>
          <Typography variant="body1" paragraph>
            Cookies are small text files that are placed on your computer or mobile device when you 
            visit our website. They help us provide you with a better experience by remembering your 
            preferences and improving our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            How We Use Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies for various purposes:
          </Typography>
          
          <Box sx={{ ml: 2, mb: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Essential Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation, user authentication, and access to secure areas.
            </Typography>
          </Box>

          <Box sx={{ ml: 2, mb: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Analytics Cookies
            </Typography>
            <Typography variant="body1" paragraph>
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
            />
          </Box>

          <Box sx={{ ml: 2, mb: 3 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Marketing Cookies
            </Typography>
            <Typography variant="body1" paragraph>
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
            />
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Managing Your Cookie Preferences
          </Typography>
          <Typography variant="body1" paragraph>
            You can control and manage cookies in various ways. Please note that removing or blocking 
            cookies can impact your user experience and parts of our website may no longer be fully accessible.
          </Typography>
          <Typography variant="body1" paragraph>
            Most web browsers allow you to:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • View what cookies are stored on your device<br />
            • Delete cookies from your device<br />
            • Block cookies from being stored<br />
            • Set preferences for specific websites
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Third-Party Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We may use third-party services that set cookies on our website. These include:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 2 }}>
            • Google Analytics for website analytics<br />
            • Payment processors for secure transactions<br />
            • Social media platforms for content sharing<br />
            • Educational content providers
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Updates to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about our use of cookies, please contact us at:
          </Typography>
          <Typography variant="body1" component="div" sx={{ ml: 2, mb: 3 }}>
            Email: privacy@softwareinsight.com<br />
            Address: Software Insight, Inc.<br />
            123 Tech Street, San Francisco, CA 94105
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained" size="large">
            Save Preferences
          </Button>
          <Button variant="outlined" size="large">
            Accept All Cookies
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CookiePolicy;
