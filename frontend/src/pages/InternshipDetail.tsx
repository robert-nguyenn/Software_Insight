import React from 'react';
import PlaceholderPage from '../components/PlaceholderPage';

const InternshipDetail: React.FC = () => {
  return (
    <PlaceholderPage
      title="Internship Details"
      description="Complete internship information including company details, requirements, responsibilities, application process, and deadlines will be displayed here."
      actionText="Back to Internships"
      actionLink="/internships"
    />
  );
};

export default InternshipDetail;
