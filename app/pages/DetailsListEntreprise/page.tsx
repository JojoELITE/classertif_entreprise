import DetailsListEntrepriseHearder from '@/components/DetailsListEntreprise/SectionHeroDetails';
// import Stagiaire from '@/components/DetailsListEntreprise/Stagiaire';
import React, { Suspense } from 'react';

export default function Page() {
  return (
    <div style={{ overflow: 'hidden' }}>
         <Suspense fallback={<div>Chargement...</div>}>
      <DetailsListEntrepriseHearder />
      </Suspense>
    </div>
  );
}
