import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 backdrop-blur-md bg-background/70 shadow-md border-b border-border/40"
          : "py-4 bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative overflow-hidden rounded-full bg-background/50 backdrop-blur-sm shadow-md">
                <Image
                  src="https://pbs.twimg.com/profile_images/1833828320426790912/qqpY5PrQ_400x400.jpg"
                  alt="Nikhil Sahni"
                  width={40}
                  height={40}
                  className="rounded-full transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 group-hover:border-primary/80 group-hover:shadow-glow-sm transition-all duration-300"></div>
              </div>
              <span className="font-outfit text-xl md:text-2xl font-semibold text-foreground">
                Nikhil Sahni
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center mr-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <Link href={item.href} className="relative group">
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "w-full"
                          : "group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </Button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-background hover:text-background flex items-center gap-1.5 shadow-button active:text-background/90"
              >
                <a
                  href="https://drive.google.com/file/d/1QrRrbtfsCGJdW1pBER17U4EG5bKtfwhO/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  Resume <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/80 hover:text-primary p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-md"
          >
            <div className="container-custom py-3 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className={`justify-start w-full text-left rounded-lg ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-2"
              >
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-background hover:text-background font-medium text-base shadow-button group active:text-background/90"
                >
                  <a
                    href="https://drive.google.com/file/d/1QrRrbtfsCGJdW1pBER17U4EG5bKtfwhO/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-medium"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
