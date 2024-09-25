/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBackgroundImage: "url('/src/assets/background-image.jpg')",
        cardBackgroundImage: "url('/src/assets/bg-image.jpg')",
      },
      boxShadow: {
        custom: "0px 0px 30px #001A3E",
      },
    },
  },
  plugins: [],
};
