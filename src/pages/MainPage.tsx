import TitleCard from "../components/HomePage/TitleCard"
import CompanyDesc from "../components/HomePage/CompanyDesc";
import PizzaCard from "@components/HomePage/pizzaCard";
import image  from "../../public/images/pizza.png";
import FilterCarousel from "@components/HomePage/filterBar";
import { useState } from "react";
interface PizzaCardProps {
  image: string;
  title: string;
  toppings: string;
  ingredients: { name: string; color: string }[];
}
const pizzas: PizzaCardProps[] = [
  {
    image: image,
    title: "Margherita",
    toppings: "Mozzarella, Basilic",
    ingredients: [
      { name: "Tomate", color: "red" },
      { name: "Mozzarella", color: "white" },
      { name: "Basilic", color: "green" }
    ]
  },
  {
    image: image,
    title: "codeworks",
    toppings: "java, react",
    ingredients: [
      { name: "java", color: "red" },
      { name: "react", color: "white" },
      { name: "sql", color: "brown" }
    ]
  },
  {
    image: image,
    title: "Veggie sql ",
    toppings: "react, sql, lolo",
    ingredients: [
    
      { name: "react", color: "white" },
      { name: "sql", color: "brown" },
      { name: "lolo", color: "purple" }
    ]
  },
  {
    image: image,
    title: "Hawaiian website",
    toppings: "next, sql",
    ingredients: [
      { name: "next", color: "white" },
      { name: "sql", color: "brown" },
      { name: "lolo", color: "purple" }
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

  const handleFilterSelect = (filterId: string) => {
    console.log(`Filtre sélectionné: ${filterId}`);
    setActiveFilter(filterId);
    // Votre logique de filtrage ici
  };
    return (
      <div>
        <TitleCard/>
        <FilterCarousel       
          options={filterOptions}
          onFilterSelect={handleFilterSelect}   selectedFilter={activeFilter}     
        />
        <div className="p-2">
            <h1 className="text-2xl font-bold text-center mb-6">Nos Pizzas</h1>
            <div className="grid grid-cols-4 gap-4">
              {pizzas.map((pizza, index) => (
                <PizzaCard key={index} {...pizza} />
              ))}
            </div>
          </div>
      </div>

    )
}