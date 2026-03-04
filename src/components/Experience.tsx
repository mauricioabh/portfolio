"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import TechBadge from "./TechBadge";

interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: "accenture",
    company: "Accenture",
    title: "Senior Software Engineer / Web Developer (SAP Ecosystem)",
    location: "Mexico",
    startDate: "July 2021",
    endDate: "December 2024",
    description:
      "Development and maintenance of enterprise web applications in cloud environments. Support for production deployments and post-release stabilization.",
    technologies: ["SAP Ecosystem", "JavaScript", "UI5", "Remote"],
    current: false,
  },
  {
    id: "onibex",
    company: "Onibex",
    title: "Fullstack Web Developer",
    location: "Mexico",
    startDate: "March 2017",
    endDate: "July 2021",
    description:
      "Contributed to the development and performance improvements of a B2B platform built with Node.js and DocumentDB. Technical leadership in integration of OData services (ABAP) and REST APIs with many web apps developed for different SAP modules.",
    technologies: ["Node.js", "DocumentDB", "OData", "SAP Gateway", "ABAP", "SAP", "UI5", "Remote"],
    current: false,
  },
  {
    id: "dainda",
    company: "Dainda",
    title: "Programmer Analyst (Consultant at Banregio)",
    location: "Mexico",
    startDate: "October 2015",
    endDate: "November 2016",
    description:
      "Maintenance and support of the electronic banking platform developed with ColdFusion, including bug fixing and enhancements to front-end functionality using JavaScript, HTML and CSS, worked with Sybase databases. Contributed to the implementation of the payroll portability feature within the electronic banking platform.",
    technologies: ["ColdFusion", "JavaScript", "HTML", "CSS", "Sybase", "jQuery"],
    current: false,
  },
  {
    id: "bitam",
    company: "BITAM",
    title: "Web / Mobile Software Developer",
    location: "Mexico",
    startDate: "February 2011",
    endDate: "January 2015",
    description:
      "Developed hybrid web and mobile applications using PHP, MySQL, JavaScript, jQuery, Bootstrap and PhoneGap/Cordova. Contributed to BITAM's first mobile product, enabling BI dashboards designed in Artus Designer to run on iOS. Built backend and frontend features for the KPI Forms and eBavel products, including media capture and geolocation.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "PhoneGap/Cordova"],
    current: false,
  },
  {
    id: "bitam-qa",
    company: "BITAM",
    title: "QA Tester",
    location: "Mexico",
    startDate: "2009",
    endDate: "2011",
    description:
      "Started career in quality assurance testing, learning software testing methodologies and best practices. Gained foundational knowledge in testing frameworks and quality control processes.",
    technologies: ["Testing", "PHP"],
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-indigo-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto"
            >
              A journey through professional growth and technical expertise in
              modern software development.
            </motion.p>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full bg-linear-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-5 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:border-blue-400/50 ${(() => {
                      const cardBackgrounds = [
                        "bg-blue-500/10",
                        "bg-emerald-500/10",
                        "bg-purple-500/10",
                        "bg-rose-500/10",
                        "bg-cyan-500/10",
                        "bg-violet-500/10",
                      ];
                      return cardBackgrounds[index % cardBackgrounds.length];
                    })()}`}
                  >
                    {/* Row 1: Role title on top */}
                    <motion.h3
                      whileHover={{ scale: 1.02 }}
                      className={`text-lg font-bold mb-3 transition-colors leading-tight ${(() => {
                        const titleColors = [
                          "text-blue-400 group-hover:text-blue-300",
                          "text-emerald-400 group-hover:text-emerald-300",
                          "text-purple-400 group-hover:text-purple-300",
                          "text-rose-400 group-hover:text-rose-300",
                          "text-cyan-400 group-hover:text-cyan-300",
                          "text-violet-400 group-hover:text-violet-300",
                        ];
                        return titleColors[index % titleColors.length];
                      })()}`}
                    >
                      {experience.title}
                    </motion.h3>

                    {/* Row 2: Company left, dates right */}
                    <div className="flex justify-between items-center gap-2 mb-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`text-base font-semibold truncate ${(() => {
                            const companyColors = [
                              "text-blue-200",
                              "text-emerald-200",
                              "text-purple-200",
                              "text-rose-200",
                              "text-cyan-200",
                              "text-violet-200",
                            ];
                            return companyColors[index % companyColors.length];
                          })()}`}
                        >
                          {experience.company}
                        </span>
                        {experience.current && (
                          <Badge className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shrink-0">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                        <Calendar size={14} className="text-indigo-400" />
                        <span className="text-xs font-medium">
                          {experience.startDate} – {experience.endDate}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {experience.description}
                    </p>

                    {/* Technologies as Badges */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <TechBadge
                            key={tech}
                            technology={tech}
                            index={index}
                            isInView={isInView}
                            delay={0.8 + index * 0.1 + techIndex * 0.05}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
