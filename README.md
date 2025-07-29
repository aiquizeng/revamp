# DigiCinta Website

> Professional digital transformation consultancy website built with React and modern web technologies.

## 🚀 Overview

DigiCinta is a leading digital transformation consultancy based in South Jakarta, Indonesia, serving clients across Southeast Asia, APAC, and MENA regions. This website showcases our comprehensive digital solutions including AI automation, custom software development, cybersecurity, and strategic consulting services.

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with gradient themes
- **Smooth Animations**: Engaging scroll animations and micro-interactions
- **Accessibility**: WCAG compliant with proper semantic markup

### 📱 Pages & Sections
- **Home**: Hero section, services overview, success stories, trusted companies
- **About**: Company story, values, team statistics
- **Services**: Detailed service offerings with expandable sections
- **Portfolio**: 6 comprehensive project case studies
- **Contact**: Enhanced contact form with file upload and auto-save

### 🛠️ Technical Features
- **React 18**: Modern functional components with hooks
- **React Router**: Client-side routing for SPA experience
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Consistent iconography
- **Vite**: Fast build tool and development server
- **ESLint**: Code quality and consistency

### 🎯 Contact Form Enhancements
- **Progress Indicator**: Real-time form completion tracking
- **File Upload**: Drag & drop support for attachments (PDF, DOC, images)
- **Auto-Save**: Automatic form data preservation
- **Enhanced Messaging**: Detailed success/error feedback
- **Loading States**: Visual feedback during submission

## 🏢 Company Information

- **Founded**: 2017
- **Experience**: 8+ years in digital transformation
- **Team**: 11+ specialists
- **Projects**: 51+ successful deliveries
- **Regions**: SEA, APAC, MENA
- **Office**: South Jakarta, Indonesia
- **Business Hours**: Monday - Friday, 8am - 6pm WIB
- **Contact**: business@digicinta.com

## 🛠️ Development

### Prerequisites
- Node.js 16+ (recommended: 20+)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd revamped-digicinta

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Landing page hero section
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── ServiceCard.jsx # Service display cards
│   └── ...
├── pages/              # Main page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Portfolio.jsx   # Portfolio page
│   └── Contact.jsx     # Contact page
├── hooks/              # Custom React hooks
├── constants/          # App constants and navigation
└── assets/            # Static assets
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- **Vercel**: Zero-config deployment with git integration
- **Netlify**: Continuous deployment with form handling
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free hosting for open source projects

## 🎨 Customization

### Brand Colors
The website uses a primary blue color scheme defined in Tailwind config:
- Primary: Blue variants (500-900)
- Secondary: Gray variants (50-900)
- Accent: Green for success states

### Content Updates
- **Company Info**: Update in `/src/pages/Contact.jsx`
- **Services**: Modify `/src/pages/Services.jsx`
- **Portfolio**: Add projects in `/src/pages/Portfolio.jsx`
- **Success Stories**: Update `/src/components/CaseStudiesPreview.jsx`
- **Trusted Companies**: Modify `/src/components/TrustedCompanies.jsx`

## 📊 Performance

- **Bundle Size**: ~250KB JavaScript (gzipped: ~73KB)
- **CSS Size**: ~63KB (gzipped: ~9KB)
- **Build Time**: ~4 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

## 🔧 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Legacy**: IE 11 not supported (modern JS features used)

## 📝 Recent Updates

### v2.0 (Latest)
- ✅ Enhanced contact form with file upload
- ✅ Form progress indicators and auto-save
- ✅ Updated timezone to WIB (Indonesian time)
- ✅ Added 2 new success stories
- ✅ Expanded portfolio with 5 additional projects
- ✅ Removed testimonials section per requirements
- ✅ Updated trusted companies list
- ✅ LinkedIn integration

### v1.0
- ✅ Initial website launch
- ✅ Responsive design implementation
- ✅ Core pages and navigation
- ✅ Service offerings and portfolio

## 🤝 Contributing

This is a private corporate website. For internal development:

1. Create feature branch from `main`
2. Make changes and test thoroughly
3. Run linting: `npm run lint`
4. Build and test: `npm run build`
5. Submit pull request with detailed description

## 📞 Support

For technical issues or feature requests:
- **Email**: business@digicinta.com
- **Office**: South Jakarta, Indonesia
- **Hours**: Monday - Friday, 8am - 6pm WIB

## 📄 License

© 2017-2024 DigiCinta. All rights reserved.

---

**Built with ❤️ by the DigiCinta Team**