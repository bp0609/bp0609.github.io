export const SITE_CONFIG = {
  name: 'Bhavik Patel',
  title: 'AI/ML Engineer & Systems Architect',
  description: 'Computer Science student at IIT Gandhinagar specializing in Machine Learning, AI, and System Design',
  email: 'bhavik.patel@iitgn.ac.in',
  resumeUrl: '/assets/documents/Bhavik_Patel_Resume.pdf',
  profileImage: '/assets/images/bhavik-profile.png',
  ogImage: '/assets/images/og-image.png',
  siteUrl: 'https://bp0609.github.io'
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'algorithms', label: 'Algorithms' },
  { id: 'web-development', label: 'Web Development' }
];

export const TYPEWRITER_ROLES = [
  'AI/ML Engineer',
  'Systems Architect',
  'Full-Stack Developer',
  'Computer Science Student'
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const FLOATING_ELEMENTS = [
  {
    id: 1,
    size: 120,
    color: 'from-blue-500 to-teal-500',
    position: { top: '20%', left: '10%' },
    animationDelay: 0
  },
  {
    id: 2,
    size: 80,
    color: 'from-purple-500 to-blue-500',
    position: { top: '60%', right: '20%' },
    animationDelay: 2
  },
  {
    id: 3,
    size: 60,
    color: 'from-teal-500 to-purple-500',
    position: { bottom: '20%', left: '30%' },
    animationDelay: 4
  }
];