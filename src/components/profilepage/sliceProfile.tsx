import { UserProps } from "@interfaces/type";
import { FaPizzaSlice, FaPlus } from "react-icons/fa";
import { useState } from "react";

const SliceProfile: React.FC<UserProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening/closing the modal
  const toggleModal = () => {
    setShowModal(!showModal);
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

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pi .map((pizza) => (
          <div key={pizza.id} className="p-4 border-2 border-orange-200 rounded-lg bg-yellow-50 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="text-orange-600">
             
              </div>
             
              <div className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">
                slices
              </div>
            </div>
          </div>
        ))}
      </div> 

      {/* Modal for adding new slice */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-orange-700">Créer une nouvelle Slice</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Nom de la pizza</label>
                <input type="text" className="w-full border-2 border-orange-200 rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Description</label>
                <textarea className="w-full border-2 border-orange-200 rounded-lg p-2" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Nombre de slices</label>
                <select className="w-full border-2 border-orange-200 rounded-lg p-2">
                  <option>4</option>
                  <option>6</option>
                  <option selected>8</option>
                  <option>10</option>
                  <option>12</option>
                </select>
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

      {/* Pizza Party promotion banner */}
      <div className="mt-6 p-4 bg-red-600 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">! PIZZA PARTY !</h3>
        <p className="mb-2">CREATE YOUR OWN PIZZERIA, BUILD YOUR UNIQUE PIZZAS WITH YOUR FELLOW PIZZA GUYS</p>
        <p className="text-yellow-200 font-bold">BEST PIZZA IN THE YEAR GETS A FREE SUPPLY OF PIZZA FOR A MONTH!</p>
      </div> 
    </div>
  );
};

export default SliceProfile;