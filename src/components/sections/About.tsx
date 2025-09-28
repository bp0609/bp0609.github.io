import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Card from '@/components/ui/Card';

const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  const highlights = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'IIT Gandhinagar',
      description: 'Computer Science Student',
    },
    {
      icon: 'fas fa-brain',
      title: 'AI/ML Specialist',
      description: 'Machine Learning & Deep Learning',
    },
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Developer',
      description: 'Modern Web Technologies',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Computer Science student at IIT Gandhinagar, specializing in
              artificial intelligence and machine learning. My journey in technology is driven by
              curiosity and a desire to solve complex problems through innovative solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With expertise in deep learning, computer vision, and system design, I enjoy working
              on projects that challenge conventional approaches and push the boundaries of what's
              possible with current technology.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="text-center p-8 h-full">
                  <div className="text-4xl text-blue-500 mb-4">
                    <i className={highlight.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
