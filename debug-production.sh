#!/bin/bash

# Production Debugging Script for DigiCinta Website
# Run this on your production server to diagnose issues

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== DigiCinta Production Environment Debug ===${NC}\n"

# Check current directory and git status
echo -e "${YELLOW}1. Repository Status:${NC}"
echo "Current directory: $(pwd)"
echo "Git branch: $(git branch --show-current 2>/dev/null || echo 'Not a git repository')"
echo "Latest commit: $(git log -1 --oneline 2>/dev/null || echo 'No git history')"
echo "Working tree status:"
git status --porcelain 2>/dev/null || echo "Not a git repository"
echo

# Check environment file
echo -e "${YELLOW}2. Environment Configuration:${NC}"
if [[ -f ".env" ]]; then
    echo -e "${GREEN}✓${NC} .env file exists"
    echo "Environment variables:"
    if grep -q "VITE_SUPABASE_URL" .env; then
        echo -e "${GREEN}✓${NC} VITE_SUPABASE_URL is set"
        echo "  URL: $(grep VITE_SUPABASE_URL .env | cut -d'=' -f2)"
    else
        echo -e "${RED}✗${NC} VITE_SUPABASE_URL not found in .env"
    fi
    
    if grep -q "VITE_SUPABASE_ANON_KEY" .env; then
        echo -e "${GREEN}✓${NC} VITE_SUPABASE_ANON_KEY is set"
        echo "  Key: $(grep VITE_SUPABASE_ANON_KEY .env | cut -d'=' -f2 | cut -c1-20)..."
    else
        echo -e "${RED}✗${NC} VITE_SUPABASE_ANON_KEY not found in .env"
    fi
else
    echo -e "${RED}✗${NC} .env file not found"
fi

if [[ -f ".env.example" ]]; then
    echo -e "${GREEN}✓${NC} .env.example exists"
else
    echo -e "${RED}✗${NC} .env.example not found"
fi
echo

# Check Node.js and npm
echo -e "${YELLOW}3. Development Environment:${NC}"
echo "Node.js version: $(node --version 2>/dev/null || echo 'Not installed')"
echo "npm version: $(npm --version 2>/dev/null || echo 'Not installed')"
echo

# Check dependencies
echo -e "${YELLOW}4. Dependencies:${NC}"
if [[ -f "package.json" ]]; then
    echo -e "${GREEN}✓${NC} package.json exists"
    if [[ -d "node_modules" ]]; then
        echo -e "${GREEN}✓${NC} node_modules directory exists"
        echo "Installed packages: $(ls node_modules | wc -l) packages"
    else
        echo -e "${RED}✗${NC} node_modules directory not found - run 'npm install'"
    fi
else
    echo -e "${RED}✗${NC} package.json not found"
fi
echo

# Check build directory
echo -e "${YELLOW}5. Build Status:${NC}"
if [[ -d "dist" ]]; then
    echo -e "${GREEN}✓${NC} dist directory exists"
    echo "Build files: $(find dist -type f | wc -l) files"
    echo "Build size: $(du -sh dist 2>/dev/null | cut -f1)"
    
    # Check if Supabase config is in build
    if find dist -name "*.js" -exec grep -l "rccdqmxwfxmtdvnvtgiz" {} \; | head -1 >/dev/null 2>&1; then
        echo -e "${GREEN}✓${NC} Supabase configuration found in build files"
    else
        echo -e "${RED}✗${NC} Supabase configuration not found in build files"
    fi
else
    echo -e "${RED}✗${NC} dist directory not found - run 'npm run build'"
fi
echo

# Check Apache/web server
echo -e "${YELLOW}6. Web Server:${NC}"
APACHE_ROOT="/var/www/html/digicinta.com"
if [[ -d "$APACHE_ROOT" ]]; then
    echo -e "${GREEN}✓${NC} Apache root directory exists: $APACHE_ROOT"
    echo "Files in web root: $(find $APACHE_ROOT -type f 2>/dev/null | wc -l) files"
    
    if [[ -f "$APACHE_ROOT/index.html" ]]; then
        echo -e "${GREEN}✓${NC} index.html exists in web root"
    else
        echo -e "${RED}✗${NC} index.html not found in web root"
    fi
else
    echo -e "${RED}✗${NC} Apache root directory not found: $APACHE_ROOT"
fi

# Check Apache service
if systemctl is-active --quiet apache2 2>/dev/null; then
    echo -e "${GREEN}✓${NC} Apache2 service is running"
elif systemctl is-active --quiet httpd 2>/dev/null; then
    echo -e "${GREEN}✓${NC} Apache (httpd) service is running"
else
    echo -e "${RED}✗${NC} Apache service not running or not found"
fi
echo

# Network connectivity test
echo -e "${YELLOW}7. Network Connectivity:${NC}"
if curl -s --connect-timeout 5 https://rccdqmxwfxmtdvnvtgiz.supabase.co/rest/v1/ >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Can reach Supabase server"
else
    echo -e "${RED}✗${NC} Cannot reach Supabase server"
fi

if curl -s --connect-timeout 5 https://api.github.com >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Internet connectivity working"
else
    echo -e "${RED}✗${NC} Internet connectivity issues"
fi
echo

# Suggested actions
echo -e "${BLUE}=== Suggested Actions ===${NC}"
echo "Based on the above checks, here's what you should do:"
echo

if [[ ! -f ".env" ]]; then
    echo -e "${YELLOW}1.${NC} Create .env file: cp .env.example .env"
    echo -e "${YELLOW}2.${NC} Edit .env file with your Supabase credentials"
fi

if [[ ! -d "node_modules" ]]; then
    echo -e "${YELLOW}3.${NC} Install dependencies: npm install"
fi

if [[ ! -d "dist" ]] || ! find dist -name "*.js" -exec grep -l "rccdqmxwfxmtdvnvtgiz" {} \; | head -1 >/dev/null 2>&1; then
    echo -e "${YELLOW}4.${NC} Rebuild application: npm run build"
fi

if [[ ! -f "$APACHE_ROOT/index.html" ]]; then
    echo -e "${YELLOW}5.${NC} Deploy to web server: ./deploy.sh"
fi

echo -e "${YELLOW}6.${NC} After making changes, restart Apache: sudo systemctl restart apache2"
echo

echo -e "${GREEN}Debug complete!${NC}"