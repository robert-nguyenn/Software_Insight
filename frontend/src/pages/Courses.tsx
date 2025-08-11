import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const Courses: React.FC = () => {
  return (
    <PlaceholderPage
      title="Courses"
      description="Explore our comprehensive collection of software engineering courses designed to take you from beginner to professional. Our expert-led courses cover everything from programming fundamentals to advanced system design."
      actionText="Browse Available Courses"
      actionLink="/courses"
    />
  );
};

export default Courses;
