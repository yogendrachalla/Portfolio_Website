<<<<<<< HEAD
# Portfolio_Website
=======
# 🎨 Modern Portfolio Website

A beautiful, fully responsive portfolio website built with **Next.js 14**, **TailwindCSS**, and **Framer Motion**. Features smooth animations, dark/light mode toggle, and modern design principles.

## ✨ Features

- **🚀 Next.js 14 with App Router** - Latest React framework with modern architecture
- **🎨 TailwindCSS** - Utility-first CSS framework for rapid UI development
- **🎭 Framer Motion** - Smooth animations and micro-interactions
- **🌓 Dark/Light Mode** - Theme toggle with system preference detection
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **⚡ Performance Optimized** - Fast loading with optimized animations
- **♿ Accessibility** - WCAG compliant with proper focus states
- **🔍 SEO Ready** - Meta tags, structured data, and semantic HTML

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and TailwindCSS imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   └── button.tsx       # Button component with variants
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx # Hero section with animated background
│   │   ├── about-section.tsx # About section with image reveal
│   │   ├── skills-section.tsx # Skills with progress bars
│   │   ├── projects-section.tsx # Projects grid with modal
│   │   ├── resume-section.tsx # Resume download section
│   │   ├── contact-section.tsx # Contact form with validation
│   │   └── footer-section.tsx # Footer with social links
│   ├── navigation.tsx       # Navigation with theme toggle
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.js       # TailwindCSS configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

### 1. Personal Information

Update the following files with your information:

**`app/layout.tsx`**
```tsx
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your personal description...',
  // ... other meta tags
}
```

**`components/sections/hero-section.tsx`**
```tsx
<h1 className="hero-title">Your Name</h1>
<p className="hero-tagline">Your tagline here</p>
```

### 2. Profile Photo

Replace the placeholder in `components/sections/about-section.tsx`:
```tsx
// Replace this div with your actual image
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

### 3. Skills & Technologies

Update `components/sections/skills-section.tsx`:
```tsx
const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Your Skill', icon: YourIcon, level: 90, color: 'from-blue-500 to-cyan-500' },
      // ... more skills
    ]
  }
]
```

### 4. Projects

Modify `components/sections/projects-section.tsx`:
```tsx
const projectsData = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    image: '/path/to/project-image.jpg',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://yourproject.com',
    // ... other properties
  }
]
```

### 5. Contact Information

Update `components/sections/contact-section.tsx`:
```tsx
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your@email.com',
    link: 'mailto:your@email.com'
  }
]

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  // ... other social links
]
```

### 6. Resume

Add your actual resume PDF to the `public/` folder and update the download link in `components/sections/resume-section.tsx`.

## 🎨 Styling Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c4a6e',
  },
  dark: {
    50: '#f8fafc',
    900: '#0f172a',
  }
}
```

### Typography

Fonts are imported in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

### Animations

Custom animations are defined in `tailwind.config.js`:
```js
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  // ... more animations
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Breakpoints are handled with TailwindCSS responsive prefixes:
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify

### GitHub Pages

1. Update `next.config.js`:
   ```js
   output: 'export',
   trailingSlash: true,
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy the 'out' folder to GitHub Pages
   ```

## 🔧 Advanced Features

### Theme Toggle

The dark/light mode toggle uses `next-themes`:
```tsx
import { useTheme } from 'next-themes'

const { theme, setTheme } = useTheme()
```

### Smooth Scrolling

Smooth scrolling is implemented with CSS and JavaScript:
```css
html {
  scroll-behavior: smooth;
}
```

### Intersection Observer

Scroll-triggered animations use Framer Motion's `useInView`:
```tsx
const isInView = useInView(ref, { once: true, margin: '-100px' })
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript
- **Deployment**: Vercel/Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Support

If you need help:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [TailwindCSS docs](https://tailwindcss.com/docs)
3. Open an issue on GitHub
4. Check the code comments for implementation details

---

**Happy coding! 🚀**

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion.
>>>>>>> 764e616 (Initial commit)
