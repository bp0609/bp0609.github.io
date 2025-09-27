// Main JavaScript for Portfolio Website
document.addEventListener('DOMContentLoaded', function() {

    // Initialize all components
    initNavigation();
    initThemeToggle();
    initScrollAnimations();
    initHeroTypewriter();
    initSmoothScrolling();
    initContactForm();
    initParallaxEffect();

    // Navigation functionality
    function initNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent scrolling when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Active navigation based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });

            // Navbar background opacity based on scroll
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.background = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').includes('dark')
                    ? 'rgba(15, 23, 42, 0.95)'
                    : 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').includes('dark')
                    ? 'rgba(15, 23, 42, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)';
            }
        });
    }

    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const currentTheme = localStorage.getItem('theme');

        // Set initial theme
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcon(currentTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }

        // Theme toggle event
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            // Add a subtle animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        function updateThemeIcon(theme) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                updateThemeIcon(newTheme);
            }
        });
    }

    // Scroll animations using Intersection Observer
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Special handling for staggered animations
                    if (entry.target.classList.contains('stagger-parent')) {
                        const children = entry.target.querySelectorAll('.stagger-child');
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in');
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Skill dots animation
        const skillItems = document.querySelectorAll('.skill-item');
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const dots = entry.target.querySelectorAll('.skill-dot');
                    dots.forEach((dot, index) => {
                        setTimeout(() => {
                            if (dot.classList.contains('filled')) {
                                dot.style.animation = 'scaleIn 0.3s ease-out forwards';
                            }
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        skillItems.forEach(item => {
            skillObserver.observe(item);
        });
    }

    // Hero typewriter effect
    function initHeroTypewriter() {
        const roleText = document.getElementById('role-text');
        const roles = [
            'AI/ML Engineer',
            'Systems Architect',
            'Full-Stack Developer',
            'Computer Science Student'
        ];

        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentRole = roles[currentRoleIndex];

            if (!isDeleting) {
                roleText.textContent = currentRole.substring(0, currentCharIndex + 1);
                currentCharIndex++;

                if (currentCharIndex === currentRole.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000); // Pause before deleting
                    return;
                }
            } else {
                roleText.textContent = currentRole.substring(0, currentCharIndex - 1);
                currentCharIndex--;

                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                }
            }

            const typeSpeed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, typeSpeed);
        }

        // Start the effect
        setTimeout(typeEffect, 1000);
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Smooth scroll for scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }

    // Contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Get form data
                const formData = new FormData(this);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                };

                // Basic validation
                if (!data.name || !data.email || !data.subject || !data.message) {
                    showMessage('Please fill in all fields.', 'error');
                    return;
                }

                if (!isValidEmail(data.email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }

                // Show loading state
                this.classList.add('loading');

                // Simulate form submission (replace with actual form handler)
                setTimeout(() => {
                    this.classList.remove('loading');
                    showMessage('Thank you for your message! I\\'ll get back to you soon.', 'success');
                    this.reset();
                }, 2000);

                // In a real implementation, you would send the data to a server
                // Example with EmailJS or FormSpree:
                /*
                emailjs.send('service_id', 'template_id', data)
                    .then(() => {
                        this.classList.remove('loading');
                        showMessage('Thank you for your message! I\\'ll get back to you soon.', 'success');
                        this.reset();
                    })
                    .catch(() => {
                        this.classList.remove('loading');
                        showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                    });
                */
            });
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function showMessage(message, type) {
            // Remove existing messages
            const existingMessage = document.querySelector('.form-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = `form-message message-${type} message-fade-in`;
            messageElement.textContent = message;

            // Style the message
            messageElement.style.cssText = `
                padding: 1rem;
                margin-top: 1rem;
                border-radius: 0.5rem;
                font-weight: 500;
                text-align: center;
                ${type === 'success' ?
                    'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;' :
                    'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;'
                }
            `;

            // Insert message
            contactForm.appendChild(messageElement);

            // Remove message after 5 seconds
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.classList.add('message-fade-out');
                    setTimeout(() => {
                        messageElement.remove();
                    }, 500);
                }
            }, 5000);
        }
    }

    // Parallax effect for hero background elements
    function initParallaxEffect() {
        const floatingElements = document.querySelectorAll('.floating-element');

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;

            floatingElements.forEach((element, index) => {
                const speed = parallaxSpeed * (index + 1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });

        // Mouse move parallax effect
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 10;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;

                element.style.transform += ` translate3d(${x}px, ${y}px, 0)`;
            });
        });
    }

    // Utility function to debounce events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization: debounce scroll events
    const debouncedScrollHandler = debounce(function() {
        // Any expensive scroll operations can go here
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScrollHandler);

    // Lazy loading for images (if any are added later)
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('fade-in');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Initialize lazy loading
    initLazyLoading();

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');

            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Add loading states and error handling
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Hide any loading spinners
        const loadingElements = document.querySelectorAll('.loading-spinner');
        loadingElements.forEach(element => {
            element.style.display = 'none';
        });
    });

    // Service Worker registration for PWA (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }

    // Analytics tracking (placeholder)
    function trackEvent(eventName, properties = {}) {
        // Replace with your analytics service (Google Analytics, Mixpanel, etc.)
        console.log('Event tracked:', eventName, properties);
    }

    // Track user interactions
    document.querySelectorAll('.btn, .nav-link, .social-link').forEach(element => {
        element.addEventListener('click', function() {
            trackEvent('click', {
                element: this.className,
                text: this.textContent.trim(),
                href: this.href || null
            });
        });
    });
});

// Export functions for use in other modules
window.portfolioApp = {
    // Any functions you want to expose globally
};