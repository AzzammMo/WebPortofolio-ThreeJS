import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>SEDIKIT CERITA</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
>
  Halo Semuanya👋 , tiga bidang dibawah merupakan hal yang saat ini sering saya kerjakan
  karena bagi saya seorang yang bergelud di bidang teknologi harus menemui minat serta bidangnya masing-masing
  yang dimana memang output dari kita di bidang ini adalah menciptakan sebuah inovasi atau hal-hal baru yang dapat 
  bermanfaat bagi orang sekitar.
  
  ingin connect ke LinkedIn klik
  <a 
    href="www.linkedin.com/in/azzamizz" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary font-bold" // Ganti dengan warna yang diinginkan
  >
    <span className="text-green-500"> DISINI</span>
  </a>
</motion.p>


      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
