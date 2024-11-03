// EnterpriseCards.tsx

"use client";

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
  date: string;
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
    date: "2024-10-31", 
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
    date: "2024-10-30", 
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
    date: "2024-10-29", 
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
    date: "2024-10-31", 
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
    date: "2024-10-31", 
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
    date: "2024-10-30", 
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
    date: "2024-10-29", 
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
    date: "2024-10-31", 
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
    date: "2024-10-30", 
  },
  // {
  //   id: 10,
  //   name: "Capgemini",
  //   coverImage: "/image/capgemini.png",
  //   logoImage: "/image/capgemini_logo.png",
  //   industry: "Technologie",
  //   location: "Paris, France",
  //   numberEmployees: "5000",
  //   offersCount: 12,
  //   date: "2024-10-31", 
  // },
  // {
  //   id: 11,
  //   name: "Air France",
  //   coverImage: "/image/airfrance.png",
  //   logoImage: "/image/airfrance_logo.png",
  //   industry: "Transport",
  //   location: "Roissy-en-France, France",
  //   numberEmployees: "30000",
  //   offersCount: 15,
  //   date: "2024-10-30", 
  // },
  // {
  //   id: 12,
  //   name: "BNP Paribas",
  //   coverImage: "/image/bnp.png",
  //   logoImage: "/image/bnp_logo.png",
  //   industry: "Banque",
  //   location: "Paris, France",
  //   numberEmployees: "100000",
  //   offersCount: 20,
  //   date: "2024-10-29", 
  // },
  // {
  //   id: 13,
  //   name: "Orange",
  //   coverImage: "/image/orange.png",
  //   logoImage: "/image/orange_logo.png",
  //   industry: "Télécommunications",
  //   location: "Paris, France",
  //   numberEmployees: "50000",
  //   offersCount: 10,
  //   date: "2024-10-31", 
  // },
  // {
  //   id: 14,
  //   name: "Danone",
  //   coverImage: "/image/danone.png",
  //   logoImage: "/image/danone_logo.png",
  //   industry: "Agroalimentaire",
  //   location: "Paris, France",
  //   numberEmployees: "10000",
  //   offersCount: 8,
  //   date: "2024-10-30", 
  // },
  // {
  //   id: 15,
  //   name: "TotalEnergies",
  //   coverImage: "/image/total.png",
  //   logoImage: "/image/total_logo.png",
  //   industry: "Énergie",
  //   location: "La Défense, France",
  //   numberEmployees: "10000",
  //   offersCount: 6,
  //   date: "2024-10-31", 
  // },
];

const icons = {
  industry: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
      {/* Your icon SVG */}
    </svg>
  ),
  employeeCount: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-3 w-3">
      {/* Your icon SVG */}
    </svg>
  ),
};

function EnterpriseCard({ enterprise }: { enterprise: EnterpriseData }) {
  const handleClick = () => {
    window.location.href = `/details/${enterprise.id}`;
  };
  return (
    <Card onClick={handleClick} className="bg-white shadow-sm rounded-xl hover:shadow-lg overflow-hidden border border-gray-200 flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="h-28 overflow-hidden">
          <Image className="object-cover object-center w-full h-full" src={enterprise.coverImage} alt="Cover" width={1000} height={100} />
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
            {/* <div className="text-sm text-gray-500 mt-2">
              {new Date(enterprise.date).toLocaleDateString()}
            </div> */}
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

// Define props interface to accept searchQuery
interface EnterpriseCardsProps {
  searchQuery: string;
}

export default function EnterpriseCards({ searchQuery }: EnterpriseCardsProps) {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showToday, setShowToday] = useState(false);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
  };

  const handleSwitchToggle = () => {
    setShowToday((prev) => !prev);
  };
  const filteredEnterprises = enterprisesData.filter(enterprise => {
    const matchesDate = showToday 
      ? enterprise.date === new Date().toISOString().split('T')[0]
      : true;
  
    const matchesSearch = !searchQuery || (enterprise.name && enterprise.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
    return matchesDate && matchesSearch;
  });
  
  return (
    <div className="w-full px-4 lg:px-10 py-[26%] lg:py-0">
      <div className="flex w-full flex-row flex-wrap items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-black">{filteredEnterprises.length} entreprises disponibles</h1>
        <div className="flex items-center space-x-2">
          <span className="text-lg text-gray-600">sélection &apos;à la une&apos;</span>
          <Switch onClick={handleSwitchToggle} />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredEnterprises.slice(0, visibleCount).map(enterprise => (
          <EnterpriseCard key={enterprise.id} enterprise={enterprise} />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {visibleCount < filteredEnterprises.length && (
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
