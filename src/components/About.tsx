"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2, Database } from "lucide-react";
import TechBadge from "./TechBadge";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "JavaScript",
    "Node.js",
    "React",
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "Neon Database",
    "SAP Fiori",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Passionate about creating innovative solutions and delivering
            exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* About Text */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4 text-slate-300 leading-relaxed"
            >
              <p>
                I'm a{" "}
                <span className="text-blue-300 font-semibold">
                  Full Stack Developer
                </span>{" "}
                with over a decade of expertise crafting modern web applications
                and enterprise-grade solutions. My professional journey spans
                diverse technology landscapes and industry sectors, from
                innovative startup environments to large-scale enterprise
                systems.
              </p>

              <p>
                I specialize in{" "}
                <span className="text-teal-300 font-semibold">
                  JavaScript, Node.js, React, and Next.js
                </span>
                , complemented by deep experience in{" "}
                <span className="text-indigo-300 font-semibold">
                  SAP Fiori development
                </span>
                . I'm driven by the challenge of architecting scalable,
                maintainable, and intuitive applications that address complex
                business requirements.
              </p>

              <p>
                Beyond development, I'm passionate about exploring emerging
                technologies, contributing to open-source initiatives, and
                mentoring fellow developers. I'm committed to continuous growth
                and staying at the forefront of technological innovation in our
                rapidly evolving industry.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4 mt-12"
            >
              <h3 className="text-xl font-semibold text-white">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <TechBadge
                    key={skill}
                    technology={skill}
                    index={index}
                    isInView={isInView}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-2xl group relative">
                  <img
                    src="/images/photo.jpg"
                    alt="Mauricio Barragán"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center"
              >
                <Code2 className="text-primary" size={24} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-8 w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center"
              >
                <Database className="text-secondary-foreground" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
