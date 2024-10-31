import React from "react";
import JobCards from "./CardOffre";

import InputFamily from "./InputFamily";

export default function Offres() {
  return (
    
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col gap-6 ">
        <InputFamily />
        <JobCards />
       
      </div>
    </div>
  );
}
