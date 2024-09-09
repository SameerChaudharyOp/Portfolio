/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#080808",
        lightNavbarBackground: "darkgrey",
        lightNavbarText: "#343A40",
        lightNavbarHover: "#E2E6EA",
        darkNavbarBackground: "#1B1B1B",
        darkNavbarText: "#F9FAFB",
        darkNavbarHover: "#374151",
      },
    },
  },
  plugins: [],
};
