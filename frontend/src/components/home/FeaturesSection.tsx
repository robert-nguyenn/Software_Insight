import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { getFeatures } from '../../data/homeData';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export const FeaturesSection: React.FC = () => {
  const theme = useTheme();
  const features = getFeatures();

  return (
    <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why Choose Software Insight?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            We provide everything you need to succeed in your software engineering journey,
            from beginner-friendly courses to advanced career preparation.
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr 1fr',
            },
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {features.map((feature, index) => (
            <MotionCard
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    color: theme.palette.primary.main,
                    '& svg': {
                      fontSize: 'large',
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
