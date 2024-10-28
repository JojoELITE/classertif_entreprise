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
      <div className='h-20  w-20 rounded border  absolute top-60 pl-12 shadow-lg bg-white flex items-center justify-center animate-pulse'>
        <span>Mazars</span>
      </div>
    </div>
  );
}
