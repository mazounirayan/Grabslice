import React, { useState } from "react";
import { FaTimes, FaPlus, FaCode } from "react-icons/fa";

// Images pour les toppings (à remplacer par des imports réels)
const placeholderImages: { [key: string]: string } = {
  KT: "/svg/bacon.svg",
  RUBY: "/svg/champignon.svg",
  PEARL: "/svg/crevette.svg",
  KOBOL: "/svg/poulet.svg",
  C: "/svg/onion.svg",
  "C++": "/svg/saumon.svg",
  "C#": "/svg/tomate.svg",
};

interface Language {
  id: string;
  name: string;
}

export default function LanguageCompositionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Tous les toppings disponibles
  const allLanguages = Object.keys(placeholderImages);

  // Fonction pour sélectionner un topping
  const handleSelectLanguage = (language: string) => {
    if (selectedLanguages.some((lang) => lang.name === language)) return;
    setSelectedLanguages([
      ...selectedLanguages,
      { id: Date.now().toString(), name: language },
    ]);
  };

  // Fonction pour supprimer un topping de la composition
  const removeLanguage = (id: string) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang.id !== id));
  };

  // Fonction pour créer le pizza final
  const createProject = () => {
    if (!projectName || selectedLanguages.length === 0) {
      alert("Veuillez remplir tous les champs et sélectionner au moins un topping");
      return;
    }

    // Logique pour envoyer les données au serveur ou autre action
    console.log("pizza créé:", {
      name: projectName,
      languages: selectedLanguages,
    });

    // Fermer la modale après création
    setIsOpen(false);
    
    // Réinitialiser le formulaire
    setProjectName("");
    setSelectedLanguages([]);
    setSelectedLanguage(null);
  };

  // Composant de sélection de topping intégré
  const LanguageSelector = () => (
    <div className="w-full p-4 border rounded-lg shadow-lg">
      <div>
        <h3 className="font-semibold">toppings</h3>
        {allLanguages.map((language) => (
          <div key={language} className="flex items-center mt-2">
            <input
              type="checkbox"
              id={language}
              checked={selectedLanguages.some((lang) => lang.name === language)}
              onChange={() => handleSelectLanguage(language)}
              className="mr-2"
            />
            <label htmlFor={language} className="flex items-center">
              <img
                src={placeholderImages[language]}
                alt={language}
                className="w-6 h-6 mr-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/api/placeholder/30/30";
                }}
              />
              <span>{language}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        <FaPlus className="mr-2" /> Nouvelle pizza
      </button>

      {/* Overlay de la modale */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Contenu de la modale */}
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-90vh overflow-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Composer une nouvelle pizza</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Nom du pizza */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Nom de la pizza
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez le nom de votre pizza"
                />
              </div>

             
              
              {/* Nom du pizza */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Description de la pizza
                </label>
                <textarea
                  
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez le nom de votre pizza"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sélection des toppings */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Sélectionnez les toppings
                  </h3>
                  <LanguageSelector />
                </div>

                {/* Affichage des images des toppings sélectionnés */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3">
                    toppings sélectionnés
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedLanguages.length === 0 ? (
                      <p>Aucun topping sélectionné</p>
                    ) : (
                      selectedLanguages.map((lang) => (
                        <div
                          key={lang.id}
                          className="flex items-center justify-center border p-4 rounded-lg"
                        >
                          <img
                            src={placeholderImages[lang.name]}
                            alt={lang.name}
                            className="w-16 h-16 mr-2"
                          />
                          <span>{lang.name}</span>
                          <button
                            onClick={() => removeLanguage(lang.id)}
                            className="ml-4 text-red-500"
                          >
                            <FaTimes />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Bouton pour créer le pizza */}
              <div className="flex justify-end p-6 border-t">
                <button
                  onClick={createProject}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                  Créer une pizza
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


