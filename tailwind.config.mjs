/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#fcfbf9',
        surface: '#ffffff',
        border: '#E6E4DD',
        ink: {
          DEFAULT: '#1c1b1a',
          light: '#4b4a49',
          lighter: '#8b8a89',
        },
        brand: {
          50: '#f9f6f5',
          100: '#f1e8e5',
          200: '#dfcec8',
          300: '#caa89f',
          400: '#b48174',
          500: '#c05c3c', // Claude-like clay/terracotta accent
          600: '#a3482c',
          700: '#843821',
          800: '#692d1b',
          900: '#552618',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
