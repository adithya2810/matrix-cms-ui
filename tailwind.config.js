module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: "#2C2E30",
        DEFAULT: "#1B1919",
        dark: "#000000",
      },
      secondary: {
        light: "#FFFFFF",
        DEFAULT: "#EBEBE9",
      },
      accent: {
        light: "#0EAEB1",
        DEFAULT: "#01576E",
        dark: "#083A4A",
      },
      cta: {
        DEFAULT: "#5DE2A1",
      },
    },
    fontFamily: {
      sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
