"use client"
import React from "react";

import { RiShareBoxFill } from "react-icons/ri";

import { FaClock } from "react-icons/fa6";


import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data"; 
import StagiaireHERO from "@/components/DetailsListEntreprise/StagiaireHERO";
import Navbar from "@/components/DetailsListEntreprise/Navbar";
import Fonction from "@/components/DetailsListEntreprise/Fonction";
import Information from "@/components/DetailsListEntreprise/Information";
import CardGeo from "@/components/DetailsListEntreprise/CardGeo";
import Share from "@/components/DetailsListEntreprise/Share";

export default function Stagiaire() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not fojhhund</div>; 
  }
  return (
    <div>
      <StagiaireHERO />
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:py-14 lg:p-5 sm:gap-5">
        <div className="flex flex-col" style={{ width: "70%" }}>
          <Navbar />
          
          <h1 className="font-semibold text-xl px-6">{enterprise.whoAreWe.content}</h1>
          <div className="px-6">
            <p className="py-9">{enterprise.whoAreWe.content}</p>
          </div>
          <hr />

          <div className="pt-7">
            <h1 className="font-semibold text-xl px-6">{enterprise.jobDescription.title}</h1>
            <p className="py-9 px-6">{enterprise.jobDescription.content}</p>
            <ul className="px-12 flex flex-col gap-4 w-full">
            </ul>
          </div>

          <div className="pt-5">
            <hr />
            <ul className="px-5 pt-8 flex flex-col gap-4 w-full">
              <h1 className="font-semibold text-xl px-6">{enterprise.advantages.title}</h1>
              {enterprise.advantages.items.map((item, index) => (
                <li key={index} className="flex justify-between px-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <br />
        </div>

        <div className="" style={{ width: "30%" }}>
          <div className="flex items-center sticky border rounded font-bold bg-[#472df1] gap-2 text-white py-2 justify-center">
            <button>Postuler</button>
            <RiShareBoxFill />
          </div>
          <div className="py-7">
            <Fonction />
          </div>
          <Information />
          
          <div className="flex px-5 pt-5 justify-between">
            <span>
              <strong>{enterprise.location}</strong>
            </span>
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
              {enterprise.remotePolicy}
            </button>
          </div>
          <CardGeo />
          <div className="hidden md:flex px-5 justify-between items-center">
            <span className="text-xs">{enterprise.location}</span>
            <button className="flex text-xs items-center underline text-blue-800 gap-2">
              <FaClock color="blue" />
              {enterprise.calcul}
            </button>
          </div>
          <div className="pt-12 px-5">
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}
