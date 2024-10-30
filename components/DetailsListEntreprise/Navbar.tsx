"use client";
import React, { useEffect, useState } from "react";
import { RiShareBoxFill } from "react-icons/ri";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSticky(scrollTop > 400);
      
      if (scrollTop >= 800) {
        setHighlightedIndex(2); 
      } else if (scrollTop >= 400) {
        setHighlightedIndex(1);
      } else {
        setHighlightedIndex(0); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex w-full justify-between p-5 px-10 transition-all duration-300 ${
        isSticky ? "fixed top-0 bg-white z-40 h-16" : "hidden absolute"
      }`}
    >
      <div>
        <ul className="flex space-x-4">
          <li className={highlightedIndex === 0 ? "text-blue-500" : ""}>Qui sommes-nous ?</li>
          <li className={highlightedIndex === 1 ? "text-blue-500" : ""}>Description du poste</li>
          <li className={highlightedIndex === 2 ? "text-blue-500" : ""}>Avantages</li>
        </ul>
      </div>
      <div style={{ width: '31%' }}>
        <div className="flex items-center sticky border rounded font-bold bg-[#472df1] gap-2 text-white py-2 justify-center">
          <button>Postuler</button>
          <RiShareBoxFill />
        </div>
      </div>
    </div>
  );
}
