"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Package } from "lucide-react";
import { Project } from "@/data/projects";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      {(() => {
        const cardBackgrounds = [
          "bg-blue-500/8",
          "bg-emerald-500/8",
          "bg-purple-500/8",
          "bg-rose-500/8",
          "bg-cyan-500/8",
          "bg-violet-500/8",
        ];

        const cardBackgroundClass =
          cardBackgrounds[index % cardBackgrounds.length];

        return (
          <Card
            className={`h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden ${cardBackgroundClass}`}
          >
            <CardContent className="p-0">
              {/* Project Image */}
              <div className="relative h-48 bg-linear-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/30 transition-colors"
                    >
                      <ExternalLink
                        size={20}
                        className="text-primary-foreground"
                      />
                    </motion.a>
                  )}
                  {project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/30 transition-colors"
                    >
                      <Github size={20} className="text-primary-foreground" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  {(() => {
                    const titleColors = [
                      "text-blue-400 group-hover:text-blue-300",
                      "text-emerald-400 group-hover:text-emerald-300",
                      "text-purple-400 group-hover:text-purple-300",
                      "text-rose-400 group-hover:text-rose-300",
                      "text-cyan-400 group-hover:text-cyan-300",
                      "text-violet-400 group-hover:text-violet-300",
                    ];

                    const titleColorClass =
                      titleColors[index % titleColors.length];

                    const subtitleColors = [
                      "text-blue-200",
                      "text-emerald-200",
                      "text-purple-200",
                      "text-rose-200",
                      "text-cyan-200",
                      "text-violet-200",
                    ];

                    const subtitleColorClass =
                      subtitleColors[index % subtitleColors.length];

                    return (
                      <div>
                        <h3
                          className={`text-xl font-semibold transition-colors ${titleColorClass}`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm font-medium ${subtitleColorClass} mt-1`}
                        >
                          {project.description}
                        </p>
                      </div>
                    );
                  })()}
                  {project.featured && (
                    <Badge variant="default" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <TechBadge
                      key={tech}
                      technology={tech}
                      index={index}
                      isInView={isInView}
                      delay={0.2 + index * 0.1 + techIndex * 0.05}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <Button asChild size="sm" className="flex-1 group/btn">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {project.liveUrl.includes("npmjs.com") ? (
                          <Package size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                        {project.liveUrl.includes("npmjs.com")
                          ? "NPM"
                          : "Live Demo"}
                        <ExternalLink
                          size={14}
                          className="group-hover/btn:translate-x-0.5 transition-transform"
                        />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>

                {/* GitHub Sponsor Button - Only for npm projects */}
                {project.id === "env-ironmint" && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href="https://github.com/sponsors/mauricioabh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-90 transition-opacity"
                    >
                      <iframe
                        src="https://github.com/sponsors/mauricioabh/button"
                        title="Sponsor mauricioabh"
                        height="32"
                        width="114"
                        className="border-0 rounded-md pointer-events-none"
                        style={{ border: 0, borderRadius: "6px" }}
                      />
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })()}
    </motion.div>
  );
};

export default ProjectCard;
