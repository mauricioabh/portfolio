// Personal Information Configuration
// This file centralizes all personal information using environment variables

export const personalInfo = {
  // Basic Information
  fullName: process.env.NEXT_PUBLIC_FULL_NAME || "Your Full Name",
  firstName: process.env.NEXT_PUBLIC_FIRST_NAME || "Your First Name",
  lastName: process.env.NEXT_PUBLIC_LAST_NAME || "Your Last Name",
  title: process.env.NEXT_PUBLIC_TITLE || "Your Professional Title",

  // Contact Information
  email: process.env.NEXT_PUBLIC_EMAIL || "your-email@example.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "your-phone-number",

  // Social Media & Links
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-github-username",
    url:
      process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/your-username",
  },
  linkedin: {
    username:
      process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || "your-linkedin-username",
    url:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/in/your-username/",
  },
  portfolio: {
    url: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://your-domain.com",
  },

  // SEO & Meta
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Your Name Portfolio",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      "Your professional description",
    locale: process.env.NEXT_PUBLIC_SITE_LOCALE || "en_US",
  },

  // CV
  cv: {
    filename: process.env.NEXT_PUBLIC_CV_FILENAME || "Your_Name_CV.pdf",
    path: `/cv/${process.env.NEXT_PUBLIC_CV_FILENAME || "Your_Name_CV.pdf"}`,
  },
} as const;

// Helper functions for common use cases
export const getSocialLinks = () => ({
  github: personalInfo.github.url,
  linkedin: personalInfo.linkedin.url,
  email: `mailto:${personalInfo.email}`,
});

export const getContactInfo = () => ({
  email: personalInfo.email,
  phone: personalInfo.phone,
  github: personalInfo.github.url,
  linkedin: personalInfo.linkedin.url,
});

export const getSEOInfo = () => ({
  title: `${personalInfo.firstName} ${personalInfo.lastName} — ${personalInfo.title}`,
  description: personalInfo.site.description,
  url: personalInfo.portfolio.url,
  siteName: personalInfo.site.name,
  locale: personalInfo.site.locale,
});
