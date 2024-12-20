import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-100 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            className="text-center font-caveat text-2xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-600 font-caveat text-2xl font-bold">
              &copy; {currentYear} Nikhil Sahni. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="ghost"
              asChild
              className="text-black hover:bg-gray-200  font-caveat text-2xl"
            >
              <a
                href="https://drive.google.com/file/d/1QrRrbtfsCGJdW1pBER17U4EG5bKtfwhO/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-black hover:bg-gray-200  font-caveat text-2xl"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-black hover:bg-gray-200  font-caveat text-2xl"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
