/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/demopage.js",
    "./pages/index.js",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/header/Menu.js",
    "./src/layout/header/DefaultHeader.js",
    "./pages/services/index.js",

    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(180deg, #0C2126 0%, rgba(12, 33, 38, 0) 100%)",
        polka:
          "radial-gradient(rgb(73, 132, 6) 10%, transparent 10%)",
          main:
          " radial-gradient(rgb(73, 132, 6) 10%, transparent 10%)",
      },
      backgroundColor: {
        polka: "rgb(255, 255, 255)",
        main: "rgb(23, 2, 203;",

      },
      backgroundSize: {
        polka: "24px 24px",
        main: "16px 16px",
      },
      backgroundPosition: {
        polka: "16px 16px",
        main: "4px 4px",
      },
    },
  },
  plugins: [],
};
