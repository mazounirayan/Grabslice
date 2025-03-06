import { UserProps } from "@interfaces/type";
import { FaEnvelope, FaLink, FaMapMarkerAlt, FaPizzaSlice, FaUsers } from "react-icons/fa";

const SidebarProfile : React.FC<UserProps> = ({user})=>{
return (
  <div className="md:w-1/4">
          <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-xl shadow-md border-2 border-orange-300">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-64 h-64 rounded-full border-4 border-red-500"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full border-2 border-white">
                <FaPizzaSlice size={24} className="text-red-600" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mt-4 text-red-700">{user.name}</h1>
            <h2 className="text-xl text-orange-600 mb-4">@{user.username}</h2>
            
            <p className="mb-4 text-gray-700">{user.bio}</p>
            <p className="mb-4 font-medium text-gray-800">{user.experience}</p>
            
            <button className="btn bg-red-600 hover:bg-red-700 text-white border-none btn-block mb-4">
              Collaborer sur une pizza
            </button>
            
            <div className="flex items-center gap-2 mb-2">
              <FaUsers className="text-orange-500" />
              <span><strong>{user.followers}</strong> amateurs</span>
              <span>·</span>
              <span><strong>{user.following}</strong> pizzaiolos</span>
            </div>
            
            <div className="space-y-2 w-full">
              {user.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span>{user.location}</span>
                </div>
              )}
              
              {user.website && (
                <div className="flex items-center gap-2">
                  <FaLink className="text-orange-500" />
                  <a href={user.website} className="text-red-600 hover:underline">{user.website.replace(/^https?:\/\//, '')}</a>
                </div>
              )}
              
              {user.email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <a href={`mailto:${user.email}`} className="text-red-600 hover:underline">{user.email}</a>
                </div>
              )}
            </div>
            
            <div className="mt-6 w-full">
              <h3 className="text-lg font-medium mb-2 text-red-700">Mes pizzerias</h3>
              <div className="flex flex-wrap gap-2">
                {user.pizzerias.map(pizzeria => (
                  <div key={pizzeria.id} className="tooltip" data-tip={pizzeria.name}>
                    <img 
                      src={pizzeria.avatar} 
                      alt={pizzeria.name} 
                      title={pizzeria.name}
                      className="w-10 h-10 rounded-md"
                    />
                  </div>
                ))}
                <button className="w-10 h-10 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
            
            <div className="mt-6 w-full">
              <h3 className="text-lg font-medium mb-2 text-red-700">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span key={index} className="badge bg-yellow-100 text-orange-700 border-orange-300 p-3">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        );
    };
export default SidebarProfile;