/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "0px",

      md: "640px",

      lg: "768px",
    },
  },
  plugins: [],
};
