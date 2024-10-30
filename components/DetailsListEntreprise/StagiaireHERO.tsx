import React from 'react';
import Image from 'next/image'; 
import Stagiaire1 from './Stagiare1';

export default function StagiaireHERO() {
  return (
    <div className="flex flex-col gap-9 h-full">
      <div className="relative h-full w-full flex-grow">
        <div className="absolute inset-0">
          <Image
            src="/image/image_cover.png"
            width={1000}
            height={300} 
            alt="Vue d'une entreprise"
            className="h-[300px] w-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 flex gap-5 items-center pt-64 pl-5 lg:pl-12">
          <div className="lg:w-32 w-20 lg:h-32 h-20 bg-white border shadow-lg rounded flex items-center justify-center p-4" style={{ marginBottom: '-30px' }}>
            <span className="font-bold text-lg">Mazars</span>
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
