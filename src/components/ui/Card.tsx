import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  gradient = false,
  glass = false,
  onClick,
}) => {
  const baseClasses = clsx(
    'rounded-xl border transition-all duration-300',
    {
      'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700': !glass && !gradient,
      'glass-morphism': glass,
      'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-blue-200 dark:border-gray-600':
        gradient,
      'cursor-pointer': onClick,
      'hover:shadow-lg hover:-translate-y-1': hover,
      'shadow-sm': !hover,
    },
    className
  );

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
