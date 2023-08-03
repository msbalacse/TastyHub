/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "cart-color": "var(--cart)",
      },
      boxShadow: {
        primary: "0px 25px 50px -12px rgba(255, 119, 34, 0.886)",
      },
      fontFamily: {
        nunito: "Nunito, sans-serif",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      },
      filter: {
        grayscale: "grayscale(100%)",
        blur: "blur(4px)",
        // Add more custom filter options as needed
      },
    },
  },
  plugins: [],
};
