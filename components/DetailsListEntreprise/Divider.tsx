import React from "react";
import LetfText from "./LetfText";
import { FaAngleDown } from "react-icons/fa6";
import Right from "./Right";
import Card1 from "./Card1";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";
import { IoPinOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import CardGeo from "./CardGeo";

export default function Divider() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>;
  }

  return (
    <div className="flex flex-col p-5 lg:flex-row gap-7 lg:gap-12 lg:px-11">
      <div className="lg:w-2/3">
        <LetfText />
      </div>
      <div className="lg:w-1/3">
        <Right />
        
        <div className="hidden md:flex pt-8 justify-between">
          <h1 className="font-extrabold text-xl">{enterprise.lastJobs}</h1>
          <span className="text-xs underline text-black">
            {enterprise.seeOffers}
          </span>
        </div>
        
        <div className="flex md:hidden lg:py-5 py-0 justify-between">
          <h1 className="font-extrabold text-xl">{enterprise.location}</h1>
          <span className="text-xs underline text-black">
            {enterprise.street}
          </span>
        </div>

        {/* First CardGeo visible on small screens only */}
        <div className="flex items-center sm:block md:hidden justify-center ">
          <CardGeo />
        </div>
        
        <div className="flex md:hidden py-5 justify-between">
          <h1 className="font-extrabold text-xl">{enterprise.lastOpportunity}</h1>
          <span className="text-xs underline text-black">
            {enterprise.lastJobs}
          </span>
        </div>

        <div className="flex flex-col py-12 gap-3">
          <Card1 />
        </div>

        
        <div className="py-5 hidden md:flex justify-between">
          <div className="flex items-center gap-1">
            <h1 className="font-extrabold text-xl">{enterprise.location}</h1>
            <IoPinOutline />
          </div>
          <div className="flex gap-5 items-center">
            <span className="text-xs text-black">
              {enterprise.street}
            </span>
            <FaAngleDown color="grey" />
          </div>
        </div>

        
        <div className="hidden md:flex items-center justify-center p-5">
          <CardGeo />
        </div>

        <div className="hidden md:flex justify-between  items-center">
          <span className=" text-xs ">{enterprise.street}</span>
          <button className="flex items-center  underline text-blue-800 gap-2">
            <FaClock color="blue" />
            {enterprise.jobHistory}
          </button>
        </div>
      </div>
    </div>
  );
}