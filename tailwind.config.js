/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#031021',
        'background': '#fafcff',
        'primary': '#2074e9',
        'secondary': '#b0cef7',
        'secondary-light':'#eff5fe',
        'accent': '#145fc8',
       },
       
    },
  },
  plugins: [],
}
