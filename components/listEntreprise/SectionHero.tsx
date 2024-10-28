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
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/image/image_cover.png"
        alt="Groupe d'entrepreneurs noirs"
        className="absolute h-[50%] w-full object-cover"
        width={1000}
        height={0}
        quality={75}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[70%] bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#5138EE] mb-6 text-center">
            Trouver l&apos;entreprise qui vous correspond
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Recherche principale */}
            <div className="flex-grow relative border rounded-md focus-within:ring focus-within:ring-black/30">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Chercher une entreprise"
                className="w-full pl-10 py-2  border-gray-300 focus:outline-none"
              />
            </div>

            {/* Bouton localisation et champ conditionnel */}
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
                    className="pl-10 w-full py-1 text-xs border rounded-full focus:outline-none"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Bouton de recherche */}
            <Button className="bg-[#5138EE] hover:bg-[#4128DE] text-white font-semibold py-2 px-6">
              Rechercher
            </Button>
          </div>

          {/* Lien de recherche avancée */}
          <div className="flex items-center gap-2 px-[30%] mt-6">
            <SlidersHorizontal size={12} />
            <Link href={""} className="text-sm underline">
              Recherche avancée
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
