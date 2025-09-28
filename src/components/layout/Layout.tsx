import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Theme } from '@/types';

interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;