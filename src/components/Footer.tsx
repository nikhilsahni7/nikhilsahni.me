import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Anchor, ExternalLink, Github, Heart, Mail } from "lucide-react";
import { useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1QrRrbtfsCGJdW1pBER17U4EG5bKtfwhO/view",
      icon: ExternalLink,
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/nikhilsahni7",
      icon: Github,
      external: true,
    },
    {
      label: "Email",
      href: "mailto:nikhil.sahni321@gmail.com",
      icon: Mail,
      external: false,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative mt-16 border-t border-border/30 bg-background/80 backdrop-blur-md z-10"
    >
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <Anchor className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Nikhil Sahni
              </h3>
            </div>
            <p className="text-sm text-foreground/70 max-w-md">
              Building innovative web and mobile solutions with modern
              technologies. Let's create something great together.
            </p>
            <div className="flex items-center text-sm text-foreground/70 mt-2">
              <span>&copy; {currentYear}</span>
              <span className="flex items-center mx-2">
                <span className="mx-1">Made with</span>
                <Heart className="h-3 w-3 text-accent mx-1 animate-pulse" />
                <span className="mx-1">in India</span>
              </span>
            </div>
          </motion.div>

          {/* Right Side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:text-primary transition-colors h-9 px-2.5 flex gap-1.5 items-center"
                  asChild
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <div className="text-sm text-foreground/60 mt-4">
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="hover:text-primary transition-colors"
                  whileHover={{ x: 2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-primary transition-colors"
                  whileHover={{ x: 2 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] -z-10" />
    </footer>
  );
};

export default Footer;
