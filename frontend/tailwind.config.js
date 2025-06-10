/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  safelist: [
    "from-blue-400",
    "via-purple-400",
    "to-pink-400",
    "from-gray-100",
    "via-gray-400",
    "to-gray-800",
    "from-emerald-300",
    "via-teal-400",
    "to-cyan-500",
    "from-rose-400",
    "via-fuchsia-500",
    "to-indigo-500",
  ],

  theme: {
    extend: {
      animation: {
        gradient: "gradient 20s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
