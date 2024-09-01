/** @type {import('tailwindcss').Config} */
import moduleName from "./src/assets/background-image.jpg";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBackgroundImage: "url('/src/assets/background-image.jpg')",
      },
    },
  },
  plugins: [],
};
