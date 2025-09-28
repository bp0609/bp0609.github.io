import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SITE_CONFIG, TYPEWRITER_ROLES, FLOATING_ELEMENTS } from '@/utils/constants';
import { socialLinks } from '@/data/socialLinks';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const typewriterText = useTypewriter({
    words: TYPEWRITER_ROLES,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-mesh-bg"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_ELEMENTS.map(element => (
          <motion.div
            key={element.id}
            className={`absolute w-${element.size / 4} h-${element.size / 4} rounded-full bg-gradient-to-br ${element.color} opacity-20`}
            style={{
              ...element.position,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: element.animationDelay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-gradient">{SITE_CONFIG.name}</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6 h-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {typewriterText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {SITE_CONFIG.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button variant="primary" size="lg" href="#projects" className="group">
              View Projects
              <motion.i
                className="fas fa-arrow-right ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download mr-2" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                aria-label={link.label}
              >
                <i className={link.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={SITE_CONFIG.profileImage}
                alt={`${SITE_CONFIG.name} - Profile Photo`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gradient Ring */}
            <motion.div
              className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about section"
        >
          <i className="fas fa-chevron-down text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
