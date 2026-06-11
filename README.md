# Mauricio Barragán - Portfolio Website

A modern, dark-themed portfolio website built with Next.js, React, TailwindCSS, shadcn/ui, Framer Motion, and TypeScript. Features a comprehensive tech stack showcase with consistent technology badges, smooth animations, and responsive design.

## Engineering roadmap

Cross-project production skills plan (Sentry, Zod+Scalar, Inngest, Langfuse, etc.) for CV apps:

- **[Production Skills Roadmap](./docs/production-skills-roadmap.md)** — master plan and per-app checklist
- **[Inngest pattern](./docs/inngest-pattern.md)** — reusable `serve()` setup for Next.js CV apps
- **[Linear issues import](./docs/linear-issues.md)** — paste into `/linear-issue` in Cursor

Featured CV apps expose **Production Practices** in each project Details dialog (`src/data/project-details.ts`), aligned with the roadmap checklist (M5).

**This repo:** Dependabot (`.github/dependabot.yml`) for weekly npm and GitHub Actions updates.

## 🚀 Features

- **Modern Design**: Dark theme with elegant color palette and gradient effects
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Tech Stack Showcase**: Consistent technology badges with icons and colors
- **Interactive Navigation**: Scroll spy with active section highlighting
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized for Lighthouse scores (Performance ≥ 90, Accessibility ≥ 95)
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🎨 Design System

### Technology Badges

- **Consistent Icons**: Each technology has a specific icon (React, Next.js, JavaScript, etc.)
- **Color Coding**: Same technology = same color across all sections
- **Soft Backgrounds**: 10% opacity backgrounds with subtle borders
- **Hover Effects**: Enhanced colors and shadows on interaction

### Color Palette

- **Primary**: Blue gradients for main elements
- **Secondary**: Teal, purple, and pink accents
- **Background**: Dark slate with gradient overlays
- **Text**: High contrast white and gray tones

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and CSS variables
│   └── api/og/route.tsx    # Open Graph image generation
├── components/
│   ├── Header.tsx          # Sticky navigation with scroll spy
│   ├── Hero.tsx            # Hero section with introduction
│   ├── About.tsx           # About Me section with tech badges
│   ├── Experience.tsx      # Work experience with animated cards
│   ├── Projects.tsx         # Featured projects grid
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Contact.tsx          # Contact section
│   ├── ContactForm.tsx      # Contact form component
│   ├── Footer.tsx          # Footer with social links and tech badges
│   ├── TechBadge.tsx       # Reusable technology badge component
│   └── ui/                 # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── data/
│   └── projects.ts         # Project data and types
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Key Components

### TechBadge System

- **Centralized Logic**: Single component for all technology badges
- **Icon Mapping**: Automatic icon assignment based on technology name
- **Color Consistency**: Hash-based color assignment for same technologies
- **Animation Support**: Framer Motion integration with staggered delays

### Navigation System

- **Scroll Spy**: Active section highlighting based on scroll position
- **Smooth Scrolling**: Animated transitions between sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Logo Highlighting**: Special highlighting when at top of page

### Experience Cards

- **Animated Layout**: 3D hover effects and smooth transitions
- **Color Coding**: Each card has unique color scheme
- **Technology Badges**: Consistent tech stack display
- **Responsive Design**: Grid layout that adapts to screen size

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Add your CV file:

```bash
# Create cv directory in public folder
mkdir public/cv

# Add your CV file with exact name
# Place your CV as: public/cv/Mauricio_Barragan_CV.pdf
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **`src/app/layout.tsx`**: Update SEO metadata, title, and description
2. **`src/data/projects.ts`**: Add your projects and update project data
3. **`src/components/Hero.tsx`**: Update name, title, and introduction text
4. **`src/components/About.tsx`**: Update about section content and skills
5. **`src/components/Experience.tsx`**: Update work experience data
6. **`src/components/ContactForm.tsx`**: Update contact information
7. **`public/cv/`**: Add your CV file with the exact name `Mauricio_Barragan_CV.pdf`

### Adding New Technologies

The TechBadge component automatically handles new technologies. To add custom icons or colors:

1. Edit `src/components/TechBadge.tsx`
2. Add new technology mappings in `getTechIcon()` and `getTechColor()` functions
3. Technologies will automatically get consistent colors and icons

### Styling

The project uses TailwindCSS v4 with CSS variables for theming. Main color variables are defined in `src/app/globals.css`:

- `--background`: Main background color
- `--foreground`: Main text color
- `--primary`: Primary accent color
- `--secondary`: Secondary accent color
- `--muted`: Muted text and background colors

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link to `src/components/Header.tsx`
4. Update scroll spy logic if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is built with standard Next.js and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The website is optimized for:

- **Performance**: ≥ 90 Lighthouse score
- **Accessibility**: ≥ 95 Lighthouse score
- **SEO**: Complete meta tags and structured data
- **Core Web Vitals**: Optimized for LCP, FID, and CLS

## 🎨 Design Inspiration

- **brittanychiang.com**: Dark theme, elegant color palette, "About Me" and "Experience" sections
- **mattfarley.ca**: Colorful, playful animations and cards
- **seanhalpin.xyz**: Centered sticky header that remains visible on scroll

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mauricio Alberto Barragán Huerta**

- Email: mauricioabh@gmail.com
- Phone: +52 1 8123595558
- GitHub: [github.com/mauricioabh](https://github.com/mauricioabh)
- LinkedIn: [linkedin.com/in/mauricioabh](https://www.linkedin.com/in/mauricioabh/)

---

Built with ❤️ using Next.js, TailwindCSS, and shadcn/ui
