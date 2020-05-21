const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "chica-w": "#FFF8D9",
        "chica-violet": "#CEAEB3",
        "chica-pink": "#B07E9B",
        "chica-dark": "#6E445C",
        "chica-orange": "#F46A19",
        "chica-green": "#306867",
      },

      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],

        handwritten: ["Homemade Apple"],
      },
      flex: {
        //   "1": "1 1 0%",
        //   auto: "1 1 auto",
        //   initial: "0 1 auto",
        //   none: "none",
        post: "1 1 300px",
        // "100": "1 1 100%",
        "post-large-content": "0 1 361px",
        // }
      },
      spacing: {
        "14": "3.5rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "104": "27rem",
        "112": "30rem",
        "120": "33rem",
        "128": "36rem",
        "160": "43rem",
        "192": "50rem",
        "256": "64rem",
        "384": "96rem",
        "512": "128rem",
      },
      borderWidth: {
        "3": "3px",
        "6": "6px",
      },
      opacity: {
        "80'": "0.80",
        "85'": "0.85",
        "90'": "0.90",
        "95": "0.95",
      },
      height: {
        huge: "2000px",
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
