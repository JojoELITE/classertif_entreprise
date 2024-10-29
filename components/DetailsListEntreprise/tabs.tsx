"use client";
import { useState } from "react";

const Tableau = [
    { info: 'Présentation', link: 'Présentation' },
    { info: 'Offres d’emploi', link: 'Offres d’emploi', count: 25 }, // Exemple de nombre
];


interface TabsProps {
    onSelect: (link: string) => void; // Define the expected type for onSelect
}

const Tabs: React.FC<TabsProps> = ({ onSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index: number, link: string) => {
        setSelectedIndex(index);
        onSelect(link);
    };

    return (
        <div className='w-full px-12'>
            <div className='flex gap-[11px]'>
                {Tableau.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex text-nowrap cursor-pointer py-4 px-4 ${selectedIndex === index ? "text-[#472df1] font-bold" : "text-gray-500"}`}
                        onClick={() => handleClick(index, item.link)}
                    >
                        <div className="flex gap-4 items-center justify-center">
                            {item.info}
                            {item.count !== undefined && (
                                <div className={`rounded px-2 ${selectedIndex === index ? "bg-blue-500" : "bg-gray-300"} text-white`}>
                                    {item.count}
                                </div>
                            )}
                        </div>
                        {selectedIndex === index && (
                            <span className="absolute bottom-[-2px] left-0 right-0 mx-auto w-full border-b-[3px] border-[#472df1] z-20"></span>
                        )}
                    </div>
                ))}
            </div>
            <div className='bg-gray-400 h-[2px] z-0 relative'></div>
        </div>
    );
};



export default Tabs;