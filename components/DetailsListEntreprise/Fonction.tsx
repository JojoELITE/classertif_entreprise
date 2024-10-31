import React from "react";
import StagiaireHERO from "./StagiaireHERO";
import Information from "./Information";
import { RiShareBoxFill } from "react-icons/ri";
import CardGeo from "./CardGeo";
import { FaClock } from "react-icons/fa6";
import Share from "./Share";
import Fonction from "./Fonction";
import Navbar from "./Navbar";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";
import EnterpriseCards from "../listEntreprise/EntrepriseCard";

export default function Stagiaire() {
  const { id } = useParams(); 
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }

  return (
    <div>
      <StagiaireHERO />
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:py-14 lg:p-5 sm:gap-5">
        <div className="flex flex-col" style={{ width: "70%" }}>
          <Navbar />
          <h1 className="font-semibold text-xl px-6">{enterprise.whoAreWe.title}</h1>
          <div className="px-6">
            <p className="py-9">
             {enterprise.whoAreWe.content}
            </p>
          </div>
          <hr />

          <div className="pt-7">
            <h1 className="font-semibold text-xl px-6">{enterprise.jobDescription.title}</h1>
            <p className="py-9 px-6">
            {enterprise.jobDescription.content}
              <span>
                <strong>{enterprise.advantages.title} </strong>
              </span>
              <br />
              {enterprise.advantages.items }
            </p>
            <ul className="px-12 flex flex-col gap-4 w-full">
              <li className="flex justify-between">
                Participer à l&apos;ensemble des travaux d&apos;investigation : analyse de
                données financières, analyses comptables, revue de documents et
                d&apos;emails, préparation d&apos;entretiens, etc.
              </li>
              <li className="flex justify-between">
                Participer à l&apos;évaluation des dommages dans le cadre de litiges
                et d&apos;expertises judiciaires : analyses comptables et
                financières, modélisations financières, appréhension du contexte
                économique et des caractéristiques de l&apos;activité.
              </li>
              <li className="flex justify-between">
                Participer à la rédaction des rapports d&apos;enquête et d&apos;expertise
                financière et préparer les supports, les pièces et annexes.
              </li>
              <li className="flex justify-between">
                Participer à des missions annexes, comme répondre à des appels
                d&apos;offres, prendre part au développement des activités dans
                l&apos;ensemble de notre réseau international (veille stratégique,
                coordination entre bureaux), préparer des présentations de nos
                activités.
              </li>
            </ul>
          </div>

          <div className="pt-5">
            <hr />
            <ul className="px-5 pt-8 flex flex-col gap-4 w-full">
              <h1 className="font-semibold text-xl px-6">Avantages</h1>
              <li className="flex justify-between px-5">
                Étudiant(e) en Master (bac+5) d&apos;école d&apos;ingénieurs, de commerce
                ou universitaire de premier rang, vous complétez idéalement ce
                cursus par une spécialisation comptable ou financière.
              </li>
              <li className="flex justify-between px-5">
                Vous avez de fortes capacités analytiques et êtes à l&apos;aise avec
                les chiffres et informations financières.
              </li>
              <li className="flex justify-between px-5">
                Vous avez de très bonnes capacités rédactionnelles.
              </li>
              <li className="flex justify-between px-5">
                Vous avez un esprit critique, êtes intellectuellement
                curieux(se) et particulièrement rigoureux(se).
              </li>
              <li className="flex justify-between px-5">
                Vous êtes capable de travailler à la fois de manière autonome et
                en équipe.
              </li>
              <li className="flex justify-between px-5">
                Nos missions se déroulant principalement en français et en
                anglais, la pratique de l&apos;anglais courant écrit et oral est
                nécessaire, celle du français est indispensable.
              </li>
            </ul>
          </div>
          <br />
        </div>
        <div className="" style={{ width: "30%" }}>
          <div className="flex items-center sticky border rounded font-bold bg-[#472df1] gap-2 text-white py-2 justify-center">
            <button>Postuler</button>
            <RiShareBoxFill />
          </div>
          <div className="py-7">
            <Fonction />
          </div>
          <Information />

          <div className="flex px-5 pt-5 justify-between">
            <span>
              <strong>{enterprise.Localisation}</strong>
            </span>
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
             {enterprise.Pasdetélétravail}
            </button>
          </div>
          <CardGeo />
          <div className="hidden md:flex px-5 justify-between items-center">
            <span className="text-xs">{enterprise.location}</span>
            <button className="flex text-xs items-center underline text-blue-800 gap-2">
              <FaClock color="blue" />
             {enterprise.calcul}
            </button>
          </div>
          <div className="pt-12 px-5">
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}
