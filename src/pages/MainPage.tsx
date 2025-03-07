import PizzaCard from "@components/HomePage/pizzaCard";
import image  from "../../public/images/pizza.png";
import FilterCarousel from "@components/HomePage/filterBar";
import { useEffect, useState } from "react";
import ToppingListFilter from "@components/HomePage/ToppingListFilter";
import { INGREDIENT_TO_COLOR } from "@assets/values/imgPath";
import PizzaService from "@services/PizzaService";
interface PizzaCardProps {
  id: number;
  image: string;
  title: string;
  toppings: string;
  ingredients: { name: string; color: string }[];
}

const pizzas_test: PizzaCardProps[] = [
  {
    image: image,
    title: "codeworks",
    toppings: "java, react",
    ingredients: [
      { name: "java", color: INGREDIENT_TO_COLOR.JAVA },
      { name: "react", color: INGREDIENT_TO_COLOR.REACT },
      { name: "sql", color: INGREDIENT_TO_COLOR.SQL }
    ]
  },
  {
    image: image,
    title: "Veggie sql ",
    toppings: "react, sql, lolo",
    ingredients: [
    
      { name: "react", color: INGREDIENT_TO_COLOR.REACT },
      { name: "sql", color: INGREDIENT_TO_COLOR.SQL },
      { name: "lolo", color: INGREDIENT_TO_COLOR.OTHER }
    ]
  },
  {
    image: image,
    title: "Hawaiian website",
    toppings: "next, sql",
    ingredients: [
      { name: "pearl", color: INGREDIENT_TO_COLOR.PEARL },
      { name: "sql", color: INGREDIENT_TO_COLOR.SQL },
      { name: "lolo", color: INGREDIENT_TO_COLOR.OTHER }
    ]
  }
];

const filterOptions = [
  { id: 'all', label: 'Tous' },
  { id: 'cat1', label: 'Catégorie 1' },
  { id: 'cat2', label: 'Catégorie 2' },
  { id: 'cat3', label: 'Catégorie 3' },
  { id: 'cat4', label: 'Catégorie 4' },
  { id: 'cat5', label: 'Catégorie 5' },
  { id: 'cat6', label: 'Catégorie 6' },
];
export default function MainPage() {
const [activeFilter, setActiveFilter] = useState('all');
const [pizzas, setPizzas] = useState<PizzaCardProps[]>([]);

  useEffect(() => {
    setPizzas(pizzas_test);
    // PizzaService.GetPizzaList(10,1).then((data) => {
    //   const val:PizzaCardProps[] = data.map((pizza) => {
    //     return {
    //       id:1,
    //       image: image,
    //       title: pizza.name,
    //       toppings: pizza.categories.map((category) => category.name).join(", "),
    //       ingredients: pizza.categories.map((category) => {
    //         return {
    //           name: category.name,
    //           color: INGREDIENT_TO_COLOR[category.name]
    //         }
    //       })
    //     };
    //   });
    //   setPizzas(val);
    // });
  },[]);

  const handleFilterSelect = (filterId: string) => {
    console.log(`Filtre sélectionné: ${filterId}`);
    setActiveFilter(filterId);
    // Votre logique de filtrage ici
  };
  // const navigate = useNavigate();
  // const handleClick = (pizza : PizzaCardProps ) => {
  //   navigate(`/PizzaDetail/${pizza.id}`); // Redirige vers Profil avec l'ID de la pizza
  // };
    return (
      <div>
        {/* <TitleCard/> */}
        <div className="grid grid-cols-4 gap-2">
          <div className="w-full m-2 col-span-1">
              <ToppingListFilter/>
          </div>
          <div className="col-span-3">
            <FilterCarousel       
              options={filterOptions}
              onFilterSelect={handleFilterSelect}   selectedFilter={activeFilter}     
            />
            <div className="p-2">
              <h1 className="text-2xl font-bold text-center mb-6">Nos Pizzas</h1>
              <div className="grid grid-cols-3 gap-4">
                {pizzas.map((pizza) => (
                  // <div key={index} onClick={() => handleClick(pizza)} className="cursor-pointer"> {/* </div> */}
                  <PizzaCard {...pizza} />
               
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

    )
}



