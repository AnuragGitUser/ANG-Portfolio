import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const updateScrollAnimation = () => {
      const currentScrollY = window.scrollY;
      const sections = document.querySelectorAll('.grid-background');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.remove('scroll-down', 'scroll-up');
          
          // Add appropriate class based on scroll direction
          if (currentScrollY > lastScrollY) {
            section.classList.add('scroll-down');
          } else if (currentScrollY < lastScrollY) {
            section.classList.add('scroll-up');
          }
          
          // Remove class after animation completes
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            section.classList.remove('scroll-down', 'scroll-up');
          }, 600);
        }
      });
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollAnimation);
        ticking = true;
      }
    };

    // Mouse tracking for grid spotlight
    const handleMouseMove = (e: MouseEvent) => {
      const sections = document.querySelectorAll('.grid-background');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (section as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (section as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(scrollTimeout);
    };
  }, []);
};
