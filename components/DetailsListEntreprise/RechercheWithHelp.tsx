import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";

export default function RechercheWithHelp() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    "conseil",
    "finance / assurance",
    "fiscalite / juridique",
    "Conseil",
    "Finance / Assurance",
    "Fiscalité / Juridique",
    "IT / Tech / Produit",
    "Marketing / Communication ",
    "Media / Edition",
    "/ Digital",
    "Ressources humaines",
    "Service & Relation clients",
  ];

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

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-grow relative">
      <div
        onClick={handleInputFocus}
        className="flex w-full items-center px-4 py-2 border rounded-md cursor-pointer"
      >
        <MapPin className="text-gray-400 w-5 h-5 mr-2" />
        <span className="text-gray-400">tout type de profession</span>
      </div>

      {showInput && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-md p-2">
          <input
            type="text"
            placeholder=""
            className="pl-10 w-full py-1 text-xs border border-black/50 rounded-full focus:outline-none"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="mt-2">
            {filteredOptions.map((option) => (
              <div key={option} className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
                <FaAngleRight />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
