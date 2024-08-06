/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(240,147,251,1) 0%, rgba(245,87,108,1) 100%)",
      },
      colors: {
        grisClaro: "#dbdbdb",
        blueClaro: "#0095f6",
        grisOscuro: "#2d2d2c",
        blackOscuro: "#242424",
      },
    },
  },
  plugins: [],
};
