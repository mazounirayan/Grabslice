
import EventCard from "@components/EventPage/EventCard";
import image  from "../../../public/images/pizza.png";

import { useEffect, useState } from "react";

import EventService from "@services/EventService";
import { useNavigate } from "react-router-dom";
import { User } from "@interfaces/type";
import TitleCard from "@components/HomePage/TitleCard";

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  users : User[];
  date: Date;
}


export default function MainPage() {

const [Events, setEvents] = useState<EventCardProps[]>([]);

  useEffect(() => {
    EventService.GetEventList().then((data) => {
      const val:EventCardProps[] = data.map((Event) => {
        return {
            id:1,
            image: image,
            title: Event.title,
            description: Event.description,
            date: Event.date,
            location: Event.location,
            users: Event.users,
        
        };
      });
      setEvents(val);
    });
  },[]);

  
  const navigate = useNavigate();
  const handleClick = (Event : EventCardProps ) => {
    navigate(`/Events/${Event.id}`); // Redirige vers Profil avec l'ID de la Event
  };
    return (
      <div>
        <TitleCard/>
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3">
                <h1 className="text-2xl font-bold text-center mb-6">Nos Events</h1>
                <div className="grid grid-cols-3 gap-4">
                {Events.map((Event, index) => (
                    <div key={index} onClick={() => handleClick(Event)} className="cursor-pointer">
                    <EventCard {...Event} />
                </div>
                ))}
                </div>
                
            
            </div>
        </div>

    

      </div>

    )
}



