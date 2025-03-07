import { Slice, UserProps } from "@interfaces/type";
import { FaPizzaSlice, FaPlus, FaHeart, FaComment, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { testData } from "./testData"; // Importez les données de test
type TabType = "received" | "sent";

const SliceProfile: React.FC<UserProps> = ({ user, updateUser }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [receivedSlices, setReceivedSlices] = useState<Slice[]>([]);
    const [sentSlices, setSentSlices] = useState<Slice[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<TabType>("received");
  useEffect(() => {
    // Simulation d'un appel API avec les données de test
    const fetchSlices = async () => {
      try {
        // Simulation d'un délai de chargement
        setTimeout(() => {
          // Supposons que l'ID de l'utilisateur actuel est 1 (Sid ARIFI)
          const currentUserId = 1;
          
          // Filtrer les slices reçues par l'utilisateur
          const received = testData.slices.filter(slice => 
            slice.recipient.id === currentUserId
          );
          
          // Filtrer les slices envoyées par l'utilisateur
          const sent = testData.slices.filter(slice => 
            slice.sender.id === currentUserId
          );
          
          setReceivedSlices(received);
          setSentSlices(sent);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erreur lors du chargement des slices:", error);
        setLoading(false);
      }
    };

    fetchSlices();
  }, [user]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Fonction pour afficher une slice
  const renderSlice = (slice: Slice) => (
    <div key={slice.id} className="p-4 border-2 border-orange-200 rounded-lg bg-yellow-50 hover:shadow-md transition">
      <div className="flex gap-3">
        <div className="text-orange-600">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FFA500" />
            <path d="M12 2v20" stroke="#8B0000" strokeWidth="0.5" />
            <path d="M2 12h20" stroke="#8B0000" strokeWidth="0.5" />
            <circle cx="7" cy="7" r="1" fill="#FF0000" />
            <circle cx="16" cy="9" r="1" fill="#008000" />
            <circle cx="9" cy="15" r="1" fill="#000000" />
            <circle cx="14" cy="14" r="1" fill="#8B0000" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-orange-800">{slice.name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            {activeTab === "received" ? (
              <>
                <span className="font-medium">De :</span>
                <span className="ml-1">{slice.sender.name}</span>
              </>
            ) : (
              <>
                <span className="font-medium">Pour :</span>
                <span className="ml-1">{slice.recipient.name}</span>
              </>
            )}
            <span className="mx-2">•</span>
            <span className="font-medium">Projet :</span>
            <span className="ml-1">{slice.project.name}</span>
          </div>
          {slice.categories && slice.categories.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {slice.categories.map((skill, idx) => (
                <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  {skill.name}
                </span>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-red-700 flex items-center gap-2">
          <FaPizzaSlice /> Mes Slices
        </h2>
       
      </div>

      {/* Onglets pour basculer entre slices reçues et envoyées */}
      <div className="flex border-b border-orange-200 mb-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 ${activeTab === "received" ? "border-b-2 border-orange-500 text-orange-600 font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("received")}
        >
          <FaArrowLeft size={12} /> Slices reçues ({receivedSlices.length})
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 ${activeTab === "sent" ? "border-b-2 border-orange-500 text-orange-600 font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("sent")}
        >
          <FaArrowRight size={12} /> Slices envoyées ({sentSlices.length})
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-3 text-gray-600">Chargement de vos slices...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activeTab === "received" ? (
            receivedSlices.length > 0 ? (
              receivedSlices.map(slice => renderSlice(slice))
            ) : (
              <div className="p-8 text-center text-gray-500 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <FaPizzaSlice className="mx-auto text-4xl text-gray-300 mb-3" />
                <p>Vous n'avez pas encore reçu de slices</p>
              </div>
            )
          ) : (
            sentSlices.length > 0 ? (
              sentSlices.map(slice => renderSlice(slice))
            ) : (
              <div className="p-8 text-center text-gray-500 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <FaPizzaSlice className="mx-auto text-4xl text-gray-300 mb-3" />
                <p>Vous n'avez pas encore envoyé de slices</p>
                <button 
                  onClick={toggleModal} 
                  className="mt-2 text-orange-500 hover:text-orange-600"
                >
                  + Envoyez votre première slice
                </button>
              </div>
            )
          )}
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