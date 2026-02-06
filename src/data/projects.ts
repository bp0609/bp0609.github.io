import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Large Integer Addition using AVX-512 & ARM NEON SIMD',
    category: 'algorithms',
    featured: true,
    image: '/assets/images/AVX.png',
    description:
      'Parallel multi-stage algorithm for large integer addition using SIMD vectorization across AVX-512 (x86) and NEON (ARM) architectures.',
    technologies: ['C++', 'AVX-512', 'ARM NEON', 'SIMD Intrinsics', 'Multithreading'],
    features: [
      'Queue-based addition strategy to manage carry propagation',
      'SIMD-optimized kernels for wide integer operations',
      'Multi-core parallelism for throughput gains',
      'Cross-architecture performance evaluation and scalability analysis',
    ],
    customLinks: [
      { label: 'Poster', url: 'https://iitgnacin-my.sharepoint.com/:v:/g/personal/22110047_iitgn_ac_in/IQBZqZwIn2VxT7RDdUWrPw34Af-sTqUn66viViKZQJjAYso?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=a9lqNl' },
    ],
  },
  {
    id: 2,
    title: 'Smart Guard IoT Application',
    category: 'iot',
    featured: true,
    image: '/assets/images/smartIOT.png',
    description:
      'ESP32-based IoT monitoring system with a Node.js/Express backend, PostgreSQL storage, and a React + Vite dashboard.',
    technologies: ['ESP32', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Vite', 'Docker'],
    features: [
      'RESTful APIs for sensor data and alerts',
      'Live data visualization and alert management',
      'Containerized frontend and backend services',
      'Makefile-driven developer workflow',
    ],
    github: 'https://github.com/bp0609/Smart-Guard-IOT-Application',
  },
  {
    id: 3,
    title: 'Text Generator using Next-Character Prediction (MLP)',
    category: 'machine-learning',
    featured: true,
    image: '/assets/images/TextTokenPredict.png',
    description:
      'Character-level text generation pipeline trained on diverse corpora with a Streamlit app for real-time inference.',
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Streamlit', 'MLP'],
    features: [
      'Context-based next-character prediction',
      'Trained on Shakespeare and LaTeX corpora',
      'Hyperparameter exploration with live output',
    ],
    github: 'https://github.com/bp0609/Text-Generator-Based-on-NEXT-Character-Prediction-USING-MLP.git',
    customLinks: [
      { label: 'Streamlit App', url: 'https://next-character-predictor-using-mlp.streamlit.app/' },
    ],
  },
  {
    id: 4,
    title: 'Algorithmic Solutions for Games using Data Structures',
    category: 'algorithms',
    featured: false,
    image: '/assets/images/bhavik-profile.png',
    description:
      'Game AI implementations for two-player and puzzle games using graph traversal and efficient state encoding.',
    technologies: ['C++', 'Graph Algorithms', 'Data Structures', 'Search', 'State Encoding'],
    features: [
      'Optimal move selection for Connect4, Game of Sim, and Tic-Tac-Toe',
      'Efficient encodings for puzzle8 and 2x2x2 Rubik’s Cube',
      'Search-based solvers with reduced memory footprint',
    ],
    github: 'https://github.com/bp0609/Algorithmic-Solution-of-various-games-using-DSA',
  },
  {
    id: 5,
    title: 'Number Conversion Simulator and IEEE-754 Converter',
    category: 'web-development',
    featured: false,
    image: '/assets/images/PMA_COA.png',
    description:
      'GUI-based educational tool for number system conversions and IEEE-754 floating-point representation.',
    technologies: ['React', 'JavaScript', 'CSS', 'Visualization'],
    features: [
      'Step-by-step conversion visualization',
      'Fractional and base-to-base conversion support',
      'Interactive UI for real-time learning',
    ],
    github: 'https://github.com/bp0609/COA_GUI_Tool_Project',
    customLinks: [
      { label: 'App Link', url: 'https://hit2737.github.io/COA_Learning_Application/' },
    ],
  },
  {
    id: 6,
    title: 'Human Activity Recognizer Analysis',
    category: 'machine-learning',
    featured: false,
    image: '/assets/images/bhavik-profile.png',
    description:
      'Analysis of the UCI-HAR dataset with time-series feature extraction, PCA, and decision tree classification.',
    technologies: ['Python', 'TSFEL', 'Pandas', 'Scikit-learn', 'PCA'],
    features: [
      'Feature extraction from accelerometer time series',
      'Dimensionality reduction with PCA',
      'Decision tree classifier with 76% accuracy',
    ],
    github: 'https://github.com/bp0609/HAR-Human-Activity-Recognizer-Decision-Tree-Model.git',
  },
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
