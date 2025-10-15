/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
       'sans': ['ui-sans-serif', 'system-ui', /* ... */],
      'serif': ['ui-serif', 'Georgia', /* ... */],
      'mono': ['ui-monospace', 'SFMono-Regular', /* ... */],
      'custom': ['"Open Sans"', 'sans-serif'], // Custom font
      'another': 'Roboto, Arial, sans-serif' // Comma-delimited string

    },
    extend: {},
  },
  plugins: [],

  darkMode:"class"
}