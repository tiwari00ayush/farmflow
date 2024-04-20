/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropup: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%,0)",
          },
          "100%": { opacity: "1", transform: "translate(-50%,-50%)" },
        },
      },
    },
  },
  plugins: [],
};
