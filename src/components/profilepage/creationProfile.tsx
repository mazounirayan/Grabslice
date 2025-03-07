import { Project, UserProps } from "@interfaces/type"
import { useEffect, useState } from "react"
import {  FaPizzaSlice, FaStar } from "react-icons/fa"

export default function CreationProfile ({user} : UserProps) {

  const [pinnedPizzas, setPinnedPizzas] = useState<Project[]>([])

  useEffect(() => {
    const pizzas = []
    pizzas.push({
      id: 1,
      name: "React web app",
      likes: 10
    })
    pizzas.push({
      id: 2,
      name: "Hackaton",
      likes: 1
    })
    pizzas.push({
      id: 3,
      name: "Rust Project",
      likes: 30
    })
    setPinnedPizzas(pizzas)
  },[])

  // useEffect(() => {
  //   const fetchPinnedPizzas = async () => {
  //     if (!user.pinnedPizzas) return;
      
  //     try {
  //       const pizzas = await user.pinnedPizzas; // Await the fulfilled promise
  //       setPinnedPizzas(pizzas);
  //     } catch (error) {
  //       console.error("Error fetching pinned pizzas:", error);
  //     }
  //   };
  
  //   fetchPinnedPizzas();
  // }, [user.pinnedPizzas]);

    return (
        <div >
        <h2 className="text-xl font-medium mb-4 text-red-700 flex items-center gap-2">
          <FaPizzaSlice /> Mes créations favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
          {pinnedPizzas.map(pizza => (
            <div key={pizza.id} className="card border-2 border-orange-200 bg-white h-40 hover:shadow-lg transition-shadow ">
            <div className="card-body p-4 pl-1/3"  >
              <div className="flex justify-between items-start">
                <h3 className="card-title text-red-600 text-lg hover:underline">
                  <a>{pizza.name}</a>
                </h3>
              </div>
              <p className="text-sm text-gray-600">PlaceHolder</p>
              <div className="card-actions justify-start items-center mt-auto">
                
                <div className="flex items-center gap-1 mr-4">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm">{pizza.likes}</span>
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


