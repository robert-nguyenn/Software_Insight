import { Resource } from '../../data/interview';

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'success';
    case 'Intermediate': return 'warning';
    case 'Advanced': return 'error';
    default: return 'default';
  }
};

export const getFilteredResources = (resources: Resource[], type: string) => {
  return resources.filter(resource => resource.type === type);
};
