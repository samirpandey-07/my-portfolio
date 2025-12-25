"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "../nurui/button";
import { ArrowRight, CodeXml, Github, Linkedin, Mail } from "lucide-react";
import { GradientGridHero } from "../nurui/gradient-grid-hero";
import { MorphingTextBadge } from "../magicui/morphing-text";

const handleScroll = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "Open Source Contributor",
    "Performance-Driven Coder",
    "Lifelong Learner",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  return (
    <section id="home" className="relative pb-20 min-h-screen flex items-center justify-center scroll-mt-32">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left content with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <MorphingTextBadge texts={texts} />

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Samir Pandey
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto md:mx-0">
            🚀 I’m a developer who loves blending code, creativity, and problem-solving to craft impactful digital experiences. Always curious and growth-driven, I strive to turn ideas into elegant, user-friendly solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
            <button onClick={() => handleScroll("#projects")} className="w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 flex items-center gap-2 justify-center w-full shadow-lg shadow-purple-500/20 hover:scale-105 transition-all duration-300">
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </button>

            <button onClick={() => handleScroll("#contact")} className="w-full sm:w-auto">
              <Button variant="outline" className="border-zinc-700 text-pink-500 justify-center w-full">
                Contact Me
              </Button>
            </button>
          </div>

          <div className="flex gap-3 pt-4 justify-center md:justify-start flex-wrap">
            {[
              { href: "https://github.com/samirpandey-07", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/samirpandey201/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:pamdeysamir@gmail.com", icon: Mail, label: "Email" },
              { href: "https://leetcode.com/u/grokdPc1bK/", icon: CodeXml, label: "Leetcode" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right content */}
        <div className="flex justify-center relative items-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/samirpic.webp"
              alt="Samir Pandey"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Position particles behind or around - assuming GradientGridHero is background-like or we can place it absolutely if needed, 
               but if it takes up space, we might need to adjust. 
               Let's try placing it absolutely behind the image if it's a grid, or if it was the main content, we might need to check its CSS.
               Looking at previous code, it was just <GradientGridHero /> in a flex center.
               I will place it absolute to ensure it doesn't push the image weirdly, or vice versa.
           */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
            <GradientGridHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
