"use client"; // Ensure this is marked as a Client Component
import React from "react";
import Image from "next/image"; // Importing Image from Next.js
import MyComponent from "./change-ing";

export default function SectionHeroDetails() {
 

  return (
    <div className="flex flex-col gap-9 h-full">
      <div className="relative h-full w-full flex-grow">
        <div className="absolute inset-0">
          <Image
            src="/image/image_cover.png"
            layout="fill"
            alt="Vue d'une entreprise"
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 flex gap-5 items-center pt-20 pl-5 lg:pl-12">
          <div className="lg:w-32 w-20 lg:h-24 h-20 bg-white border shadow-lg rounded flex items-center justify-center p-4" style={{ marginBottom: '-30px' }}>
            <span className="font-bold text-lg">Mazars</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pl-5 lg:pl-44 gap-1">
        <h2 className="text-xl font-semibold">Mazars</h2>
        <div className="flex gap-3">
          <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
            Conseil
          </button>
          <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
            Comptabilité / Gestion
          </button>
          <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
            Finance
          </button>
        </div>
      </div>

      <div className="mt-4"> 
        <MyComponent />
      </div>
    </div>
  );
}
