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
  ArrowUpward,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  const contactInfo = [
    { icon: <Phone />, text: '(859) 691-8194', href: 'tel:8596918194' },
    { icon: <Email />, text: 'robert.nguyenanh@gmail.com', href: 'mailto:robert.nguyenanh@gmail.com' },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/robert-nguyenn/', label: 'LinkedIn' },
    { icon: <GitHub />, href: 'https://github.com/robert-nguyenn', label: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: 'white',
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
          `,
        },
      }}
    >
      {/* Floating Back to Top Button */}
      <MotionIconButton
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          position: 'absolute',
          top: -30,
          right: { xs: 20, sm: 40 },
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          color: 'white',
          zIndex: 10,
          width: 48,
          height: 48,
          boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            boxShadow: '0 12px 35px rgba(59, 130, 246, 0.5)',
          },
        }}
      >
        <ArrowUpward />
      </MotionIconButton>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          sx={{ py: 4, pt: 6 }} // Added extra top padding to accommodate the scroll button
        >
          <MotionBox
            variants={itemVariants}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'space-between',
            }}
          >
            {/* Company Info */}
            <MotionBox 
              variants={itemVariants}
              sx={{ flex: { xs: 1, md: 2 }, maxWidth: { md: '350px' } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src="/images/softwareinsightlogo.png"
                  alt="CodeLaunch Logo"
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginRight: '12px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
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
                  CodeLaunch
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3, 
                  color: 'grey.300', 
                  lineHeight: 1.6,
                  fontSize: '0.9rem',
                }}
              >
                Empowering the next generation of software developers through comprehensive courses, 
                internship opportunities, and career guidance.
              </Typography>
              
              {/* Social Media Links */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1.5, fontSize: '0.9rem' }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        size="small"
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'grey.300',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          width: 36,
                          height: 36,
                          '&:hover': {
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </MotionBox>

            <MotionBox 
              variants={itemVariants}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 4,
                flex: 1,
              }}
            >
              {/* Quick Links */}
              <MotionBox variants={itemVariants} sx={{ flex: 1 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    fontSize: '0.9rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      borderRadius: 2,
                    },
                  }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {[
                    { to: '/courses', label: 'Courses' },
                    { to: '/internships', label: 'Internships' },
                    { to: '/interview', label: 'Interview Tips' },
                    { to: '/contact', label: 'Contact Us' },
                  ].map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        component={RouterLink}
                        to={link.to}
                        sx={{
                          color: 'grey.300',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          py: 0.3,
                          position: 'relative',
                          '&:hover': { 
                            color: 'white',
                            '&::before': {
                              width: '15px',
                            },
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: -15,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 0,
                            height: '2px',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                            transition: 'width 0.3s ease',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </Stack>
              </MotionBox>

              {/* Contact Info */}
              <MotionBox variants={itemVariants} sx={{ flex: 1 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    fontSize: '0.9rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: 30,
                      height: 2,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      borderRadius: 2,
                    },
                  }}
                >
                  Contact
                </Typography>
                <Stack spacing={1.5}>
                  <motion.div whileHover={{ x: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'rgba(59, 130, 246, 0.2)',
                          color: '#60a5fa',
                        }}
                      >
                        <Email fontSize="small" />
                      </Box>
                      <Link
                        href="mailto:robert.nguyenanh@gmail.com"
                        sx={{
                          color: 'grey.300',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          '&:hover': { color: 'white' },
                        }}
                      >
                        robert.nguyenanh@gmail.com
                      </Link>
                    </Box>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'rgba(34, 197, 94, 0.2)',
                          color: '#4ade80',
                        }}
                      >
                        <Phone fontSize="small" />
                      </Box>
                      <Link
                        href="tel:+18596918194"
                        sx={{
                          color: 'grey.300',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          '&:hover': { color: 'white' },
                        }}
                      >
                        (859) 691-8194
                      </Link>
                    </Box>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'rgba(168, 85, 247, 0.2)',
                          color: '#a78bfa',
                          mt: 0.2,
                        }}
                      >
                        <LocationOn fontSize="small" />
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'grey.300', 
                          fontSize: '0.8rem',
                          lineHeight: 1.4,
                        }}
                      >
                        Danville, Kentucky<br />
                        USA
                      </Typography>
                    </Box>
                  </motion.div>
                </Stack>
              </MotionBox>
            </MotionBox>
          </MotionBox>
        </MotionBox>

        <Divider 
          sx={{ 
            borderColor: 'rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            height: '1px',
            border: 'none',
          }} 
        />

        {/* Bottom Section */}
        <MotionBox
          variants={itemVariants}
          sx={{
            py: 2.5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'grey.400',
                fontSize: '0.8rem',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {currentYear} CodeLaunch. All rights reserved. Built with ❤️ for developers.
            </Typography>
          </motion.div>
          
          <Stack direction="row" spacing={3}>
            {[
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/cookies', label: 'Cookie Policy' },
            ].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: 'grey.400',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    position: 'relative',
                    '&:hover': { 
                      color: 'white',
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '1px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Footer;
