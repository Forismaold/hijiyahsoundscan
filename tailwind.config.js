import * as daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myprimary: '#1A5319',
        mysecondary: '#508D4E',
        mybase: '#D6EFD8',
        mysecondbase: '#80AF81',
      },
  
    },
  },
  daisyui: {
    themes: ["lemonade"],
  },
  plugins: [daisyui],
}