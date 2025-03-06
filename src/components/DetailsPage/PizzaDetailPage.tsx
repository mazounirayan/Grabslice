import image  from "../../../public/images/pizza.png";

interface Pizza {
    id: number;
    image: string;
    name: string;
    toppings: string;
    description: string;
    ingredients: { name: string; color: string }[];
    style: string;
    styleColor: string;
    stars: number;
    shares: number;
    pizzaiolos: {
        id: number,
        name: string,
        avatar: string,
        experience: string,
        specialties: [string, string, string],
    }[];
}
const pizzas: Pizza[] = [
    {
        id: 1,
        image: image,
        name: "Quattro Formaggi Supreme",
        toppings: "Mozzarella, Gorgonzola, Parmesan, Ricotta",
        description: "Ma création signature avec quatre fromages italiens premium et miel de truffe.",
        ingredients: [
            { name: "Mozzarella", color: "#f1e05a" },
            { name: "Gorgonzola", color: "#2b7489" },
        ],
        style: "Napolitaine",
        styleColor: "#f1e05a",
        stars: 124,
        shares: 34,
        pizzaiolos: [
            {
                id: 1,
                name: "Giovanni Rossi",
                avatar: "https://randomuser.me/api/portraits/men/10.jpg",
                experience: "5 ans d'expérience",
                specialties: ["Napolitaine", "Focaccia", "Pâte fine"],
            },
            {
                id: 2,
                name: "Mario Bianchi",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                experience: "7 ans d'expérience",
                specialties: ["New York Style", "Deep Dish", "Pâte épaisse"],
            },
            {
                id: 3,
                name: "Sofia Romano",
                avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                experience: "4 ans d'expérience",
                specialties: ["Sicilienne", "Margherita", "Sans gluten"],
            },
        ],
    },
];

export default function PizzaDetailPage() {
   // const { id } = useParams<{ id: string }>();
   const   id = 1 ;
    const pizza = pizzas.find(p => p.id === Number(id));

    if (!pizza) {
        return <p className="text-center text-red-500">Pizza not found!</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
        <div className="card bg-white shadow-lg rounded-lg p-6">
            <img src={pizza.image} alt={pizza.name} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-2xl font-bold mt-4">{pizza.name}</h2>
            <p className="text-gray-700 mt-2">{pizza.description}</p>
            <h3 className="text-xl font-semibold mt-4">Ingrédients :</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {pizza.ingredients.map((ingredient, index) => (
                    <span key={index} className="badge px-3 py-1 rounded-md" style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                    </span>
                ))}
            </div>
            <h3 className="text-xl font-semibold mt-4">Pizzaiolos Participants :</h3>
            <div className="mt-2">
                {pizza.pizzaiolos.map(pizzaiolo => (
                    <div key={pizzaiolo.id} className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg mb-2">
                        <img src={pizzaiolo.avatar} alt={pizzaiolo.name} className="w-10 h-10 rounded-full" />
                        <span className="font-medium">{pizzaiolo.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 mt-6">
                <button className="btn btn-primary">Partager une part</button>
                <button className="btn btn-secondary">Demander une part</button>
            </div>
        </div>
    </div>
    );
}
