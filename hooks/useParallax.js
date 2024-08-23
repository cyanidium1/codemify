import { useEffect } from 'react';

const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const leftImage = document.getElementById('left-image');
      const rightImage = document.getElementById('right-image');

      if (leftImage) {
        leftImage.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Move down
      }

      if (rightImage) {
        rightImage.style.transform = `translateY(${-scrollPosition * 0.1}px)`; // Move up
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useParallaxEffect;
