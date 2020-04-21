module.exports = {
  theme: {
    extend: {
      screens: {
        lg: "1024px",
        xl: "1110px"
      },
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
      spacing: {
        28: "7rem",
        68: "16.77rem",
      },
      fontSize: {
        xtiny: "0.722rem",
        tiny: ".833rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.778rem",
        "4xl": "2.223rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem"
      },
      letterSpacing: {
        tightest: "-0.0583rem",
        tighter: "-0.038rem",
        tight: "-0.0138rem",
        wide: "0.0061rem"
      },
      lineHeight: {
        "1": "1rem",
        "xl": "1.38rem",
        "2xl": "1.55rem",
        "3xl": "1.778rem",
        "4xl": "2.223rem"
      },
      inset: {
        "1/2": "50%",
        "3/4": "75%"
      },
      opacity: {
        '60': '.6',
        '80': '.8'
      }
    },
    fontFamily: {
      display: ["Livvic", "sans-serif"],
      body: ["Livvic", "sans-serif"]
    }
  },
  variants: {
    boxShadow: ["responsive", "focus", "active", "focus-within"]
  }
};
