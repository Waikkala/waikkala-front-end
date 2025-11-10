# Waikkala Grinding Mills - Product Page

A fully responsive React product page for Ceylon Raga Reserve Masala Brew, built with modern web technologies following industry best practices.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Modern Stack**: Built with React, Vite, and Tailwind CSS
- **Component-Based Architecture**: Organized into base, composite, and container components
- **Type-Safe**: PropTypes validation for all components
- **Code Quality**: ESLint + Prettier for consistent, clean code
- **Performance Optimized**: Fast loading with Vite's HMR
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 📋 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📂 Folder Structure

```
waikkala-product-page/
├── src/
│   ├── assets/              # Static assets (images, icons, fonts)
│   ├── components/          # React components organized by complexity
│   │   ├── base/            # Basic building blocks (Button, Input, Badge, Icon, Logo)
│   │   ├── composite/       # Composite components (SearchBar, QuantitySelector, ProductImage, etc.)
│   │   └── containers/      # Complex containers (Header, Footer, ProductDetails, TabsSection)
│   ├── pages/               # Page-level components
│   │   └── ProductPage.jsx  # Main product page
│   ├── styles/              # Global styles and CSS variables
│   │   ├── index.css        # Main stylesheet with Tailwind imports
│   │   └── variables.css    # Design tokens and CSS custom properties
│   ├── utils/               # Utility functions and data
│   │   └── assets.js        # Asset URLs and product data
│   ├── App.jsx              # Root application component
│   └── main.jsx             # Application entry point
├── public/                  # Public static files
├── .prettierrc              # Prettier configuration
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## 🎨 Design System

### Color Palette

```css
Primary Colors:
  --color-primary: #02261c     /* Holly - Dark green */
  --color-secondary: #d4a574   /* Confetti - Orange/tan */

Grays:
  --color-gray-20: #333333
  --color-gray-40: #666666
  --color-gray-80: #cccccc
  --color-gray-lightest: #f8f9fa

Accent Colors:
  --color-success: #2e7d32     /* Green for in-stock */
  --color-success-bg: #e8f5e9  /* Light green background */
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed
- Modern web browser

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customizing the Design

### Updating Colors

**Edit Tailwind config** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
    }
  }
}
```

**Or update CSS variables** (`src/styles/variables.css`):
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
}
```

### Updating Product Data

Edit `src/utils/assets.js` to update:
- Product information (title, price, weight)
- Product images
- Tab content (description, ingredients, etc.)
- Social media links

## 📱 Responsive Design

The application is built with a mobile-first approach and includes breakpoints for:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Hosting

The built files can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push `dist` to gh-pages branch

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind classes not applying**: Restart the dev server
2. **Images not loading**: Check asset URLs in `src/utils/assets.js`
3. **Build errors**: Run `npm install` to ensure all dependencies are installed

---

**Built with ❤️ for Waikkala Grinding Mills**
