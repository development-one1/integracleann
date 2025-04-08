import { useEffect, useRef } from 'react';

const animationClasses = {
  float: 'animate-float',
  pulse: 'animate-pulse',
  rotate: 'animate-rotate',
  bounce: 'animate-bounce',
  swing: 'animate-swing',  // Corregido de 'wing' a 'swing'
  spin: 'animate-spin'
};

const AnimatedIcon = ({ icon: Icon, animation = 'float', size = 24, className = '' }) => {
  const iconRef = useRef(null);  // Corregido 'useref' a 'useRef'

  useEffect(() => {  // Corregido 'userFfect' a 'useEffect'
    const currentIcon = iconRef.current;
    if (!currentIcon) return;

    // Corregido 'foreach' a 'forEach' y 'animalsas' a 'animClass'
    Object.values(animationClasses).forEach(animClass => {
      currentIcon.classList.remove(animClass);
    });

    if (animation && animationClasses[animation]) {
      currentIcon.classList.add(animationClasses[animation]);
    }

    return () => {
      if (currentIcon) {
        Object.values(animationClasses).forEach(animClass => {
          currentIcon.classList.remove(animClass);
        });
      }
    };
  }, [animation]);

  return <Icon ref={iconRef} size={size} className={`inline-block ${className}`} />;
};

export default AnimatedIcon;