"use client";

import { Button } from "@/components/ui/button";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Component(): JSX.Element {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => setShowInput((prev) => !prev);

  return (
    <div className='w-full flex flex-col gap-9'>
      <div className='relative h-full w-full'>
        <Image
          src="/image/image_cover.png"
          width={1000}
          height={0}
          alt="Vue d'une entreprise"
          className="h-[300px] w-full object-cover object-center"
        />

        <div className="absolute z-10 flex flex-col items-center justify-center top-[80%] w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-full bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#5138EE] mb-6 ">
              Trouver l&apos;entreprise qui vous correspond
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative basis-[30%] border rounded-md focus-within:ring focus-within:ring-black/30">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Chercher une entreprise"
                  className="w-full pl-10 py-2  border-gray-300 focus:outline-none"
                />
              </div>

              <div className="flex-grow relative">
                <button
                  onClick={handleClick}
                  className="flex w-full items-center px-4 py-2 border rounded-md"
                >
                  <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                  <span className="text-gray-400">Où?</span>
                </button>

                {showInput && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md p-2">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Rechercher"
                      className="pl-10 w-full py-1 text-xs border border-black/50 rounded-full focus:outline-none"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              <Button className="bg-[#5138EE] hover:bg-[#4128DE] text-white font-semibold py-2 px-6">
                Rechercher
              </Button>
            </div>

            <div className="flex items-center gap-2 justify-center mt-6">
              <SlidersHorizontal size={12} />
              <Link href={""} className="text-sm underline">
                Recherche avancée
              </Link>
            </div>
          </div>



        </div>

      </div>

    </div>
  );
}