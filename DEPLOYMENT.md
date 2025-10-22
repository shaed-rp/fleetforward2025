# Deployment Guide

This guide provides detailed instructions for deploying the Chinese EV Impact landing page to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build Configuration](#build-configuration)
- [Deployment Options](#deployment-options)
  - [Vercel](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Custom Server](#custom-server)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18 or higher installed
- pnpm installed (`npm install -g pnpm`)
- Git repository set up
- Account on your chosen hosting platform

## Build Configuration

The project uses Vite for building. The configuration is in `vite.config.ts`:

```typescript
export default defineConfig({
  root: "./client",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // ... other config
});
```

## Deployment Options

### Vercel (Recommended)

Vercel provides the easiest deployment experience with automatic builds and deployments.

#### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects the configuration
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Configuration**: Vercel auto-detects settings, but you can customize with `vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "client/dist",
  "framework": "vite"
}
```

### Netlify

Netlify offers similar ease of deployment with excellent CDN performance.

#### Option 1: Deploy via Netlify Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `client/dist`
   - Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Build and deploy
pnpm build
netlify deploy --prod
```

**Configuration**: Create `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "client/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

GitHub Pages is free and works well for static sites.

#### Setup Steps

1. **Update Vite Config**

   Edit `vite.config.ts` to add base path:

   ```typescript
   export default defineConfig({
     base: '/chinese-ev-landing/', // Replace with your repo name
     root: "./client",
     // ... rest of config
   });
   ```

2. **Build the Project**
   ```bash
   pnpm build
   ```

3. **Deploy to gh-pages Branch**

   **Option A: Manual Deployment**
   ```bash
   cd client/dist
   git init
   git add -A
   git commit -m 'Deploy to GitHub Pages'
   git push -f git@github.com:yourusername/chinese-ev-landing.git main:gh-pages
   cd ../..
   ```

   **Option B: Using gh-pages Package**
   ```bash
   # Install gh-pages
   pnpm add -D gh-pages

   # Add deploy script to package.json
   # "scripts": {
   #   "deploy": "pnpm build && gh-pages -d client/dist"
   # }

   # Deploy
   pnpm deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

5. **Access Your Site**
   - URL: `https://yourusername.github.io/chinese-ev-landing/`

#### GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./client/dist
```

### Custom Server

Deploy to your own server using Docker or direct deployment.

#### Using Docker

1. **Create Dockerfile**

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create nginx.conf**

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Build and Run**

```bash
# Build Docker image
docker build -t chinese-ev-landing .

# Run container
docker run -d -p 80:80 chinese-ev-landing
```

#### Direct Server Deployment

1. **Build locally**
   ```bash
   pnpm build
   ```

2. **Upload to server**
   ```bash
   rsync -avz client/dist/ user@yourserver:/var/www/chinese-ev-landing/
   ```

3. **Configure web server** (Nginx example)

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/chinese-ev-landing;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Post-Deployment

### Verify Deployment

1. Check that all pages load correctly
2. Test on mobile devices
3. Verify all assets load (images, fonts, icons)
4. Test navigation and interactions

### Performance Optimization

- Enable CDN caching
- Configure compression (gzip/brotli)
- Set appropriate cache headers
- Monitor Core Web Vitals

### Custom Domain Setup

Most platforms support custom domains:

1. Add domain in platform settings
2. Update DNS records:
   - **A Record**: Point to platform IP
   - **CNAME**: Point to platform domain
3. Wait for DNS propagation (up to 48 hours)
4. Enable HTTPS/SSL

## Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear cache: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
- Check for TypeScript errors: `pnpm type-check`

### 404 Errors

- Ensure base path is correct in `vite.config.ts`
- Configure server to serve `index.html` for all routes
- Check publish directory is correct

### Assets Not Loading

- Verify base path configuration
- Check asset paths are relative or absolute
- Ensure build output includes all assets

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Open an issue on GitHub

---

**Happy Deploying! 🚀**

