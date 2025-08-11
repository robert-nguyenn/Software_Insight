import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const Dashboard: React.FC = () => {
  return (
    <PlaceholderPage
      title="Admin Dashboard"
      description="Manage courses, internships, testimonials, user accounts, and view analytics. This is the administrative control center for Software Insight."
      actionText="Back to Home"
      actionLink="/"
    />
  );
};

export default Dashboard;
