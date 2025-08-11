import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const Profile: React.FC = () => {
  return (
    <PlaceholderPage
      title="User Profile"
      description="Manage your account settings, view your enrolled courses, track your progress, and update your personal information."
      actionText="Back to Dashboard"
      actionLink="/"
    />
  );
};

export default Profile;
