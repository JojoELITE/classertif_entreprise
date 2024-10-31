import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap, Tag } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";

const jobData = [
  {
    title: "Equipier Polyvalent Etudiant (H/F)",
    location: "Honguemare-Guenouville, France",
    contractType: "CDI",
    diploma: "Sans diplôme",
    experience: "<1 an",
    workTime: "Temps partiel",
    remote: "Pas de télétravail",
  },
  {
    title: "Stagiaire - Consultant Forensic, Investigation et Litigation - 2024 - H/F",
    location: "Honguemare-Guenouville, France",
    contractType: "CDI",
    diploma: "Sans diplôme",
    experience: "<1 an",
    workTime: "Temps partiel",
    remote: "Pas de télétravail",
  },
  // Add more job objects as needed
];

export default function CardList() {
  return (
    <div className="flex flex-col gap-4">
      {jobData.map((job, index) => (
        <div
          key={index}
          className="group cursor-pointer flex p-5 justify-between border rounded h-full font-extrabold text-[#333333] lg:p-3 w-full hover:text-blue-400"
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-9">
              <div>
                <p>{job.title}</p>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex gap-3">
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                      <Tag size={15} color="grey" />
                      {job.contractType}
                    </button>
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 gap-2 border text-nowrap text-xs flex items-center justify-center px-2">
                      <CiLocationOn size={15} color="grey" />
                      {job.location}
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                      <GraduationCap size={15} color="grey" />
                      {job.diploma}
                    </button>
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                      <BriefcaseBusiness size={11} color="grey" />
                      {job.experience}
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                      <IoMdTime color="grey" />
                      {job.workTime}
                    </button>
                    <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                      <IoMdGlobe color="grey" />
                      {job.remote}
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-20 w-12 sm:pl-24 lg:pl-0 flex items-center justify-center">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
