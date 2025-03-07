import { useNavigate } from "react-router-dom";

interface PizzaCardProps {
  id: number;

    image: string;
    title: string;
    toppings: string;
    ingredients: { name: string; color: string }[];
}

export default function PizzaCard (PizzaCardProps: PizzaCardProps) {
       const navigate = useNavigate();
  const handleClick = (id : number ) => {
    navigate(`/PizzaDetail/${id}`); 
   };
    return (
        <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Image */}
        <figure className="h-1/2">
            <img src={PizzaCardProps.image} alt={PizzaCardProps.title} className="w-full h-full object-cover" />
        </figure>
    
        {/* Contenu */}
        <div className="card-body">
            <h2 className="card-title">Titre : {PizzaCardProps.title}</h2>
            <p className="text-gray-600 truncate">Menu : {PizzaCardProps.toppings}</p>
    
            {/* Ingrédients */}
            <div className="flex flex-wrap gap-2 mt-4">
                {PizzaCardProps.ingredients.map((ingredient, index) => (
                    <span
                        key={index}
                        className="rounded px-2 py-1 text-white text-sm font-medium"
                        style={{ backgroundColor: ingredient.color }}
                    >
                        {ingredient.name}
                    </span>
                ))}
            </div>
    
            {/* Boutons d'action */}
            <div className="card-actions flex justify-start items-center mt-4 gap-x-2">
                <button className="btn btn-primary">Like</button>
                <button className="btn btn-secondary">Comment</button>
                <button onClick={() => handleClick(PizzaCardProps.id)} className="btn btn-accent">
                    Voir détails
                </button>
            </div>
        </div>
    </div>
    
    );
}

