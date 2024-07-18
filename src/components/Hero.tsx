import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import React, { useMemo, useState, useEffect } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/nikhilsahni7" },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nikhil-sahni-655518222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/Nikhilllsahni?t=GwfnmO3UaBbk5W5Fk2FjsQ&s=09",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/iam.nikhil7?igsh=cTFyZDh0NXk0eGNs",
    },
  ];

  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      key: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const SkeletonLoader = () => (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <div className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse"></div>
      <div className="flex justify-center space-x-4 mb-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <div className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.key}
            className="absolute bg-gray-300 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <motion.div style={{ y }} className="text-center relative z-10">
          <motion.h1
            className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nikhil Sahni
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl text-gray-700 mb-6">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Software Engineer",
                  1000,
                  "Web Enthusiast",
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
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="text-3xl text-gray-600 hover:text-black transition-colors" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              asChild
              variant="default"
              className="bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              <a
                href="https://personal-portfolio-blue-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default React.memo(Hero);
