import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const Register: React.FC = () => {
  return (
    <PlaceholderPage
      title="Create Account"
      description="Join thousands of students who are advancing their careers with Software Insight. Create your free account to get started."
      actionText="Sign Up"
      actionLink="/register"
    />
  );
};

export default Register;
