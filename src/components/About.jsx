import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { cvIcon } from "../assets";
import { services } from "../constants";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, path }) => {
  const downloadPDF = () => {
    window.open(path, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", 0, 0.75)}>
      <Tilt className="xs:w-[500px] w-full Tilt">
        <div className="bg-tertiary p-2 rounded-2xl sm:w-[200px] w-full relative mb-6">
          <div
            onClick={downloadPDF}
            className="bg-primary text-white w-full h-[100px] rounded-lg flex justify-center items-center cursor-pointer mb-3"
          >
            <img
              src={cvIcon}
              alt="PDF icon"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
          <h3 className="text-white font-bold text-[18px] text-center">{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Julien, a science and art enthusiast. Since I was little, I always wondered how the world works, and the laws behind it fascinated me. And what fascinates me even more is our creativity, our ability to invent things. This is why I am now at ENSEEIHT to exploit this creativity inside of me.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
