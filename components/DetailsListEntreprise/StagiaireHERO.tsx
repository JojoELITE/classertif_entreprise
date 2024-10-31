import React from 'react';
import Image from 'next/image'; 
import Stagiaire1 from './Stagiare1';
import {useParams} from "next/navigation"
import   enterprisesData from "@/components/data/data"
export default function StagiaireHERO() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id); // Access the array correctly

  if (!enterprise) {
    return <div>Enterprise not fojkund</div>; // Handle case where enterprise doesn't exist
  }
  return (
    <div className="flex flex-col gap-9 h-full">
      <div className="relative h-full w-full flex-grow">
        <div className="absolute inset-0">
          <Image
            src={enterprise.coverImage}
            width={1000}
            height={300} 
            alt="Vue d'une entreprise"
            className="h-[300px] w-full object-cover object-center"
          />
        </div>
        <div className="relative z-10  lg:flex gap-5 items-center pt-64 pl-5 lg:pl-12">
          <div className="lg:w-32 w-20 lg:h-32 h-20 bg-white border shadow-lg rounded flex items-center justify-center p-4" style={{ marginBottom: '-30px' }}>
            <span className="font-bold text-lg">{enterprise.name}</span>
          </div>
          <div className="flex  pt-12 flex-col pl-5  gap-1">
        <div className="flex gap-3">
        <Stagiaire1/>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
