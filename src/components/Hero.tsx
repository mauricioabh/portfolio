"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, getSocialLinks } from "@/config/personal";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    { text: "Full Stack Developer", color: "from-blue-400 to-indigo-400" },
    { text: "Frontend Developer", color: "from-cyan-400 to-teal-400" },
    { text: "Backend Developer", color: "from-purple-400 to-pink-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    window.open(personalInfo.cv.path, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
              {personalInfo.firstName} {personalInfo.lastName}
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-300 font-poppins">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent font-semibold`}
                >
                  {roles[currentRole].text}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-inter"
          >
            Passionate about building high-quality web solutions with{" "}
            <span className="text-indigo-300 font-semibold">
              10+ years of experience
            </span>{" "}
            delivering reliable, scalable, and user-friendly software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={downloadCV}
              variant="outline"
              size="lg"
              className="group border-2 border-teal-400/50 text-teal-300 hover:bg-teal-400/10 backdrop-blur-sm px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-teal-400 hover:-translate-y-1"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40"
              whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors p-3 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40"
              whileHover={{ scale: 1.1, y: -2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-teal-400 transition-colors p-3 rounded-full bg-teal-500/10 hover:bg-teal-500/20 backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40"
              whileHover={{ scale: 1.1, y: -2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center items-start pt-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
