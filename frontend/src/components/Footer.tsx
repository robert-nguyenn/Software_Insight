import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Twitter,
  Facebook,
  ArrowUpward,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: <Phone />, text: '(859) 691-8194', href: 'tel:8596918194' },
    { icon: <Email />, text: 'robert.nguyenanh@gmail.com', href: 'mailto:robert.nguyenanh@gmail.com' },
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <img
                  src="/images/softwareinsightlogo.png"
                  alt="Software Insight Logo"
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginRight: '12px',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Software Insight
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 3, color: 'grey.300', lineHeight: 1.6 }}>
                Empowering the next generation of software developers through comprehensive courses, 
                internship opportunities, and career guidance. Join hundreds of students who have 
                launched successful tech careers with us.
              </Typography>
              
              {/* Contact Information */}
              <Stack direction="row" spacing={3}>
                {contactInfo.map((contact, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={contact.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'grey.300',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    {contact.icon}
                    <Typography variant="body2">
                      {contact.text}
                    </Typography>
                  </Box>
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
              component={RouterLink}
              to="/privacy-policy"
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
              component={RouterLink}
              to="/terms-of-service"
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
              component={RouterLink}
              to="/cookie-policy"
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
