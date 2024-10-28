import React from "react";
import LetfText from "./LetfText";
import Right from "./Right";

export default function Divider() {
  return (
    <div className="flex gap-12  px-11">
      <div style={{ width: "65% " }}>
        <LetfText />
      </div>
      <div style={{ width: "35% " }}>
        <Right />
        <div className="flex py-9 justify-between">
           <div> <h1 className="font-extrabold text-xl">Derniers jobs</h1></div>
           <div>
            <span className="text-xs underline">Voir les dernières offres</span>
           </div>
        </div>
      </div>
    </div>
  );
}
