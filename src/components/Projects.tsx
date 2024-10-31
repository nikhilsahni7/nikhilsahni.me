"use client";

import React from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Smartphone, Code2, ExternalLink } from "lucide-react";

const webProjects = [
  {
    title: "Skill-Bridge",
    description:
      "Developed an online Platform for Clients and freelancers to connect with each other and work on projects and grow their business",
    liveLink: "https://skill-bridg.vercel.app",
    githubLink: "https://github.com/nikhilsahni7/Skill-Bridge",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Websockets",
      "TypeScript",
      "NextAuth",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    title: "Vivah",
    description:
      "A matrimonial website where users can find their life partners with advance search and match their expectations  and supports premium feature  with more advance stuff ",
    liveLink: "https://vivah-com.vercel.app/",
    githubLink: "code is private",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "NextAuth",
      "Tailwind CSS",
      "Node.js",
      "Express Js",
      "S3",
      "Razorpay",
      "Admin js",
    ],
  },
  {
    title: "SurveyX(Backend right now)",
    description:
      "SurveyX is a full-stack survey form application that allows users to create surveys of any kind to grow their business/startups and view the responses and analytics and add teams and members to the survey.",
    liveLink: "https://github.com/nikhilsahni7/SurveyX-Backend",
    githubLink: "https://github.com/nikhilsahni7/SurveyX-Backend",
    tags: [
      "Golang",
      "Gorilla Mux",
      "0Auth",
      "PostgreSQL",
      "Gorm",
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Study-Point",
    description:
      "Full-stack e-learning platform using Next.js and PostgreSQL, serving over college students.",
    liveLink: "https://study-point-nine.vercel.app",
    githubLink: "https://github.com/nikhilsahni7/STUDY-POINT",
    tags: [
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Prisma",
      "TypeScript",
      "NextAuth",
      "Tailwind CSS",
    ],
  },
  {
    title: "Probe-Stemm",
    description:
      "A full stack educational platform for students and teachers and business owners to connect and grow their business and learn new things",
    liveLink: "https://probestemm.vercel.app",
    githubLink: "https://github.com/Vishal182573/probestemm",
    tags: [
      " React.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "Express Js",
      "Cloudinary",
    ],
  },

  {
    title: "Nexus-Chat",
    description:
      "Nexus Chat is a real-time chat application designed to connect, collaborate, and communicate seamlessly. This project leverages modern web technologies to provide a robust and user-friendly experience.",
    liveLink: "https://nexus-chat-jade.vercel.app",
    githubLink: "https://github.com/nikhilsahni7/Nexus-Chat",
    backendLink: "https://github.com/nikhilsahni7/Nexus-Chat-Backend",
    tags: [
      "Next.js",
      "Express Js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Shadcn UI",
      "React Query",
      "Zustand",
      "Prisma",
    ],
  },
  {
    title: "Social-Org-Map Website",
    description:
      "A full-stack platform where social organizations can showcase initiatives, raise funds, and build communities using an interactive Google Maps interface for enhanced user experience and advanced search.",

    liveLink: "https://social-map-app-seven.vercel.app/",
    githubLink: "https://github.com/nikhilsahni7/social-map-app",
    tags: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "TypeScript",
      "Google Maps API",
      "Shadcn UI",
      "Tailwind CSS",
    ],
  },

  {
    title: "FitnessFusion X Bync Gym",
    description:
      "Scalable fitness and gym website with Next.js and PostgreSQL supporting over different users",
    liveLink: "https://fitnessfusion-self.vercel.app",
    githubLink: "https://github.com/nikhilsahni7/Gym-Website",
    tags: [
      "Next.js",
      "PostgreSQL",
      "ShadCN UI",
      "Prisma",
      "NextAuth",
      "TypeScript",
      "Framer Motion",
    ],
  },
  {
    title: "Build it",
    description:
      " A full stack website for construction companies to showcase their projects and services with next js ,mongodb ,shadcn ui and resend to send emails.",
    liveLink: "https://build-it.co.in/",
    githubLink: "https://github.com/nikhilsahni7/Builditwebsite",
    tags: ["Next js", "Mongo DB", "Shadcn UI ", " Framer motion", "TypeScript"],
  },
  {
    title: "Personal-Portfolio",
    description:
      "A personal portfolio website built with Next.js, Framer-motion and ShadCN UI to showcase my skills and projects.",
    liveLink: "https://personal-portfolio-blue-one.vercel.app/",
    githubLink: "https://github.com/nikhilsahni7/personal-portfolio",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Framer Motion",
      "ShadCN UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Blogging-app",
    description:
      "A full-stack blogging app using React js with hono & cloudflare, with authentication and authorization using jwt and postgres as database.",
    liveLink: "https://blog-app-ten-orpin.vercel.app/",
    githubLink: "https://github.com/nikhilsahni7/blog-app",
    tags: [
      "React.js",
      "PostgreSQL",
      "Hono",
      "Prisma",
      "Typescript",
      "Cloudflare",
      "JWT",
    ],
  },
];

const appProjects = [
  {
    title: "food Audit App ",
    description:
      "A cross-platform mobile application for generating 30 page pdf report of food audit with different sections and questions and answers and images and version control",
    playStoreLink: "https://github.com/nikhilsahni7/restaurant-audit-mobile",
    appStoreLink: "https://github.com/nikhilsahni7/restaurant-audit-mobile",
    githubLink: "https://github.com/nikhilsahni7/restaurant-audit-mobile",
    tags: [
      "React Native",
      "Expo",
      "Pdf-lib",
      "Node.js",
      "Express",
      "MongoDB",
      "Push Notifications",
    ],
    type: "Cross Platform",
  },
  {
    title: "BhojanSaathi App",
    description:
      "A cross-platform mobile application for food devlivery with real time tracking and payment gateway and order history and user profile and admin panel",
    playStoreLink: "https://github.com/nikhilsahni7/Bhojan-Saathi-Mobile",
    appStoreLink: "https://github.com/nikhilsahni7/Bhojan-Saathi-Mobile",
    githubLink: "https://github.com/nikhilsahni7/Bhojan-Saathi-Mobile   ",

    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Push Notifications",
      "Razorpay",
      "Firebase",
      "Google Maps API",
      "Websockets",
      "TypeScript",
    ],

    type: "Cross Platform",
  },
  {
    title: "AAP Voting App",
    description:
      "A cross-platform mobile application for getting survey data of candidates and voting for them and getting the results and analytics",
    playStoreLink: "https://github.com/nikhilsahni7/AAP-SURVEY-APP",
    appStoreLink: "https://github.com/nikhilsahni7/AAP-SURVEY-APP",
    githubLink: "https://github.com/nikhilsahni7/AAP-SURVEY-APP",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Javascript",
    ],
    type: "Cross Platform",
  },
];

interface Project {
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
  backendLink?: string;
  tags: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  type?: string;
}

const ProjectCard = ({
  project,
  isApp = false,
}: {
  project: Project;
  isApp?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
        <div className="relative w-full h-48 overflow-hidden">
          {isApp ? (
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-foreground to-primary flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-white" />
            </div>
          ) : (
            <div className="relative h-full">
              <Image
                src={`https://api.microlink.io/?url=${encodeURIComponent(
                  project.liveLink || ""
                )}&screenshot=true&meta=false&embed=screenshot.url`}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="font-caveat text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-primary">
            {project.title}
          </CardTitle>
          <CardDescription className="font-caveat text-lg text-muted-foreground mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="font-caveat text-base bg-card/50 backdrop-blur-sm hover:bg-card/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {!isApp && (
            <Button
              size="sm"
              className="font-caveat text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className="font-caveat text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          {project.backendLink && (
            <Button
              size="sm"
              variant="outline"
              className="font-caveat text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              <a
                href={project.backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                Backend
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
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

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-accent to-background text-foreground perspective-1000"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          style={isMobile ? {} : { rotateX, rotateY }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-caveat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-primary">
              My Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-caveat text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my portfolio of web and mobile applications, showcasing my
            expertise in full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="flex justify-center mb-8 bg-background/50 backdrop-blur-sm">
              <TabsTrigger
                value="web"
                className="font-caveat text-lg flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Globe className="w-4 h-4" />
                Web Projects
              </TabsTrigger>
              <TabsTrigger
                value="app"
                className="font-caveat text-lg flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Smartphone className="w-4 h-4" />
                App Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="app">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} isApp={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default Projects;
