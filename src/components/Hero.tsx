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
  {
    icon: FaGithub,
    url: "https://github.com/nikhilsahni7",
    color: "#333",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nikhil-sahni-655518222",
    color: "#0077B5",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/Nikhilllsahni",
    color: "#1DA1F2",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/iam.nikhil7",
    color: "#E1306C",
    label: "Instagram",
  },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start({ opacity: 1, y: 0 });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [controls]);

  const handleMouseMove = (event: any) => {
    if (isMobile) return;
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
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-background via-accent to-background text-foreground perspective-1000"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 flex flex-col items-center justify-center min-h-[100dvh] relative z-10">
        <motion.div
          style={isMobile ? {} : { rotateX, rotateY }}
          className="text-center mb-8 md:mb-12 max-w-4xl"
        >
          {/* Name Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="font-caveat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-primary">
                Nikhil Sahni
              </span>
            </h1>
            <p className="font-caveat text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Crafting Digital Experiences
            </p>
          </motion.div>

          {/* Animated Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <h2 className="font-caveat text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
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
            </h2>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 w-full max-w-3xl px-2 md:px-0"
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
              className="group"
            >
              <Card className="p-3 md:p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <div className="flex flex-col items-center space-y-1 md:space-y-2">
                  <link.icon
                    className="text-2xl md:text-3xl transition-colors duration-300"
                    style={{ color: link.color }}
                  />
                  <span className="font-caveat text-sm md:text-lg text-black">
                    {link.label}
                  </span>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-2 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            variant="default"
            className="font-caveat text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-caveat text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden"
        >
          <div className="flex flex-col items-center">
            <span className="font-caveat text-sm text-muted-foreground animate-bounce">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 text-muted-foreground animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
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

export default Hero;
