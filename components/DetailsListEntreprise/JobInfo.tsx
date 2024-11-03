import React from 'react';
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";
import { HiMiniGlobeEuropeAfrica } from "react-icons/hi2"; 
import { CgProfile } from "react-icons/cg";
import { Tag } from 'lucide-react';

export default function JobInfo() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; 
  }

  return (
    <div className='bg-blue-300 w-full text-blue-600 rounded py-5 px-10'> 
      <div className='flex flex-col w-full'> 
        
        {/* Function Section */}
        <div className='w-full md:h-[60px] max-w-4xl mt-4'> 
          <div className='flex gap-7 items-center'>
            <div className='h-10 w-10 bg-blue-200 rounded flex items-center justify-center'>
              <CgProfile size={19} />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xs font-thin'>{enterprise.fonction.fonction}</h1>
              <span>{enterprise.fonction.fonction}</span>
            </div>
          </div>
        </div>

        {/* Contract Section */}
        <div className='w-full md:h-[60px] max-w-4xl mt-4'> 
          <div className='flex gap-7 items-center'>
            <div className='h-10 w-10 bg-blue-200 rounded flex items-center justify-center'>
              <Tag size={19} />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xs font-thin'>Contrat</h1>
              <span>{enterprise.fonction.contrat}</span>
            </div>
          </div>
        </div>

       
        <div className='w-full md:h-[60px] max-w-4xl mt-4'>
          <div className='flex gap-7 items-center'>
            <div className='h-10 w-10 bg-blue-200 rounded flex items-center justify-center'>
              <HiMiniGlobeEuropeAfrica size={19} />
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-xs font-thin'>Politique de télétravail</h1>
              <span>{enterprise.fonction.politiqueTeletravail}</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        {enterprise.fonction.experience ? (
          <div className='w-full md:h-[60px] max-w-4xl mt-4'>
            <div className='flex gap-7 items-center'>
              <div className='h-10 w-10 bg-blue-200 rounded flex items-center justify-center'>
               
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs font-thin'>Expérience</h1>
                <span>{enterprise.fonction.experience}</span>
              </div>
            </div>
          </div>
        ) : null} {/* Si l'expérience n'est pas disponible, rien n'est rendu */}

      </div>
    </div>
  ); 
}
