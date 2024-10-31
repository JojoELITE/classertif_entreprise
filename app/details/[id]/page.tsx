"use client"; 
import React from "react";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";
import Image from "next/image"; 
import MyComponent from "@/components/DetailsListEntreprise/change-ing";

export default function Page() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }

  return (
    <div className="flex flex-col gap-9 h-full">
      <div className="relative h-full w-full flex-grow">
        <div className="absolute inset-0">
          <Image
            src={enterprise.coverImage}
            width={1000}
            height={300} // Adjusted height for the image
            alt="Vue d'une entreprise"
            className="h-[300px] w-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 flex gap-5 items-center pt-64 pl-5 lg:pl-12">
          <div className="lg:w-32 w-20 lg:h-24 h-20 bg-white border shadow-lg rounded flex items-center justify-center p-4" style={{ marginBottom: '-30px' }}>
            <span className="font-bold text-lg">{enterprise.name}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pl-5 lg:pl-44 gap-1">
        <h2 className="text-xl font-semibold">{enterprise.name}</h2>
        <div className="flex gap-3">
          <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
            {enterprise.industry}
          </button>
          {/* Check if comptability and finance exist in the enterprise data */}
          {enterprise.ComptabilityText && (
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
              {enterprise.ComptabilityText}
            </button>
          )}
          {enterprise.finance && (
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
              {enterprise.finance}
            </button>
          )}
        </div>
      </div>

      <div className="mt-4"> 
        <MyComponent />
      </div>
    </div>
  );
}
