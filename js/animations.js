// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    initAdvancedAnimations();
    initParticleBackground();
    initInteractiveElements();
    initPerformanceOptimizations();

    // Advanced scroll-triggered animations
    function initAdvancedAnimations() {
        // Create a more sophisticated intersection observer
        const animationObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animation || 'fadeInUp';
                    const delay = element.dataset.delay || 0;

                    setTimeout(() => {
                        element.classList.add('animated', animationType);

                        // Special handling for different animation types
                        switch(animationType) {
                            case 'countUp':
                                animateCounter(element);
                                break;
                            case 'progressBar':
                                animateProgressBar(element);
                                break;
                            case 'typewriter':
                                animateTypewriter(element);
                                break;
                            default:
                                element.classList.add('visible');
                        }
                    }, delay);

                    // Unobserve after animation to prevent re-triggering
                    animationObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('[data-animation], .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in');
        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });

        // Counter animation
        function animateCounter(element) {
            const target = parseInt(element.dataset.target) || parseInt(element.textContent);
            const duration = parseInt(element.dataset.duration) || 2000;
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function (ease-out cubic)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(start + (target - start) * easeOut);

                element.textContent = currentValue.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            }

            requestAnimationFrame(updateCounter);
        }

        // Progress bar animation
        function animateProgressBar(element) {
            const targetWidth = element.dataset.width || '100%';
            const duration = parseInt(element.dataset.duration) || 1500;

            element.style.width = '0%';
            element.style.transition = `width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

            setTimeout(() => {
                element.style.width = targetWidth;
            }, 100);
        }

        // Typewriter animation
        function animateTypewriter(element) {
            const text = element.dataset.text || element.textContent;
            const speed = parseInt(element.dataset.speed) || 100;

            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary-blue)';

            let i = 0;
            function typeChar() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeChar, speed);
                } else {
                    // Blinking cursor effect
                    setInterval(() => {
                        element.style.borderRight = element.style.borderRight === 'none'
                            ? '2px solid var(--primary-blue)'
                            : 'none';
                    }, 500);
                }
            }

            typeChar();
        }
    }

    // Particle background system (lightweight)
    function initParticleBackground() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.className = 'particle-canvas';
        canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.6;
            z-index: 1;
        `;

        hero.appendChild(canvas);

        // Particle system
        const particles = [];
        const particleCount = 50;
        let animationId;

        // Resize canvas
        function resizeCanvas() {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        // Particle class
        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = `hsl(${220 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reset particle when it goes off screen
                if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Initialize particles
        function initParticles() {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        // Animation loop
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationId = requestAnimationFrame(animateParticles);
        }

        // Mouse interaction
        let mouse = { x: 0, y: 0 };

        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            // Add particles near mouse
            if (Math.random() < 0.1) {
                const particle = new Particle();
                particle.x = mouse.x + (Math.random() - 0.5) * 50;
                particle.y = mouse.y + (Math.random() - 0.5) * 50;
                particle.size = Math.random() * 2 + 2;
                particle.opacity = 0.8;
                particles.push(particle);

                // Remove excess particles
                if (particles.length > particleCount + 20) {
                    particles.splice(0, 10);
                }
            }
        });

        // Initialize and start
        resizeCanvas();
        initParticles();
        animateParticles();

        // Handle resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        // Pause animation when not visible (performance optimization)
        const heroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) animateParticles();
                } else {
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                        animationId = null;
                    }
                }
            });
        });

        heroObserver.observe(hero);
    }

    // Interactive element enhancements
    function initInteractiveElements() {
        // Magnetic effect for buttons
        const magneticElements = document.querySelectorAll('.btn, .social-link, .project-card');

        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const moveX = x * 0.1;
                const moveY = y * 0.1;

                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
            });

            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });

        // Ripple effect for buttons
        const rippleElements = document.querySelectorAll('.btn, .filter-btn');

        rippleElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                    pointer-events: none;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Parallax effect for cards
        const parallaxCards = document.querySelectorAll('.project-card, .skill-category');

        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            parallaxCards.forEach((card, index) => {
                const speed = (index % 3 + 1) * 2;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;

                card.style.transform += ` translate3d(${x}px, ${y}px, 0)`;
            });
        });

        // Glow effect for interactive elements
        const glowElements = document.querySelectorAll('.social-link, .project-link');

        glowElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
            });

            element.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }

    // Performance optimizations
    function initPerformanceOptimizations() {
        // Throttle scroll events
        let ticking = false;

        function updateScrollAnimations() {
            // Update parallax effects, navbar opacity, etc.
            const scrollY = window.pageYOffset;

            // Update floating elements with better performance
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = 0.5 * (index + 1);
                const yPos = -(scrollY * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        });

        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Disable complex animations
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
                .floating-element {
                    animation: none !important;
                }
                .particle-canvas {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Pause heavy animations when page is not visible
        document.addEventListener('visibilitychange', function() {
            const isVisible = !document.hidden;
            const canvas = document.querySelector('.particle-canvas');

            if (canvas) {
                canvas.style.animationPlayState = isVisible ? 'running' : 'paused';
            }

            // Pause/resume other heavy animations
            const animatedElements = document.querySelectorAll('.floating-element');
            animatedElements.forEach(element => {
                element.style.animationPlayState = isVisible ? 'running' : 'paused';
            });
        });

        // Optimize for high refresh rate displays
        const isHighRefreshRate = window.screen && window.screen.refreshRate > 60;
        if (isHighRefreshRate) {
            // Adjust animation frame rates for smoother experience
            document.documentElement.style.setProperty('--animation-duration', '0.2s');
        }
    }

    // Text scramble effect (for futuristic feel)
    function scrambleText(element, finalText, duration = 1000) {
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const originalText = finalText;
        let currentText = '';
        let iteration = 0;

        const interval = setInterval(() => {
            currentText = originalText
                .split('')
                .map((char, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            element.textContent = currentText;

            if (iteration >= originalText.length) {
                clearInterval(interval);
                element.textContent = originalText;
            }

            iteration += 1 / 3;
        }, 30);
    }

    // Add scramble effect to certain elements on load
    setTimeout(() => {
        const titleElement = document.querySelector('.hero-name');
        if (titleElement) {
            const originalText = titleElement.textContent;
            scrambleText(titleElement, originalText, 2000);
        }
    }, 1000);

    // Loading screen with progress
    function initLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="loading-logo">BP</div>
                <div class="loading-progress">
                    <div class="loading-bar"></div>
                </div>
                <div class="loading-text">Loading...</div>
            </div>
        `;

        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out;
        `;

        document.body.appendChild(loadingScreen);

        // Simulate loading progress
        const progressBar = loadingScreen.querySelector('.loading-bar');
        let progress = 0;

        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;

            progressBar.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(progressInterval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 500);
                }, 500);
            }
        }, 100);

        // Force complete loading after 3 seconds
        setTimeout(() => {
            if (progress < 100) {
                progress = 100;
                progressBar.style.width = '100%';
            }
        }, 3000);
    }

    // Initialize loading screen only if it's the first visit
    if (!sessionStorage.getItem('visited')) {
        initLoadingScreen();
        sessionStorage.setItem('visited', 'true');
    }
});

// Add ripple animation keyframes
const rippleKeyframes = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleKeyframes;
document.head.appendChild(style);