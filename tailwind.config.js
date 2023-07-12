/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        successDark: '#10b981'
      },
      screens: {
        md2: { raw: "(min-width: 850px)" },
        clg: { raw: "(min-width: 1240px)"}
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
