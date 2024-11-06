import "./App.css";
import { motion } from "framer-motion";

import { FaJs, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptLine, RiFlutterFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlinePython, AiFillInstagram } from "react-icons/ai";
import { SiFlask, SiTailwindcss, SiTypescript, SiMysql } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Skill from "./components/skill";
import Timeline from "./Timeline";
import HorizontalScrollCarousel from "./works";

function App() {
  return (
    <>
      {/* TOP Banner */}
      <div className="flex bg-[#01071f] items-center justify-center h-screen">
        <motion.div
          className="text-center text-white space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-base tracking-[.9em] md:text-xl md:tracking-[1.6em] font-inter uppercase">
            Software Engineer
          </h2>
          <h1 className="text-7xl md:text-9xl font-poppins font-extrabold uppercase tracking-wider">
            Portfolio
          </h1>
          <div className="flex justify-between text-base md:text-lg font-inter mt-2">
            <span className="font-extrabold uppercase tracking-wider">
              Yerqanat
            </span>
            <span className="font-medium tracking-[0.5em]">2024</span>
          </div>
        </motion.div>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col  md:flex-row items-center max-lg:p-8 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 h-screen justify-center">
        {/* Profile picture  */}
        <div className="w-64 max-md:hidden lg:w-72 rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src="profile.jpg"
            alt="Yerhanat"
            className="w-full object-cover"
          />
        </div>

        {/* right part */}
        <div className="flex flex-col text-start ">
          <div className="flex flex-row space-x-3 text-primary">
            {/* Introduction and EDUCATION  */}
            <div className="flex flex-col grow space-y-4 font-inter">
              {/* intro  */}
              <div className="flex items-center space-x-4">
                <h1 className="text-5xl font-poppins font-extrabold">Hello!</h1>
                <img src="" alt="" />
              </div>
              <p className="text-primary">
                My name is{" "}
                <span className="px-2 py-1 bg-gradient-to-r from-[#FF9D6C] to-[#BB4E75] font-bold font-poppins text-white">
                  Yerqanat Yrymbai
                </span>
                . I'm a software engineer focused on building impactful digital
                solutions. I specialize in creating user-friendly applications
                and efficient backend systems. I’m excited to work online and
                contribute to projects that make a difference.
              </p>
              <p>Hope you enjoy my protfolio!</p>

              {/* Education section  */}
              <div className="space-y-3">
                <h2 className="text-2xl font-poppins font-extrabold mt-4">
                  EDUCATION
                </h2>
                <p className="font-bold">
                  2021-2024: Universiti Tenaga Nasional
                </p>
                <p className="">
                  Bachelor of Computer Science (Software Engineering) (Hons.)
                </p>
              </div>
            </div>

            {/* Skills Section and Experience  */}
            <div className="flex flex-col flex-none w-52 md:w-52   lg:w-64">
              {/* SKILLS */}
              <div className="space-y-4">
                <h2 className="text-2xl font-poppins font-extrabold">SKILLS</h2>
                <div className="flex flex-wrap items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <RiJavascriptLine color="white" size="2em" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <TbBrandTypescript color="white" size="2em" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <AiOutlinePython color="white" size="2em" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <FaReact color="white" size="2em" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <RiFlutterFill color="white" size="2em" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <SiFlask color="white" size="2em" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateZ: 10 }}
                    className="bg-primary rounded-md w-12 h-12 mr-2 mb-2 p-2 shadow-slate-600 shadow-lg"
                  >
                    <SiMysql color="white" size="2em" />
                  </motion.div>
                </div>
              </div>
              {/* Experience Section  */}
              <div className="mt-6">
                <h2 className="text-2xl font-poppins font-extrabold">
                  EXPERIENCE
                </h2>
                <p className="font-bold mt-2">2024/06 - 2024/09</p>
                <p>Internship at Erke online Ltd.</p>
                <p className="font-bold mt-2">2024/09 - Present</p>
                <p>Freelance Software Developer</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8 md:space-x-10 mt-12 text-gray-700">
            {/* whatsapp */}
            <a
              href="https://wa.me/+77089647233"
              className="flex items-center text-primary hover:text-primary"
              target="_black"
            >
              <IoLogoWhatsapp />
              <span className="ml-1 text-sm font-normal">+77089647233</span>
            </a>

            {/* email */}
            <a
              href="mailto:erhanat0304@gmail.com"
              className="flex items-center text-primary hover:text-primary"
              target="_black"
            >
              <MdEmail />
              <span className="ml-1 text-sm font-normal">
                erhanat0304@gmail.com
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/erhanat_yrymbai"
              className="flex items-center text-primary hover:text-primary"
              target="_black"
            >
              <AiFillInstagram />
              <span className="ml-1 text-sm font-normal">erhanat_yrymbai</span>
            </a>
          </div>
        </div>
      </div>

      {/* SKILL DETAILS */}
      <div className="text-primary pb-24">
        <h2 className="font-poppins font-extrabold text-5xl">MY SKILLS</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-24 md:px-40 px-10">
          <Skill
            icon={<SiTailwindcss size="2em" />}
            name="Taildwind"
            level={8}
          />
          <Skill
            icon={<FaJs size="2em" name="JavaScript" />}
            name="JavaScript"
            level={7}
          />
          <Skill
            icon={<SiTypescript size="2em" />}
            name="TypeScript"
            level={5}
          />
          <Skill icon={<FaPython size="2em" />} name="Python" level={5} />
          <Skill icon={<FaReact size="2em" />} name="React" level={6} />
          <Skill icon={<SiFlask size="2em" />} name="Flask" level={6} />
          <Skill icon={<RiFlutterFill size="2em" />} name="Flutter" level={7} />
          <Skill icon={<SiMysql size="2em" />} name="MySQL" level={7} />
        </div>
      </div>

      {/* Experience DETAILS */}
      <div className="flex flex-col justify-center items-center bg-[#01071f] text-white text-base pb-24 sm:text-lg pt-24">
        <h2 className="font-poppins font-extrabold text-5xl mb-12">
          MY EXPERIENCE
        </h2>
        <Timeline defaultColor="bg-primary" />
      </div>

      {/* Latest works */}
      <div className="flex flex-col justify-center items-center bg-[#01071f] text-base pt-24 sm:text-lg">
        <h2 className="font-poppins font-extrabold text-5xl mb-24">
          LATEST WORKS
        </h2>
        <HorizontalScrollCarousel />
      </div>

      {/* LIFE */}
      {/* <div className="flex flex-col bg-[#01071f]">
        <h2 className="font-poppins font-extrabold text-5xl mb-24">LIFE</h2>
      </div> */}
    </>
  );
}

export default App;
