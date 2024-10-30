import React from "react";
import StagiaireHERO from "./StagiaireHERO";
import Information from "./Information";
import CardGeo from "./CardGeo";
import { FaClock } from "react-icons/fa6";
import Share from "./Share";
import Fonction from "./Fonction";

export default function Stagiaire() {
  return (
    <div>
      <StagiaireHERO />
      <div className="flex gap-12 py-14 p-5 ">
        <div className="flex flex-col" style={{ width: "70%" }}>
          <h1 className="font-semibold text-xl px-6">Qui sommes-nous?</h1>
          <div className="px-6">
            <p className="py-9">
              Forvis Mazars est un groupe international d&apos;audit, de fiscalité et
              de conseil. Avec + de 40 000 collaborateurs présents dans une
              centaine de pays, nous faisons partie du Top 10 des cabinets
              mondiaux. Nous faisons des métiers sérieux... sans se prendre au
              sérieux. Faire partie de nos équipes, c&apos;est avant tout assumer sa
              singularité et oser partager ses idées, dans une ambiance de
              travail que nous vous invitons à découvrir. Si vous souhaitez
              construire votre propre parcours et que vous aimez entreprendre,
              vous êtes au bon endroit!{" "}
            </p>
          </div>
          <hr />

          <div className="pt-7">
            <h1 className="font-semibold text-xl px-6">Description du poste</h1>
            <p className="py-9 px-6">
              Dans le cadre du développement de ses activités, le département
              Forensic Investigation Services de Forvis Mazars accueille des
              stagiaires ayant vocation à être pleinement intégrés au sein de
              ses équipes opérationnelles. Vous rejoindrez notre équipe Forensic
              Investigation et Litigation en pleine croissance, constituée de
              personnes passionnées par la conduite d&apos;enquêtes internes sur des
              cas de fraude présumée ou avérée et par l&apos;évaluation de préjudice
              financier dans le cadre de contentieux ou d&apos;arbitrages. En mission
              d&apos;investigation, nous menons des enquêtes internes lorsque, par
              exemple, des personnes sont suspectées de détournement de fonds,
              de dépenses professionnelles abusives, de collusion avec des
              fournisseurs, de harcèlement moral. En mission d&apos;évaluation de
              préjudice financier, nous construisons des scénarios
              contrefactuels afin de modéliser la situation dans laquelle se
              serait retrouvé le demandeur en l&apos;absence de fait générateur
              (perte d&apos;exploitation, pratique anticoncurrentielle, etc.) Vous
              serez formé(e) et accompagné(e) sur nos missions d&apos;investigation
              ou d&apos;évaluation de préjudice.
              <br />
              <span>
                <strong>Équipe </strong>
              </span>
              <br />
              Vous serez intégré(e) à une équipe polyvalente et interviendrez
              sur des dossiers d&apos;investigation ou d&apos;évaluation de nature variée,
              dans des secteurs divers, aussi bien pour des grands groupes que
              des ETI, en France ou à l&apos;international. Vous travaillerez en
              étroite collaboration avec les seniors et managers sur des
              missions variées qui incluront :
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
       
          <div className="pt-5" >
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
          <div className="flex items-center sticky border rounded bg-blue-800 text-white py-2 justify-center">
            <button>Postuler</button>
          </div>
          <div className="py-7">
          <Fonction/>
          </div>
          <Information />
         
          <div className="flex px-5 pt-5 justify-between">
            <span>
              <strong>Localisation</strong>
            </span>
            <button className="bg-[#edf0ff] border px-2 rounded text-xs text-[#4b32f3]">
              Pas de télétravail
            </button>
          </div>
          <CardGeo />
          <div className="hidden md:flex px-5 justify-between items-center">
            <span className="text-xs">Courbevoie, France</span>
            <button className="flex text-xs items-center underline text-blue-800 gap-2">
              <FaClock color="blue" />
              Calculer le temps de trajet
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
