/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#3577f0",
        secondary: "#ff497c",
        body: "#777777",
        heading: "#292930",
        light: {
          DEFAULT: "#F6F7FB",
          primary: "#8c71db",
        },
        lighter: "#F6F7FB",
        lightest: "#C4C4C4",
        dark: "#27272E",
      },
      boxShadow: {
        discount: "0 8px 16px 0 rgb(53 119 240 / 30%)",
        explore: "0 16px 32px 0 rgb(103 103 103 / 6%)",
        featured: "0px 10px 80px -87px rgb(0 0 0 / 50%)",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': '1400px',
        '3xl': '1600px',
      },
      maxWidth: {
        'screen-sm': '540px',
        'screen-md': '720px',
        'screen-lg': '960px',
        'screen-xl': '1140px',
        'screen-2xl': '1320px',
        'screen-3xl': '1500px',
      },
      
    },
  },
  plugins: [],
}
