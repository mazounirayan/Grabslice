import { UserProps } from "@interfaces/type"
import { FaCalendarAlt, FaPizzaSlice } from "react-icons/fa"

const EventProfile  : React.FC<UserProps> = ({user}) => {
    return (
      <div className="mt-8">
                  <h2 className="text-xl font-medium mb-4 text-red-700 flex items-center gap-2">
                    <FaCalendarAlt /> Événements à venir
                  </h2>
                  <div className="space-y-4">
                    {user.events.map(event => (
                      <div key={event.id} className="p-4 border-2 border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 text-red-800 p-3 rounded-lg">
                            <FaPizzaSlice size={20} />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{event.name}</h3>
                            <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
                          </div>
                          <button className="btn btn-sm bg-red-600 hover:bg-red-700 text-white border-none ml-auto">
                            Participer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    )
}
export default EventProfile;