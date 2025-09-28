import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects, getProjectsByCategory } from '@/data/projects';
import { PROJECT_CATEGORIES } from '@/utils/constants';
import { FilterCategory } from '@/types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Projects: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {PROJECT_CATEGORIES.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange(category.id as FilterCategory)}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <Card className="overflow-hidden h-full">
                  {project.featured && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold">
                      Featured Project
                    </div>
                  )}

                  <div className={`p-6 ${project.featured ? 'md:flex md:gap-8' : ''}`}>
                    <div className={project.featured ? 'md:flex-1' : ''}>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.metrics && (
                        <div className="mb-6">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-blue-500">{value}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github mr-2" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    {project.featured && (
                      <div className="md:w-1/3 mt-6 md:mt-0">
                        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-4xl">
                          🚀
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
