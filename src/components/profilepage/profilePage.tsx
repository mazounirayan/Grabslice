
import SidebarProfile from './ProfileSidebar';
import EventProfile from './eventProfile';
import AchievementProfile from './achievementProfile';
import CreationProfile from './creationProfile';
import PizzaService from '@services/PizzaService';
const ProfilePage = () => {
  // Données simulées du profil d'un pizzaiolo


  const pizzas = PizzaService.GetPizzaList();

  const user = {
    name: 'Sid ARIFI',
    username: 'PizzaMaster42',
    email: 'sid.arifi@grabapizza.slice',
    experience: new Date(),
    skills: [{ id: 1, name: 'Rust', shapeName: 'Dough' }, { id: 2, name: 'Java', shapeName: 'Sauce' }, { id: 3, name: 'Pearl', shapeName: 'Toppings' }],

    pinnedPizzas: pizzas,
    events: [
      { id: 1, name: 'Pizza Party Summer Bash', date: '15 Août 2025', location: 'Central Park' },
      { id: 2, name: 'Workshop Pâte Parfaite', date: '22 Mars 2025', location: 'La Scuola della Pizza' }
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-amber-50">
      <div className="flex flex-col md:flex-row gap-8">
      
        <SidebarProfile user={user} />
        <div className="md:w-3/4">
          <div className="bg-white rounded-xl shadow-md p-4 border-2 border-orange-300">
            
            <CreationProfile user={user} />
            
          <EventProfile user={user} />
            
          {/* <AchievementProfile user={user} /> */}
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;