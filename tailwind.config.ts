import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-color":
          "linear-gradient(180deg,rgba(143,158,201,.1),rgba(227,233,250,0) 88.62%)",
      },
      screens: {
        xs: { max: "639px" },
        sm: "640px",
        ssm: { max: "425px" },
        md: { max: "768px" },
        lg: "1025px",
        xl: "1280px",
        xxl: "1536px",
        ptablet: {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)",
        },
        ltablet: {
          raw: "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)",
        },
      },
      colors: {
        green: "#66BB69",
        darkblack: "#263238",
      },
    },
  },
  plugins: [],
};
export default config;
