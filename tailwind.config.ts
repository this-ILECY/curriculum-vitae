import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hubot: ['hubot', 'sans-serif'], // Custom font family
      },
      colors: {
        background: "$background",
        foreground: "$foreground",
        primary: {
          100: "#CCE0FF",
          200: "#4D94FF",
          300: "#0066FF",
          400: "#003D99",
        },
        secondary: {
          100: "#BFE5C6",
          200: "#8FD29C",
          300: "#5FBE71",
          400: "#397244",
        },
        NeutralDark: {
          100: "#444444",
          200: "#2C2C2C",
          300: "#262626",
          400: "#1F1F1F",
        },
        NeutralLight: {
          100: "#F5F5F5",
          200: "#CCCCCC",
          300: "#999999",
          400: "#666666",
        },
      },
    },
  },
  plugins: [],
};
export default config;
