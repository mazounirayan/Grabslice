import { UserProps } from "@interfaces/type"
import { FaAward } from "react-icons/fa"

const AchievementProfile  : React.FC<UserProps> = ({user}) => {
    return (
    <div className="mt-8">
                  <h2 className="text-xl font-medium mb-4 text-red-700 flex items-center gap-2">
                    <FaAward /> Récompenses et distinctions
                  </h2>
                  <div className="space-y-4">
                    {user.events.map(achievement => (
                      <div key={achievement.id} className="p-4 border-2 border-orange-200 rounded-lg bg-yellow-50">
                        <div className="flex gap-3">
                          <div className="text-yellow-600">
                            <FaAward size={24} />
                          </div>
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.contest}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
    )
}
export default AchievementProfile;