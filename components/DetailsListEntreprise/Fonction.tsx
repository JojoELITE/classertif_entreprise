import React from "react";
import { IoMdGlobe } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BriefcaseBusiness, Tag } from "lucide-react";
import Mazar from "./Mazar";
export default function Fonction() {
  return (
    <div className="flex flex-col">
      <div className="border py-5 rounded sm:w-[290px] lg:h-[310px] lg:w-full bg-[#edf0ff]">
        <div className=" gap-7 px-4">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center ">
              <div className="flex items-center  h-8 w-8 bg-[#dee3ff] rounded justify-center ">
                <CgProfile color="#3c2cae" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#472df1]">Fonction</p>
                <p className="text-[#3927ac] font-extrabold">conseil</p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="flex items-center  h-8 w-8 bg-[#dee3ff] rounded justify-center ">
                <Tag color="#3c2cae"  size={18}/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#472df1]">Contrat</p>
                <p className="text-[#3927ac] font-extrabold">Stage</p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="flex items-center  h-8 w-8 bg-[#dee3ff] rounded justify-center ">
                <IoMdGlobe color="#3c2cae" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#472df1]">Politique de télétravail</p>
                <p className="text-[#3927ac] font-extrabold">Pas de télétravail</p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="flex items-center  h-8 w-8 bg-[#dee3ff] rounded justify-center ">
                <BriefcaseBusiness color="#3c2cae"  size={18}/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#472df1]">Expérience</p>
                <p className="text-[#3927ac] font-extrabold">&lt; 1 an</p>
              </div>
            </div>

          </div>
          
        </div>
       
      </div>
      < Mazar/>
    </div>
  );
}
