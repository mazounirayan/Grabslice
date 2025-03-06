import { UserProps } from "@interfaces/type";
import { FaEnvelope, FaPizzaSlice } from "react-icons/fa";

export default function  SidebarProfile ({user}:UserProps) {

  user.experience = new Date();

return (
  <div className="md:w-1/4">
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-xl shadow-md border-2 border-orange-300">
            <div className="relative">
              <img 
              
                alt={user.name} 
                className="w-64 h-64 rounded-full border-4 border-red-500"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full border-2 border-white">
                <FaPizzaSlice size={24} className="text-red-600" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mt-4 text-red-700">{user.name}</h1>
            <h2 className="text-xl text-orange-600 mb-4">@{user.username}</h2>
            

            <p className="mb-4 font-medium text-gray-800">{user.experience.toUTCString()}</p>
            
            <button className="btn bg-red-600 hover:bg-red-700 text-white border-none btn-block mb-4">
              Collaborer sur une pizza
            </button>
            
            <div className="space-y-2 w-full">
              
              {user.email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <a href={`mailto:${user.email}`} className="text-red-600 hover:underline">{user.email}</a>
                </div>
              )}
            </div>
            
            {/* <div className="mt-6 w-full">
              <h3 className="text-lg font-medium mb-2 text-red-700">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span key={index} className="badge bg-yellow-100 text-orange-700 border-orange-300 p-3">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
        );
    };