# 🚀 Makefile Guide for Portfolio Website

This guide covers all the available Makefile commands for developing, building, and deploying your React TypeScript portfolio.

## 📋 Quick Start

```bash
# Setup development environment
make setup

# Start development server
make dev

# Quick deployment to GitHub Pages
make quick-deploy
```

## 🏗️ Development Commands

### Installation & Setup
```bash
make install        # Install all dependencies
make install-clean  # Clean install (removes node_modules first)
make setup         # Full development environment setup
make check-tools   # Verify required tools are installed
```

### Development Server
```bash
make dev           # Start development server on port 3000
make start         # Alias for: install + dev
```

### Building
```bash
make build         # Build for production
make preview       # Preview production build locally
make clean         # Clean build artifacts
make clean-all     # Remove everything (nuclear option)
```

## ✅ Code Quality

### Linting & Formatting
```bash
make lint          # Run ESLint
make lint-fix      # Fix ESLint issues automatically
make format        # Format code with Prettier
make type-check    # Run TypeScript type checking
make check-all     # Run all checks (lint + type-check)
```

### Analysis & Dependencies
```bash
make analyze       # Analyze bundle size
make deps-check    # Check for outdated dependencies
make deps-update   # Update all dependencies
```

## 🚀 Deployment

### GitHub Pages Deployment
```bash
make deploy        # Build and deploy to GitHub Pages
make deploy-dry    # Dry run (test without deploying)
make pages-setup   # Setup GitHub Pages configuration
make production    # Full production workflow (clean + install + check + build + deploy)
```

### Quick Workflows
```bash
make quick-deploy  # check-all + build + deploy
make production    # Complete production deployment
```

## 📝 Git Operations

```bash
make status        # Show git status
make commit        # Add all files and commit (prompts for message)
make push          # Push to remote repository
make commit-push   # Commit and push in one command
```

## 💾 Backup & Recovery

```bash
make backup        # Create timestamped backup
make restore       # Show available backups (manual restore)
make reset         # Reset working directory to clean state
```

## 📊 Project Information

```bash
make info          # Show project statistics and information
make help          # Show all available commands
```

## 🔧 Configuration

The Makefile uses these default settings (can be modified at the top of Makefile):

```makefile
PROJECT_NAME := bhavik-portfolio
NODE_VERSION := 18
DIST_DIR := dist
GITHUB_REPO := bp0609.github.io
GITHUB_BRANCH := main
PORT := 3000
```

## 🎯 Common Workflows

### Daily Development
```bash
# Start working
make dev

# Before committing
make check-all
make commit-push
```

### Deploying Changes
```bash
# Quick deployment
make quick-deploy

# Full production deployment
make production
```

### Setting Up New Environment
```bash
# First time setup
make setup
make dev
```

### Troubleshooting
```bash
# Clean everything and start fresh
make clean-all
make setup

# Check tools and dependencies
make check-tools
make deps-check
```

## 🌐 GitHub Pages Setup

### Initial Setup
1. Run `make pages-setup` after building
2. Go to GitHub repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The automated workflow will handle deployment

### Manual Deployment
```bash
# Deploy manually
make deploy

# Test deployment without publishing
make deploy-dry
```

### Automatic Deployment
The project includes GitHub Actions workflow that automatically:
- Runs on every push to main branch
- Installs dependencies
- Runs linting and type checking
- Builds the project
- Deploys to GitHub Pages

## 🚨 Troubleshooting

### Common Issues

**Node.js not found:**
```bash
# Install Node.js 18+ and try again
make check-tools
```

**Permission denied:**
```bash
# Make sure Makefile is executable
chmod +x Makefile
```

**Build failures:**
```bash
# Clean and rebuild
make clean
make install-clean
make build
```

**Deployment issues:**
```bash
# Check GitHub Pages settings
make deploy-dry  # Test without deploying
make pages-setup # Reconfigure GitHub Pages
```

## 💡 Tips

1. **Use `make help`** to see all available commands
2. **Run `make check-all`** before committing code
3. **Use `make info`** to get project statistics
4. **Create backups** with `make backup` before major changes
5. **Use `make production`** for complete deployment workflow

## 🎨 Customization

To customize the Makefile for your needs:

1. Edit variables at the top of the Makefile
2. Add new targets following the existing pattern
3. Update help text when adding new commands
4. Use color codes for better output formatting

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Make Documentation](https://www.gnu.org/software/make/manual/)