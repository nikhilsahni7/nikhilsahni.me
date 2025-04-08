/* eslint-disable react/no-unescaped-entities */
"use client";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, MessageSquareShare } from "lucide-react";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "nikhil.sahni321@gmail.com",
      href: "mailto:nikhil.sahni321@gmail.com",
      color: "#7ddaf2",
    },
    {
      icon: FaPhone,
      text: "+91 8800244926",
      href: "tel:+918800244926",
      color: "#842bea",
    },
    {
      icon: FaGithub,
      text: "GitHub",
      href: "https://github.com/nikhilsahni7",
      color: "#e5f8fc",
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-sahni-655518222",
      color: "#7ddaf2",
    },
    {
      icon: FaTwitter,
      text: "Twitter",
      href: "https://x.com/Nikhilllsahni",
      color: "#7ddaf2",
    },
    {
      icon: FaInstagram,
      text: "Instagram",
      href: "https://www.instagram.com/iam.nikhil7",
      color: "#842bea",
    },
  ];

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-background text-foreground perspective-1000"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-noise-pattern opacity-20" />
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
          <div className="relative mb-8 inline-block">
            <h2 className="title-large mb-0">
              <span className="text-gradient">Get in Touch</span>
            </h2>
            <motion.div
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <Mail className="h-12 w-12 md:h-16 md:w-16 text-accent drop-shadow-[0_0_8px_rgba(132,43,234,0.5)] animate-float" />
            </motion.div>
          </div>
          <motion.p
            className="font-montserrat text-lg sm:text-xl md:text-2xl text-primary/90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's connect and build something amazing together! Feel free to
            reach out through any of these platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-3xl px-2 md:px-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Card className="p-4 md:p-5 glass-effect card-hover border-primary/10 hover:border-primary/40 relative overflow-hidden shadow-glow-sm hover:shadow-dual-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="relative">
                    <item.icon
                      className="text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                    <div
                      className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ color: item.color, transform: "scale(1.5)" }}
                    ></div>
                  </div>
                  <span className="font-montserrat text-base md:text-lg text-foreground/70 group-hover:text-primary transition-all duration-300">
                    {item.text}
                  </span>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center flex items-center justify-center text-foreground/50 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <MessageSquareShare className="w-5 h-5 mr-2 text-accent/80" />
          <p className="text-sm">All messages are welcomed and appreciated</p>
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

export default Contact;
