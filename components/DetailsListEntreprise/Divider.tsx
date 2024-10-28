import React from "react";
import LetfText from "./LetfText";
import Right from "./Right";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

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
        <div className="flex flex-col gap-3">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
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
      </div>
    </div>
  );
}
