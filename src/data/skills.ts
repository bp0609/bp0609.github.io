import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Machine Learning & AI',
    icon: '🤖',
    skills: [
      { name: 'Neural Networks', level: 5 },
      { name: 'Deep Learning', level: 4 },
      { name: 'Computer Vision', level: 4 },
      { name: 'Natural Language Processing', level: 3 },
      { name: 'TensorFlow/PyTorch', level: 4 },
      { name: 'Scikit-learn', level: 5 },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'C++', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'Java', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Go', level: 2 },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Node.js', level: 4 },
      { name: 'HTML/CSS', level: 5 },
      { name: 'REST APIs', level: 4 },
      { name: 'GraphQL', level: 3 },
      { name: 'MongoDB', level: 3 },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 4 },
      { name: 'AWS', level: 3 },
      { name: 'Linux', level: 4 },
      { name: 'Jupyter', level: 5 },
      { name: 'VS Code', level: 5 },
    ],
  },
];
