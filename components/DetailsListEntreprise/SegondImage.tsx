import React from 'react';
import Image from 'next/image'; // Make sure to import Image if using Next.js
import enterprisesData from "@/components/data/data"; // Adjust the import path as necessary
import { useParams } from 'next/navigation';

export default function SegondImage() {
  const { id } = useParams();
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="relative h-full w-full rounded-t-lg flex-grow">
        <div className="absolute inset-0">
          <Image
            src={enterprise.coverImage}
            width={300}
            height={200}
            alt="Vue d'une entreprise"
            className="h-[200px] w-full object-cover object-center rounded-t-lg"
          />
        </div>
        <div className="relative z-10 lg:flex gap-4 items-center pt-36 pl-5 lg:pl-12"> {/* Increased pt from 32 to 36 */}
          <div className="lg:w-24 w-24 text-nowrap text-xs lg:h-24 h-16 bg-white border shadow-lg rounded flex items-center justify-center p-2">
            <span className="font-bold text-base">{enterprise.name}</span>
          </div>
          <div className="flex lg:pt-16 flex-col sm:pl-24 lg:pl-5 gap-1">
          <span className="font-bold text-base">{enterprise.name}</span>
          <div className=' h-8 w-32 text-nowrap text-xs border rounded flex items-center justify-center'> <span> Grande distribution</span> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
