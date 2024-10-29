"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { MapPin } from 'lucide-react';

interface EnterpriseData {
  id: number;
  name: string;
  coverImage: string;
  logoImage: string;
  industry: string;
  location: string;
  numberEmployees: string;
  offersCount: number;
}

const enterprisesData: EnterpriseData[] = [
  {
    id: 1,
    name: "METRO France (Les halles METRO)",
    coverImage: "/image/metro_00.png",
    logoImage: "/image/metro_00.png",
    industry: "Commerce de gros",
    location: "Nanterre, France",
    numberEmployees: "1000",
    offersCount: 3,
  },
  {
    id: 2,
    name: "Lidl France",
    coverImage: "/image/lidl_00.png",
    logoImage: "/image/lidl_00.png",
    industry: "Grande distribution",
    location: "1 Rue de Hanovre",
    numberEmployees: "",
    offersCount: 25,
  },
  {
    id: 3,
    name: "Mazars",
    coverImage: "/image/Mazars.png",
    logoImage: "/image/Mazars_00.png",
    industry: "Conseil",
    location: "Courbevoie",
    numberEmployees: "1000",
    offersCount: 388,
  },
  {
    id: 4,
    name: "L'Oréal Groupe",
    coverImage: "/image/oréal.png",
    logoImage: "/image/oréal_00.png",
    industry: "Cosmétique",
    location: "Clichy, France",
    numberEmployees: "",
    offersCount: 5,
  },
  {
    id: 5,
    name: "ABYLSEN",
    coverImage: "/image/abylsen_00.png",
    logoImage: "/image/abylsen.png",
    industry: "Industrie",
    location: "Paris, France",
    numberEmployees: "1000",
    offersCount: 3,
  },
  {
    id: 6,
    name: "BRUNEAU",
    coverImage: "/image/bruneau.png",
    logoImage: "/image/bruneau.png",
    industry: "Fournitures de bureau",
    location: "Villebon-sur-Yvette",
    numberEmployees: "",
    offersCount: 2,
  },
  {
    id: 7,
    name: "Grant Thornton",
    coverImage: "/image/grant.png",
    logoImage: "/image/grant_00.png",
    industry: "Conseil",
    location: "Paris, France",
    numberEmployees: "",
    offersCount: 4,
  },
  {
    id: 8,
    name: "BIC",
    coverImage: "/image/bic.png",
    logoImage: "/image/bic_00.png",
    industry: "Industrie",
    location: "Clichy, France",
    numberEmployees: "1000",
    offersCount: 2,
  },
  {
    id: 9,
    name: "Pennylane",
    coverImage: "/image/penn.png",
    logoImage: "/image/penn_00.png",
    industry: "Services financiers",
    location: "",
    numberEmployees: "",
    offersCount: 2,
  },
];

const icons = {
  industry: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
      <path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path>
      <path d="M6 6h.008v.008H6V6Z"></path>
    </svg>
  ),
  employeeCount: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-3 w-3">
      <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
    </svg>
  ),
};


function EnterpriseCard({ enterprise }: { enterprise: EnterpriseData }) {
  return (
    <Card className="bg-white shadow-sm rounded-xl hover:shadow-lg overflow-hidden border border-gray-200 flex flex-col">
      
      <CardHeader className="p-0 relative">
        <div className="h-28 overflow-hidden">
          <div className='h-full'>
            <Image className="object-cover object-center w-full h-full" src={enterprise.coverImage} alt="Cover" width={1000} height={100} />
          </div>
          <div className="absolute bottom-0 left-7 transform translate-y-1/2">
            <Avatar className="w-16 h-20 border-4 border-white bg-white rounded shadow-sm">
              <AvatarImage src={enterprise.logoImage} alt={enterprise.name} className="object-cover" />
              <AvatarFallback>{enterprise.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-16 px-4 flex-grow">
        <Link href={""} className='hover:text-[#5138EE]'>
          <h2 className="font-bold text-xl">{enterprise.name}</h2>

          <div className="space-y-1 mt-3">

            <div className='flex gap-1'>
              <div className="bg-gray-100 flex items-center gap-1 rounded-md w-full px-3 py-1 text-[10px] hover:text-[#5138EE] font-medium">
                {icons.industry}
                {enterprise.industry}
              </div>

              {enterprise.location && (
                <div className="flex items-center gap-1 rounded-md truncate w-full bg-gray-100 border-gray-300 px-3 py-1 text-[10px] hover:text-[#5138EE] font-medium">
                  <MapPin className="w-3 h-3" />
                  {enterprise.location}
                </div>
              )}
            </div>

            {enterprise.numberEmployees && (
              <div className="flex items-center rounded-md truncate w-[30%] bg-gray-100 border-gray-300 px-3 py-1 text-[10px] hover:text-[#5138EE] font-medium">
                {icons.employeeCount}
                &gt; {enterprise.numberEmployees}
              </div>
            )}
          </div>

        </Link>
      </CardContent>

      <CardFooter className="pt-2 pb-4 px-4">
        <Link href={""} className="hover:text-[#5138EE] underline text-sm font-medium">
          Voir les {enterprise.offersCount} offres disponibles →
        </Link>
      </CardFooter>

    </Card>
  );
}


export default function EnterpriseCards() {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
  };

  return (
    <div className="w-full px-4 lg:px-10 py-[26%] lg:py-0">
      <div className="flex w-full flex-row flex-wrap items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-black">43 entreprises disponibles</h1>
        <div className="flex items-center space-x-2">
          <span className="text-lg text-gray-600">sélection &apos;à la une&apos;</span>
          <Switch />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {enterprisesData.slice(0, visibleCount).map(enterprise => (
          <EnterpriseCard key={enterprise.id} enterprise={enterprise} />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {visibleCount < enterprisesData.length && (
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-[#5138EE] text-white rounded-md hover:bg-[#3c2eb5] transition-colors"
          >
            Voir plus
          </button>
        )}
        {visibleCount > initialVisibleCount && (
          <button
            onClick={handleShowLess}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Voir moins
          </button>
        )}
      </div>
    </div>
  );
}
