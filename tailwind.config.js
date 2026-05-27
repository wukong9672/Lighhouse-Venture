/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffed00",
        "primary-deep": "#e6d200",
        ink: "#000000",
        body: "#222222",
        charcoal: "#333333",
        mute: "#666666",
        ash: "#8a8a8a",
        stone: "#c4c4c4",
        canvas: "#ffffff",
        "surface-soft": "#f7f7f7",
        "surface-dark": "#000000",
        "surface-deep": "#111111",
        hairline: "#f2f2f2",
        error: "#be6464",
        warning: "#f0ad4e",
        success: "#8dc572",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        md: "4px",
        pill: "46px",
      },
    },
  },
  plugins: [],
};
