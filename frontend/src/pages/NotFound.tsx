import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const NotFound: React.FC = () => {
  return (
    <PlaceholderPage
      title="Page Not Found"
      description="Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."
      actionText="Go Home"
      actionLink="/"
    />
  );
};

export default NotFound;
