#!/bin/bash

# Fix file permissions for DigiCinta project
# Run this script to fix ownership issues

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== Fixing DigiCinta Project Permissions ===${NC}\n"

# Get current user
CURRENT_USER=$(whoami)
echo "Current user: $CURRENT_USER"

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
    echo -e "${RED}Error: Not in DigiCinta project directory${NC}"
    exit 1
fi

PROJECT_DIR=$(pwd)
echo "Project directory: $PROJECT_DIR"

# Fix ownership of project files
echo -e "\n${YELLOW}Fixing file ownership...${NC}"
sudo chown -R $CURRENT_USER:$CURRENT_USER $PROJECT_DIR

# Fix permissions
echo -e "${YELLOW}Setting correct permissions...${NC}"
find $PROJECT_DIR -type f -name "*.sh" -exec chmod +x {} \;
find $PROJECT_DIR -type f ! -name "*.sh" -exec chmod 644 {} \;
find $PROJECT_DIR -type d -exec chmod 755 {} \;

# Fix node_modules if it exists
if [[ -d "node_modules" ]]; then
    echo -e "${YELLOW}Fixing node_modules permissions...${NC}"
    chmod -R 755 node_modules
fi

# Fix .git directory
if [[ -d ".git" ]]; then
    echo -e "${YELLOW}Fixing git permissions...${NC}"
    chmod -R 755 .git
fi

# Test if we can now run commands without sudo
echo -e "\n${YELLOW}Testing permissions...${NC}"

if npm --version >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} npm commands work without sudo"
else
    echo -e "${RED}✗${NC} npm still requires sudo"
fi

if git status >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} git commands work without sudo"
else
    echo -e "${RED}✗${NC} git still requires sudo"
fi

if [[ -w "package.json" ]]; then
    echo -e "${GREEN}✓${NC} Files are writable without sudo"
else
    echo -e "${RED}✗${NC} Files still require sudo"
fi

# Check Apache web directory permissions
APACHE_ROOT="/var/www/html/digicinta.com"
if [[ -d "$APACHE_ROOT" ]]; then
    echo -e "\n${YELLOW}Checking Apache directory...${NC}"
    APACHE_OWNER=$(stat -c '%U' "$APACHE_ROOT" 2>/dev/null || echo "unknown")
    echo "Apache directory owner: $APACHE_OWNER"
    
    if [[ "$APACHE_OWNER" != "$CURRENT_USER" && "$APACHE_OWNER" != "www-data" ]]; then
        echo -e "${YELLOW}Note: Apache directory is owned by $APACHE_OWNER${NC}"
        echo -e "${BLUE}You may need to run: sudo chown -R www-data:www-data $APACHE_ROOT${NC}"
    fi
fi

echo -e "\n${GREEN}Permission fix complete!${NC}"
echo -e "${BLUE}You should now be able to run commands without sudo:${NC}"
echo "  npm install"
echo "  npm run build" 
echo "  git pull"
echo "  git status"