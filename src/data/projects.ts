import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Multi-Layer Perceptron Performance Analysis',
    category: 'machine-learning',
    featured: true,
    image: '/assets/images/mlp-project.png',
    description:
      'Advanced comparative analysis framework for evaluating MLPs against alternative models with sophisticated visualization and performance metrics.',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 't-SNE', 'Matplotlib', 'Pandas'],
    features: [
      'Advanced regularization techniques (L1/L2)',
      't-SNE visualization pipeline for high-dimensional data',
      'Multi-dataset support with automated preprocessing',
      'Comprehensive performance metrics and statistical analysis',
      'Interactive visualization dashboard',
    ],
    github: 'https://github.com/bp0609/MLP-Performance-On-Different-Tasks',
    metrics: {
      'Lines of Code': '2000+',
      Accuracy: '95%+',
      'Models Compared': '5',
      Datasets: '3',
    },
  },
  {
    id: 2,
    title: "Optimized 2x2 Rubik's Cube Solver",
    category: 'algorithms',
    featured: true,
    image: '/assets/images/rubiks-solver.png',
    description:
      'Efficient BFS-based solver handling 264M+ state combinations with advanced memoization and optimal path finding algorithms.',
    technologies: ['C++', 'BFS', 'Data Structures', 'Algorithm Optimization', 'Memory Management'],
    features: [
      'Handles 264M+ unique state combinations',
      'Optimal path solutions with minimal moves',
      'Memory-efficient state encoding techniques',
      '3D orientation mapping and validation',
      'Performance optimization with smart pruning',
    ],
    github: 'https://github.com/bp0609/bp0609-2x2-Rubix-Cube-Solver',
    metrics: {
      'States Handled': '264M+',
      Algorithm: 'Optimized BFS',
      'Time Complexity': 'O(n)',
      'Memory Usage': 'Optimized',
    },
  },
  {
    id: 3,
    title: 'AI-Powered Code Review Assistant',
    category: 'machine-learning',
    featured: false,
    image: '/assets/images/code-review.png',
    description:
      'Machine learning model that automatically reviews code for best practices, security vulnerabilities, and performance optimizations.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Git', 'GitHub API', 'Docker'],
    features: [
      'Automated code quality assessment',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Integration with popular version control systems',
      'Customizable rule sets for different languages',
    ],
    github: 'https://github.com/bp0609/ai-code-reviewer',
    demo: 'https://code-review-demo.netlify.app',
    metrics: {
      Accuracy: '92%',
      Languages: '8+',
      Rules: '150+',
      Performance: 'Real-time',
    },
  },
  {
    id: 4,
    title: 'Real-time Collaborative Whiteboard',
    category: 'web-development',
    featured: false,
    image: '/assets/images/whiteboard.png',
    description:
      'Full-stack web application enabling real-time collaborative drawing and annotation with multi-user support and version control.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Canvas API', 'WebRTC'],
    features: [
      'Real-time collaborative drawing',
      'Multi-user cursor tracking',
      'Version history and rollback',
      'Voice and video chat integration',
      'Export to multiple formats',
    ],
    github: 'https://github.com/bp0609/collaborative-whiteboard',
    demo: 'https://whiteboard-collab.herokuapp.com',
    metrics: {
      Users: '100+ concurrent',
      Latency: '<50ms',
      Uptime: '99.9%',
      Features: '25+',
    },
  },
  {
    id: 5,
    title: 'Smart IoT Home Automation System',
    category: 'iot',
    featured: false,
    image: '/assets/images/iot-home.png',
    description:
      'Comprehensive IoT solution for home automation with predictive analytics, energy optimization, and intelligent scheduling.',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'React Native', 'TensorFlow Lite'],
    features: [
      'Predictive energy consumption modeling',
      'Automated scheduling based on usage patterns',
      'Remote monitoring via mobile app',
      'Integration with popular smart home platforms',
      'Machine learning for optimization',
    ],
    github: 'https://github.com/bp0609/smart-home-iot',
    metrics: {
      Devices: '20+',
      'Energy Savings': '30%',
      'Response Time': '<2s',
      Accuracy: '94%',
    },
  },
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};
