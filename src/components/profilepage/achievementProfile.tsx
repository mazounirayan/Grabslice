import { UserProps } from "@interfaces/type";
import { FaPizzaSlice, FaPlus, FaHeart, FaComment } from "react-icons/fa";
import { useState, useEffect } from "react";
import SliceService from '@services/SliceService'; // Assurez-vous que ce service existe
import { testData } from "./testData";
const SliceProfile: React.FC<UserProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [slices, setSlices] = useState<Slice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlices = async () => {
      try {
        // Vous devrez adapter cette partie selon votre logique pour récupérer les slices de l'utilisateur
        // Par exemple, si vous avez une méthode pour récupérer les slices par utilisateur
        // const sliceService = new SliceService();
        // const userSlices = await Promise.all(
        //   (user.sliceIds || []).map(id => sliceService.GetSliceById(id.toString()))
        // );

        setTimeout(() => {
            // Pour tester, utilisez les slices des projets épinglés
            const projectSlices = user.pinnedPizzas.flatMap(project => 
              testData.slices.filter((slice: { project: { id: number; }; }) => slice.project.id === project.id)
            );
            setSlices(projectSlices);
            setLoading(false);
          }, 1000);


      //  setSlices(userSlices);
      } catch (error) {
        console.error("Erreur lors du chargement des slices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlices();
  }, [user]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-red-700 flex items-center gap-2">
          <FaPizzaSlice /> Mes Slices
        </h2>
        <button 
          onClick={toggleModal}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPlus /> Ajouter une Slice
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-3 text-gray-600">Chargement de vos slices...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slices && slices.length > 0 ? (
            slices.map((slice) => (
              <div key={slice.id} className="p-4 border-2 border-orange-200 rounded-lg bg-yellow-50 hover:shadow-md transition">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-orange-800">{slice.name}</h3>
                    <div className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">
                      Slice #{slice.id}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 gap-2">
                    <span className="font-semibold">De:</span> {slice.sender?.username || "Anonyme"}
                    <span className="mx-2">→</span>
                    <span className="font-semibold">Pour:</span> {slice.recipient?.username || "Anonyme"}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Projet: {slice.project?.name || "Non spécifié"}
                  </div>
                  
                  {slice.categories && slice.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {slice.categories.map((skill, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-2 pt-2 border-t border-orange-100">
                    <div className="flex items-center gap-1 text-red-500">
                      <FaHeart /> <span className="text-sm">{slice.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-500">
                      <FaComment /> <span className="text-sm">{slice.comments?.length || 0}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(slice.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 p-8 text-center text-gray-500 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <FaPizzaSlice className="mx-auto text-4xl text-gray-300 mb-3" />
              <p className="mb-2">Aucune slice disponible pour le moment</p>
              <button 
                onClick={toggleModal} 
                className="mt-2 text-orange-500 hover:text-orange-600"
              >
                + Créer votre première slice
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modal pour ajouter une nouvelle slice */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-orange-700">Créer une nouvelle Slice</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Nom de la slice</label>
                <input type="text" className="w-full border-2 border-orange-200 rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Destinataire</label>
                <select className="w-full border-2 border-orange-200 rounded-lg p-2">
                  <option value="">Sélectionner un destinataire</option>
                  {/* Options de destinataires à remplir dynamiquement */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Projet</label>
                <select className="w-full border-2 border-orange-200 rounded-lg p-2">
                  <option value="">Sélectionner un projet</option>
                  {/* Options de projets à remplir dynamiquement */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Compétences</label>
                <div className="flex flex-wrap gap-2 p-2 border-2 border-orange-200 rounded-lg">
                  {/* Compétences à sélectionner */}
                  {user.skills && user.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-1">
                      <input type="checkbox" id={`skill-${skill.id}`} />
                      <label htmlFor={`skill-${skill.id}`} className="text-sm">
                        {skill.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  type="button" 
                  onClick={toggleModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bannière promotionnelle Pizza Party */}
      <div className="mt-6 p-4 bg-red-600 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">! PIZZA PARTY !</h3>
        <p className="mb-2">CREATE YOUR OWN PIZZERIA, BUILD YOUR UNIQUE PIZZAS WITH YOUR FELLOW PIZZA GUYS</p>
        <p className="text-yellow-200 font-bold">BEST PIZZA IN THE YEAR GETS A FREE SUPPLY OF PIZZA FOR A MONTH!</p>
      </div>
    </div>
  );
};

export default SliceProfile;