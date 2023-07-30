/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      boxShadow: {
        primary: "0px 25px 50px -12px rgba(255, 119, 34, 0.886)",
      },
    },
  },
  plugins: [],
};
