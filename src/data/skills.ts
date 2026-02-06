import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 4 },
      { name: 'C++', level: 4 },
      { name: 'Verilog', level: 3 },
      { name: 'HTML', level: 4 },
      { name: 'CSS', level: 4 },
      { name: 'SQL', level: 3 },
      { name: 'JavaScript', level: 4 },
      { name: 'Go', level: 3 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Xilinx Vivado', level: 3 },
      { name: 'LaTeX', level: 4 },
      { name: 'Git', level: 4 },
      { name: 'Arduino UNO', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'AWS', level: 3 },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    icon: '📚',
    skills: [
      { name: 'NumPy', level: 4 },
      { name: 'SciPy', level: 3 },
      { name: 'Pandas', level: 4 },
      { name: 'Matplotlib', level: 4 },
      { name: 'Seaborn', level: 3 },
      { name: 'TensorFlow', level: 4 },
      { name: 'TensorBoard', level: 3 },
      { name: 'Scikit-learn', level: 4 },
      { name: 'Streamlit', level: 3 },
      { name: 'Flask', level: 3 },
      { name: 'React.js', level: 4 },
      { name: 'Pulumi (IaC)', level: 3 },
    ],
  },
];
