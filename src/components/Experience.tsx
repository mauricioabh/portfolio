"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
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
    title: "SAP Fiori Developer",
    location: "Mexico City, Mexico",
    startDate: "2021",
    endDate: "2024",
    description:
      "Developed and maintained SAP Fiori applications for enterprise clients, focusing on user experience and performance optimization. Led technical discussions and mentored junior developers in SAP best practices.",
    technologies: ["SAP Fiori", "UI5", "JavaScript", "OData", "SAP Gateway"],
    current: false,
  },
  {
    id: "onibex",
    company: "Onibex",
    title: "Fiori Web Developer",
    location: "Monterrey, Mexico",
    startDate: "2017",
    endDate: "2021",
    description:
      "Specialized in SAP Fiori development, creating responsive and intuitive web applications. Collaborated with cross-functional teams to deliver high-quality solutions and improve user experience.",
    technologies: ["SAP Fiori", "UI5", "JavaScript", "CSS3", "HTML5"],
    current: false,
  },
  {
    id: "dainda",
    company: "Dainda",
    title: "Programmer Analyst",
    location: "Monterrey, Mexico",
    startDate: "2015",
    endDate: "2017",
    description:
      "Analyzed business requirements and developed custom software solutions. Worked closely with stakeholders to ensure project success and user satisfaction through effective communication and technical expertise.",
    technologies: ["JavaScript", "HTML5", "CSS3", "SQL", "PHP"],
    current: false,
  },
  {
    id: "bitam-web",
    company: "BITAM",
    title: "Web Mobile Software Developer",
    location: "Tampico, Mexico",
    startDate: "2011",
    endDate: "2015",
    description:
      "Developed cross-platform mobile applications and web solutions using modern technologies. Focused on responsive design and user experience optimization to deliver seamless digital experiences.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"],
    current: false,
  },
  {
    id: "bitam-qa",
    company: "BITAM",
    title: "QA Tester",
    location: "Tampico, Mexico",
    startDate: "2009",
    endDate: "2011",
    description:
      "Started career in quality assurance testing, learning software testing methodologies and best practices. Gained foundational knowledge in testing frameworks and quality control processes.",
    technologies: ["Testing", "JavaScript", "Selenium", "Jest", "Cypress"],
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent"></div>

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
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:border-blue-400/50 ${(() => {
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
                    <div className="flex justify-between items-start mb-4">
                      {/* Left side - Title and Company */}
                      <div className="flex-1">
                        <motion.h3
                          whileHover={{ scale: 1.05 }}
                          className={`text-2xl font-bold mb-2 transition-colors ${(() => {
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
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-lg font-semibold ${(() => {
                              const companyColors = [
                                "text-blue-200",
                                "text-emerald-200",
                                "text-purple-200",
                                "text-rose-200",
                                "text-cyan-200",
                                "text-violet-200",
                              ];
                              return companyColors[
                                index % companyColors.length
                              ];
                            })()}`}
                          >
                            {experience.company}
                          </span>
                          {experience.current && (
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <Badge className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                Current
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Right side - Date and Location */}
                      <div className="flex flex-col items-end gap-2 text-right">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar size={16} className="text-indigo-400" />
                          <span className="text-sm font-medium">
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin size={16} className="text-indigo-400" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed text-sm">
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
