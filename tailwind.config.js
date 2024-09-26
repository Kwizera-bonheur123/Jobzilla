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
        boxShadow: "0px 0px 20px #F2F2F2",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [],
};
