import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function InputLoookingFor() {
  return (
    <div className='w-full h-12 border rounded flex gap-2 items-center'>
         <div className='flex items-center pl-6 justify-center'>
         <CiSearch  className='gray' size={18}/>
         </div>
      <input type='text' className='w-full h-full' placeholder='chercher une offre'/>
    </div>
  )
}
