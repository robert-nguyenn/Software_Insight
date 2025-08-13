const usersData = [
  {
    name: 'Admin User',
    email: 'admin@softwareinsight.com',
    password: 'admin123',
    role: 'admin',
    bio: 'System administrator for CodeLaunch platform',
    skills: ['Management', 'Technical Support', 'Education']
  },
  {
    name: 'Demo Student',
    email: 'demo.student@internprep.com',
    password: 'demo123',
    role: 'user',
    bio: 'Demo account for exploring the CodeLaunch internship preparation platform',
    skills: ['JavaScript', 'Python', 'React', 'Problem Solving'],
    socialLinks: {
      github: 'https://github.com/demostudent',
      linkedin: 'https://linkedin.com/in/demostudent'
    }
  }
];

module.exports = { usersData };
