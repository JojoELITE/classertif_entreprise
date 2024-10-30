import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap, Tag } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";

export default function  Stagiaire1() {
 

  return (
    <div   className=" flex p-5  justify-between  h-full font-extrabold text-[#333333] lg:p-3 w-full">
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="flex items-center justify-center gap-9">
          <div>
            <p>
              Stagiaire - Consultant Forensic, Investigation et
              Litigation - 2024 - H/F
            </p>
            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4]  text-xs flex gap-1 items-center justify-center px-2 transition-colors">
                  <Tag size={15} color="grey" />
                  CDI
                </button>
                <button className="bg-[#f4f4f4]  gap-2 border text-nowrap text-xs flex items-center justify-center px-2 transition-colors">
                  <CiLocationOn size={15} color="grey" />
                  Honguemare-Guenouville, France
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-[#f4f4f4]  border text-xs flex gap-1 items-center justify-center px-2 transition-colors"
                >
                  <GraduationCap size={15} color="grey" />
                  Sans diplôme
                </button>
                <button
                  className="bg-[#f4f4f4]  border text-xs flex gap-2 items-center justify-center px-2 transition-colors"
                >
                  <BriefcaseBusiness size={11} color="grey" />
                  &lt;1 an
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-[#f4f4f4]  border text-xs flex gap-2 items-center justify-center px-2 transition-colors"
                >
                  <IoMdTime color="grey" />
                  Temps partiel
                </button>
                <button className="bg-[#f4f4f4]  border text-xs flex gap-1 items-center justify-center px-2 transition-colors">
                  <IoMdGlobe color="grey" />
                  Pas de télétravail
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}