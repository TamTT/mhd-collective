/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          light: '#F5F5DC',
          DEFAULT: '#E8E4C9',
          dark: '#D6CCA9',
        },
        'neutral': {
          light: '#F8F8F8',
          DEFAULT: '#E0E0E0',
          dark: '#A0A0A0',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}
