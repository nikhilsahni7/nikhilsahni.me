"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "nikhil.sahni321@gmail.com",
      href: "mailto:nikhil.sahni321@gmail.com",
    },
    { icon: FaPhone, text: "+91 8800244926", href: "tel:+918800244926" },
    { icon: FaGithub, text: "GitHub", href: "https://github.com/nikhilsahni7" },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      href: " https://www.linkedin.com/in/nikhil-sahni-655518222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: FaTwitter,
      text: "Twitter",
      href: "https://x.com/Nikhilllsahni?t=GwfnmO3UaBbk5W5Fk2FjsQ&s=09",
    },
    {
      icon: FaInstagram,
      text: "Instagram",
      href: "https://www.instagram.com/iam.nikhil7?igsh=cTFyZDh0NXk0eGNs",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-black"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-white shadow-lg overflow-hidden rounded-lg">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full justify-start text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 sm:space-x-4"
                      >
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="text-sm sm:text-base md:text-lg font-medium truncate">
                          {item.text}
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
