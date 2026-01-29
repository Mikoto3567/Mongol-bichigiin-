import type { NextConfig } from "next";

import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        // Зураг дээрх яг тэр зөөлөн Mesh Gradient
        'custom-mesh': "radial-gradient(at 0% 0%, #E0E7FF 0px, transparent 50%), " + 
                        "radial-gradient(at 100% 0%, #F5F3FF 0px, transparent 50%), " + 
                        "radial-gradient(at 100% 100%, #FAE8FF 0px, transparent 50%), " + 
                        "radial-gradient(at 0% 100%, #E0F2FE 0px, transparent 50%)",
      },
    },
  },
};
export default config;
