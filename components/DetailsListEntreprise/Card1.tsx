import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";
import { TbBadge } from "react-icons/tb";
export default function Card1() {
  return (
    <div className="flex justify-between border rounded h-full font-extrabold text-[#333333] p-3 w-full">
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-9">
        <div>
          <p>
            Stagiaire - Consultant Forensic, <br /> Investigation et Litigation
            - 2024 - H/F
          </p>
          <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] border  text-xs flex gap-1 items-center justify-center px-2">
                  <TbBadge size={15} color="grey"  />
                  CDI
                </button>
                <button className="bg-[#f4f4f4] gap-2 border  text-nowrap text-xs flex items-center justify-center px-2">
                <CiLocationOn size={15}  color="grey" />
                  Honguemare-Guenouville, France
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] border  text-xs flex gap-1 items-center justify-center px-2">
                    <GraduationCap size={15} color='grey'/>
                  Sans diplôme
                </button>
                <button className="bg-[#f4f4f4] border  text-xs flex gap-2 items-center justify-center px-2">
                  <BriefcaseBusiness size={11}  color="grey" />
                  &lt;1 an
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] border  text-xs flex gap-2 items-center justify-center px-2">
                  <IoMdTime  color="grey" />
                  Temps partiel
                </button>
                <button className="bg-[#f4f4f4] border  text-xs flex gap-1 items-center justify-center px-2">
                  <IoMdGlobe  color="grey" />
                  Pas de télétravail
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 w-12  flex items-center justify-center">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
}