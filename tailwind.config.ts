import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-grayish-violet": "hsl(257, 7%, 63%)",
        "neutral-very-dark-blue": "hsl(255, 11%, 22%)",
        "neutral-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      gridTemplateRows: {
        "parent-layout": "auto 1fr",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "8rem",
          "2xl": "6rem",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
