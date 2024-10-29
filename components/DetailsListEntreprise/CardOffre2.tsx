import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";
import { TbBadge } from "react-icons/tb";

export default function Card() {
  return (
    <div className="group cursor-pointer flex p-5 justify-between border rounded h-full font-extrabold text-[#333333] lg:p-3 w-full hover:text-blue-400">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex items-center justify-between gap-9 w-full">
          <div>
            <p>Equipier Polyvalent Etudiant (H/F)</p>
            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                  <TbBadge size={15} color="grey" />
                  CDI
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 gap-2 border text-nowrap text-xs flex items-center justify-center px-2">
                  <CiLocationOn size={15} color="grey" />
                  Honguemare-Guenouville, France
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                  <GraduationCap size={15} color='grey' />
                  Sans diplôme
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                  <BriefcaseBusiness size={11} color="grey" />
                  &lt;1 an
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                  <IoMdTime color="grey" />
                  Temps partiel
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                  <IoMdGlobe color="grey" />
                  Pas de télétravail
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 w-12 flex items-center justify-center">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
}
