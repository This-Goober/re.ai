import React, { useState, useEffect } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
  background?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  offset = 0,
  background = '#fafafa'
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      const element = document.querySelector('.parallax-section') as HTMLElement;
      if (element) {
        setElementTop(element.getBoundingClientRect().top + window.scrollY);
        setElementHeight(element.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxOffset = (scrollY - elementTop + offset) * speed;

  return (
    <div 
      className={`parallax-section ${className}`}
      style={{ background }}
    >
      <div 
        className="parallax-content"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection; 