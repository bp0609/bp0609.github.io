// Projects data and functionality
document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    initSkills();
    initExperience();

    // Projects data
    const projectsData = [
        {
            id: 1,
            title: "Multi-Layer Perceptron Performance Analysis",
            category: "machine-learning",
            featured: true,
            image: "assets/images/mlp-project.png",
            description: "Advanced comparative analysis framework for evaluating MLPs against alternative models with sophisticated visualization and performance metrics.",
            technologies: ["Python", "Scikit-learn", "NumPy", "t-SNE", "Matplotlib", "Pandas"],
            features: [
                "Advanced regularization techniques (L1/L2)",
                "t-SNE visualization pipeline for high-dimensional data",
                "Multi-dataset support with automated preprocessing",
                "Comprehensive performance metrics and statistical analysis",
                "Interactive visualization dashboard"
            ],
            github: "https://github.com/bp0609/MLP-Performance-On-Different-Tasks",
            demo: null,
            metrics: {
                "Lines of Code": "2000+",
                "Accuracy": "95%+",
                "Models Compared": "5",
                "Datasets": "3"
            }
        },
        {
            id: 2,
            title: "Optimized 2x2 Rubik's Cube Solver",
            category: "algorithms",
            featured: true,
            image: "assets/images/rubiks-solver.png",
            description: "Efficient BFS-based solver handling 264M+ state combinations with advanced memoization and optimal path finding algorithms.",
            technologies: ["C++", "BFS", "Data Structures", "Algorithm Optimization", "Memory Management"],
            features: [
                "Handles 264M+ unique state combinations",
                "Optimal path solutions with minimal moves",
                "Memory-efficient state encoding techniques",
                "3D orientation mapping and validation",
                "Performance optimization with smart pruning"
            ],
            github: "https://github.com/bp0609/bp0609-2x2-Rubix-Cube-Solver",
            demo: null,
            metrics: {
                "States Handled": "264M+",
                "Algorithm": "Optimized BFS",
                "Time Complexity": "O(n)",
                "Memory Usage": "Optimized"
            }
        },
        {
            id: 3,
            title: "AI-Powered Code Review Assistant",
            category: "machine-learning",
            featured: false,
            image: "assets/images/code-review.png",
            description: "Machine learning model that automatically reviews code for best practices, security vulnerabilities, and performance optimizations.",
            technologies: ["Python", "TensorFlow", "NLP", "Git", "GitHub API", "Docker"],
            features: [
                "Automated code quality assessment",
                "Security vulnerability detection",
                "Performance optimization suggestions",
                "Integration with popular version control systems",
                "Customizable rule sets for different languages"
            ],
            github: "https://github.com/bp0609/ai-code-reviewer",
            demo: "https://code-review-demo.netlify.app",
            metrics: {
                "Accuracy": "92%",
                "Languages": "8+",
                "Rules": "150+",
                "Performance": "Real-time"
            }
        },
        {
            id: 4,
            title: "Real-time Collaborative Whiteboard",
            category: "web-development",
            featured: false,
            image: "assets/images/whiteboard.png",
            description: "Full-stack web application enabling real-time collaborative drawing and annotation with multi-user support and version control.",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Canvas API", "WebRTC"],
            features: [
                "Real-time collaborative drawing",
                "Multi-user cursor tracking",
                "Version history and rollback",
                "Voice and video chat integration",
                "Export to multiple formats"
            ],
            github: "https://github.com/bp0609/collaborative-whiteboard",
            demo: "https://whiteboard-collab.herokuapp.com",
            metrics: {
                "Users": "100+ concurrent",
                "Latency": "<50ms",
                "Uptime": "99.9%",
                "Features": "25+"
            }
        },
        {
            id: 5,
            title: "Smart IoT Home Automation System",
            category: "algorithms",
            featured: false,
            image: "assets/images/iot-home.png",
            description: "Comprehensive IoT solution for home automation with predictive analytics, energy optimization, and intelligent scheduling.",
            technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT", "React Native", "TensorFlow Lite"],
            features: [
                "Predictive energy consumption modeling",
                "Automated scheduling based on usage patterns",
                "Remote monitoring via mobile app",
                "Integration with popular smart home platforms",
                "Machine learning for optimization"
            ],
            github: "https://github.com/bp0609/smart-home-iot",
            demo: null,
            metrics: {
                "Devices": "20+",
                "Energy Savings": "30%",
                "Response Time": "<2s",
                "Accuracy": "94%"
            }
        }
    ];

    // Skills data
    const skillsData = [
        {
            category: "Machine Learning & AI",
            icon: "🤖",
            skills: [
                { name: "Neural Networks", level: 5 },
                { name: "Deep Learning", level: 4 },
                { name: "Computer Vision", level: 4 },
                { name: "Natural Language Processing", level: 3 },
                { name: "TensorFlow/PyTorch", level: 4 },
                { name: "Scikit-learn", level: 5 }
            ]
        },
        {
            category: "Programming Languages",
            icon: "💻",
            skills: [
                { name: "Python", level: 5 },
                { name: "C++", level: 4 },
                { name: "JavaScript", level: 4 },
                { name: "Java", level: 3 },
                { name: "TypeScript", level: 3 },
                { name: "Go", level: 2 }
            ]
        },
        {
            category: "Web Development",
            icon: "🌐",
            skills: [
                { name: "React", level: 4 },
                { name: "Node.js", level: 4 },
                { name: "HTML/CSS", level: 5 },
                { name: "REST APIs", level: 4 },
                { name: "GraphQL", level: 3 },
                { name: "MongoDB", level: 3 }
            ]
        },
        {
            category: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                { name: "Git", level: 5 },
                { name: "Docker", level: 4 },
                { name: "AWS", level: 3 },
                { name: "Linux", level: 4 },
                { name: "Jupyter", level: 5 },
                { name: "VS Code", level: 5 }
            ]
        }
    ];

    // Experience data
    const experienceData = [
        {
            title: "Computer Science Student",
            company: "IIT Gandhinagar",
            duration: "2021 - Present",
            type: "education",
            description: "Pursuing Bachelor's degree in Computer Science with specialization in Artificial Intelligence and Machine Learning. Maintaining excellent academic record while actively participating in research projects and coding competitions."
        },
        {
            title: "Research Intern",
            company: "AI Research Lab",
            duration: "Summer 2023",
            type: "work",
            description: "Worked on developing novel neural network architectures for computer vision tasks. Contributed to research papers and implemented state-of-the-art models for image classification and object detection."
        },
        {
            title: "Full-Stack Developer",
            company: "Tech Startup",
            duration: "2022 - 2023",
            type: "work",
            description: "Led development of web applications using React and Node.js. Implemented real-time features, optimized database queries, and collaborated with design team to create intuitive user interfaces."
        },
        {
            title: "Open Source Contributor",
            company: "Various Projects",
            duration: "2021 - Present",
            type: "project",
            description: "Active contributor to open source projects in machine learning and web development. Maintained several popular repositories and helped other developers through code reviews and documentation."
        }
    ];

    // Initialize projects section
    function initProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');

        if (!projectsGrid) return;

        // Render projects
        function renderProjects(projects) {
            projectsGrid.innerHTML = '';

            projects.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsGrid.appendChild(projectCard);
            });

            // Re-apply scroll animations
            const animatedElements = projectsGrid.querySelectorAll('.fade-in-up');
            animatedElements.forEach(element => {
                element.classList.remove('visible');
                // Re-observe elements
                if (window.projectObserver) {
                    window.projectObserver.observe(element);
                }
            });
        }

        // Create project card element
        function createProjectCard(project) {
            const card = document.createElement('div');
            card.className = `project-card fade-in-up ${project.featured ? 'featured' : ''}`;
            card.setAttribute('data-category', project.category);

            card.innerHTML = `
                <div class="project-image">
                    ${project.featured ? '<div class="project-badge">Featured</div>' : ''}
                    <div style="height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
                        ${getProjectIcon(project.category)}
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${project.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    ${project.metrics ? `
                        <div class="project-metrics">
                            ${Object.entries(project.metrics).map(([key, value]) => `
                                <div class="metric-item">
                                    <strong>${value}</strong>
                                    <span>${key}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Code
                        </a>
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;

            return card;
        }

        // Get project icon based on category
        function getProjectIcon(category) {
            const icons = {
                'machine-learning': '🤖',
                'algorithms': '⚡',
                'web-development': '🌐',
                'mobile': '📱',
                'iot': '🏠'
            };
            return icons[category] || '💡';
        }

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter projects
                const filteredProjects = filter === 'all'
                    ? projectsData
                    : projectsData.filter(project => project.category === filter);

                // Animate out current projects
                const currentCards = projectsGrid.querySelectorAll('.project-card');
                currentCards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                });

                // Render filtered projects after animation
                setTimeout(() => {
                    renderProjects(filteredProjects);

                    // Animate in new projects
                    setTimeout(() => {
                        const newCards = projectsGrid.querySelectorAll('.project-card');
                        newCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, index * 100);
                        });
                    }, 50);
                }, 300);
            });
        });

        // Setup intersection observer for projects
        const projectObserverOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        window.projectObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, projectObserverOptions);

        // Initial render
        renderProjects(projectsData);
    }

    // Initialize skills section
    function initSkills() {
        const skillsGrid = document.getElementById('skills-grid');

        if (!skillsGrid) return;

        skillsData.forEach(category => {
            const skillCard = createSkillCard(category);
            skillsGrid.appendChild(skillCard);
        });

        function createSkillCard(category) {
            const card = document.createElement('div');
            card.className = 'skill-category fade-in-up';

            card.innerHTML = `
                <div class="skill-category-header">
                    <div class="skill-category-icon">${category.icon}</div>
                    <h3 class="skill-category-title">${category.category}</h3>
                </div>
                <ul class="skill-list">
                    ${category.skills.map(skill => `
                        <li class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-level">
                                ${Array.from({length: 5}, (_, i) => `
                                    <div class="skill-dot ${i < skill.level ? 'filled' : ''}"></div>
                                `).join('')}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `;

            return card;
        }
    }

    // Initialize experience section
    function initExperience() {
        const timeline = document.getElementById('timeline');

        if (!timeline) return;

        experienceData.forEach((experience, index) => {
            const timelineItem = createTimelineItem(experience, index);
            timeline.appendChild(timelineItem);
        });

        function createTimelineItem(experience, index) {
            const item = document.createElement('div');
            item.className = 'timeline-item fade-in-up';
            item.style.animationDelay = `${index * 0.2}s`;

            const iconMap = {
                education: 'fas fa-graduation-cap',
                work: 'fas fa-briefcase',
                project: 'fas fa-code'
            };

            item.innerHTML = `
                <div class="timeline-marker">
                    <i class="${iconMap[experience.type] || 'fas fa-circle'}"></i>
                </div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${experience.title}</h3>
                    <div class="timeline-company">${experience.company}</div>
                    <div class="timeline-duration">${experience.duration}</div>
                    <p class="timeline-description">${experience.description}</p>
                </div>
            `;

            return item;
        }
    }

    // Add loading states
    function showLoading(container) {
        container.innerHTML = `
            <div class="loading-container" style="display: flex; justify-content: center; align-items: center; min-height: 200px;">
                <div class="loading-spinner"></div>
            </div>
        `;
    }

    // Add error handling
    function showError(container, message) {
        container.innerHTML = `
            <div class="error-container" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: #ef4444;"></i>
                <p>${message}</p>
                <button class="btn btn-secondary" onclick="location.reload()">Try Again</button>
            </div>
        `;
    }

    // Performance optimization: lazy load project images
    function lazyLoadProjectImages() {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const images = document.querySelectorAll('.project-image img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize lazy loading
    lazyLoadProjectImages();

    // Search functionality (optional enhancement)
    function initProjectSearch() {
        const searchInput = document.getElementById('project-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                const title = card.querySelector('.project-title').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();
                const techs = Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent.toLowerCase());

                const matches = title.includes(searchTerm) ||
                               description.includes(searchTerm) ||
                               techs.some(tech => tech.includes(searchTerm));

                card.style.display = matches ? 'block' : 'none';
            });
        });
    }

    // Initialize search if input exists
    initProjectSearch();
});