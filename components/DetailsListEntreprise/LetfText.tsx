import React from "react";
import {useParams} from "next/navigation"
import   enterprisesData from "@/components/data/data"
export default function LetfText() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id); // Access the array correctly

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }
  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="font-extrabold text-xl">{enterprise.presentation}</h1>

      <div className="flex flex-col gap-5">
        <p>
         {enterprise.group}
          <strong>d&apos;{enterprise.conseilFacility}</strong>
          {enterprise.collaborationText}
        </p>
        <p>
          <strong>
           {enterprise.serieuxMetier}
          </strong>
         {enterprise.presentationLast}
        </p>
      </div>
    </div>
  );
}
