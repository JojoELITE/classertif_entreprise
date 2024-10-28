import React from 'react';

export default function Card1() {
  return (
    <div className='flex flex-col'>
      <div className='border rounded h-full font-extrabold text-[#333333] p-3 w-full bg-[#edf0ff]'>
      <p> Stagiaire - Consultant Forensic, <br /> Investigation et Litigation - 2024 - H/F </p>
      <div className='grid grid-cols-3  gap-7'>
        <button className='bg-[#edf0ff] rounded text-xs'>Conseil</button>
          <button className='bg-[#edf0ff] rounded  text-xs'>Comptabilité / Gestion</button>
          <button className='bg-[#edf0ff] rounded  text-xs'>Finance</button>
          <button className='bg-[#edf0ff] rounded  text-xs'>Finance</button>
        </div>
        </div>
      </div>
  );
}
