module.exports = {
  theme: {
    extend: {
      colors: {
        "chica-dark-green": "#065760",
        "chica-dark": "#700548",
        "chica-orange": "#FF7A33",
        "chica-light-violet": "#886E95",

        "chica-red": "#EE2F36",
        "chica-light-yellow": "#FDEFD8",
        "chica-pink": "#fde0d8",
        "chica-light-pink": "#FEF0EC",
        "chica-light-orange": "#FBF5E6",
      },

      fontFamily: {
        handwritten: ["Nothing You Could Do", "Verdana"],
        mine: ["Aleo"],
      },

      spacing: {
        "14": "3.5rem",
        "28": "7rem",
        "44": "11rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "104": "27rem",
        "112": "30rem",
        "116": "31.5rem",
        "120": "33rem",
        "128": "36rem",
        "130": "38rem",
        "144": "39.5rem",
        "160": "43rem",
        "192": "50rem",
        "256": "64rem",
        "384": "96rem",
        "512": "128rem",
      },
      borderWidth: {
        "1": "1px",
        "3": "3px",
        "5": "5px",
        "6": "6px",
        "8": "8px",
      },
      opacity: {
        "80": "0.80",
        "85": "0.85",
        "90": "0.90",
        "95": "0.95",
      },
    },
    variants: {},
    plugins: [
      //   function({ addComponents }) {
      //     addComponents({
      //       ".container": {
      //         maxWidth: "100%",
      //         "@screen sm": {
      //           maxWidth: "640px"
      //         },
      //         "@screen md": {
      //           maxWidth: "768px"
      //         },
      //         "@screen lg": {
      //           maxWidth: "1024px"
      //         },
      //         "@screen xl": {
      //           maxWidth: "1040px"
      //         }
      //       }
      //     });
      //   },
      //   function({ addUtilities, e, theme, variants }) {
      //     const colors = flattenColorPalette(theme("borderColor"));

      //     const utilities = _.flatMap(
      //       _.omit(colors, "default"),
      //       (value, modifier) => ({
      //         [`.${e(`border-t-${modifier}`)}`]: {
      //           borderTopColor: `${value}`
      //         },
      //         [`.${e(`border-r-${modifier}`)}`]: {
      //           borderRightColor: `${value}`
      //         },
      //         [`.${e(`border-b-${modifier}`)}`]: {
      //           borderBottomColor: `${value}`
      //         },
      //         [`.${e(`border-l-${modifier}`)}`]: {
      //           borderLeftColor: `${value}`
      //         }
      //       })
      //     );

      //     addUtilities(utilities, variants("borderColor"));
      //   },
      //   function({ addBase, config }) {
      //     addBase({
      //       h1: {
      //         fontSize: config("theme.fontSize.5xl"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       },
      //       h2: {
      //         fontSize: config("theme.fontSize.4xl"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       },
      //       h3: {
      //         fontSize: config("theme.fontSize.3xl"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       },
      //       h4: {
      //         fontSize: config("theme.fontSize.2xl"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       },
      //       h5: {
      //         fontSize: config("theme.fontSize.xl"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       },
      //       h6: {
      //         fontSize: config("theme.fontSize.lg"),
      //         fontWeight: config("theme.fontWeight.bold"),
      //         fontFamily: config("theme.fontFamily.sans").join(", "),
      //         marginTop: config("theme.margin.4"),
      //         marginBottom: config("theme.margin.4")
      //       }
      //     });
      //   },

      require("@tailwindcss/ui")({
        layout: "sidebar",
      }),
    ],
  },
};
