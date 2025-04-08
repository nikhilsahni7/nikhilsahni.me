import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/nikhilsahni7",
    color: "#f7eaf2",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nikhil-sahni-655518222",
    color: "#4cba96",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/Nikhilllsahni",
    color: "#da9ec2",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/iam.nikhil7",
    color: "#da9ec2",
    label: "Instagram",
  },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  // Parallax effect - using lighter values to prevent issues
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const springY = useSpring(y, { damping: 15, stiffness: 100 });

  // 3D card effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [3, -3]);
  const rotateY = useTransform(mouseX, [0, 1], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen" />;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] pt-20 pb-10 flex items-center justify-center overflow-hidden z-10"
    >
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springY, opacity }}
      >
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="container-custom relative z-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Left content - Main text */}
          <motion.div
            ref={textRef}
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="mb-6 lg:mb-4 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-tighter mb-4 text-shadow-lg">
                <span className="text-foreground drop-shadow-md">
                  Nikhil Sahni
                </span>
              </h1>
              <p className="text-xl text-foreground font-medium max-w-2xl mx-auto lg:mx-0">
                Crafting exceptional digital experiences with innovative
                solutions
              </p>
            </motion.div>

            <motion.div
              className="mb-8 min-h-16"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow-md">
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

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#contact" className="contents">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-medium text-base shadow-button group active:text-background/90"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>

              <a href="#projects" className="contents">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary border-2 text-primary hover:bg-primary/10 font-medium text-base shadow-button active:bg-primary/5 active:text-primary"
                >
                  View Projects
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Social links */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div
              className="grid grid-cols-2 gap-4 mx-auto max-w-md"
              style={{ transform: "perspective(1000px)" }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Card className="p-6 bg-background/80 backdrop-blur-md border-2 border-primary/30 rounded-xl shadow-glow-sm hover:shadow-glow-md hover:border-primary/50 transition-all duration-300 flex flex-col items-center gap-4 h-full">
                    <link.icon
                      className="text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: link.color }}
                    />
                    <span className="font-medium text-base text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground font-medium">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/60 flex items-start justify-center p-1 shadow-glow-sm">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
