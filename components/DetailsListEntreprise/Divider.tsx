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
    <div className="flex gap-12  px-11">
      <div style={{ width: "65% " }}>
        <LetfText />
      </div>
      <div style={{ width: "35% " }}>
        <Right />
        <div className="flex py-5 justify-between">
          <div>
            <h1 className="font-extrabold text-xl">Derniers jobs</h1>
          </div>
          <div>
            <span className="text-xs underline text-black">
              Voir les dernières offres
            </span>
          </div>
        </div>
        <div className="flex flex-col py-12 gap-3">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="flex py-5 justify-between">
          <div className=" flex items-center justify-center gap-1">
            <h1 className="font-extrabold text-xl"> Localisation </h1>
            <IoPinOutline />
          </div>
          <div className="flex gap-5 items-center justify-center">
            <span className="text-xs  text-black">
              1 Rue de Hanovre, 92290 <br /> Châtenay-Malabry, France
            </span>
            <FaAngleDown color="grey" />
          </div>
        </div>
        <CardGeo />
        <div className="flex justify-between items-center">
          <span>
            Rue de Hanovre, <br /> Châtenay-Malabry, <br /> France
          </span>
          <button className="flex items-center underline text-blue-800 justify-center gap-2"> <FaClock color="blue" />
          Calculer le temps de trajet</button>
        </div>
      </div>
    </div>
  );
}
