/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'tk': {
          'brown': '#41351E',
          'black': '#43351a',
          'cream': '#DAD3B1',
          'blue': '#3169C6',
          'green': '#388349',
          'dark-orange': '#C78133',
          'light-orange': '#e07d28',
          'bg-light': '#faf9f5'
        }
      }
    },
  },
  plugins: [],
};
