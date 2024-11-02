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

  // Vérification de l'existence de l'entreprise et du stagiaire
  if (!enterprise) {
    return <div>Entreprise non trouvée</div>;
  }

  const stagiaire = enterprise.stagiaire;

  // Vérification de l'existence du stagiaire
  if (!stagiaire) {
    return <div>Stagiaire non trouvé</div>;
  }

  // Accès aux données du stagiaire
  const stagiaireTitle = stagiaire.title || "Titre non disponible";
  const stagiaireDetails = stagiaire.details;

  // Définir les données du stagiaire avec icônes
  const stagiaireData = [
    { icon: <Tag size={15} color="grey" />, label: stagiaireDetails.type }, // CDI
    { icon: <CiLocationOn size={15} color="grey" />, label: stagiaireDetails.location }, // Location
    { icon: <GraduationCap size={15} color="grey" />, label: stagiaireDetails.diploma }, // Diplôme
    { icon: <BriefcaseBusiness size={11} color="grey" />, label: stagiaireDetails.experience }, // Expérience
    { icon: <IoMdTime color="grey" />, label: stagiaireDetails.workTime }, // Temps de travail
    { icon: <IoMdGlobe color="grey" />, label: stagiaireDetails.remotePolicy }, // Politique de télétravail
  ];

  return (
    <div className="flex p-5 justify-between h-full font-extrabold text-[#333333] lg:p-3 w-full">
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="flex items-center justify-center gap-9">
          <div>
            {/* Affichage du titre */}
            <p className="text-lg font-bold">{stagiaireTitle}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              {/* Mapping des données du stagiaire */}
              {stagiaireData.map((item, index) => (
                <button
                  key={index}
                  className="bg-[#f4f4f4] border text-xs flex gap-1 items-center justify-center px-2 transition-colors flex-grow"
                >
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
