"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { getContactInfo } from "@/config/personal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = getContactInfo();

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: contactInfo.github.replace("https://", ""),
      href: contactInfo.github,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: contactInfo.linkedin.replace("https://www.", ""),
      href: contactInfo.linkedin,
      gradient: "from-indigo-600 to-teal-600",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="space-y-8">
          {contactCards.map((info, index) => (
            <motion.div key={info.label} className="mb-8">
              <motion.a
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className="relative group block"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${
                      info.gradient.includes("blue")
                        ? "#3b82f6"
                        : info.gradient.includes("gray")
                        ? "#6b7280"
                        : "#1d4ed8"
                    }, ${
                      info.gradient.includes("cyan")
                        ? "#06b6d4"
                        : info.gradient.includes("gray")
                        ? "#374151"
                        : "#1e40af"
                    })`,
                  }}
                ></div>
                <div className="relative flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-teal-500/10 rounded-2xl blur-3xl"></div>
        <Card className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 shadow-2xl">
          <CardContent className="pt-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle
                  size={48}
                  className="text-green-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  size="lg"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactForm;
