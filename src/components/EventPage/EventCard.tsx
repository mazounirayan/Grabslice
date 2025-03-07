
interface EventCardProps {
    id : number
    image: string;
    title: string;
    description: string;
    date: Date;
    users: userProps[]
    location: string;
}
type userProps={
    
    id: number,
    name : string
    
}

import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventModal from "./EventModal";


export default function EventCard({id, image, title, description, date, users,location }: EventCardProps) {
    const navigate = useNavigate();
    const handleClick = (id : number ) => {
    navigate(`/Events/${id}`); // Redirige vers Profil avec l'ID de la Event
  };
    const currentUser = {id: 3, name: "test"};
    const [participantList, setParticipantList] = useState<userProps[]>([...users]);
    const [showModal, setShowModal] = useState(false);
    const isParticipating = participantList.some(user => user.id === currentUser.id);
    const handleParticipate =  () => {
        // try {
        //   const response = await fetch(`http://localhost:3000/api/events/${id}/participate`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ userId: currentUser }),
        //   });
    
        //   if (!response.ok) {
        //     throw new Error("Erreur lors de la participation");
        //   }
    
        // //   Met à jour la liste des participants localement
        //   setParticipantList((prev) => [...prev, currentUser]);
        // } catch (error) {
        //   console.error("❌ Erreur :", error);
        // }
        
        if (!isParticipating) {
            setParticipantList((prev) => [...prev, currentUser]);
          }
      };
    return (
        <>
        <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} 
            className="w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden mb-6"
        >
            <div key={id} onClick={() => handleClick(id)} className="cursor-pointer">
                <figure className="h-52">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </figure>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-2 line-clamp-2">{description}</p>

                {users.length > 0 && (
                    <div className="flex mt-3 space-x-2">
                        {users.slice(0, 3).map((user) => (
                            <p key={user.id}>{user.name}</p>
                        ))}
                        {users.length > 3 && <span className="text-gray-500">+{users.length - 3}</span>}
                    </div>
                )}

                    <div className="flex items-center mt-4 space-x-2">
                        <button
                            onClick={handleParticipate}
                            className={`btn ${isParticipating ? "btn-success" : "btn-outline"} `}
                            disabled={isParticipating}
                        >
                            {isParticipating ? "✅ Déjà inscrit" : "Participer"}
                        </button>
                        <button onClick={() => setShowModal(true)} className="btn btn-primary ">
                            Voir détails
                        </button>
                    </div>
            </div>
        </motion.div>
          {showModal && (
            <EventModal
                id={id}
                image={image}
                title={title}
                description={description}
                date={date}
                location={location}
                users={users}
                onClose={() => setShowModal(false)}
            />
        )}
        </>
    );
}

