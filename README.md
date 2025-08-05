# MHD Properties Website

A professional property management website for a Southern California-based company. The website features a clean, modern design with a neutral beige, black, and white color scheme.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Professional image carousel on the homepage
- About Us page with company information
- Properties listing page
- Services page detailing offered services
- Contact page with form and location information

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React Responsive Carousel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mhd-collective.git
   cd mhd-collective
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

### Setup

1. Create a GitHub repository for your project.

2. Push your code to the repository:
   ```
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/mhd-collective.git
   git push -u origin main
   ```

3. In your GitHub repository, go to Settings > Pages.

4. Under "Source", select "GitHub Actions".

### GitHub Actions Workflow

Create a `.github/workflows/deploy.yml` file in your project with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build && npm run export
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
```

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add your domain in GitHub repository Settings > Pages > Custom domain.
2. Create a `public/CNAME` file with your domain name.

## Adding Real Content

### Images

Replace the placeholder images in the `public/images` directory with your own:

- Interior design photos for the carousel (`interior1.jpg`, `interior2.jpg`, etc.)
- Property images (`property1.jpg`, `property2.jpg`, etc.)

### Content

Update the website content in the respective page files:

- `src/pages/index.tsx` - Homepage
- `src/pages/about.tsx` - About Us page
- `src/pages/properties.tsx` - Properties listing
- `src/pages/services.tsx` - Services information
- `src/pages/contact.tsx` - Contact details

## License

This project is licensed under the MIT License.
