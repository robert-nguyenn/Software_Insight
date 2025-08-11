import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Stack,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Schedule,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { contactAPI } from '../services/api';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    
    try {
      const response = await contactAPI.submitContact({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        category: 'general' // Default category
      });
      
      if (response.success) {
        setSubmitStatus('success');
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(response.error || 'Failed to submit contact form');
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ color: 'primary.main' }} />,
      title: 'Email Us',
      content: 'robert.nguyenanh@gmail.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      href: 'mailto:robert.nguyenanh@gmail.com',
    },
    {
      icon: <Phone sx={{ color: 'primary.main' }} />,
      title: 'Call Us',
      content: '(859) 691-8194',
      description: 'Mon-Fri from 9am to 6pm EST',
      href: 'tel:+18596918194',
    },
    {
      icon: <LocationOn sx={{ color: 'primary.main' }} />,
      title: 'Visit Us',
      content: 'Danville, Kentucky, USA',
      description: 'Come say hello at our office',
      href: '#',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Have questions about our courses, need support, or want to discuss partnerships? 
              We're here to help you succeed in your software engineering journey.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
            gap: 6,
          }}
        >
          {/* Contact Information */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                We're always excited to hear from our students, partners, and the developer community. 
                Reach out to us through any of the channels below.
              </Typography>

              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <MotionCard
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    sx={{
                      p: 3,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={{ mt: 0.5 }}>
                          {info.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 500,
                              mb: 1,
                              textDecoration: info.href !== '#' ? 'none' : 'inherit',
                              cursor: info.href !== '#' ? 'pointer' : 'default',
                              '&:hover': info.href !== '#' ? { textDecoration: 'underline' } : {},
                            }}
                            component={info.href !== '#' ? 'a' : 'div'}
                            href={info.href !== '#' ? info.href : undefined}
                          >
                            {info.content}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </MotionCard>
                ))}
              </Stack>

              {/* Office Hours */}
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                sx={{ mt: 3, p: 3 }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Schedule sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Office Hours
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Monday - Friday</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>9:00 AM - 6:00 PM EST</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Saturday</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>10:00 AM - 4:00 PM EST</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2">Sunday</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>Closed</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </MotionCard>
            </MotionBox>
          </Box>

          {/* Contact Form */}
          <Box>
            <MotionCard
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{ p: 4 }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Send us a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    Sorry, there was an error sending your message. Please try again.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 3,
                    }}
                  >
                    <Box>
                      <TextField
                        {...register('name', { required: 'Name is required' })}
                        label="Full Name"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        disabled={submitStatus === 'submitting'}
                      />
                    </Box>
                    <Box>
                      <TextField
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        label="Email Address"
                        type="email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        disabled={submitStatus === 'submitting'}
                      />
                    </Box>
                    <Box sx={{ gridColumn: '1 / -1' }}>
                      <TextField
                        {...register('subject', { required: 'Subject is required' })}
                        label="Subject"
                        fullWidth
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        disabled={submitStatus === 'submitting'}
                      />
                    </Box>
                    <Box sx={{ gridColumn: '1 / -1' }}>
                      <TextField
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          },
                        })}
                        label="Message"
                        multiline
                        rows={6}
                        fullWidth
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        disabled={submitStatus === 'submitting'}
                      />
                    </Box>
                    <Box sx={{ gridColumn: '1 / -1' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        disabled={submitStatus === 'submitting'}
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </MotionCard>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Divider sx={{ my: 8 }} />
        
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
            Have a quick question? Check out our most commonly asked questions below.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            {[
              {
                question: 'How long do courses typically take to complete?',
                answer: 'Most of our courses range from 4-12 weeks, depending on the complexity and your pace of learning.',
              },
              {
                question: 'Do you offer internship placement assistance?',
                answer: 'Yes! We have partnerships with tech companies and provide career support to help you land internships.',
              },
              {
                question: 'Are there prerequisites for the courses?',
                answer: 'Prerequisites vary by course. Beginner courses require no prior experience, while advanced courses may require some background.',
              },
              {
                question: 'What kind of support do you provide to students?',
                answer: 'We offer 24/7 community support, office hours with instructors, and career counseling services.',
              },
            ].map((faq, index) => (
              <Box key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  sx={{
                    p: 3,
                    textAlign: 'left',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Contact;
