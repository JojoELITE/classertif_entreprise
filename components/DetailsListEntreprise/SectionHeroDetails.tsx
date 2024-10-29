"use client"; // Ensure this is marked as a Client Component
import React from 'react';
import Tabs from './tabs';
import Divider from './Divider';
import Image from 'next/image'; // Importing Image from Next.js

export default function SectionHeroDetails() {
  const handleTabSelect = (link: string) => {
    // Implement your tab selection logic here
    console.log(`Selected tab: ${link}`);
  };

  return (
    <div className='flex flex-col gap-9'>
      <div className='relative h-full w-full'>
        <Image 
          src="/image/group.jpeg" 
          layout="responsive" // Use responsive layout for better performance
          height={240} // Specify height based on your design
          width={640} // Specify width based on your design
          alt="Vue d'une entreprise" 
          className="max-h-[40vh]" // Apply max height as a class
        />
        <div className='absolute top-52 left-12 h-36 w-36 rounded border shadow-lg bg-white flex items-center justify-center'>
          <span className='font-bold text-lg'>Mazars</span>
        </div>
      </div>
      <div className='pl-56 flex flex-col gap-1'>
        <h2 className='text-xl font-semibold'>Mazars</h2>
        <div className='flex gap-3'>
          <button className='bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]'>Conseil</button>
          <button className='bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]'>Comptabilité / Gestion</button>
          <button className='bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]'>Finance</button>
        </div>
      </div>
      <Tabs onSelect={handleTabSelect} /> {/* Use the handleTabSelect function here */}
      <Divider />
    </div>
  );
}
