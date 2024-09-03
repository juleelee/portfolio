import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AirplaneCanvas } from './canvas';
import { MyModelCanvas } from './canvas';
import SplineViewer from './canvas/SplineViewer';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flexrow items-start gat-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{' '}
            <span className="text-[#915eff]">
              <Typewriter
                options={{
                  strings: ['Julien', 'a coder', 'an artist','a science enthusiast','an art enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          
        </div>
      </div>
      <MyModelCanvas />
      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
