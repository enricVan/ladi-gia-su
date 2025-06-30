// Modern JavaScript for Tailwind Gia Su Tri Thuc Website with Lazy Loading

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initCopyFunctionality();
    initAccordion();
    initContactButtons();
    initLazyAnimations();
    initLazyImageLoading();
    initPerformanceOptimizations();
    console.log('🎓 Optimized Website Loaded with Lazy Loading');
});

// Mobile menu
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Copy bank numbers
function initCopyFunctionality() {
    document.querySelectorAll('.copy-number').forEach(number => {
        number.addEventListener('click', async function() {
            // Get text from content or data-account attribute
            const text = this.textContent.trim() || this.getAttribute('data-account');
            try {
                await navigator.clipboard.writeText(text);
                showNotification(`✅ Đã copy: ${text}`);
                
                // Add visual feedback
                const originalBg = this.style.backgroundColor;
                this.style.backgroundColor = '#dcfce7';
                this.style.transform = 'scale(1.05)';
                
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                    this.style.transform = 'scale(1)';
                }, 200);
                
            } catch (err) {
                showNotification('❌ Không thể copy', 'error');
            }
        });
    });
}

// Accordion
function initAccordion() {
    window.toggleAccordion = function(ruleId) {
        const content = document.getElementById(ruleId);
        const icon = document.getElementById('icon' + ruleId.slice(-1));
        
        if (content && icon) {
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    };
}

// Contact buttons
function initContactButtons() {
    document.querySelectorAll('button[class*="gradient"]').forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent;
            const platform = text.includes('FACEBOOK') ? 'Facebook' : 'Telegram';
            showContactModal(platform);
        });
    });
}

// Contact modal
function showContactModal(platform) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 class="text-xl font-bold mb-4">Liên hệ ${platform}</h3>
            <p class="mb-4">Liên hệ với chúng tôi để được hỗ trợ!</p>
            <div class="mb-4">
                <p><strong>Hotline:</strong> 0976.148.149</p>
                <p><strong>Email:</strong> nhansu.giasutrithuc@gmail.com</p>
            </div>
            <div class="flex gap-2">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-300 py-2 px-4 rounded-lg">Đóng</button>
                <a href="tel:0976148149" class="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg">Gọi ngay</a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Lazy Animations with Intersection Observer
function initLazyAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate sections
    document.querySelectorAll('section:not(.hero-section-new)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(section);
    });

    // Animate cards and elements
    document.querySelectorAll('.bank-card-new, .rule-card, .subject-cell').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px) scale(0.95)';
        element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        animationObserver.observe(element);
    });
}

// Lazy Image Loading for non-native support
function initLazyImageLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        return;
    }

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Preload critical resources when user hovers over links
    const preloadOnHover = (href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    };

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.transition = 'none !important';
            el.style.animation = 'none !important';
        });
    }

    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // ~60fps
    };

    // Lazy load animations for floating elements
    const floatingElements = document.querySelectorAll('.floating-particles, .floating-graphics-new, .floating-icons-rules');
    floatingElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-animation');
                } else {
                    entry.target.classList.remove('active-animation');
                }
            });
        });
        observer.observe(element);
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300`;
    notification.textContent = message;
    notification.style.transform = 'translateX(100%)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Scroll to section function for fixed buttons
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        // Scroll with smooth behavior
        target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
        
        // Add highlight effect
        target.style.transition = 'box-shadow 0.6s ease';
        target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
            target.style.boxShadow = '';
        }, 2000);
    }
}

// Hide floating buttons on scroll to bottom
let lastScrollY = window.scrollY;
const floatingButtons = document.querySelector('.fixed-bottom-buttons');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollProgress = (currentScrollY + windowHeight) / documentHeight;
    
    // Hide buttons when near footer (98% of page) for floating design
    if (scrollProgress >= 0.98) {
        if (floatingButtons) {
            floatingButtons.style.transform = 'translateX(-50%) translateY(100%)';
            floatingButtons.style.opacity = '0';
        }
    } else {
        if (floatingButtons) {
            floatingButtons.style.transform = 'translateX(-50%) translateY(0)';
            floatingButtons.style.opacity = '1';
        }
    }
    
    lastScrollY = currentScrollY;
});

// Image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    // Add loading event listeners for lazy images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    lazyImages.forEach(img => {
        // Add loaded class when image loads
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.style.opacity = '1';
        });
        
        // Add error handling
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image failed to load';
        });
        
        // If image is already loaded (cached), trigger load
        if (img.complete) {
            img.classList.add('loaded');
            img.style.opacity = '1';
        }
    });
    
    // Preload critical images on hover
    const criticalLinks = document.querySelectorAll('a[href*="#"], button');
    criticalLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Preload next section images
            const href = this.getAttribute('href') || this.getAttribute('onclick');
            if (href && href.includes('#')) {
                const sectionId = href.match(/#([^')"]+)/)?.[1];
                if (sectionId) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const images = section.querySelectorAll('img[loading="lazy"]');
                        images.forEach(img => {
                            if (!img.complete) {
                                // Trigger lazy loading by changing loading attribute
                                img.loading = 'eager';
                            }
                        });
                    }
                }
            }
        });
    });
    
    // Handle new Luu Y action buttons
    document.querySelectorAll('.luu-y-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('LỚP NÀY CÒN KHÔNG')) {
                scrollToSection('danh-sach-lop');
            } else if (this.textContent.includes('XEM LỚP FULL')) {
                scrollToSection('danh-sach-lop');
            }
        });
    });
});

// Advanced Scroll Animations & Parallax Effects

class ScrollAnimationController {
    constructor() {
        this.init();
        this.setupScrollProgress();
        this.setupParallax();
        this.setupMagneticEffect();
        this.setupCounters();
        this.setupImageReveal();
    }

    init() {
        // Intersection Observer for scroll animations
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Handle staggered animations
                    if (entry.target.hasAttribute('data-stagger-parent')) {
                        this.animateStaggeredChildren(entry.target);
                    }
                    
                    // Handle counter animations
                    if (entry.target.classList.contains('counter')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, this.observerOptions);

        // Observe all scroll animation elements
        this.observeElements();
        
        // Add scroll event listener for parallax
        this.scrollY = 0;
        this.ticking = false;
        
        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.updateParallax();
                    this.updateScrollProgress();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    observeElements() {
        // Observe scroll animation elements
        const scrollElements = document.querySelectorAll(`
            .scroll-animate,
            .scroll-fade-up,
            .scroll-fade-left,
            .scroll-fade-right,
            .scroll-scale,
            .scroll-rotate,
            .section-reveal,
            .text-reveal,
            .image-reveal,
            .pulse-on-scroll,
            .scroll-particles,
            .counter
        `);

        scrollElements.forEach(el => {
            this.observer.observe(el);
        });
    }

    animateStaggeredChildren(parent) {
        const children = parent.querySelectorAll('[class*="scroll-stagger-"]');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-in');
            }, index * 100);
        });
    }

    setupScrollProgress() {
        // Create scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        this.progressBar = progressBar;
    }

    updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (this.scrollY / windowHeight) * 100;
        this.progressBar.style.transform = `scaleX(${Math.min(progress / 100, 1)})`;
    }

    setupParallax() {
        this.parallaxElements = document.querySelectorAll('.parallax-element, .parallax-slow, .parallax-medium, .parallax-fast');
    }

    updateParallax() {
        this.parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate parallax offset
            const parallaxSpeed = this.getParallaxSpeed(element);
            const yPos = -(elementTop - windowHeight) * parallaxSpeed;
            
            // Apply transform
            if (element.classList.contains('parallax-slow')) {
                element.style.setProperty('--parallax-y', `${yPos * 0.5}px`);
            } else if (element.classList.contains('parallax-medium')) {
                element.style.setProperty('--parallax-y', `${yPos * 0.3}px`);
                element.style.setProperty('--parallax-scale', 1 + (yPos * 0.0001));
            } else if (element.classList.contains('parallax-fast')) {
                element.style.setProperty('--parallax-y', `${yPos * 0.8}px`);
                element.style.setProperty('--parallax-rotate', `${yPos * 0.01}deg`);
            }
        });
    }

    getParallaxSpeed(element) {
        if (element.classList.contains('parallax-slow')) return 0.5;
        if (element.classList.contains('parallax-medium')) return 0.3;
        if (element.classList.contains('parallax-fast')) return 0.8;
        return 0.5;
    }

    setupMagneticEffect() {
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = element.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) * 0.3;
                const y = (e.clientY - top - height / 2) * 0.3;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    setupCounters() {
        this.counters = document.querySelectorAll('.counter');
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || 100;
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }

    setupImageReveal() {
        // Enhanced image loading with reveal effect
        const images = document.querySelectorAll('.image-reveal img[loading="lazy"]');
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    }
}

// Enhanced Interactive Features
class InteractiveEnhancements {
    constructor() {
        this.setupHoverEffects();
        this.setupClickEffects();
        this.setupKeyboardNavigation();
        this.setupTouchGestures();
    }

    setupHoverEffects() {
        // Enhanced card hover effects
        const cards = document.querySelectorAll('.enhanced-card, .bank-card-new, .rule-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createHoverRipple(e.target, e);
            });
        });
    }

    createHoverRipple(element, event) {
        const ripple = document.createElement('div');
        ripple.className = 'hover-ripple';
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupClickEffects() {
        // Button click animations
        const buttons = document.querySelectorAll('button, .btn, .cta-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createClickWave(button, e);
            });
        });
    }

    createClickWave(element, event) {
        const wave = document.createElement('div');
        wave.className = 'click-wave';
        
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        wave.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            transform: scale(0);
            animation: clickWaveEffect 0.5s ease-out;
            pointer-events: none;
            z-index: 100;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, 500);
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    setupTouchGestures() {
        // Touch gesture enhancements for mobile
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger animations
                document.body.classList.add('swiping-up');
                setTimeout(() => {
                    document.body.classList.remove('swiping-up');
                }, 300);
            } else {
                // Swipe down
                document.body.classList.add('swiping-down');
                setTimeout(() => {
                    document.body.classList.remove('swiping-down');
                }, 300);
            }
        }
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.setupPerformanceOptimizations();
    }

    setupPerformanceOptimizations() {
        // Reduce animations on low-performance devices
        if (this.isLowPerformanceDevice()) {
            document.body.classList.add('reduced-animations');
        }
        
        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.classList.add('page-hidden');
            } else {
                document.body.classList.remove('page-hidden');
            }
        });
    }

    isLowPerformanceDevice() {
        // Simple performance detection
        const memory = navigator.deviceMemory;
        const cores = navigator.hardwareConcurrency;
        
        return (memory && memory < 4) || (cores && cores < 4);
    }
}

// Add CSS animations for new effects
const additionalStyles = `
<style>
@keyframes rippleEffect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes clickWaveEffect {
    to {
        transform: scale(20);
        opacity: 0;
    }
}

.keyboard-navigation *:focus {
    outline: 3px solid #3b82f6 !important;
    outline-offset: 2px !important;
}

.reduced-animations * {
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
}

.page-hidden * {
    animation-play-state: paused !important;
}

.swiping-up .scroll-animate {
    transition-duration: 0.3s !important;
}

.swiping-down .scroll-animate {
    transition-duration: 0.3s !important;
}
</style>
`;

// Initialize all enhancement systems
document.addEventListener('DOMContentLoaded', () => {
    // Add additional styles
    document.head.insertAdjacentHTML('beforeend', additionalStyles);
    
    // Initialize systems
    new ScrollAnimationController();
    new InteractiveEnhancements();
    new PerformanceMonitor();
    
    console.log('🎨 Advanced scroll animations and interactions loaded!');
});