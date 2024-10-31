import React from 'react';
import Image from 'next/image';

export default function Mazar() {
  const services = [
    { name: 'Conseil' },
    { name: 'Comptabilité / Gestion' },
    { name: 'Finance' }
  ];

  return (
    <div className="relative">
      <div className="pt-8">
        <Image
          src="/image/65e9794f977def63da9391fb_cover_1726239730186.png"
          width={800}
          height={200}
          alt="Vue d'une entreprise - Mazars"
          className=" w-full "
        />
      </div>
      <div className="absolute  bottom-16 h-16 w-[74px] left-2  transform  z-10 bg-white border shadow-lg rounded flex items-center justify-center p-4">
        <span className="font-bold ">Mazars</span>
      </div>
      <div className="flex flex-col py-4 pl-5 lg:pl-24 gap-1">
        <h2 className="text-xl font-semibold">Mazars</h2>
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
