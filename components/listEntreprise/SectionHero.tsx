"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"
import { useState } from "react";

export default function Component() {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src="https://jobs.hugodecrypte.com/_next/image?url=https%3A%2F%2Fpiloty-public.s3.eu-west-3.amazonaws.com%2FmediasDocuments%2F63b7e8de362bc541af5ddff6%2F63b7e8de362bc541af5ddff6_cover.webp&w=3840&q=75"
        alt="Groupe d'entrepreneurs noirs"
        className="absolute inset-0 object-cover w-full h-[50%]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[70%] bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#5138EE] mb-6">
            Trouver l'entreprise qui vous correspond
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="basis-2/3">
              <div className="relative flex-grow items-center ">
                <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Chercher une entreprise"
                  className="pl-10 border-gray-300 focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:border-transparent"
                />
              </div>

              <div className=" flex justify-end mr-20 py-8">
                <a href="#" className="text-sm underline">
                  Recherche avancée
                </a>
              </div>

            </div>



            <div className="relative flex-grow basis-1/3">
              <button
                onClick={handleClick}
                className="flex w-full items-center px-4 py-2 border rounded-md "
              >
                <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                <span>Où?</span>
              </button>

              {showInput && (

                <div className="relative flex-grow basis-2/3 p-2 border rounded-md shadow-sm mt-2">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Rechercher"
                    className="pl-10 border border-black/50 rounded-full focus-visible:ring-1 focus-visible:ring-black/50 focus-visible:border-transparent"
                    autoFocus
                  />
                </div>


              )}
            </div>
            <Button className="bg-[#5138EE] hover:bg-[#4128DE] text-white font-semibold py-2 px-6">
              Rechercher
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}
