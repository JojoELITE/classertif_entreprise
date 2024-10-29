import React from 'react';
import InputLoookingFor from './InputLoookingFor';
import RechercheWithHelp from './RechercheWithHelp';

export default function InputFamily() {
  return (
    <div className='flex flex-col py-5 p-4 gap-4'>
      <InputLoookingFor />
      <div className='flex flex-col md:flex-row p-5 md:flex-grow gap-9'>
        <RechercheWithHelp />
        <RechercheWithHelp />
        <RechercheWithHelp />
      </div>
    </div>
  );
}
