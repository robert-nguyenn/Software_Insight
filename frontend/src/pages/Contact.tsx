import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const Contact: React.FC = () => {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with our team for support, questions, partnerships, or feedback. We're here to help you succeed in your software engineering journey."
      actionText="Send Message"
      actionLink="/contact"
    />
  );
};

export default Contact;
