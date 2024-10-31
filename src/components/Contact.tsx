"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "nikhil.sahni321@gmail.com",
      href: "mailto:nikhil.sahni321@gmail.com",
      color: "#EA4335",
    },
    {
      icon: FaPhone,
      text: "+91 8800244926",
      href: "tel:+918800244926",
      color: "#34A853",
    },
    {
      icon: FaGithub,
      text: "GitHub",
      href: "https://github.com/nikhilsahni7",
      color: "#333",
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-sahni-655518222",
      color: "#0077B5",
    },
    {
      icon: FaTwitter,
      text: "Twitter",
      href: "https://x.com/Nikhilllsahni",
      color: "#1DA1F2",
    },
    {
      icon: FaInstagram,
      text: "Instagram",
      href: "https://www.instagram.com/iam.nikhil7",
      color: "#E1306C",
    },
  ];

  return (
    <section
      id="contact"
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
              Get in Touch 📬
            </span>
          </h2>
          <p className="font-caveat text-lg sm:text-xl md:text-2xl text-muted-foreground">
            Let&apos;s connect! Feel free to reach out through any of these
            platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-3xl px-2 md:px-0"
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
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Card className="p-3 md:p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <item.icon
                    className="text-2xl md:text-3xl transition-colors duration-300"
                    style={{ color: item.color }}
                  />
                  <span className="font-caveat text-sm md:text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {item.text}
                  </span>
                </div>
              </Card>
            </motion.a>
          ))}
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

export default Contact;
