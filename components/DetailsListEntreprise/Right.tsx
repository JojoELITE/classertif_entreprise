import React from 'react';

export default function Right() {
  return (
    <div className='flex flex-col'>
      <div className='border rounded h-[280px] w-full bg-[#edf0ff]'>
        <h1 className='text-[#3927ac] font-extrabold text-xl pl-4 text-nowrap  py-4'>Informations générales</h1>
        <div className='flex gap-7 px-4'>
          <div className=' text-[#8e8f90]'>
            <p className='mb-2'><strong>Création</strong></p>
            <p className='mb-9'><strong>Bureaux</strong></p>
            <p className='mb-2'><strong>Langue</strong></p>
            <p className='mb-2'><strong>Collaborateurs</strong></p>
            <p className='mb-2'><strong>Âge moyen</strong></p>
            <p className='mb-2'><strong>Parité</strong></p>
          </div>
          <div className=' text-[#462cd6]'>
            <p className='mb-2'>1945</p>
            <p className='mb-2'>1 Rue de Hanovre, 92290 Châtenay-Malabry, France</p>
            <p className='mb-2'>🇫🇷 Français</p>
            <p className='mb-2'>&gt;1000</p>
            <p className='mb-2'>28 ans</p>
            <p className='mb-2'>53% / 47%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
