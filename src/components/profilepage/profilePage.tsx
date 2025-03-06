
import SidebarProfile from './ProfileSidebar';
import EventProfile from './eventProfile';
import AchievementProfile from './achievementProfile';
import CreationProfile from './creationProfile';
const ProfilePage = () => {
  // Données simulées du profil d'un pizzaiolo
  const user = {
    name: 'Sid ARIFI',
    username: 'PizzaMaster42',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'Pizzaiolo passionné | Spécialiste des garnitures créatives | Organisateur de Pizza Parties',
    location: 'Little Italy, New York',
    website: 'https://grabapizza.slice',
    email: 'sid.arifi@grabapizza.slice',
    followers: 187,
    following: 93,
    experience: 'Pizzaiolo depuis 3 ans',
    skills: ['Pâte Fine', 'Mozzarella Bufala', 'Fermentation longue', 'Fours à bois'],
    pizzerias: [
      { id: 1, name: 'Slice Kings', avatar: 'https://via.placeholder.com/40/FF6B6B/FFFFFF?text=SK' },
      { id: 2, name: 'Dough Masters', avatar: 'https://via.placeholder.com/40/4ECDC4/FFFFFF?text=DM' }
    ],
    pinnedPizzas: [
      { id: 1, name: 'Quattro Formaggi Supreme', description: 'Ma création signature avec quatre fromages italiens premium et miel de truffe', stars: 124, shares: 34, style: 'Napolitaine', styleColor: '#f1e05a' },
      { id: 2, name: 'Garden Harvest', description: 'Pizza végétarienne avec légumes de saison et base pesto', stars: 89, shares: 22, style: 'New York', styleColor: '#2b7489' },
      { id: 3, name: 'Spicy Pepperoni Feast', description: 'La pizza parfaite pour les amateurs de sensations fortes', stars: 156, shares: 46, style: 'Chicago', styleColor: '#e34c26' },
      { id: 4, name: 'Seafood Delight', description: 'Combinaison unique de fruits de mer frais sur une base de sauce blanche à l\'ail', stars: 78, shares: 19, style: 'Sicilienne', styleColor: '#563d7c' },
    ],
    events: [
      { id: 1, name: 'Pizza Party Summer Bash', date: '15 Août 2025', location: 'Central Park' },
      { id: 2, name: 'Workshop Pâte Parfaite', date: '22 Mars 2025', location: 'La Scuola della Pizza' }
    ],
    achievements: [
      { id: 1, title: 'Meilleure pizza originale', contest: 'Competition Internationale de Pizza 2024' },
      { id: 2, title: 'Top 10 des Pizzerias émergentes', contest: 'Food & Wine Magazine' }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-amber-50">
      <div className="flex flex-col md:flex-row gap-8">
      
        <SidebarProfile user={user} />
        <div className="md:w-3/4">
          <div className="bg-white rounded-xl shadow-md p-4 border-2 border-orange-300">
            <div className="tabs tabs-bordered mb-6">
              <a className="tab tab-active text-red-600 border-b-red-600">Mes Pizzas</a>
           
            
            </div>
            
            <CreationProfile user={user} />
            
          <EventProfile user={user} />
            
          <AchievementProfile user={user} />
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;