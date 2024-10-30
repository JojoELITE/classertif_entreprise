import React from 'react';
import { AiOutlineMan } from "react-icons/ai";
import { AiOutlineWoman } from "react-icons/ai";
export default function Information() {
  return (
    <div className='flex flex-col p-5'>
      <div className='border rounded sm:[290px] lg:h-[310px] w-full '>
        <h1 className=' font-extrabold text-xl pl-4 text-nowrap  py-4'>Informations générales</h1>
        <div className='flex gap-7 px-4'>
          <div className=' text-[#8e8f90]'>
            <p className='mb-2'><strong>Création</strong></p>
            <p className=' mb-16 lg:mb-[70px]'><strong>Bureaux</strong></p>
            <p className='mb-2'><strong>Langue</strong></p>
            <p className='mb-2'><strong>Collaborateurs</strong></p>
            <p className='mb-2'><strong>Âge moyen</strong></p>
            <p className='mb-2'><strong>Parité</strong></p>
          </div>
          <div className=' '>
            <p className='mb-2'>1945</p>
            <p className='mb-5'>1 Rue de Hanovre, 92290 Châtenay-Malabry, France</p>
            <p className='mb-2'>🇫🇷 Français</p>
            <p className='mb-2'>&gt;1000</p>
            <p className='mb-2'>28 ans</p>
            <div className='mb-2 flex gap-3 items-center'> <AiOutlineMan /> <span>53% /</span> <AiOutlineWoman /> <span> 47%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
