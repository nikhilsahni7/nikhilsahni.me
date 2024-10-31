/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiGo,
  SiExpo,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-[#000000]" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-[#336791]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    { name: "React Native", icon: <SiExpo className="text-[#000020]" /> },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-background via-accent to-background text-foreground"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 flex flex-col items-center justify-center min-h-[100dvh] relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-caveat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-primary">
              About Me 👨‍💻
            </span>
          </h2>
          <p className="font-caveat text-lg sm:text-xl md:text-2xl text-muted-foreground">
            Hey, I'm Nikhil Sahni – a passionate Full Stack Developer crafting
            scalable, user-centric applications. Currently pursuing my B.Tech in
            Computer Science, I'm on a journey to explore and master new
            technologies while writing clean, efficient code that makes a real
            difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12 w-full max-w-4xl"
        >
          <h3 className="font-caveat text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
            Tech Stack ⚡
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="p-3 md:p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <div className="flex flex-col items-center space-y-1 md:space-y-2">
                    <div className="text-2xl md:text-3xl">{skill.icon}</div>
                    <span className="font-caveat text-sm md:text-lg text-black">
                      {skill.name}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.6"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
