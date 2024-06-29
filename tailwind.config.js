/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      10: "10px",
      cercle: "50%",
      20: "20px",
    },
    fontFamily: {
      sans: ["Merriweather"],
    },
    screens: {
      s1: { max: "1100px" },
      s2: {max : "500px"}
    },
    extend: {
      colors: {
        background: {
          primary: "#1E1E2E", // Very dark navy blue
          secondary: "#2C2C3E", // Dark grayish-blue
        },
        text: {
          primary: "#E0E0E0", // Light gray
          secondary: "#A1A1B5", // Medium gray
        },
        accent: {
          purple: "#BB86FC", // Soft purple
          cyan: "#03DAC6", // Cyan
        },
        highlight: {
          link: "#4A90E2", // Soft blue
          success: "#4CAF50", // Green
          warning: "#FFC107", // Amber
          error: "#F44336", // Red
        },
      },
    },
  },
  plugins: [],
};
