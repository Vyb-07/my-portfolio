/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#e2e8f0', // slate-200
          text: '#0f172a', // slate-900
          accent: '#fdba74', // orange-300
          primary: '#3b82f6', // blue-500
          border: '#000000',
        }
      },
      boxShadow: {
        neo: '5px 5px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '3px 3px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      borderRadius: {
        neo: '12px',
      }
    },
  },
  plugins: [],
}
