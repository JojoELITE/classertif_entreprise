import React from "react";
import CardOffre from "./CardOffre";
import CardOffre2 from "./CardOffre2";
import CardOffre1 from "./CardOffre1";
import InputFamily from "./InputFamily";

export default function Offres() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col gap-6 ">
        <InputFamily />
        <CardOffre />
        <CardOffre2 />
        <CardOffre />
        <CardOffre1 />
        <CardOffre2 />
        <CardOffre />
      </div>
    </div>
  );
}
