/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      midnightgreen: "#014E56",
      lightcoral: "#F67E7E",
      white: "#FFFFFF",
      secondary: {
        raptureblue: "#79C8C7",
        policeblue: "#2C6269",
        deepjunglegreen: "#004047",
        sacramentogreen: "#012F34",
        darkgreen: "#002529"
      }
    },
    fontFamily: {
      display: ["Livvic", "sans-serif"],
      body: ["Livvic", "sans-serif"]
    },
    screens: {
      mobile: "375px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px"
    },
    fontSize: {
      tiny: ".833rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2.223rem",
      "4xl": "2.223rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    lineHeight: {
      "2xl": "1.55rem",
      "3xl": "2.223rem"
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
      10: "40px",
      12: "48px",
      16: "64px",
      20: "80px",
      24: "96px",
      32: "128px",
      40: "160px",
      48: "192px",
      56: "224px",
      64: "327px"
    }
  },
  variants: {},
  plugins: []
};
