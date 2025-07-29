#!/bin/bash

# DigiCinta Quick Deployment Script
# Fast deployment without full checks (use for quick updates)

set -e

# Configuration
APACHE_ROOT="/var/www/html/digicinta.com"
BUILD_DIR="dist"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Quick Deploy: DigiCinta Website${NC}"
echo "========================================="

# Build
echo "Building..."
npm run build

# Deploy
echo "Deploying to $APACHE_ROOT..."
sudo mkdir -p "$APACHE_ROOT"
sudo cp -r "$BUILD_DIR"/* "$APACHE_ROOT"/
sudo chown -R www-data:www-data "$APACHE_ROOT"
sudo chmod -R 755 "$APACHE_ROOT"

echo -e "${GREEN}✅ Quick deployment complete!${NC}"
echo "Files deployed to: $APACHE_ROOT"