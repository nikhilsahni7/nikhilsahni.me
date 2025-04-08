/* eslint-disable react/no-unescaped-entities */
"use client";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Zap } from "lucide-react";
import React from "react";
import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiAmazon,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFlutter,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-foreground" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-[#336791]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    { name: "React Native", icon: <SiExpo className="text-foreground" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" /> },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-background text-foreground perspective-1000"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-noise-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[100dvh] relative z-10">
        <motion.div
          style={isMobile ? {} : { rotateX, rotateY }}
          className="text-center mb-12 md:mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="title-large mb-8">
            <span className="text-primary text-5xl sm:text-6xl font-bold tracking-tighter">
              About Me
            </span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="ml-4 inline-block transform hover:rotate-12 transition-transform duration-300"
            >
              👨‍💻
            </motion.span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
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
          viewport={{ once: true }}
          className="mb-12 md:mb-16 w-full max-w-5xl"
        >
          <div className="flex items-center justify-center mb-10">
            <h3 className="title-medium text-gradient mr-2">Tech Stack</h3>
            <Zap className="h-8 w-8 text-accent animate-pulse-glow" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="p-3 md:p-4 glass-effect card-hover border-primary/10 hover:border-primary/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col items-center space-y-2 md:space-y-3 relative z-10">
                    <div className="text-2xl md:text-3xl group-hover:animate-pulse-glow">
                      {skill.icon}
                    </div>
                    <span className="font-montserrat text-sm md:text-base text-foreground/80 group-hover:text-primary transition-colors duration-300">
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
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-5">
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
    </section>
  );
};

export default About;
