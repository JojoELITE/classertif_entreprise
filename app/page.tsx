import EntrepriseCard from '@/components/listEntreprise/EntrepriseCard'
import SectionHero from '@/components/listEntreprise/SectionHero'
import React from 'react'


function Page() {

  return (
    <div className="">

      <SectionHero />


      <div className="w-full py-52 ">
          <EntrepriseCard />
        </div>
    </div>
  )
}

export default Page
