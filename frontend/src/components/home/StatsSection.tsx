import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { getStats } from '../../data/homeData';

const MotionBox = motion(Box);

export const StatsSection: React.FC = () => {
  const theme = useTheme();
  const stats = getStats();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {stats.map((stat, index) => (
          <MotionBox
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            sx={{
              textAlign: 'center',
              minWidth: '150px',
            }}
          >
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
              {stat.icon}
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {stat.number}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {stat.label}
            </Typography>
          </MotionBox>
        ))}
      </Box>
    </Container>
  );
};
