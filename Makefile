# Portfolio Website Makefile
# Author: Bhavik Patel
# Description: Development and deployment commands for React TypeScript portfolio

# Variables
PROJECT_NAME := bhavik-portfolio
NODE_VERSION := 18
DIST_DIR := dist
GITHUB_REPO := bp0609.github.io
GITHUB_BRANCH := main
PORT := 3000

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[0;33m
BLUE := \033[0;34m
NC := \033[0m # No Color

# Default target
.PHONY: help
help:
	@echo "$(BLUE)🚀 Portfolio Website Makefile$(NC)"
	@echo "$(YELLOW)Available commands:$(NC)"
	@echo ""
	@echo "$(GREEN)Development:$(NC)"
	@echo "  make install     - Install dependencies"
	@echo "  make dev         - Start development server"
	@echo "  make build       - Build for production"
	@echo "  make preview     - Preview production build"
	@echo "  make clean       - Clean build artifacts"
	@echo ""
	@echo "$(GREEN)Code Quality:$(NC)"
	@echo "  make lint        - Run ESLint"
	@echo "  make lint-fix    - Fix ESLint issues"
	@echo "  make format      - Format code with Prettier"
	@echo "  make type-check  - Run TypeScript type checking"
	@echo "  make check-all   - Run all checks (lint, format, type-check)"
	@echo ""
	@echo "$(GREEN)Testing & Analysis:$(NC)"
	@echo "  make analyze     - Analyze bundle size"
	@echo "  make deps-check  - Check for outdated dependencies"
	@echo "  make deps-update - Update dependencies"
	@echo ""
	@echo "$(GREEN)Deployment:$(NC)"
	@echo "  make deploy      - Deploy to GitHub Pages"
	@echo "  make deploy-dry  - Dry run deployment"
	@echo "  make pages-setup - Setup GitHub Pages configuration"
	@echo ""
	@echo "$(GREEN)Git Operations:$(NC)"
	@echo "  make commit      - Add, commit and push changes"
	@echo "  make status      - Show git status"
	@echo "  make push        - Push to remote repository"
	@echo ""
	@echo "$(GREEN)Utilities:$(NC)"
	@echo "  make backup      - Backup current project"
	@echo "  make restore     - Restore from backup"
	@echo "  make reset       - Reset to clean state"
	@echo "  make info        - Show project information"

# Installation and Setup
.PHONY: install
install:
	@echo "$(BLUE)📦 Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)✅ Dependencies installed successfully!$(NC)"

.PHONY: install-clean
install-clean:
	@echo "$(BLUE)🧹 Clean installing dependencies...$(NC)"
	rm -rf node_modules package-lock.json
	npm install
	@echo "$(GREEN)✅ Clean installation completed!$(NC)"

# Development Commands
.PHONY: dev
dev:
	@echo "$(BLUE)🚀 Starting development server on port $(PORT)...$(NC)"
	@echo "$(YELLOW)Open http://localhost:$(PORT) in your browser$(NC)"
	npm run dev

.PHONY: build
build:
	@echo "$(BLUE)🏗️  Building for production...$(NC)"
	npm run build
	@echo "$(GREEN)✅ Build completed! Files are in $(DIST_DIR)/$(NC)"

.PHONY: preview
preview:
	@echo "$(BLUE)👀 Starting preview server...$(NC)"
	npm run preview

.PHONY: clean
clean:
	@echo "$(BLUE)🧹 Cleaning build artifacts...$(NC)"
	rm -rf $(DIST_DIR)
	rm -rf node_modules/.vite
	@echo "$(GREEN)✅ Cleaned successfully!$(NC)"

# Code Quality
.PHONY: lint
lint:
	@echo "$(BLUE)🔍 Running ESLint...$(NC)"
	npm run lint

.PHONY: lint-fix
lint-fix:
	@echo "$(BLUE)🔧 Fixing ESLint issues...$(NC)"
	npm run lint -- --fix
	@echo "$(GREEN)✅ ESLint fixes applied!$(NC)"

.PHONY: format
format:
	@echo "$(BLUE)💅 Formatting code with Prettier...$(NC)"
	npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"
	@echo "$(GREEN)✅ Code formatted successfully!$(NC)"

.PHONY: type-check
type-check:
	@echo "$(BLUE)🔍 Running TypeScript type checking...$(NC)"
	npx tsc --noEmit
	@echo "$(GREEN)✅ Type checking passed!$(NC)"

.PHONY: check-all
check-all: lint type-check
	@echo "$(GREEN)✅ All checks passed!$(NC)"

# Testing and Analysis
.PHONY: analyze
analyze:
	@echo "$(BLUE)📊 Analyzing bundle size...$(NC)"
	npm run build
	npx vite-bundle-analyzer $(DIST_DIR)

.PHONY: deps-check
deps-check:
	@echo "$(BLUE)🔍 Checking for outdated dependencies...$(NC)"
	npm outdated

.PHONY: deps-update
deps-update:
	@echo "$(BLUE)⬆️  Updating dependencies...$(NC)"
	npm update
	@echo "$(GREEN)✅ Dependencies updated!$(NC)"

# Deployment Commands
.PHONY: deploy
deploy: build
	@echo "$(BLUE)🚀 Deploying to GitHub Pages...$(NC)"
	npm run deploy
	@echo "$(GREEN)✅ Deployed successfully to https://bp0609.github.io$(NC)"

.PHONY: deploy-dry
deploy-dry: build
	@echo "$(BLUE)🧪 Dry run deployment to GitHub Pages...$(NC)"
	npx gh-pages -d $(DIST_DIR) --dry-run
	@echo "$(YELLOW)📋 Dry run completed - no files were actually deployed$(NC)"

.PHONY: pages-setup
pages-setup:
	@echo "$(BLUE)⚙️  Setting up GitHub Pages configuration...$(NC)"
	@echo "Creating .nojekyll file..."
	touch $(DIST_DIR)/.nojekyll
	@echo "Creating CNAME file (if custom domain needed)..."
	@echo "# Uncomment and edit if using custom domain:" > $(DIST_DIR)/CNAME.example
	@echo "# your-domain.com" >> $(DIST_DIR)/CNAME.example
	@echo "$(GREEN)✅ GitHub Pages setup completed!$(NC)"
	@echo "$(YELLOW)📝 Remember to:$(NC)"
	@echo "  1. Enable GitHub Pages in repository settings"
	@echo "  2. Set source to 'gh-pages' branch"
	@echo "  3. Configure custom domain if needed"

# Git Operations
.PHONY: status
status:
	@echo "$(BLUE)📊 Git status:$(NC)"
	git status

.PHONY: commit
commit:
	@echo "$(BLUE)📝 Adding and committing changes...$(NC)"
	git add .
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg"
	@echo "$(GREEN)✅ Changes committed!$(NC)"

.PHONY: push
push:
	@echo "$(BLUE)⬆️  Pushing to remote repository...$(NC)"
	git push origin $(GITHUB_BRANCH)
	@echo "$(GREEN)✅ Changes pushed successfully!$(NC)"

.PHONY: commit-push
commit-push: commit push
	@echo "$(GREEN)✅ Changes committed and pushed!$(NC)"

# Backup and Restore
.PHONY: backup
backup:
	@echo "$(BLUE)💾 Creating backup...$(NC)"
	@timestamp=$$(date +%Y%m%d_%H%M%S); \
	tar -czf "backup_$$timestamp.tar.gz" \
		--exclude=node_modules \
		--exclude=$(DIST_DIR) \
		--exclude=.git \
		--exclude="*.tar.gz" \
		.
	@echo "$(GREEN)✅ Backup created: backup_$$(date +%Y%m%d_%H%M%S).tar.gz$(NC)"

.PHONY: restore
restore:
	@echo "$(YELLOW)⚠️  Available backups:$(NC)"
	@ls -la backup_*.tar.gz 2>/dev/null || echo "No backups found"
	@echo "$(BLUE)To restore, run: tar -xzf backup_TIMESTAMP.tar.gz$(NC)"

.PHONY: reset
reset:
	@echo "$(RED)⚠️  This will reset your working directory to clean state!$(NC)"
	@read -p "Are you sure? (y/N): " confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		git clean -fd; \
		git reset --hard HEAD; \
		echo "$(GREEN)✅ Reset completed!$(NC)"; \
	else \
		echo "$(YELLOW)❌ Reset cancelled$(NC)"; \
	fi

# Utilities
.PHONY: info
info:
	@echo "$(BLUE)📋 Project Information:$(NC)"
	@echo "Project Name: $(PROJECT_NAME)"
	@echo "Node Version: $(NODE_VERSION)"
	@echo "Port: $(PORT)"
	@echo "Build Directory: $(DIST_DIR)"
	@echo "GitHub Repository: $(GITHUB_REPO)"
	@echo "GitHub Branch: $(GITHUB_BRANCH)"
	@echo ""
	@echo "$(BLUE)📦 Dependencies:$(NC)"
	@npm list --depth=0 2>/dev/null || echo "Run 'make install' first"
	@echo ""
	@echo "$(BLUE)📊 Project Stats:$(NC)"
	@echo "Source files: $$(find src -name '*.ts' -o -name '*.tsx' | wc -l | tr -d ' ')"
	@echo "Component files: $$(find src/components -name '*.tsx' 2>/dev/null | wc -l | tr -d ' ')"
	@echo "Total lines of code: $$(find src -name '*.ts' -o -name '*.tsx' | xargs wc -l 2>/dev/null | tail -1 | awk '{print $$1}' || echo 0)"

# Quick development workflow
.PHONY: start
start: install dev

.PHONY: quick-deploy
quick-deploy: check-all build deploy
	@echo "$(GREEN)🎉 Quick deployment completed!$(NC)"

# Production workflow
.PHONY: production
production: clean install check-all build deploy
	@echo "$(GREEN)🎉 Full production deployment completed!$(NC)"

# Development workflow
.PHONY: setup
setup:
	@echo "$(BLUE)🔧 Setting up development environment...$(NC)"
	@which node >/dev/null || (echo "$(RED)❌ Node.js not found. Please install Node.js $(NODE_VERSION)+$(NC)" && exit 1)
	@which npm >/dev/null || (echo "$(RED)❌ npm not found. Please install npm$(NC)" && exit 1)
	@echo "$(GREEN)✅ Node.js and npm found$(NC)"
	make install
	@echo "$(GREEN)🎉 Development environment setup completed!$(NC)"
	@echo "$(YELLOW)💡 Run 'make dev' to start development server$(NC)"

# Clean all (nuclear option)
.PHONY: clean-all
clean-all:
	@echo "$(RED)⚠️  This will remove ALL generated files and dependencies!$(NC)"
	@read -p "Are you sure? (y/N): " confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		rm -rf node_modules $(DIST_DIR) package-lock.json; \
		echo "$(GREEN)✅ All cleaned!$(NC)"; \
	else \
		echo "$(YELLOW)❌ Clean cancelled$(NC)"; \
	fi

# Check if required tools are installed
.PHONY: check-tools
check-tools:
	@echo "$(BLUE)🔍 Checking required tools...$(NC)"
	@which node >/dev/null && echo "$(GREEN)✅ Node.js found$(NC)" || echo "$(RED)❌ Node.js not found$(NC)"
	@which npm >/dev/null && echo "$(GREEN)✅ npm found$(NC)" || echo "$(RED)❌ npm not found$(NC)"
	@which git >/dev/null && echo "$(GREEN)✅ git found$(NC)" || echo "$(RED)❌ git not found$(NC)"