import React from "react";

export default function Home() {
  return (
    <div className="bg-[#e1d5c8] h-screen flex justify-center">
      <div className="relative w-[1200px] h-[600px] mt-10 flex items-center justify-center">
        <div 
          className="absolute top-0 left-0 bottom-20 w-full h-full bg-[#998a7d]"
          style={{
            maskImage: 'url("/image/hero-flag2.png")',
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: 'url("/image/hero-flag2.png")',
            WebkitMaskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />

        <div className="relative z-10 text-center">
          <h1 className="text-white/80 text-6xl font-bold tracking-wider text-shadow-lg">
            It's our Empire
          </h1>
        </div>

      </div>
    </div>
  );
}