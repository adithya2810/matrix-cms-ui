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
      blue: {
        DEFAULT: "#007BFF",
      },
      input: {
        DEFAULT: "#FBF9F5"
      }
    },
    fontFamily: {
      sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      laptop: {
        min: "640px"
      }
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "7xl-m": "5.5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
    },
    extend: {
      lineHeight: {
        '3.5': '0.875rem',
        '4.5': '1.125rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
