/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors : {
        "cherry-blossom-pink": "#FBB9C5",
        "apricot": "#FDD0B1",
        "lemon-chiffon": "#F9EFC7",
        "tea-green": "#C3EDBF",
        "light-blue": "#B8DFE6",
        "thistle": "#C5BBDE",
        "bright-pink": "#F2626B",
        "xanthous": "#FEBA4F",
        "jasmine": "#FFEA7F",
        "light-green": "#89E077",
        "maya-blue": "#83C3FF",
        "lavender": "#C381FD",
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
