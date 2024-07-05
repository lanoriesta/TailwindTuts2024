/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536",
    },
    colors: {
      blue: "#85C1E9",
      green: "#76D7C4",
      white: "#FBFCFC",
    },
    fontFamily: {
      display: ["Oswald"],
    },
  },
  plugins: [],
};
