import React from "react";
import LetfText from "./LetfText";
import { FaAngleDown } from "react-icons/fa6";
import Right from "./Right";
import Card1 from "./Card1";
import { IoPinOutline } from "react-icons/io5";
import Card2 from "./Card2";
import { FaClock } from "react-icons/fa";
import Card3 from "./Card3";
import CardGeo from "./CardGeo";

export default function Divider() {
  return (
    <div className="flex flex-col p-5 lg:flex-row gap-7 lg:gap-12 lg:px-11">
      <div className="lg:w-2/3">
        <LetfText />
      </div>
      <div className="lg:w-1/3">
        <Right />
        <div className="hidden md:flex pt-8 justify-between">
          <h1 className="font-extrabold text-xl">Derniers jobs</h1>
          <span className="text-xs underline text-black">
            Voir les dernières offres
          </span>
        </div>
        <div className="flex md:hidden lg:py-5 py-0 justify-between">
          <h1 className="font-extrabold text-xl">Localisation</h1>
          <span className="text-xs underline text-black">
          1 Rue de Hanovre, 92290 <br /> Châtenay-Malabry, France
          </span>
        </div>

        {/* First CardGeo visible on small screens only */}
        <div className="flex items-center sm:block md:hidden justify-center p-5">
          <CardGeo />
        </div>
        <div className="flex md:hidden py-5 justify-between">
          <h1 className="font-extrabold text-xl">Derniers jobs</h1>
          <span className="text-xs underline text-black">
            Voir les dernières offres
          </span>
        </div>
        <div className="flex flex-col py-12 gap-3">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        {/* Second Localisation section */}
        <div className=" py-5 hidden md:flex  justify-between">
          <div className=" flex items-center gap-1">
            <h1 className="font-extrabold text-xl">Localisation</h1>
            <IoPinOutline />
          </div>
          <div className="flex gap-5 items-center">
            <span className="text-xs text-black">
              1 Rue de Hanovre, 92290 <br /> Châtenay-Malabry, France
            </span>
            <FaAngleDown color="grey" />
          </div>
        </div>

        {/* Second CardGeo visible on medium and larger screens */}
        <div className="hidden md:flex items-center justify-center p-5">
          <CardGeo />
        </div>

        <div className=" hidden md:flex  justify-between items-center">
          <span>
            Rue de Hanovre, <br /> Châtenay-Malabry, <br /> France
          </span>
          <button className="flex items-center underline text-blue-800 gap-2">
            <FaClock color="blue" />
            Calculer le temps de trajet
          </button>
        </div>
      </div>
    </div>
  );
}
