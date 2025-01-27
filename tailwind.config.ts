import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          default:'#242526',
          main: "#ffcd00"
      },
      textColor:{
        contrast: '#ffff',
        primary: "#242526",

      }
    },
  },
  plugins: [],
} satisfies Config;
