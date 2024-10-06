import { motion } from "framer-motion";
import Image from "next/image";
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

const projects = [
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
    title: "Vivah (IN PROGRESS)",
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
    title: "Ed-Tech-Platform (IN PROGRESS)",
    description:
      "A full stack educational platform for students and teachers and business owners to connect and grow their business and learn new things",
    liveLink: "https://probe-stemm.vercel.app/",
    githubLink: "code is private",
    tags: [
      " React.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "Express Js",
      "React Router",
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
    title: "Nexus-Chat",
    description:
      "Nexus Chat is a real-time chat application designed to connect, collaborate, and communicate seamlessly. This project leverages modern web technologies to provide a robust and user-friendly experience.",
    liveLink: "https://github.com/nikhilsahni7/Nexus-Chat",
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
    title: "Build it",
    description:
      " A full stack website for construction companies to showcase their projects and services with next js ,mongodb ,shadcn ui and resend to send emails.",
    liveLink: "https://build-it.co.in/",
    githublink: "https://github.com/nikhilsahni7/Builditwebsite",
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-black"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={`https://api.microlink.io/?url=${encodeURIComponent(
                      project.liveLink
                    )}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-black">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gray-200 text-black text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                  {project.backendLink && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      <a
                        href={project.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Backend
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
