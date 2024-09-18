import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/nikhilsahni7", color: "#333" },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nikhil-sahni-655518222",
    color: "#0077B5",
  },
  { icon: FaTwitter, url: "https://x.com/Nikhilllsahni", color: "#1DA1F2" },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/iam.nikhil7",
    color: "#E1306C",
  },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  const controls = useAnimation();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    if (!containerRef.current) return;
    const { left, top, width, height } = (
      containerRef.current as HTMLElement
    ).getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-accent to-background text-foreground perspective-1000"
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div style={{ rotateX, rotateY }} className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl mb-4"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-primary">
              Nikhil Sahni
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-semibold sm:text-3xl mb-8"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Software Engineer",
                1000,
                "Freelancer",
                1000,
                "App Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex items-center justify-center">
                <link.icon className="text-3xl" style={{ color: link.color }} />
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            variant="default"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        ></motion.div>
      </div>

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

export default Hero;
