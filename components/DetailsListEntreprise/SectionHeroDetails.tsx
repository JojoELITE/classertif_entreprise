import React from 'react';

export default function SectionHeroDetails() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='h-full w-full'>
        <img 
          src="/image/group.jpeg" 
          style={{ 
            width: '100%',  
            height: 'auto',  
            maxHeight: '40vh' 
          }} 
          alt="Description" 
        />
      </div>
      <div className='h-36  w-36 rounded border  absolute top-48 left-9 shadow-lg bg-white flex items-center justify-center '>
        <span>Mazars</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span>Mazars</span>
        <div className='flex gap-3'>
          <button>Conseil</button>
          <button>Comptabilité / Gestion</button>
          <button>Finance</button>
        </div>
      </div>
    </div>
  );
}
