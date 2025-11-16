/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#02261c',
        secondary: '#C17A3B',
        success: '#2e7d32',
        'success-bg': '#e8f5e9',
        'gray-dark': '#333333',
        'gray-medium': '#555555',
        'gray': '#666666',
        'gray-light': '#cccccc',
        'gray-lighter': '#e0e0e0',
        'gray-lightest': '#f8f9fa',
        'bg-light': '#f0f7f4',
      },
      fontFamily: {
        primary: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        secondary: ['Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.625rem',    // 10px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.75rem',    // 28px
        '3xl': '2rem',       // 32px
        '4xl': '2.25rem',    // 36px
      },
      boxShadow: {
        'custom-sm': '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
        'custom-md': '0px 2px 10px 0px rgba(2, 38, 28, 0.3)',
        'custom-lg': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '5px',
        'lg': '8px',
        'xl': '10px',
        'full': '20px',
      },
    },
  },
  plugins: [],
}
