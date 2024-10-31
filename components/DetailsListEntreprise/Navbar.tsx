"use client";
import React, { useEffect, useState } from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data"; // Update with the correct path

export default function Navbar() {
  const { id } = useParams();
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  // Move hooks outside of the conditional check
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

  // Handle case where enterprise doesn't exist
  if (!enterprise) {
    return <div>Enterprise not found</div>;
  }

  return (
    <div
      className={`flex w-full justify-between p-5 px-10 transition-all duration-300 ${
        isSticky ? "fixed top-0 bg-white z-40 h-16" : "hidden absolute"
      }`}
    >
      <div>
        <ul className="flex space-x-4">
          <li className={highlightedIndex === 0 ? "text-blue-500" : ""}>{enterprise.presentations}</li>
          <li className={highlightedIndex === 1 ? "text-blue-500" : ""}>{enterprise.description}</li>
          <li className={highlightedIndex === 2 ? "text-blue-500" : ""}>{enterprise.avantage}</li>
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
