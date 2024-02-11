import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, pdf_link }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-between items-start m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
            </div>
            {/* Add the PDF button */}
            <div
              onClick={() => window.open(pdf_link, "_blank")}
              className='bg-white text-gray-800 rounded-full px-3 py-1 cursor-pointer'
            >
              PDF
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {showMore ? description : `${description.substring(0, 100)}...`}
          </p>
          <button className='btn' onClick={toggleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const toggleShowMoreProjects = () => {
    setVisibleProjects(visibleProjects === projects.length ? 3 : projects.length);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects are accompanied by detailed reports, and the source code is available on GitHub. Each project showcases my hands-on experience, offering a comprehensive view of my problem-solving abilities and proficiency with different technologies. Access the project reports and source code on GitHub for further insights.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>

      {projects.length > 3 && (
        <div className='mt-4'>
          <button className='btn' onClick={toggleShowMoreProjects}>
            {visibleProjects === projects.length ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
