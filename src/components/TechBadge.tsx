"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Zap,
  Layers,
  Terminal,
  Smartphone,
  Server,
  FileText,
  Cpu,
  GitBranch,
} from "lucide-react";

interface TechBadgeProps {
  technology: string;
  index?: number;
  isInView?: boolean;
  delay?: number;
}

const TechBadge = ({
  technology,
  index = 0,
  isInView = true,
  delay = 0,
}: TechBadgeProps) => {
  // Technology icon mapping
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();

    if (techLower.includes("react")) return <Code2 size={12} />;
    if (techLower.includes("next")) return <Globe size={12} />;
    if (techLower.includes("javascript") || techLower.includes("js"))
      return <Code2 size={12} />;
    if (techLower.includes("typescript") || techLower.includes("ts"))
      return <Code2 size={12} />;
    if (techLower.includes("node") || techLower.includes("express"))
      return <Server size={12} />;
    if (
      techLower.includes("database") ||
      techLower.includes("sql") ||
      techLower.includes("prisma") ||
      techLower.includes("neon")
    )
      return <Database size={12} />;
    if (techLower.includes("tailwind") || techLower.includes("css"))
      return <Palette size={12} />;
    if (techLower.includes("html")) return <FileText size={12} />;
    if (techLower.includes("framer") || techLower.includes("motion"))
      return <Zap size={12} />;
    if (
      techLower.includes("mobile") ||
      techLower.includes("android") ||
      techLower.includes("ios")
    )
      return <Smartphone size={12} />;
    if (techLower.includes("sap") || techLower.includes("fiori"))
      return <Layers size={12} />;
    if (techLower.includes("git") || techLower.includes("github"))
      return <GitBranch size={12} />;
    if (techLower.includes("api") || techLower.includes("rest"))
      return <Terminal size={12} />;
    if (techLower.includes("docker") || techLower.includes("kubernetes"))
      return <Cpu size={12} />;

    return <Code2 size={12} />; // Default icon
  };

  // Consistent color mapping based on technology name
  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();

    // React ecosystem
    if (techLower.includes("react"))
      return {
        bg: "bg-blue-500/10",
        border: "border-blue-400/30",
        text: "text-blue-300",
        hover:
          "hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-200",
      };

    // Next.js
    if (techLower.includes("next"))
      return {
        bg: "bg-slate-500/10",
        border: "border-slate-400/30",
        text: "text-slate-300",
        hover:
          "hover:bg-slate-500/20 hover:border-slate-400/50 hover:text-slate-200",
      };

    // JavaScript/TypeScript
    if (techLower.includes("javascript") || techLower.includes("js"))
      return {
        bg: "bg-yellow-500/10",
        border: "border-yellow-400/30",
        text: "text-yellow-300",
        hover:
          "hover:bg-yellow-500/20 hover:border-yellow-400/50 hover:text-yellow-200",
      };

    if (techLower.includes("typescript") || techLower.includes("ts"))
      return {
        bg: "bg-blue-600/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        hover:
          "hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-300",
      };

    // Backend/Database
    if (techLower.includes("node") || techLower.includes("express"))
      return {
        bg: "bg-green-500/10",
        border: "border-green-400/30",
        text: "text-green-300",
        hover:
          "hover:bg-green-500/20 hover:border-green-400/50 hover:text-green-200",
      };

    if (
      techLower.includes("database") ||
      techLower.includes("sql") ||
      techLower.includes("prisma") ||
      techLower.includes("neon")
    )
      return {
        bg: "bg-emerald-500/10",
        border: "border-emerald-400/30",
        text: "text-emerald-300",
        hover:
          "hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-200",
      };

    // Styling
    if (techLower.includes("tailwind") || techLower.includes("css"))
      return {
        bg: "bg-cyan-500/10",
        border: "border-cyan-400/30",
        text: "text-cyan-300",
        hover:
          "hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-200",
      };

    if (techLower.includes("html"))
      return {
        bg: "bg-orange-500/10",
        border: "border-orange-400/30",
        text: "text-orange-300",
        hover:
          "hover:bg-orange-500/20 hover:border-orange-400/50 hover:text-orange-200",
      };

    // Animation
    if (techLower.includes("framer") || techLower.includes("motion"))
      return {
        bg: "bg-purple-500/10",
        border: "border-purple-400/30",
        text: "text-purple-300",
        hover:
          "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-200",
      };

    // Mobile
    if (
      techLower.includes("mobile") ||
      techLower.includes("android") ||
      techLower.includes("ios")
    )
      return {
        bg: "bg-pink-500/10",
        border: "border-pink-400/30",
        text: "text-pink-300",
        hover:
          "hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-200",
      };

    // SAP/Fiori
    if (techLower.includes("sap") || techLower.includes("fiori"))
      return {
        bg: "bg-indigo-500/10",
        border: "border-indigo-400/30",
        text: "text-indigo-300",
        hover:
          "hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-indigo-200",
      };

    // Git/Version Control
    if (techLower.includes("git") || techLower.includes("github"))
      return {
        bg: "bg-gray-500/10",
        border: "border-gray-400/30",
        text: "text-gray-300",
        hover:
          "hover:bg-gray-500/20 hover:border-gray-400/50 hover:text-gray-200",
      };

    // API/REST
    if (techLower.includes("api") || techLower.includes("rest"))
      return {
        bg: "bg-teal-500/10",
        border: "border-teal-400/30",
        text: "text-teal-300",
        hover:
          "hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200",
      };

    // Docker/DevOps
    if (techLower.includes("docker") || techLower.includes("kubernetes"))
      return {
        bg: "bg-violet-500/10",
        border: "border-violet-400/30",
        text: "text-violet-300",
        hover:
          "hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-200",
      };

    // Default fallback
    return {
      bg: "bg-slate-500/10",
      border: "border-slate-400/30",
      text: "text-slate-300",
      hover:
        "hover:bg-slate-500/20 hover:border-slate-400/50 hover:text-slate-200",
    };
  };

  const colorScheme = getTechColor(technology);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
    >
      <Badge
        variant="secondary"
        className={`text-xs border transition-all duration-300 shadow-lg flex items-center gap-1.5 px-3 py-1.5 ${colorScheme.bg} ${colorScheme.border} ${colorScheme.text} ${colorScheme.hover}`}
      >
        {getTechIcon(technology)}
        {technology}
      </Badge>
    </motion.div>
  );
};

export default TechBadge;
