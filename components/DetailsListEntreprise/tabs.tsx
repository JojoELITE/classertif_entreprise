"use client";
import { useState } from "react";
import enterprisesData from "@/components/data/data";
import { useParams } from "next/navigation";

// Define an interface for the toggle items
interface ToggleItem {
    info: string;
    link: string;
    count?: number | null;
}

interface Enterprise {
    id: number;
    toggle: ToggleItem[];
}

const Tabs: React.FC<{ onSelect: (link: string) => void }> = ({ onSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { id } = useParams();
    
    // Find the enterprise by id
    const enterprise = enterprisesData.enterprisesData.find((ent: Enterprise) => ent.id.toString() === id);

    if (!enterprise) {
        return <div>Enterprise not found</div>; 
    }

    const { toggle } = enterprise;

    const handleClick = (index: number, link: string) => {
        setSelectedIndex(index);
        onSelect(link);
    };

    return (
        <div className='w-full top-20 lg:px-14'>
            <div className='flex gap-[11px]'>
                {toggle.map((item: ToggleItem, index: number) => (
                    <div
                        key={index}
                        className={`relative flex text-nowrap cursor-pointer py-4 px-4 ${
                            selectedIndex === index ? "text-[#472df1] font-bold" : "text-gray-500"
                        }`}
                        onClick={() => handleClick(index, item.link)}
                    >
                        <div className="flex gap-4 items-center justify-center">
                            {item.info}
                            {item.count !== undefined && item.count !== null && (
                                <div className={`rounded px-2 ${
                                    selectedIndex === index ? "bg-[#dee2ff] text-[#8e84f9]" : "bg-gray-300"
                                } text-white`}>
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
