import React, { useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { IMAGES_PATH } from "@assets/values/imgPath";

// Exemple d'images (tu peux les remplacer par des liens ou des fichiers locaux)
// Option 2: Si les images sont dans le dossier public


export default function ToppingListFilter() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [recents, setRecents] = useState<string[]>([]);
  
    // Liste initiale des éléments disponibles
    const allToppings = Object.keys(IMAGES_PATH);
  
    const handleSelect = (item: string) => {
      setSelectedItem(item === selectedItem ? null : item);
  
      // Met à jour la liste "Recents"
      setRecents((prevRecents) => {
        const updatedRecents = [item, ...prevRecents.filter((i) => i !== item)];
        return updatedRecents.slice(0, 3); // Garde seulement les 3 derniers
      });
    };
  
    // Exclure les éléments récents de la liste "Toppings"
    const filteredToppings = allToppings.filter((item) => !recents.includes(item));
  
    // Gérer l'erreur de chargement d'image
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = "https://via.placeholder.com/30/ff0000"; // Image de secours (rouge)
    };
  
    return (
      <div className=" p-4 border rounded-lg shadow-lg">
        {/* Recents */}
        <div className="mb-4">
          {
            !(recents.length === 0) && (
              <div>
                  <h3 className="font-semibold flex justify-between items-center">
              Recents 
              {/* <FaThumbtack className="text-gray-500 cursor-pointer" /> */}
            </h3>
            {recents.map((item) => (
              <button
                key={item}
                onClick={() => handleSelect(item)}
                className={`w-full flex items-center p-2 mt-2 rounded-lg ${
                  selectedItem === item ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <img
                  src={IMAGES_PATH[item]}
                  alt={item}
                  className="w-6 h-6 mr-2"
                  onError={handleImageError}
                />
                <span>{item}</span>
              </button>
              ))
            }
              </div>
            )
          }
        </div>
  
        {/* Toppings (sans les récents) */}
        <div>
          <h3 className="font-semibold">Toppings</h3>
          {filteredToppings.map((item) => (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className={`w-full flex items-center p-2 mt-2 rounded-lg ${
                selectedItem === item ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              <img
                src={IMAGES_PATH[item]}
                alt={item}
                className="w-6 h-6 mr-2"
                onError={handleImageError}
              />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

