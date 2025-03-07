import { useParams } from "react-router-dom";
import image  from "../../../public/images/pizza.png";
import { useToast } from '@context/ToastManager';
import { ToastType } from "@enum/toast";
import { useModal } from "@components/serviceable/modal.service";
import SendSliceModal from "./sendSliceModal";
import { Skill } from "@interfaces/type";
import { INGREDIENT_TO_COLOR } from "@assets/values/imgPath";
import SliceService from "@services/SliceService";
import { body } from "framer-motion/client";

interface Pizza {
    id: number;
    image: string;
    name: string;
    description: string;
    toppings: Skill[];
    style: string;
    stars: number;
    shares: number;
    pizzaiolos: {
        id: number,
        name: string,
        lastName: string,
        avatar: string,
        specialties: Skill[]
    }[];
}
const pizzas: Pizza[] = [
    {
        id: 1,
        image: image,
        name: "Quattro Formaggi Supreme",
        description: "Ma création signature avec quatre fromages italiens premium et miel de truffe.",
        toppings: [
            {
                id: 1,
                name: "Rust",
                shapeName: "Napolitaine",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: "SQL",
                shapeName: "Napolitaine",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],
        style: "Napolitaine",
        stars: 124,
        shares: 34,
        pizzaiolos: [
            {
                id: 1,
                name: "Giovanni",
                lastName: "Rossi",
                avatar: "https://randomuser.me/api/portraits/men/10.jpg",
                specialties: [
                    {
                    id: 1,
                    name: "Rust",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                    {
                    id: 2,
                    name: "JS",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                    {
                    id: 3,
                    name: "SQL",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                ],
            },
            {
                id: 2,
                name: "Mario",
                lastName: "Bianchi",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                specialties: [
                    {
                    id: 1,
                    name: "Rust",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                ],
            },
            {
                id: 3,
                name: "Sofi",
                lastName: "Romano",
                avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                specialties: [
                    {
                    id: 4,
                    name: "React",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                    {
                    id: 5,
                    name: "TypeScript",
                    shapeName: "Napolitaine",
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                ],
            },
        ],
    },
];

export default function PizzaDetailPage() {
    const { id } = useParams<{ id: string }>();
    const pizza = pizzas.find(p => p.id === Number(id));

    const { openModal } = useModal();

    const sendSliceModalConfig = {
        title: "Send a slice",
        content: <SendSliceModal toppings={pizza!.toppings}/>,
        onSubmit: (data: {email:string, toppings:string[]}) => {
            addToast("Sent slice to : "+data.email, ToastType.SUCCESS);
            const body = {
                projectId: pizza!.id,
                recipient: data.email,
                toppings: data.toppings,
            }
            SliceService.CreateSlice(body);
            console.log("Submitted data:", data);
        },
        validationRules: {
            email: (value: any) => value ? null : "Email is required",
            toppings: (value: any) => value && value.length > 0 ? null : "At least one topping must be selected",
          },
    };

    const { addToast } = useToast(); 


   //const   id = 1 ;


    const ask_slice =  () => {
            try {
                console.log(localStorage.getItem('token'));
                let str_msg = "You asked for a slice from : ";
                const pizzaiolo_str = pizza!.pizzaiolos.length > 2 ?  pizza?.pizzaiolos.slice(0,2).map(pizzaiolo => pizzaiolo.name).join(", ") + ",..." : pizza?.pizzaiolos.map(pizzaiolo => pizzaiolo.name).join(", ") ;
                addToast(str_msg + pizzaiolo_str, ToastType.SUCCESS);
            } catch (error) {
                console.error('Error logging out:', error);
            }
        };
    const send_slice = () => {
        openModal(sendSliceModalConfig);
    };

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
                {pizza.toppings.map((ingredient, index) => (
                    <span key={index} className="badge px-3 py-1 rounded-md" style={{ backgroundColor: INGREDIENT_TO_COLOR[ingredient.name] }}>
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
                <button onClick={send_slice} className="btn btn-primary">Partager une part</button>
                <button onClick={ask_slice} className="btn btn-secondary">Demander une part</button>
            </div>
        </div>
    </div>
    );
}
