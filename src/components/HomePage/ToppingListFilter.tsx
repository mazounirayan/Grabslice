import React, { useState } from "react";
import { IMAGES_PATH } from "@assets/values/imgPath";

export default function ToppingListFilter() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [recents, setRecents] = useState<string[]>([]);

  // Liste initiale des éléments disponibles
  const allToppings = Object.keys(IMAGES_PATH);

  const handleSelect = async (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);

    // Met à jour la liste "Recents"
    setRecents((prevRecents) => {
      const updatedRecents = [item, ...prevRecents.filter((i) => i !== item)];
      return updatedRecents.slice(0, 3);
    });

    // 🛠️ Faire la requête HTTP avec `item`
    try {
      const url = `${window.location.origin}?langage=${encodeURIComponent(item)}`;
      console.log("📡 URL de requête :", url); // ✅ Vérification de l'URL

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Réponse du serveur :", data);
    } catch (error) {
      console.error("❌ Erreur lors de la requête :", error);
    }
  };

  // Exclure les éléments récents de la liste "Toppings"
  const filteredToppings = allToppings.filter((item) => !recents.includes(item));

  // Gérer l'erreur de chargement d'image
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "https://via.placeholder.com/30/ff0000";
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      {/* Recents */}
      {recents.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Recents</h3>
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
          ))}
        </div>
      )}

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
}
