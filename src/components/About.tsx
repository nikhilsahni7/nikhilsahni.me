/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGit } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiGo,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Go", icon: <SiGo /> },
    { name: "Git", icon: <FaGit /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-black"
        >
          About Me 👨‍💻
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg max-w-3xl mx-auto text-center text-gray-700 mb-10 sm:mb-12"
        >
          Hey, Everyone my name is Nikhil Sahni and I'm a passionate Full Stack
          Developer with a knack for creating scalable, user-centric
          applications. Currently pursuing my B.Tech in Computer Science and
          trying to learn and explore new things, My expertise spans modern web
          technologies, and I'm committed to writing clean, efficient code that
          makes a difference and stay curious to learn new things.
        </motion.p>
        <motion.div
          className="mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <h3 className="text-xl sm:text-2xl text-black font-semibold text-center mb-6">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 justify-items-center">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white p-3 sm:p-4 rounded-full shadow-md mb-2">
                  {React.cloneElement(skill.icon, {
                    className: "text-3xl sm:text-4xl text-gray-700",
                  })}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#projects"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
          >
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
