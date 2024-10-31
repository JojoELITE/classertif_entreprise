import Stagiaire from "@/components/DetailsListEntreprise/Stagiaire";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div className="overflow-hidden">
        <Suspense fallback={<div>Chargement...</div>}>
        <Stagiaire />
        </Suspense>
 
    </div>
  );
}
