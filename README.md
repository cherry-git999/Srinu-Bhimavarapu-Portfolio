# ECE Student Portfolio Website

A modern, responsive portfolio website for Electronics & Communication Engineering students, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with electronics-inspired elements
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Smooth Animations**: Powered by Framer Motion for delightful interactions
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🚀 **Performance**: Built with Vite for fast development and optimized builds
- ♿ **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

1. **Hero/Landing**: Eye-catching introduction with animated background
2. **About Me**: Education, background, and career interests
3. **Skills**: Categorized technical skills with progress indicators
4. **Projects**: Detailed project showcase with problem-solution-outcome format
5. **Experience**: Timeline of internships, certifications, and workshops
6. **Achievements**: Awards, competitions, and research publications
7. **Contact**: Contact form with validation and social links

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git (optional)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd "e:\srinu portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

- **Hero Section** (`src/sections/Hero.tsx`):
  - Replace "Your Name" with your actual name
  - Update tagline and description
  
- **About Section** (`src/sections/About.tsx`):
  - Update education details
  - Modify introduction text
  - Change stats and interests

- **Contact Section** (`src/sections/Contact.tsx`):
  - Update email, phone, and location
  - Replace social media links

### 2. Projects

Edit `src/sections/Projects.tsx`:
- Replace placeholder projects with your actual projects
- Update GitHub and demo links
- Modify technologies used

### 3. Skills

Edit `src/sections/Skills.tsx`:
- Add or remove skill categories
- Adjust skill levels (percentages)
- Update technology tags

### 4. Experience & Certifications

Edit `src/sections/Experience.tsx`:
- Add your internships and work experience
- Update certifications with actual credentials
- Modify workshops and events

### 5. Achievements

Edit `src/sections/Achievements.tsx`:
- Update awards and competitions
- Add research publications if any
- Modify achievement statistics

### 6. SEO & Meta Tags

Edit `index.html`:
- Update title, description, and keywords
- Change Open Graph meta tags
- Upload and link your social media preview image

### 7. Colors & Branding

Edit `tailwind.config.js`:
- Modify primary colors to match your brand
- Adjust dark mode colors
- Change fonts if needed

## 📁 Project Structure

```
srinu-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   ├── context/         # React context (Theme)
│   │   └── ThemeContext.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 🎨 Design Features

### Circuit-Inspired Elements
- Grid pattern backgrounds
- Floating electronic component icons
- Gradient color schemes
- Tech-inspired animations

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Animation Types
- Fade in on scroll
- Slide animations
- Hover effects
- Page transitions

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://netlify.com)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📄 Resume Section

To add a downloadable resume:
1. Place your `resume.pdf` in the `public/` folder
2. The download link in Hero section will automatically work

## 🔧 Environment Variables

If you integrate with backend services (e.g., contact form), create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_EMAIL_SERVICE=your_email_service
```

Access in code: `import.meta.env.VITE_API_URL`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

For issues or questions, refer to the customization guide above or the inline code comments.

## 📜 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ by Charan, for Students**
