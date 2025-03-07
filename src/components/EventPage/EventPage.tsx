import { useEffect, useState } from "react";
import EventCard from "@components/EventPage/EventCard";
import EventService from "@services/EventService";
import { User } from "@interfaces/type";
import defaultImage from "../../../public/images/pizza.png";
import { FaFilter, FaPizzaSlice, FaBriefcase, FaGamepad, FaCalendarAlt } from "react-icons/fa";

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  users: User[];
  date: Date;
  type?: string; 

}

const eventTypes = [
  { id: "all", label: "Tous les événements", icon: <FaCalendarAlt /> },
  { id: "afterwork", label: "Pizza Party After Work", icon: <FaBriefcase /> },
  { id: "game", label: "Escape Game Pizza Party", icon: <FaGamepad /> },
  { id: "classic", label: "Pizza Party Classique", icon: <FaPizzaSlice /> }
];

export default function EventPage() {
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventCardProps[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const data = await EventService.GetEventList();
        
        const formattedEvents: EventCardProps[] = data.map((event) => ({
          id: event.id || 1,
          image: event.image || defaultImage,
          title: event.title,
          description: event.description,
          date: event.date,
          location: event.location,
          users: event.users,
          type:  assignRandomType() 
        }));
        
        setEvents(formattedEvents);
        setFilteredEvents(formattedEvents);
      } catch (err) {
        setError("Impossible de charger les événements");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Fonction pour assigner un type aléatoire (à utiliser uniquement pour le développement)
  const assignRandomType = () => {
    const types = ["afterwork", "game", "classic"];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  };

  useEffect(() => {
    if (selectedType === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === selectedType));
    }
  }, [selectedType, events]);

  const handleFilterChange = (typeId: string) => {
    setSelectedType(typeId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-red-600">Nos Événements Pizza</h1>
            <span className="text-gray-600">
              {filteredEvents.length} événement{filteredEvents.length !== 1 ? 's' : ''} trouvé{filteredEvents.length !== 1 ? 's' : ''}
            </span>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
              <p>{error}</p>
              <button 
                className="mt-2 text-red-600 underline"
                onClick={() => window.location.reload()}
              >
                Réessayer
              </button>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
              <p>Aucun événement ne correspond à votre sélection.</p>
              <button 
                className="mt-2 text-orange-600 underline"
                onClick={() => setSelectedType("all")}
              >
                Voir tous les événements
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols lg:grid-cols-2 gap-2">
                {filteredEvents.map((event) => (
                    <EventCard key={`event-${event.id}`} {...event} />
                ))}
            </div>
          )}
        </div>
        
        <div className="mt-6 md:mt-0">
          {/* Filtre de type d'événement */}
          <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200 mb-6">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <FaFilter /> Filtrer par type
            </h2>
            <div className="space-y-2">
              {eventTypes.map((type) => (
                <div 
                  key={type.id}
                  onClick={() => handleFilterChange(type.id)}
                  className={`
                    flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors
                    ${selectedType === type.id 
                      ? 'bg-red-100 text-red-700 border border-red-300' 
                      : 'hover:bg-orange-100'
                    }
                  `}
                >
                  <div className={`${selectedType === type.id ? 'text-red-600' : 'text-orange-500'}`}>
                    {type.icon}
                  </div>
                  <span>{type.label}</span>
                  {selectedType === type.id && (
                    <span className="ml-auto bg-red-600 h-2 w-2 rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Événements à venir */}
          <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <FaCalendarAlt /> Prochains événements
            </h2>
            <div className="space-y-3">
              {events.slice(0, 3).map((event) => (
                <div 
                  key={`sidebar-${event.id}`} 
                  className="flex items-center space-x-2 p-2 hover:bg-orange-100 rounded"
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{event.title}</h3>
                    <div className="flex items-center text-xs text-gray-600">
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      {event.type && (
                        <span className="ml-2 px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs">
                          {event.type === "afterwork" ? "After Work" : 
                           event.type === "game" ? "Escape Game" : "Classique"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}