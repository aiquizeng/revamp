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
- **Supabase**: Backend-as-a-Service for database and authentication
- **File Storage**: Secure file upload and management

### 🎯 Contact Form Enhancements
- **Progress Indicator**: Real-time form completion tracking
- **File Upload**: Drag & drop support for attachments (PDF, DOC, images)
- **Auto-Save**: Automatic form data preservation
- **Enhanced Messaging**: Detailed success/error feedback
- **Loading States**: Visual feedback during submission
- **Database Storage**: All submissions stored securely in Supabase

### 🔐 Admin System
- **Secure Login**: Authentication-protected admin area
- **Submission Management**: View and manage all contact form submissions
- **File Downloads**: Access uploaded files directly from admin panel
- **Search & Filter**: Find submissions by name, email, company, or service
- **Mobile Responsive**: Full admin functionality on all devices
- **Hidden Routes**: Admin pages not linked in main navigation

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
- Supabase account (for backend services)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd revamped-digicinta

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

### Environment Setup
Create a `.env` file with your Supabase credentials:
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup
1. Create a Supabase project at https://supabase.com
2. Create the `contact_submissions` table:
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  budget TEXT,
  timeline TEXT,
  revenue TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  files_count INTEGER DEFAULT 0,
  files_data JSONB
);
```

3. Create storage bucket for file uploads:
```sql
INSERT INTO storage.buckets (id, name, public) 
VALUES ('contact-files', 'contact-files', true);
```

4. Set up storage policies:
```sql
-- Allow anonymous uploads
CREATE POLICY "Allow anonymous uploads to contact-files" 
ON storage.objects 
FOR INSERT 
TO anon 
WITH CHECK (bucket_id = 'contact-files');

-- Allow public read access
CREATE POLICY "Allow public read access to contact-files" 
ON storage.objects 
FOR SELECT 
TO public 
USING (bucket_id = 'contact-files');
```

5. Create admin user in Supabase Dashboard → Authentication → Users

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
│   ├── Layout.jsx      # Main layout wrapper
│   ├── ProtectedRoute.jsx # Authentication guard
│   └── ...
├── pages/              # Main page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Portfolio.jsx   # Portfolio page
│   ├── Contact.jsx     # Contact page with form
│   ├── Login.jsx       # Admin login page
│   └── AdminDashboard.jsx # Admin panel
├── lib/                # Utility libraries
│   ├── supabase.js     # Supabase client config
│   └── fileUpload.js   # File upload utilities
├── hooks/              # Custom React hooks
├── constants/          # App constants and navigation
└── assets/            # Static assets
```

### Admin Access
- **Login**: `/admin-login` (not linked in navigation)
- **Dashboard**: `/admin-dashboard` (protected route)
- **Default credentials**: Set up through Supabase Dashboard

## 🚀 Deployment

### Apache2 Server Deployment (Production)

The project includes automated deployment scripts for Apache2 servers:

#### Full Deployment Script
```bash
# Make script executable (first time only)
chmod +x deploy.sh

# Deploy with full checks and optimizations
sudo ./deploy.sh

# Deploy and restart Apache
sudo ./deploy.sh --restart-apache

# Show help
./deploy.sh --help
```

#### Quick Deployment (for updates)
```bash
# Make script executable (first time only)
chmod +x quick-deploy.sh

# Quick deploy for minor updates
./quick-deploy.sh
```

### Apache2 Server Setup

1. **Enable required Apache modules:**
```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod expires
sudo a2enmod deflate
```

2. **Create the web directory:**
```bash
sudo mkdir -p /var/www/html/digicinta.com
sudo chown -R www-data:www-data /var/www/html/digicinta.com
```

3. **Restart Apache to apply modules:**
```bash
sudo systemctl restart apache2
```

### Deployment Features

The deployment scripts include:
- ✅ **Automated build** with error checking
- ✅ **Backup system** (keeps last 5 deployments)
- ✅ **Permission management** for Apache
- ✅ **Comprehensive .htaccess** with React Router support
- ✅ **Performance optimizations** (gzip, caching)
- ✅ **Security headers** implementation
- ✅ **Deployment verification** and logging

### Manual Build for Other Hosting
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Alternative Hosting Options
- **Vercel**: Zero-config deployment with git integration
- **Netlify**: Continuous deployment with form handling
- **AWS S3 + CloudFront**: Scalable static hosting
- **DigitalOcean App Platform**: Container-based hosting

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

### v3.0 (Latest) - Admin System & Backend Integration
- ✅ **Supabase Integration**: Complete backend setup with database and authentication
- ✅ **Admin Login System**: Secure authentication-protected admin area
- ✅ **Submission Management**: Full admin dashboard to view and manage contact submissions
- ✅ **File Upload System**: Secure file storage with download capabilities
- ✅ **Search & Filter**: Advanced filtering by name, email, company, service
- ✅ **Mobile Optimization**: Fully responsive design across all breakpoints
- ✅ **Security Enhancements**: Row-level security policies and protected routes
- ✅ **Database Storage**: All form submissions stored with file attachments
- ✅ **Admin Panel Features**: Statistics, progress tracking, and bulk operations

### v2.0
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