"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo, getSocialLinks } from "@/config/personal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic - simplified and more reliable
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      // If at the very top (hero section), set to empty to highlight logo
      if (window.scrollY < 100) {
        currentSection = "";
      } else {
        // Check each section to see which one is currently in view
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const element = document.getElementById(section);

          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            // Check if the section is in the viewport
            if (elementTop <= 150 && elementBottom >= 150) {
              currentSection = section;
              break;
            }
          }
        }

        // If no section is in view, find the closest one
        if (!currentSection) {
          let closestSection = "";
          let minDistance = Infinity;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distance = Math.abs(rect.top - 150);
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
              }
            }
          }
          currentSection = closestSection;
        }
      }

      setActiveSection(currentSection);
      console.log("Active section:", currentSection); // Debug log
    };

    // Initial call to set active section
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", color: "teal" },
    { name: "Experience", href: "#experience", color: "blue" },
    { name: "Projects", href: "#projects", color: "indigo" },
    { name: "Contact", href: "#contact", color: "purple" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadCV = () => {
    window.open(personalInfo.cv.path, "_blank");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <a
              href="#"
              className={`flex items-center gap-3 text-xl font-bold font-space-grotesk group ${
                activeSection === "" ? "text-teal-400" : "text-white"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full overflow-hidden border-2 shadow-md group-hover:shadow-lg transition-all duration-300 relative ${
                  activeSection === ""
                    ? "border-teal-400/60 shadow-teal-400/25"
                    : "border-teal-400/30 group-hover:border-teal-400/60 group-hover:shadow-teal-400/25"
                }`}
              >
                <img
                  src="/images/photo.jpg"
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
              </div>
              <span
                className={`transition-all duration-300 ${
                  activeSection === ""
                    ? "text-teal-400"
                    : "text-white group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent"
                }`}
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? item.color === "teal"
                      ? "text-teal-400 bg-slate-800/50"
                      : item.color === "blue"
                      ? "text-blue-400 bg-slate-800/50"
                      : item.color === "indigo"
                      ? "text-indigo-400 bg-slate-800/50"
                      : item.color === "purple"
                      ? "text-purple-400 bg-slate-800/50"
                      : "text-teal-400 bg-slate-800/50"
                    : item.color === "teal"
                    ? "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                    : item.color === "blue"
                    ? "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                    : item.color === "indigo"
                    ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50"
                    : item.color === "purple"
                    ? "text-slate-300 hover:text-purple-400 hover:bg-slate-800/50"
                    : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links & Download CV */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personalInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.button
              onClick={downloadCV}
              className="text-slate-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50 flex items-center gap-1"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span className="text-sm font-medium">CV</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === item.href.slice(1)
                    ? item.color === "teal"
                      ? "text-teal-400 bg-slate-800/50"
                      : item.color === "blue"
                      ? "text-blue-400 bg-slate-800/50"
                      : item.color === "indigo"
                      ? "text-indigo-400 bg-slate-800/50"
                      : item.color === "purple"
                      ? "text-purple-400 bg-slate-800/50"
                      : "text-teal-400 bg-slate-800/50"
                    : item.color === "teal"
                    ? "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                    : item.color === "blue"
                    ? "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                    : item.color === "indigo"
                    ? "text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50"
                    : item.color === "purple"
                    ? "text-slate-300 hover:text-purple-400 hover:bg-slate-800/50"
                    : "text-slate-300 hover:text-teal-400 hover:bg-slate-800/50"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-700/50">
              <motion.a
                href={personalInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.button
                onClick={downloadCV}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50 flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span className="text-sm font-medium">CV</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
