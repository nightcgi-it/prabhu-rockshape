import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { white: "#FFFFFF", blue: "#1D7EC2", dark: "#0C5186" },
        ink: { DEFAULT: "#0A2233", soft: "#3A4C58" },
        steel: "#11222E",
        line: { DEFAULT: "#D9E2E9", soft: "#E9EFF3" },
        wash: "#F3F6F9"
      }
    }
  },
  plugins: []
};
export default config;
