/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "primary-color": "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
