module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        autoZoneTheme: {
          primary: "#ef233c",
          secondary: "#050505",
          accent: "#ffe100",
          neutral: "#EDF2F4",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
