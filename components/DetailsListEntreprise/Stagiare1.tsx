import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap, Tag } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";

export default function Stagiaire1() {
  const { id } = useParams();
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise || !enterprise.stagiaire) {
    return <div>Enterprise or stagiaire not found</div>; // Handle case where enterprise or stagiaire doesn't exist
  }

  // Find the title from the stagiaire array
  const stagiaireTitle = enterprise.stagiaire.find(item => item.title)?.title || "No Title Available";

  // Define stagiaire data with icons only
  const stagiaireData = [
    { icon: <Tag size={15} color="grey" />, label: enterprise.stagiaire.find(item => item.label)?.label }, // CDI
    { icon: <CiLocationOn size={15} color="grey" />, label: enterprise.stagiaire[1]?.label }, // Location
    { icon: <GraduationCap size={15} color="grey" />, label: enterprise.stagiaire[2]?.label }, // Diploma
    { icon: <BriefcaseBusiness size={11} color="grey" />, label: enterprise.stagiaire[3]?.label }, // Experience
    { icon: <IoMdTime color="grey" />, label: enterprise.stagiaire[4]?.label }, // Work Time
    { icon: <IoMdGlobe color="grey" />, label: enterprise.stagiaire[5]?.label }, // Remote Policy
  ];

  return (
    <div className="flex p-5 justify-between h-full font-extrabold text-[#333333] lg:p-3 w-full">
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="flex items-center justify-center gap-9">
          <div>
            {/* Access the title safely */}
            <p>{stagiaireTitle}</p>

            <div className="flex flex-col md:flex-row gap-3 mt-4">
              {/* Map for stagiaire data */}
              {stagiaireData.map((item, index) => (
                <button
                  key={index}
                  className="bg-[#f4f4f4] border text-xs flex gap-1 items-center justify-center px-2 transition-colors"
                >
                  {item.icon} {/* Display the icon only */}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
