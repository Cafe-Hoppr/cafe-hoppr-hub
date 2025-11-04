#!/bin/bash

# Cafe Hoppr Hub - Firebase Deployment Script
# This script handles deployment to Firebase Hosting

set -e  # Exit on any error

echo "🚀 Starting Cafe Hoppr Hub deployment process..."

# Function to deploy to a specific environment
deploy_to_env() {
    local env=$1
    echo ""
    echo "📦 Deploying to $env environment..."
    
    # Remove dist folder
    echo "🧹 Removing existing dist folder..."
    rm -rf dist
    
    # Copy the appropriate .env file if it exists
    if [ -f ".env.$env" ]; then
        echo "📋 Setting up environment configuration..."
        cp ".env.$env" ".env"
        echo "✅ Using .env.$env for $env environment"
    elif [ -f ".env" ]; then
        echo "📋 Using existing .env file"
    else
        echo "ℹ️  No .env file found, proceeding without environment file"
    fi
    
    # Build the project
    echo "🔨 Building project..."
    pnpm build
    
    # Deploy to Firebase
    if [ "$env" = "stg" ] || [ "$env" = "staging" ]; then
        echo "🚀 Deploying to Firebase (staging)..."
        firebase deploy --only hosting:stg
    elif [ "$env" = "prd" ] || [ "$env" = "prod" ] || [ "$env" = "production" ]; then
        echo "🚀 Deploying to Firebase (production)..."
        firebase deploy --only hosting:prd
    else
        echo "🚀 Deploying to Firebase (default)..."
        firebase deploy --only hosting
    fi
    
    echo "✅ Successfully deployed to $env!"
}

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install it first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Parse command line arguments
case "${1:-}" in
    "stg"|"staging")
        deploy_to_env "stg"
        ;;
    "prd"|"prod"|"production")
        deploy_to_env "prd"
        ;;
    "both"|"all")
        deploy_to_env "stg"
        deploy_to_env "prd"
        ;;
    "")
        # Default deployment (no argument)
        echo ""
        echo "📦 Deploying to default environment..."
        echo "🧹 Removing existing dist folder..."
        rm -rf dist
        
        echo "🔨 Building project..."
        pnpm build
        
        echo "🚀 Deploying to Firebase Hosting..."
        firebase deploy --only hosting
        
        echo "✅ Successfully deployed!"
        ;;
    *)
        echo "Usage: $0 [stg|prd|both]"
        echo ""
        echo "Options:"
        echo "  (no args)       - Deploy to default Firebase hosting"
        echo "  stg, staging    - Deploy to staging environment only"
        echo "  prd, prod, production - Deploy to production environment only"
        echo "  both, all       - Deploy to both staging and production"
        echo ""
        echo "Examples:"
        echo "  $0              # Deploy to default hosting"
        echo "  $0 stg          # Deploy to staging"
        echo "  $0 prd          # Deploy to production"
        echo "  $0 both         # Deploy to both environments"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed successfully!"

