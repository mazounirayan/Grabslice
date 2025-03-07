import { motion } from "framer-motion";

interface EventModalProps {
    id: number;
    image: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    users: { id: number; name: string }[];
    onClose: () => void;
}

export default function EventModal({ id, image, title, description, date, location, users, onClose }: EventModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[500px] p-6"
            >
                <h2 className="text-2xl font-semibold">{title}</h2>
                <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mt-3" />
                <p className="text-gray-500 mt-2">{new Date(date).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-2">{description}</p>
                <p className="text-gray-800 mt-2 font-semibold">📍 Lieu : {location}</p>

                <div className="mt-3">
                    <h3 className="text-lg font-semibold">Participants :</h3>
                    <ul className="list-disc list-inside">
                        {users.length > 0 ? (
                            users.map((user) => <li key={user.id}>{user.name}</li>)
                        ) : (
                            <p className="text-gray-500">Aucun participant pour le moment.</p>
                        )}
                    </ul>
                </div>

                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="btn btn-outline">
                        Fermer
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
