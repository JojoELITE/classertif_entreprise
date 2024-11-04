"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { MapPin } from 'lucide-react';
import enterprisesData from "@/components/data/data";

// Define an interface for the enterprise data
interface Enterprise {
  id: number;
  name: string;
  coverImage: string;
  logoImage: string;
  industry: string;
  location?: string;
  numberEmployees?: number | string; // Allow both string and number
  offersCount: number;
  date: string;
}

interface EnterpriseCardProps {
  enterprise: Enterprise;
}

const icons = {
  industry: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
      {/* Example Industry Icon */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
    </svg>
  ),
  employeeCount: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-3 w-3">
      {/* Example Employee Count Icon */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v2m0 2v2m0-4h-2m2 0h2m-2 0v-2m2 0h-2m2 0V9m0-2V3m-2 0H9m-6 9H3m2 0h12m0 0V9m0 6h-2m-2 0H3m0 0V9m0 6h2m12 0h2" />
    </svg>
  ),
};

function EnterpriseCard({ enterprise }: EnterpriseCardProps) {
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
                &gt; {typeof enterprise.numberEmployees === 'string' ? enterprise.numberEmployees : enterprise.numberEmployees.toString()}
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

  const filteredEnterprises = enterprisesData.enterprisesData.filter((enterprise: Enterprise) => {
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
