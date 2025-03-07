import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const availableImages = [
    "/svg/bacon.svg",
    "/svg/champignon.svg",
    "/svg/crevette.svg",
    "/svg/tomate.svg"
  ];
export default function EditUserModal({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState(user.profileImage || availableImages[0]);
  const [errors, setErrors] = useState({ name: "", email: "" });
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
  const handleSave = () => {
    const newErrors = { name: "", email: "" };
    if (!name) newErrors.name = "Le nom est requis";
    if (!email) newErrors.email = "L'email est requis";

    if (newErrors.name || newErrors.email) {
      setErrors(newErrors);
      return;
    }

    onSave({ name, email });
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
        Modifier l'utilisateur
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Modifier l'utilisateur</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                    <img src={profileImage || "/images/svgPizza.svg"} alt="Profile" className="w-24 h-24 rounded-full object-cover border" />
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {availableImages.map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt="avatar"
                      className={`w-16 h-16 rounded-full cursor-pointer border-2 ${profileImage === img ? "border-blue-500" : "border-gray-300"}`}
                      onClick={() => setProfileImage(img)}
                    />
                  ))}
                </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Nom</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"  onClick={() => setIsOpen(false)}>Annuler</button>
                  <button onClick={handleSave} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">Enregistrer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
