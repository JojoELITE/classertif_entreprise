import React from 'react';
import Image from 'next/image';
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";  // Update with the correct path

export default function Mazar() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }


  const services = [
    { name: 'Conseil' },
    { name: 'Comptabilité / Gestion' },
    { name: 'Finance' }
  ];

  return (
    <div className="relative">
      <div className="pt-8">
        <Image
          src={enterprise.coverImage} // Update to use enterprise.coverImage if available
          width={800}
          height={200}
          alt={`Vue d'une entreprise - ${enterprise.name}`}
          className="w-full"
        />
      </div>
      <div className="absolute bottom-16 h-16 w-[74px] left-2 transform z-10 bg-white border shadow-lg rounded flex items-center justify-center p-4">
        <span className="font-bold">{enterprise.name}</span>
      </div>
      <div className="flex flex-col py-4 pl-5 lg:pl-24 gap-1">
        <h2 className="text-xl font-semibold">{enterprise.name}</h2>
        <div className="flex gap-3">
          {services.map((service, index) => (
            <button key={index} className="border text-nowrap px-2 py-2 rounded text-xs">
              {service.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
