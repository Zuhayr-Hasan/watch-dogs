/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default sans-serif font
        chakra: ["Chakra Petch", "sans-serif"], // Additional custom font family
      },
      colors: {
        primary: "#000000",
        secondary: "#445555",
        tertiary: "#444444",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      boxShadow: {
        custom: "0px 2px 5px #aaa",
      },
      animation: {
        fadeInUp: "fadeInUp 2s ease-out",
      },
    },
  },
  plugins: [],
};
