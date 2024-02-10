import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { instagram } from "../assets";
import { SectionWrapper } from "../hoc";
import { drawings } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const HobbyCard = ({ index, name, image }) => {
  return (
    <motion.div key={`hobby-${index}`} className="your-hobby-card-styles">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className='relative w-full h-[450px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between items-start m-3 card-img_hover'>
            {/* Add the Instagram button */}
            <div
              onClick={() => window.open("https://www.instagram.com/julienhuangggg/", "_blank")}
              className='bg-white text-gray-800 rounded-full px-1 py-1 cursor-pointer'
            >
              <img
                src={instagram}
                alt='instagram'
                className='w-4 h-4 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          {/* Add your drawing details if needed */}
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Hobby = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Hobby</p>
        <h2 className={`${styles.sectionHeadText}`}>Drawings.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore my drawings! Click on the Instagram icon to view more of my artwork and follow me for updates.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {drawings.map((drawing, index) => (
          <HobbyCard key={`hobby-${index}`} index={index} {...drawing} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobby, "hobby");
