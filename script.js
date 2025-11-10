// Function to animate photo with mouse movement
document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.querySelector('.profile-container');
    const heroSection = document.getElementById('home');
    
    if (profileContainer && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // Calculate rotation based on mouse position
            const tiltX = (y - 0.5) * 10; // -5 to 5 degrees
            const tiltY = (0.5 - x) * 10; // -5 to 5 degrees
            
            // Apply the transform with perspective
            profileContainer.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
        
        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            profileContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            setTimeout(() => {
                profileContainer.style.transform = '';
            }, 500);
        });
    }
    
    // Add scroll animation for skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        
                        // Get the width from style attribute and apply it
                        const progress = item.querySelector('.skill-progress');
                        if (progress) {
                            const width = progress.style.width;
                            progress.style.width = '0';
                            setTimeout(() => {
                                progress.style.width = width;
                            }, 100);
                        }
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        observer.observe(skillsContainer);
    }
});

// Enhanced Cursor Effects
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (cursor && cursorDot) {
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });
        
        // Interactivity for hoverable elements
        const hoverables = document.querySelectorAll('a, button, .project-card, .tech-item');
        hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = 'var(--primary)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            
            hoverable.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = 'var(--primary)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Special effect near profile photo
        const profilePhoto = document.querySelector('.profile-container');
        if (profilePhoto) {
            profilePhoto.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.borderWidth = '3px';
                cursor.style.borderColor = 'var(--accent)';
            });
            
            profilePhoto.addEventListener('mouseleave', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.borderWidth = '2px';
                cursor.style.borderColor = 'var(--primary)';
            });
        }
    }
});



    // Add certifications link to footer navigation
    const footerNav = document.querySelector('.footer-nav');
    if (footerNav) {
        // Find the position where we want to insert the certifications link (after Education)
        const footerEducationLink = Array.from(footerNav.querySelectorAll('a')).find(a => a.getAttribute('href') === '#education');
        if (footerEducationLink) {
            const footerCertLink = document.createElement('a');
            footerCertLink.setAttribute('href', '#certifications');
            footerCertLink.textContent = 'Certifications';
            // Insert after education link
            footerEducationLink.parentNode.insertBefore(footerCertLink, footerEducationLink.nextSibling);
        }
    }

    // Custom cursor effects for certification links
    const certificationLinks = document.querySelectorAll('.certification-link');
    certificationLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.classList.add('link-hover');
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.classList.remove('link-hover');
            }
        });
    });

    // Add animation for certification items
    const certificationItems = document.querySelectorAll('.certification-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const certObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    certificationItems.forEach(item => {
        certObserver.observe(item);
    });
// Function to handle smooth scrolling  
function smoothScrollTo(element) {
    const target = document.querySelector(element);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}