import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      small: "575px",
      medium: "768px",
      large: "1350px",
    },
    extend: {
      borderImage: {
        'gradient': 'linear-gradient(180deg, #DD2F2F 0%, #0EF516 46%, #0F88FA 100%) 1'
      },

      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-out',
        fadeOutUp: 'fadeOutUp 0.5s ease-in',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(180deg, #1B88D3 24%, #9A72F8 100%)',

        "abouttop": 'linear-gradient(180deg, #4C94E9 0%, #7F2B83 64%)'


      },
      colors: {
        primary: "#16437C",
        secondary: "#821518",
        background: "#F4f4f4",
        webblack: "#585858"
      },

      width: {
        content: "1250px",
      },
      boxShadow: {
        slider: "0px 7px 14.9px 0px #00000038;",
        shadow: "4px 4px 4px rgba(33, 33, 33, 0.20)",
        card: "0px 12px 20px 0px #1B427B4D",
        image: "2px 4px 4px 0px #00000040"


      },
    },
  },
  plugins: [],
}
export default config
