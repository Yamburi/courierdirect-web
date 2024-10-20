import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      small: "575px",
      medium: "768px",
      large: "1350px",
    },
    extend: {
      colors: {
        primary: "#1b1b1b",
      },
      width: {
        content: "1250px",
      },
      boxShadow: {
        slider: "0px 7px 14.9px 0px #00000038;",
        shadow: "4px 4px 4px rgba(33, 33, 33, 0.20)",
        card: "0px 4px 15.7px 0px #00000024",
        image: "2px 4px 4px 0px #00000040"

      },
    },
  },
  plugins: [],
};
export default config;
