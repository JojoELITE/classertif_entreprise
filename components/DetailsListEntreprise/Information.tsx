import React from 'react';
import { useParams } from "next/navigation";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import enterprisesData from "@/components/data/data"; // Update with the actual path

export default function Information() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not fund</div>; // Handle case where enterprise doesn't exist
  }


  return (
    <div className='flex flex-col py-5'>
      <div className='border rounded sm:[290px] lg:h-[310px] w-full '>
        <h1 className='font-extrabold text-xl pl-4 text-nowrap py-4'>Informations générales</h1>
        <div className='flex gap-7 px-4'>
          <div className='text-[#8e8f90]'>
            <p className='mb-2'><strong>Création</strong></p>
            <p className='mb-16 lg:mb-[47px]'><strong>Bureaux</strong></p>
            <p className='mb-2'><strong>Langue</strong></p>
            <p className='mb-2'><strong>Collaborateurs</strong></p>
            <p className='mb-2'><strong>Âge moyen</strong></p>
            <p className='mb-2'><strong>Parité</strong></p>
          </div>
          <div>
            <p className='mb-2'>{enterprise.creation}</p>
            <p className='md:mb-5 mb-9'>{enterprise.street}</p>
            <p className='mb-2'>{enterprise.langue}</p>
            <p className='mb-2'>{enterprise.collaborateurs}</p>
            <p className='mb-2'>{enterprise.ageMoyen}</p>
            <div className='mb-2 flex gap-3 items-center'>
              <AiOutlineMan /> <span>{enterprise.pariteMen} /</span> 
              <AiOutlineWoman /> <span> {enterprise.pariteWomen}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
