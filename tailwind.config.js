/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Replace with original data
    fontFamily: {
      sans: "Roboto Mono,monospace",
    },

    // Keep tailwind data and add these
    extend: {
      colors: {
        palegreen: "#DEFEE1",
      },

      keyframes: {
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(1.1)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },

        slideIn: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
      },

      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },

      // !!! IMPORTANT !!!
      // New CSS property. dynamic view height. to fix 100vh issue on mobile screens.
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
