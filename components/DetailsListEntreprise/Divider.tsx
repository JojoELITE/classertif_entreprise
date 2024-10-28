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
      </div>
    </div>
  );
}
