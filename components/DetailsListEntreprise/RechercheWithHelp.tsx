import React from 'react'
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
export default function RechercheWithHelp() {
    const [showInput, setShowInput] = useState(false);

    const handleClick = () => setShowInput((prev) => !prev);
  return (
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
  )
}
