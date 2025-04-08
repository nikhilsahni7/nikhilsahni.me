"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-card-grain opacity-20" />

      {/* Content */}
      <div className="flex flex-col relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
