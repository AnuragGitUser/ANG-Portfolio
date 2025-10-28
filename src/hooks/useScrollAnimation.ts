import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    // Mouse tracking for grid spotlight only (no scroll animations)
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};
