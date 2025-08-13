import { Resource } from '../../data/interview';

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
    case 'beginner':
      return 'success';
    case 'medium':
    case 'intermediate':
      return 'warning';
    case 'hard':
    case 'advanced':
      return 'error';
    default:
      return 'default';
  }
};

export const getFilteredResources = (resources: Resource[], type: string) => {
  return resources.filter(resource => 
    resource.type?.toLowerCase().includes(type)
  );
};
