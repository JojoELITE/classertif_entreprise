"use client";
import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";
import StagiaireHERO from "@/components/DetailsListEntreprise/StagiaireHERO";
import Information from "@/components/DetailsListEntreprise/Information";
import CardGeo from "@/components/DetailsListEntreprise/CardGeo";
import Share from "@/components/DetailsListEntreprise/Share";
import Navbar from "./Navbar";
import { FaAngleLeft } from "react-icons/fa";
import JobInfo from "./JobInfo";
import SegondImage from "./SegondImage";

export default function Stagiaire() {
  const { id } = useParams();
  const enterprise = enterprisesData.enterprisesData.find(
    (ent) => ent.id.toString() === id
  );

  if (!enterprise) {
    return <div>Enterprise not found</div>;
  }
  const goBack = () => {
    if (window.history.length > 1) {
      const currentState = history.state;
      console.log("État actuel:", currentState);
      history.back();
    } else {
      console.warn("Aucune page précédente dans l'historique.");
      window.location.href = "/";
    }
  };

  return (
    <div>
      <StagiaireHERO />
      <div className="flex w-full px-7 md:hidden py-7">
        <JobInfo />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:py-14 lg:p-5 sm:gap-5">
        <div className="flex  flex-col w-full lg:w-2/3">
          <Navbar />
          <div
            onClick={goBack}
            className="flex text-nowrap w-44 cursor-pointer gap-4 items-center pl-5 py-12 "
          >
            <FaAngleLeft color="blue" />
            <button className=" text-blue-400 underline">
              Revenir aux offres
            </button>
          </div>
          <h1 className="font-semibold text-xl px-6">
            {enterprise.whoAreWe.title}
          </h1>
          <div className="px-6">
            <p className="py-9">{enterprise.whoAreWe.content}</p>
          </div>
          <hr />

          <div className="pt-7">
            <h1 className="font-semibold text-xl px-6">
              {enterprise.jobDescription.title}
            </h1>
            <p className="py-9 px-6">{enterprise.jobDescription.content}</p>
            {/* <ul className="px-12 flex flex-col gap-4 w-full"></ul> */}
          </div>

          <div className="pt-5">
            <hr />
            <ul className="px-5 pt-8 flex flex-col gap-4 w-full">
              <h1 className="font-semibold text-xl px-6">
                {enterprise.advantages.title}
              </h1>
              <span>{enterprise.advantages.items}</span>
            </ul>
          </div>
          <br />
          <div className="flex md:hidden pt-12 px-5">
            <Share />
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="hidden md:flex items-center sticky border rounded font-bold bg-[#472df1] gap-2 text-white py-2 justify-center">
            <button>Postuler</button>
            <RiShareBoxFill />
          </div>
          <div className=" flex-col gap-2 py-7">
            <JobInfo />
           <div className="  pt-10 ">
            <span className="py-12"> Decouvrez-nous</span>
           <SegondImage/>
           </div>
            <Information />
          </div>

          <div className="flex px-5 pt-5 justify-between">
            <span>
              <strong>{enterprise.location}</strong>
            </span>
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
              {enterprise.remotePolicy}
            </button>
          </div>
          <CardGeo />
          <div className="hidden md:flex px-5 justify-between items-center text-nowrap">
            <span className="text-xs">{enterprise.location}</span>
            <button className="flex text-xs items-center text-nowrap underline text-blue-800 gap-2">
              <FaClock color="blue" />
              {enterprise.calcul}
            </button>
          </div>
          <div className="hidden md:flex pt-12 px-5">
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}
