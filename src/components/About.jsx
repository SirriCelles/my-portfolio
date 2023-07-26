/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a results-driven Full Stack Developer with a strong background in MERN and MEAN stack development
        and a passion for building innovative and scalable web and mobile applications. Proficient in a wide range
        of JavaScript/TypScript tools and frameworks, including Next.js, React.js, Angular, and Node.js.
        Experienced team leader with a track record of successfully managing projects and delivering high-quality solutions
        in Agile environments. I am committed to continuous learning and staying up-to-date with emerging technologies,
        with a focus on driving forward-thinking development practices. Let&apos;s work together and bring your ideas to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap xs:justify-center  gap-10">
        {
          services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))
        }
      </div>
    </>
  )
}

// About = SectionWrapper(About, "about");
export default SectionWrapper(About, "about");