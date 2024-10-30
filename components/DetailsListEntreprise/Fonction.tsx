import React from "react";

import { CgProfile } from "react-icons/cg";
export default function Fonction() {
  return (
    <div className="flex flex-col p-5">
      <div className="border rounded sm:[290px] lg:h-[310px] w-full bg-[#edf0ff]">
        <h1 className="text-[#3927ac] font-extrabold text-xl pl-4 text-nowrap  py-4">
          Informations générales
        </h1>
        <div className=" gap-7 px-4">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="flex items-center  h-7 w-7 bg-blue-900 rounded justify-center ">
              <CgProfile />
              </div>
              <div className="flex flex-col gap-2">
                <p>Fonction</p>
                <p >Fonction</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center h-7 w-7 bg-blue-900 rounded justify-center ">
              <CgProfile />
              </div>
              <div className="flex flex-col gap-5">
                <p className="mb-2">Fonction</p>
               
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center  h-7 w-7 bg-blue-900 rounded justify-center ">
              <CgProfile />
              </div>
              <div className="flex flex-col gap-5">
                <p className="mb-2">Fonction</p>
               
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center  h-7 w-7 bg-blue-900 rounded justify-center ">
              <CgProfile />
              </div>
              <div className="flex flex-col gap-5">
                <p className="mb-2">Fonction</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
