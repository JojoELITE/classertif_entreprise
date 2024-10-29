import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

interface EnterpriseData {
  id: number
  name: string
  coverImage: string
  logoImage: string
  industry: string
  location: string
  offersCount: number
}

const enterprisesData: EnterpriseData[] = [
  {
    id: 1,
    name: "METRO France (Les halles METRO)",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Commerce de gros",
    location: "Nanterre, France",
    offersCount: 3
  },
  {
    id: 2,
    name: "Lidl France",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Grande distribution",
    location: "1 Rue de Hanovre, 92290 Châtenay-Malabry",
    offersCount: 25
  },
  {
    id: 3,
    name: "Mazars",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Conseil",
    location: "Courbevoie",
    offersCount: 388
  },
  {
    id: 4,
    name: "L'Oréal Groupe",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Cosmétique",
    location: "Clichy, France",
    offersCount: 5
  },
  {
    id: 5,
    name: "AIR LIQUIDE",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Industrie",
    location: "Paris, France",
    offersCount: 3
  },
  {
    id: 6,
    name: "BRUNEAU",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Fournitures de bureau",
    location: "Villebon-sur-Yvette, France",
    offersCount: 2
  },
  {
    id: 7,
    name: "Crédit Théorique",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Banque",
    location: "Paris, France",
    offersCount: 4
  },
  {
    id: 8,
    name: "BIC",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Industrie",
    location: "Clichy, France",
    offersCount: 2
  },
  {
    id: 9,
    name: "Pennylane",
    coverImage: "/image/image_cover.png",
    logoImage: "/image/group.jpeg",
    industry: "Services financiers",
    location: "Paris, France",
    offersCount: 2
  }
]

function EntrepriseCard({ enterprise }: { enterprise: EnterpriseData }) {
  return (
    <Card className="w-full bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">


      <CardHeader className="p-0 relative">
        <div className="h-28 overflow-hidden ">
          <div>
            <img className=" object-cover object-center w-full h-full" src={enterprise.coverImage} alt="Cover" />

          </div>
          <div className="absolute bottom-0 left-4 transform translate-y-1/2">
            <Avatar className="w-28 h-28 border-4 border-white rounded shadow-sm">
              <AvatarImage src={enterprise.logoImage} alt={enterprise.name} className="object-cover" />
              <AvatarFallback>{enterprise.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>


      <CardContent className="pt-20 px-4 ">

        <Link href={""} className='hover:text-[#5138EE]'>
          <h2 className="font-semibold text-lg truncate ">{enterprise.name}</h2>
          <div className="flex flex-wrap gap-2 mt-2 ">
            <div className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs hover:text-[#5138EE] font-medium">
              {enterprise.industry}
            </div>
            <div className="text-gray-600  border-gray-300 rounded-full px-3 py-1 text-xs hover:text-[#5138EE] font-medium">
              {enterprise.location}
            </div>
          </div>
        </Link>



      </CardContent>
      <CardFooter className="pt-2 pb-4 px-4">
        <a href="#" className="hover:text-[#5138EE] underline text-sm font-medium">
          Voir les {enterprise.offersCount} offres disponibles →
        </a>
      </CardFooter>
    </Card>
  )
}

export default function EnterpriseCards() {
  return (
    <div className=" w-full px-4 py-[32%] lg:py-8 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-md lg:text-2xl font-bold text-gray-800">43 entreprises disponibles</h1>
        <div className="flex items-center space-x-2">
          <span className="text-xs lg:text-sm text-gray-600">sélection "à la une"</span>
          <Switch />
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {enterprisesData.map(enterprise => (
          <EntrepriseCard key={enterprise.id} enterprise={enterprise} />
        ))}
      </div>
    </div>
  )
}