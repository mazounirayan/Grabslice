import { UserProps } from "@interfaces/type"
import {  FaPizzaSlice, FaStar } from "react-icons/fa"

const CreationProfile  : React.FC<UserProps> = ({user}) => {
    return (
        <div >
        <h2 className="text-xl font-medium mb-4 text-red-700 flex items-center gap-2">
          <FaPizzaSlice /> Mes créations favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
          {user.pinnedPizzas.map(pizza => (
            <div key={pizza.id} className="card border-2 border-orange-200 bg-white h-40 hover:shadow-lg transition-shadow "
         
          >
               
              <div className="card-body p-4 pl-1/3"  >
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-red-600 text-lg hover:underline">
                    <a href="#">{pizza.name}</a>
                  </h3>
                  <div className="badge bg-orange-100 text-orange-700 border-orange-300">Signature</div>
                </div>
                <p className="text-sm text-gray-600">{pizza.description}</p>
                <div className="card-actions justify-start items-center mt-auto">
                  {pizza.style && (
                    <div className="flex items-center gap-1 mr-4">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: pizza.styleColor }}></span>
                      <span className="text-sm">{pizza.style}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1 mr-4">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm">{pizza.stars}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <FaPizzaSlice className="text-red-500" />
                    <span className="text-sm">{pizza.shares} partagées</span>
                  </div>
                </div>
              </div>
               <div 
                      className="absolute right-0 top-0 bottom-0 w-1/3"
                      style={{
                      backgroundImage: 'url("/images/svgPizza.svg")',
                      backgroundSize: 'contain',
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
            </div>
          ))}
        </div>
      </div>
    )
}
export default CreationProfile;