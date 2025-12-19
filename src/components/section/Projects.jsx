"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const frontendCanvasRef = useRef(null);
  const fullstackCanvasRef = useRef(null);
  const upcomingCanvasRef = useRef(null);

  // ✅ ✅ ✅ UPDATED PROJECT LIST

  const fullstackProjects = [
    {
      image: "/campus-flow.png",
      tags: "Full Stack",
      title: "Campus Flow — College Resource Platform",
      description:
        "A comprehensive platform for college students to share resources, join lobbies, and collaborate on projects.",
      github: "https://github.com/samirpandey-07/Campus-Flow",
      live: "https://campus-flow.vercel.app",
    },
    {
      image: "/grocery-management.png",
      tags: "Full Stack",
      title: "Grocery Management System",
      description:
        "Inventory + billing system for grocery stores. Supports live stock tracking, bill generation, and low-stock alerts.",
      github: "https://github.com/samirpandey-07/grocery-management",
      live: "",
    },
  ];

  const frontendProjects = [
    {
      image: "/dronex.png",
      tags: "Frontend",
      title: "DroneX — Drone Club Website (React + TS)",
      description:
        "Official drone club website with animations, project galleries, team showcase, and responsive UI.",
      github: "https://github.com/samirpandey-07/DroneX",
      live: "https://dronexsce.in",
    },
    {
      image: "/shivalik-redesign.png",
      tags: "Frontend",
      title: "Shivalik Website Redesign",
      description:
        "A modern redesigned version of Shivalik College website with improved UX and clean UI.",
      github: "",
      live: "",
    },
    {
      image: "/smart-waste.png",
      tags: "Frontend",
      title: "Smart Waste Monitoring Dashboard",
      description:
        "IoT-powered dashboard UI displaying real-time waste-bin fill level data.",
      github: "",
      live: "",
    },
    {
      image: "/virtual-garden.png",
      tags: "Frontend",
      title: "Virtual Garden — Gamified Plant Tracking App",
      description:
        "A React-based virtual garden that grows trees based on user productivity. Inspired by gamification psychology.",
      github: "",
      live: "",
    },
  ];

  const upcomingProjects = [
    {
      image: "/hybrid-drone.png",
      tags: "Hardware + Software",
      title: "Hybrid Aerial-Aquatic Drone",
      description:
        "A drone that can fly, float on water, and operate underwater using 3D printed hull + NAZA M V2 controller.",
      github: "",
      live: "",
    },
  ];

  // 🎨 Wave Canvas Animation
  const initWaveCanvas = (canvasRef) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let time = 0;

    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    const updateWaveData = () => {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const nx = (x / canvas.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = ((py + 1) * canvas.height) / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        const intensity = Math.min(1, freq * 0.3);
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${79 + intensity * 100},${70 + intensity * 130},229,0.6)`;
        ctx.shadowColor = `rgba(79,70,229,0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      time += 0.02;
      updateWaveData();
      draw();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  };

  useEffect(() => {
    const cleanup1 = initWaveCanvas(frontendCanvasRef);
    const cleanup2 = initWaveCanvas(fullstackCanvasRef);
    const cleanup3 = initWaveCanvas(upcomingCanvasRef);
    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
    };
  }, []);

  return (
    <div className="relative w-full h-full mt-20 mb-20 z-0 scroll-mt-32" id="projects">
      <div className="text-4xl font-extrabold text-white tracking-wide text-center mb-16 relative z-10">
        <span className="text-indigo-300">My</span> Projects
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto mt-3 rounded-full" />
      </div>

      {[
        { ref: fullstackCanvasRef, title: "Full Stack Projects", color: "text-pink-300", data: fullstackProjects },
        { ref: frontendCanvasRef, title: "Frontend Projects", color: "text-indigo-300", data: frontendProjects },
        { ref: upcomingCanvasRef, title: "Upcoming Projects 🚀", color: "text-purple-300", data: upcomingProjects },
      ].map((section, idx) => (
        <section key={idx} className="relative w-full min-h-[60vh] mb-24 px-4 sm:px-8 lg:px-16">
          <canvas ref={section.ref} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
          <div className="relative z-10">
            <h2 className={`text-2xl sm:text-3xl font-semibold ${section.color} mb-10`}>
              {section.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {section.data.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="w-full sm:w-[45%] lg:w-[40%] flex justify-center flex-grow"
                  animate={{ y: ["0%", "-3%", "0%"], rotate: ["0deg", "1deg", "0deg"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
