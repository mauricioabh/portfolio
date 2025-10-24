"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import TechBadge from "./TechBadge";
import { personalInfo, getSocialLinks } from "@/config/personal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github.url,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin.url,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-muted-foreground flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <p className="flex items-center gap-2">
                © {currentYear} {personalInfo.firstName} {personalInfo.lastName}{" "}
                — Built with
                <Heart size={16} className="text-red-500" />
                using
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge technology="Next.js" isInView={true} delay={0} />
                <TechBadge
                  technology="TailwindCSS"
                  isInView={true}
                  delay={0.1}
                />
                <TechBadge technology="shadcn/ui" isInView={true} delay={0.2} />
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <link.icon size={20} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Available for freelance work and full-time opportunities
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
