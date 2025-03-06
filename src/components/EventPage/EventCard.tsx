
interface EventCardProps {
    
    image: string;
    title: string;
    description: string;
    date: Date;
    users: { name: string; }[];
}

import { useState } from "react";
import { motion } from "framer-motion";

export default function EventCard({ image, title, description, date, users }: EventCardProps) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLikes(liked ? likes - 1 : likes + 1);
        setLiked(!liked);
    };

    return (
        <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} 
            className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden"
        >
            {/* Image */}
            <figure className="h-52">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </figure>

            {/* Contenu */}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-2 line-clamp-2">{description}</p>

                {/* Participants */}
                {users.length > 0 && (
                    <div className="flex mt-3 space-x-2">
                        {users.slice(0, 3).map((user) => (
                            <p>
                               {user.name} 
                            </p>
                        ))}
                        {users.length > 3 && <span className="text-gray-500">+{users.length - 3}</span>}
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center mt-4 space-x-4">
                    <button 
                        onClick={handleLike} 
                        className={`px-4 py-2 rounded text-white ${liked ? "bg-red-500" : "bg-gray-400"} hover:bg-red-600`}
                    >
                        ❤️ {likes}
                    </button>
                    <button 
                        onClick={() => setComments(comments + 1)} 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        💬 {comments}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

