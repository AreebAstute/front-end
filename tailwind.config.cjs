defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ipadPro: { raw: "(min-height: 1234px)" },
        lglg: "1025px",
        mdmd: "600px",
        xlxl: "1725px",
      },
      zIndex: {
        1000: "1000",
      },
      skew: {
        18: "18deg",
        n18: "-18deg",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        50: "50px",
        25: "25px",
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          text: "#4d4d4d",
          // lighter: "#e7e6e8",
          lighter: "#edeced",
          light: "#f0f0f0",
          medium: "#e0e0e0",
          dark: "#bbbdbf",
          table: "#dcdddf",
          corona: "#d3d3d3",
          consultancy: "#eeeeee",
          abc: "#ececec",
        },
        blue: {
          primary: "#093953",
          dark: "#012E7E",
          light: "#01348F",
          second_light: "#1f4559",
          third_light: "#3d5f73",
        },
        green: {
          primary: "#68b745",
          secondary: "#e0f1da",
        },
        edisu: {
          primary: "#CA3625",
          primary_light: "#CA3625CC",
          secondary: "#BA3222",
          light: "#FDF9F8",
        },
        pat: {
          primary: "#C70F64",
          primary_light: "#C70F6480",
          secondary: "#F7F6F6",
          secondary_light: "#ACC82680",
          light: "#FDF9F8",
          dark: "#52504C"
        },
        proid: {
          primary: "#C70F64",
          primary_light: "#CBD4D9",
          secondary: "#F6FBFE",
          secondary_light: "#DCEEF7",
          light: "#FDF9F8",
          dark: "#52504C"
        },
        golden: {
          text: "#FBAE39 ",
        },
        red: {
          primary: "#FF3D2E",
        },
        lineHeight: {
          '15': '5.688rem',
        },
        font: {
          primary: "#093953",
          secondary: "#68b745",
        },
      },
      height: {
        75: "75vh",
        80: "80vh",
        90: "90vh",
        100: "50rem",
        70: "30rem",
        85: "36rem",
        600: "600px",
        450: "450px",
        200: "200px",
      },
      width: {
        300: "300px",
        200: "200px",
        250: "250px",
        280: "280px",
        180: "180px",
        320: "320px",
        350: "350px",
        450: "450px",
        310: "310rem",
        600: "600px",
      },
      margin: {
        350: "350px",
        13: "13%",
      },
      // backgroundImage: {
      //   'hero-pattern': "url('/Images/landing-page-assets/pattern1-webp.webp')",
      //  },
      // backgroundImage:{
      //  "desktopFooter":"url('/images/footerAssets/baground-webp.webp')",
      //   "mobileFooter":"url('/Images/footerAssets/mobile_footer-webp.webp')"
      // },
      maxWidth: {
        "product-hero": "400px",
        "game-card": "400px",
        "small-game-card": "300px",
      },
      minWidth: {
        400: "300px",
        640: "640px",
        200: "200px",
        90: "90px",
      },
      minHeight: {
        400: "400px",
        200: "200px",
        300: "300px",
        80: "80vh",
        90: "90vh",
        100: "100vh",
      },
      fontSize: {
        xss: "0.50rem",
      },
    },

    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      "fixed-height": "90% 100%",
      "mobile-view": "100% 100%",
      "95%": "95%",
      16: "4rem",
      32: "8rem",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even", "odd", "hover", "disabled"],
      backgroundColor: ["checked", "disabled"],
      borderColor: ["checked"],
      width: ["responsive", "hover", "focus"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
