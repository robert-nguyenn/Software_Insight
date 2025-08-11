import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const CourseDetail: React.FC = () => {
  return (
    <PlaceholderPage
      title="Course Details"
      description="Detailed course information including curriculum, instructor details, prerequisites, and enrollment options will be available here."
      actionText="Back to Courses"
      actionLink="/courses"
    />
  );
};

export default CourseDetail;
