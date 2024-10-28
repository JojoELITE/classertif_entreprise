import React from 'react';
import Tabs from './tabs';
import Divider from './Divider';


export default function SectionHeroDetails() {
  return (
    <div className='flex flex-col gap-9'>
      <div className='relative h-full w-full'>
        <img 
          src="/image/group.jpeg" 
          style={{ 
            width: '100%',  
            height: 'auto',  
            maxHeight: '40vh' 
          }} 
          alt="Vue d'une entreprise" 
        />
        <div className='absolute top-52 left-12 h-36 w-36 rounded border shadow-lg bg-white flex items-center justify-center'>
          <span className='font-bold text-lg'>Mazars</span>
        </div>
      </div>
      <div className=' pl-56 flex flex-col gap-1'>
        <h2 className='text-xl font-semibold'>Mazars</h2>
        <div className='flex gap-3'>
          <button className='bg-[#edf0ff] border  px-2  rounded text-xs  text-[#4b32f3]'>Conseil</button>
          <button className='bg-[#edf0ff] border   px-2  rounded  text-xs text-[#4b32f3]'>Comptabilité / Gestion</button>
          <button className='bg-[#edf0ff]  border  px-2  rounded  text-xs text-[#4b32f3]'>Finance</button>
        </div>
      </div>
      <Tabs/>
      <Divider/>
    </div>
  );
}
