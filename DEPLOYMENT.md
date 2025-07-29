# DigiCinta Website Deployment Guide

## 🚀 Quick Start

### 1. One-Time Server Setup

```bash
# 1. Enable required Apache modules
sudo a2enmod rewrite headers expires deflate

# 2. Create web directory
sudo mkdir -p /var/www/html/digicinta.com
sudo chown -R www-data:www-data /var/www/html/digicinta.com

# 3. Restart Apache to apply modules
sudo systemctl restart apache2
```

### 2. Deploy Website

```bash
# Full deployment with all checks
./deploy.sh

# OR quick deployment for updates
./quick-deploy.sh
```

## 📋 Deployment Scripts

### Full Deployment Script (`deploy.sh`)
**Features:**
- ✅ Prerequisites checking
- ✅ Dependency installation
- ✅ ESLint validation
- ✅ Production build
- ✅ Automatic backup (last 5 versions)
- ✅ .htaccess deployment for React Router
- ✅ Permission management
- ✅ Deployment verification
- ✅ Performance optimization

**Usage:**
```bash
./deploy.sh                    # Deploy with .htaccess
./deploy.sh --help            # Show help
```

### Quick Deploy Script (`quick-deploy.sh`)
**Features:**
- ⚡ Fast deployment for minor updates
- ✅ Build and copy only
- ✅ Basic permission setting

**Usage:**
```bash
./quick-deploy.sh
```

## 🔧 Manual Deployment

If you prefer manual deployment:

```bash
# 1. Install dependencies
npm install

# 2. Run linting
npm run lint

# 3. Build the project
npm run build

# 4. Deploy to Apache
sudo mkdir -p /var/www/html/digicinta.com
sudo cp -r dist/* /var/www/html/digicinta.com/
sudo chown -R www-data:www-data /var/www/html/digicinta.com
sudo chmod -R 755 /var/www/html/digicinta.com

# 5. Deploy .htaccess for React Router
sudo cp .htaccess /var/www/html/digicinta.com/
sudo chown www-data:www-data /var/www/html/digicinta.com/.htaccess
sudo chmod 644 /var/www/html/digicinta.com/.htaccess
```

## 🏗️ Apache .htaccess Configuration

The `.htaccess` file includes:

- **React Router Support**: URL rewriting for SPA routing
- **Performance Optimization**: Gzip compression and browser caching
- **Security Headers**: XSS protection, content-type sniffing prevention
- **File Protection**: Prevents access to sensitive files
- **MIME Type Optimization**: Proper content type handling

### Key Features of .htaccess

- **URL Rewriting**: All non-existing routes fallback to index.html
- **Browser Caching**: 1-year cache for static assets, 1-hour for HTML
- **Compression**: Gzip compression for text-based files
- **Security**: Prevents directory browsing and file access

## 📊 Monitoring & Troubleshooting

### Check Deployment Status
```bash
# Verify files are deployed
ls -la /var/www/html/digicinta.com/

# Check Apache status
sudo systemctl status apache2

# Test website accessibility
curl -I http://localhost  # or your domain
```

### View Logs
```bash
# Apache error logs
sudo tail -f /var/log/apache2/digicinta_error.log

# Apache access logs
sudo tail -f /var/log/apache2/digicinta_access.log

# Deployment logs (created by deploy.sh)
tail -f deploy.log
```

### Common Issues

**Issue**: React Router routes return 404
**Solution**: Ensure mod_rewrite is enabled and .htaccess is properly configured

**Issue**: Permission denied errors
**Solution**: Run deployment with sudo and verify www-data ownership

**Issue**: Assets not loading
**Solution**: Check file permissions and Apache error logs

## 🔄 Rollback Procedure

If deployment fails, restore from backup:

```bash
# List available backups
ls -la /var/www/backups/digicinta/

# Restore from backup (replace TIMESTAMP)
sudo cp -r /var/www/backups/digicinta/backup_TIMESTAMP/* /var/www/html/digicinta.com/
```

## 📈 Performance Optimization

The deployment includes:

- **Gzip Compression**: Reduces file sizes by ~70%
- **Browser Caching**: 1-year cache for static assets
- **Security Headers**: Prevents common attacks
- **Optimized Images**: Compressed images in build process

## 🔐 Security Considerations

- Files are owned by `www-data` user
- Directory permissions set to 755
- Security headers implemented
- No sensitive information in client-side code
- .htaccess prevents directory listing

---

**Need help?** Contact: business@digicinta.com