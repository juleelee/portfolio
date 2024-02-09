// ScrollAnimation.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ onScroll }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollY(newY);
      onScroll(newY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  return (
    <div style={{ height: '150vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: scrollY }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100px',
          background: 'blue',
          position: 'fixed',
          top: 0,
        }}
      >
        Scroll Animation
      </motion.div>
      <div style={{ marginTop: '120vh' }}>Scroll down to see the animation</div>
    </div>
  );
};

export default ScrollAnimation;
