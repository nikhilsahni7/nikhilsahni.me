"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { Code2, ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { appProjects, webProjects } from "@/lib/projects";

// DefaultProjectImage component for fallback
const DefaultProjectImage = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-t-xl">
      <div className="text-center p-4">
        <Globe className="w-12 h-12 mx-auto mb-2 text-primary" />
        <h3 className="text-lg font-semibold text-foreground truncate max-w-xs">
          {title}
        </h3>
      </div>
      <div className="spotlight opacity-50"></div>
    </div>
  );
};

// Project image component with error handling
const ProjectImage = ({ title }: { title: string }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return <DefaultProjectImage title={title} />;
  }

  return (
    <div className="relative h-full">
      {!loaded && <DefaultProjectImage title={title} />}
      <Image
        src={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}.png`}
        alt={title}
        width={500}
        height={300}
        className={`rounded-t-xl object-cover w-full h-full transition-all duration-500 hover:scale-110 filter saturate-[1.1] ${loaded ? "opacity-100" : "opacity-0"}`}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
    </div>
  );
};

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
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-md hover:shadow-glow-sm transition-all duration-300">
        <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
          {isApp ? (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-primary/60 to-secondary/80 flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-white drop-shadow-lg" />
              <div className="absolute bottom-0 right-0 p-3 bg-background/50 backdrop-blur-md rounded-tl-lg">
                <span className="text-xs font-semibold text-white">
                  {project.type || "Mobile App"}
                </span>
              </div>
              <div className="spotlight opacity-75"></div>
            </div>
          ) : (
            <ProjectImage title={project.title} />
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-outfit text-2xl font-bold text-primary tracking-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="font-inter text-base text-foreground mt-2 line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="py-2 flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 6 && (
              <Badge variant="outline" className="text-xs text-foreground">
                +{project.tags.length - 6} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          {!isApp &&
            project.liveLink &&
            project.liveLink !== "code is private" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contents"
              >
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-background flex items-center gap-2 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </Button>
              </a>
            )}
          {project.githubLink && project.githubLink !== "code is private" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2 shadow-md"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          )}
          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2 shadow-md"
              >
                <Code2 className="w-4 h-4" />
                Backend
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding container-custom"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={titleVariants}
            className="text-center relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-primary drop-shadow-sm">
              My Projects
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground">
              Explore a collection of my latest projects, from web applications
              to mobile development
            </p>
            <div className="absolute -z-10 w-full h-full max-w-xs mx-auto blur-[80px] bg-primary/10 rounded-full top-0 inset-0"></div>
          </motion.div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="flex justify-center mb-8 bg-background/70 backdrop-blur-md border border-border/50 rounded-lg p-1 max-w-md mx-auto">
              <TabsTrigger
                value="web"
                className="font-inter text-base flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                Web Projects
              </TabsTrigger>
              <TabsTrigger
                value="app"
                className="font-inter text-base flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-200"
              >
                <Smartphone className="w-4 h-4" />
                App Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webProjects.map((project, index) => (
                  <ProjectCard
                    key={`web-${project.title}-${index}`}
                    project={project}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="app" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appProjects.map((project, index) => (
                  <ProjectCard
                    key={`app-${project.title}-${index}`}
                    project={project}
                    isApp={true}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
