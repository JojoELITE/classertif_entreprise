import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import enterprisesData from "@/components/data/data";

export default function RechecheDepartementOrVille() {

  // Move hooks outside of the conditional check
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const { id } = useParams(); 

  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  if (!enterprise) {
    return <div>Enterprise not found</div>; // Handle case where enterprise doesn't exist
  }

  const handleInputFocus = () => setShowInput(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const filteredOptions = enterprise.parville.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-grow relative">
      <div
        onClick={handleInputFocus}
        className="flex w-full items-center px-4 py-2 border rounded-md cursor-pointer"
      >
        <MapPin className="text-gray-400 w-5 h-5 mr-2" />
        <span className="text-gray-400">Département ou ville</span>
      </div>

      {showInput && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md p-2">
          <input
            type="text"
            placeholder="Rechercher"
            className="pl-10 w-full py-1 text-xs border border-black/50 rounded-full focus:outline-none"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="mt-2">
            {filteredOptions.map((option) => (
              <label key={option.name} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.name)}
                    onChange={() => handleCheckboxChange(option.name)}
                    className="mr-2"
                  />
                  {option.name}
                </div>
                <span className="text-gray-500 text-xs">{option.jobs}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
