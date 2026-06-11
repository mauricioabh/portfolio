"use client";

import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Info,
  Layers,
  ListChecks,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectDetails } from "@/data/project-details";
import TechBadge from "./TechBadge";

interface ProjectDetailsDialogProps {
  project: Project;
  details: ProjectDetails;
  index: number;
  isInView: boolean;
}

interface DetailSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

function DetailSection({ title, icon, children }: DetailSectionProps) {
  return (
    <section className="space-y-2">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        {icon}
        {title}
      </h4>
      {children}
    </section>
  );
}

const ProjectDetailsDialog = ({
  project,
  details,
  index,
  isInView,
}: ProjectDetailsDialogProps) => {
  const isNpm = project.liveUrl.includes("npmjs.com");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="w-full group/btn"
          aria-label={`View details for ${project.title}`}
        >
          <Info size={16} />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl lg:max-w-3xl">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            {project.featured && (
              <Badge variant="default" className="text-xs">
                Featured
              </Badge>
            )}
          </div>
          <DialogDescription className="text-base text-slate-300 leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm">
          <DetailSection
            title="Overview"
            icon={<Sparkles size={16} className="text-primary" />}
          >
            <p className="text-slate-300 leading-relaxed">{details.overview}</p>
          </DetailSection>

          <DetailSection
            title="Key Features"
            icon={<ListChecks size={16} className="text-emerald-400" />}
          >
            <ul className="space-y-1.5 text-slate-300">
              {details.features.map((feature) => (
                <li key={feature} className="flex gap-2 leading-relaxed">
                  <span className="text-primary mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </DetailSection>

          {details.productionPractices && details.productionPractices.length > 0 && (
            <DetailSection
              title="Production Practices"
              icon={<ShieldCheck size={16} className="text-orange-400" />}
            >
              <ul className="space-y-1.5 text-slate-300">
                {details.productionPractices.map((practice) => (
                  <li key={practice} className="flex gap-2 leading-relaxed">
                    <span className="text-orange-400 mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-400" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          <DetailSection
            title="Process & Flows"
            icon={<Route size={16} className="text-cyan-400" />}
          >
            <ol className="space-y-2 text-slate-300">
              {details.flows.map((flow, flowIndex) => (
                <li key={flow} className="flex gap-3 leading-relaxed">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                    {flowIndex + 1}
                  </span>
                  <span className="pt-0.5">{flow}</span>
                </li>
              ))}
            </ol>
          </DetailSection>

          <DetailSection
            title="How to Use"
            icon={<Info size={16} className="text-violet-400" />}
          >
            <ol className="space-y-2 text-slate-300">
              {details.howToUse.map((step, stepIndex) => (
                <li key={step} className="flex gap-3 leading-relaxed">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-300">
                    {stepIndex + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </DetailSection>

          <DetailSection
            title="Architecture"
            icon={<Layers size={16} className="text-amber-400" />}
          >
            <p className="text-slate-300 leading-relaxed rounded-lg border border-border/60 bg-muted/30 p-3">
              {details.architecture}
            </p>
          </DetailSection>

          <DetailSection
            title="Tech Stack"
            icon={<Layers size={16} className="text-blue-400" />}
          >
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIndex) => (
                <TechBadge
                  key={tech}
                  technology={tech}
                  index={index}
                  isInView={isInView}
                  delay={techIndex * 0.03}
                />
              ))}
            </div>
          </DetailSection>
        </div>

        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          {project.liveUrl !== "#" && (
            <Button asChild className="flex-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                {isNpm ? "View on NPM" : "Open Live Demo"}
              </a>
            </Button>
          )}
          {project.githubUrl !== "#" && (
            <Button asChild variant="outline" className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github size={16} />
                View Source Code
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
