import { useState } from 'react';
import Tabs from "./tabs"; // Importez le composant Tabs
import Divider from './Divider';
import Offres from './Offres';

const MyComponent = () => {
    const [currentTab, setCurrentTab] = useState('Présentation');

    const handleTabSelect = (link: string) => {
        setCurrentTab(link);
    };

    return (
        <div className='flex flex-col gap-7'>
            <div><Tabs onSelect={handleTabSelect} /></div>
            {currentTab === 'Présentation' && <div><Divider/></div>}
            {currentTab === 'Offres' && <div><Offres/></div>}
        </div>
    );
};

export default MyComponent;
