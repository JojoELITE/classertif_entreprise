import React from 'react';
import { useParams } from "next/navigation";

import enterprisesData from "@/components/data/data"; // Update with the actual path

export default function JobInfo() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not fund</div>; // Handle case where enterprise doesn't exist
  }


  return (
    <div className='flex flex-col bg-blue-300 py-5'>
      <div className='border rounded sm:[290px] lg:h-[310px] w-full '>
        <div className='flex gap-7 px-4'>
          <div className='flex flex-col gap-4'>
           <h1 className='text-xs font-thin'>fonction</h1>
           <span> conseil</span>
          </div>
  
        </div>
      </div>
    </div>
  ); 
}
