import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Instagram,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com/softwareinsight', label: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com/softwareinsight', label: 'Twitter' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/company/softwareinsight', label: 'LinkedIn' },
    { icon: <GitHub />, href: 'https://github.com/softwareinsight', label: 'GitHub' },
    { icon: <Instagram />, href: 'https://instagram.com/softwareinsight', label: 'Instagram' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'space-between',
            }}
          >
            {/* Company Info */}
            <Box sx={{ flex: { xs: 1, md: 2 }, maxWidth: { md: '400px' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Software Insight
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'grey.300', lineHeight: 1.6 }}>
                Empowering the next generation of software developers through comprehensive courses, 
                internship opportunities, and career guidance. Join hundreds of students who have 
                launched successful tech careers with us.
              </Typography>
              
              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'grey.400',
                      '&:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Quick Links & Resources */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              flex: 1,
            }}>
              {/* Quick Links */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Quick Links
                </Typography>
                <Stack spacing={2}>
                  <Link
                    component={RouterLink}
                    to="/courses"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'white' },
                    }}
                  >
                    Courses
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/internships"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'white' },
                    }}
                  >
                    Internships
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/interview"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'white' },
                    }}
                  >
                    Interview Tips
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      color: 'grey.300',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'white' },
                    }}
                  >
                    Contact Us
                  </Link>
                </Stack>
              </Box>

              {/* Contact Info */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Contact
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email fontSize="small" sx={{ color: 'grey.400' }} />
                    <Link
                      href="mailto:robert.nguyenanh@gmail.com"
                      sx={{
                        color: 'grey.300',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': { color: 'white' },
                      }}
                    >
                      robert.nguyenanh@gmail.com
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone fontSize="small" sx={{ color: 'grey.400' }} />
                    <Link
                      href="tel:+18596918194"
                      sx={{
                        color: 'grey.300',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': { color: 'white' },
                      }}
                    >
                      (859) 691-8194
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <LocationOn fontSize="small" sx={{ color: 'grey.400', mt: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'grey.300', fontSize: '0.875rem' }}>
                      Danville, Kentucky<br />
                      USA
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'grey.700' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {currentYear} Software Insight. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'white' },
              }}
            >
              Cookie Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
