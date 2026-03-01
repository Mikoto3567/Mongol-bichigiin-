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
        'custom-mesh': "radial-gradient(at 0% 0%, #E0E7FF 0px, transparent 50%), " + 
                        "radial-gradient(at 100% 0%, #F5F3FF 0px, transparent 50%), " + 
                        "radial-gradient(at 100% 100%, #FAE8FF 0px, transparent 50%), " + 
                        "radial-gradient(at 0% 100%, #E0F2FE 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;