#!/bin/bash

# DigiCinta Website Deployment Script
# This script builds and deploys the React website to Apache2 server
# Target: /var/www/html/digicinta.com

set -e  # Exit on any error

# Configuration
PROJECT_NAME="DigiCinta Website"
APACHE_ROOT="/var/www/html/digicinta.com"
BACKUP_DIR="/var/www/backups/digicinta"
BUILD_DIR="dist"
LOG_FILE="deploy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a $LOG_FILE
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a $LOG_FILE
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a $LOG_FILE
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a $LOG_FILE
}

# Check if running as root (needed for Apache operations)
check_permissions() {
    if [[ $EUID -eq 0 ]]; then
        warning "Running as root. Make sure Apache has proper permissions."
    fi
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install Node.js and npm first."
    fi
    
    # Check if Apache directory exists
    if [[ ! -d "/var/www/html" ]]; then
        error "Apache web root /var/www/html does not exist."
    fi
    
    # Check if we can write to Apache directory
    if [[ ! -w "/var/www/html" ]]; then
        error "Cannot write to /var/www/html. Please run with sudo or fix permissions."
    fi
    
    success "Prerequisites check passed"
}

# Install dependencies
install_dependencies() {
    log "Installing npm dependencies..."
    if npm install; then
        success "Dependencies installed successfully"
    else
        error "Failed to install dependencies"
    fi
}

# Run linting (skip in production - should be done in development)
run_lint() {
    log "Skipping ESLint in production deployment..."
    warning "Make sure to run 'npm run lint' in development before deploying"
    success "Linting step skipped"
}

# Build the project
build_project() {
    log "Building the project..."
    
    # Clean previous build
    if [[ -d "$BUILD_DIR" ]]; then
        rm -rf "$BUILD_DIR"
        log "Cleaned previous build directory"
    fi
    
    # Run build
    if npm run build; then
        success "Build completed successfully"
    else
        error "Build failed"
    fi
    
    # Verify build directory exists and has content
    if [[ ! -d "$BUILD_DIR" ]] || [[ -z "$(ls -A $BUILD_DIR)" ]]; then
        error "Build directory is empty or doesn't exist"
    fi
}

# Create backup of current deployment
create_backup() {
    if [[ -d "$APACHE_ROOT" ]] && [[ "$(ls -A $APACHE_ROOT)" ]]; then
        log "Creating backup of current deployment..."
        
        # Create backup directory if it doesn't exist
        mkdir -p "$BACKUP_DIR"
        
        # Create timestamped backup
        TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
        BACKUP_PATH="$BACKUP_DIR/backup_$TIMESTAMP"
        
        if cp -r "$APACHE_ROOT" "$BACKUP_PATH"; then
            success "Backup created at $BACKUP_PATH"
        else
            warning "Failed to create backup, continuing anyway..."
        fi
        
        # Keep only last 5 backups
        cd "$BACKUP_DIR"
        ls -t | tail -n +6 | xargs rm -rf 2>/dev/null || true
        cd - > /dev/null
    else
        log "No existing deployment to backup"
    fi
}

# Deploy to Apache
deploy_to_apache() {
    log "Deploying to Apache server..."
    
    # Create Apache directory if it doesn't exist
    mkdir -p "$APACHE_ROOT"
    
    # Copy build files to Apache directory
    if cp -r "$BUILD_DIR"/* "$APACHE_ROOT"/; then
        success "Files copied to $APACHE_ROOT"
    else
        error "Failed to copy files to Apache directory"
    fi
    
    # Set proper permissions
    log "Setting proper permissions..."
    chown -R www-data:www-data "$APACHE_ROOT" 2>/dev/null || warning "Could not set www-data ownership (might need sudo)"
    chmod -R 755 "$APACHE_ROOT"
    
    success "Permissions set"
}

# Verify deployment
verify_deployment() {
    log "Verifying deployment..."
    
    # Check if index.html exists
    if [[ -f "$APACHE_ROOT/index.html" ]]; then
        success "index.html found"
    else
        error "index.html not found in Apache directory"
    fi
    
    # Check if assets directory exists
    if [[ -d "$APACHE_ROOT/assets" ]]; then
        success "Assets directory found"
    else
        warning "Assets directory not found"
    fi
    
    # Count files deployed
    FILE_COUNT=$(find "$APACHE_ROOT" -type f | wc -l)
    log "Total files deployed: $FILE_COUNT"
}

# Restart Apache (optional)
restart_apache() {
    # Apache restart is no longer needed for .htaccess-only deployment
    log "Deployment uses .htaccess - no Apache restart required"
}


# Display deployment summary
deployment_summary() {
    echo
    echo "=================================="
    echo -e "${GREEN}🚀 DEPLOYMENT COMPLETE! 🚀${NC}"
    echo "=================================="
    echo
    echo -e "${BLUE}Project:${NC} $PROJECT_NAME"
    echo -e "${BLUE}Deployed to:${NC} $APACHE_ROOT"
    echo -e "${BLUE}Files deployed:${NC} $(find "$APACHE_ROOT" -type f | wc -l)"
    echo -e "${BLUE}Deployment time:${NC} $(date)"
    echo
    echo -e "${GREEN}✅ Website is now live!${NC}"
    echo -e "${BLUE}💡 Access your website at:${NC} http://your-domain.com"
    echo
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Test the website in your browser"
    echo "2. Check Apache error logs if issues occur: sudo tail -f /var/log/apache2/error.log"
    echo "3. Monitor Apache access logs: sudo tail -f /var/log/apache2/access.log"
    echo
}

# Main deployment function
main() {
    echo
    echo "=================================="
    echo -e "${BLUE}🚀 DigiCinta Website Deployment${NC}"
    echo "=================================="
    echo
    
    # Start deployment
    log "Starting deployment process..."
    
    # Run all deployment steps
    check_permissions
    check_prerequisites
    install_dependencies
    run_lint
    build_project
    create_backup
    deploy_to_apache
    verify_deployment
    restart_apache
    
    # Show summary
    deployment_summary
}

# Show help
show_help() {
    echo "DigiCinta Website Deployment Script"
    echo
    echo "Usage: $0 [OPTIONS]"
    echo
    echo "Options:"
    echo "  --help, -h         Show this help message"
    echo
    echo "Examples:"
    echo "  $0                 Deploy with .htaccess"
    echo "  sudo $0            Deploy with full permissions"
    echo
}

# Handle command line arguments
case "$1" in
    --help|-h)
        show_help
        exit 0
        ;;
    *)
        main
        ;;
esac