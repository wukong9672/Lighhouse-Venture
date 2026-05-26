/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        onDark: "#ffffff",
        body: "#bbbbbb",
        bodyStrong: "#e6e6e6",
        muted: "#7e7e7e",
        hairline: "#3c3c3c",
        surfaceSoft: "#0d0d0d",
        surfaceCard: "#1a1a1a",
        surfaceElevated: "#262626",
        mBlueLight: "#0066b1",
        mBlueDark: "#1c69d4",
        mRed: "#e22718",
        pitchBlack: "#050505",
        charcoal: "#111111",
        burntOrange: "#FF6A00",
        amberGold: "#FFB347",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
