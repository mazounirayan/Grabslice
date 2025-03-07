// Données de test pour les skills
const testSkills = [
  {
    id: 1,
    name: "Rust",
    shapeName: "Dough",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    id: 2,
    name: "Java",
    shapeName: "Sauce",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02")
  },
  {
    id: 3,
    name: "Pearl",
    shapeName: "Toppings",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03")
  },
  {
    id: 4,
    name: "React",
    shapeName: "Cheese",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04")
  },
  {
    id: 5,
    name: "TypeScript",
    shapeName: "Herbs",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05")
  }
];

// Données de test pour les utilisateurs
const testUsers = [
  {
    id: 1,
    name: "Sid",
    lastName: "ARIFI",
    email: "sid.arifi@grabapizza.slice",
    password: "hashedpassword123",
    role: "ADMIN",
    skills: [testSkills[0], testSkills[1], testSkills[2]],
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    id: 2,
    name: "Maria",
    lastName: "Rodriguez",
    email: "maria@grabapizza.slice",
    password: "hashedpassword456",
    role: "USER",
    skills: [testSkills[3], testSkills[4]],
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02")
  },
  {
    id: 3,
    name: "Alex",
    lastName: "Thompson",
    email: "alex@grabapizza.slice",
    password: "hashedpassword789",
    role: "USER",
    skills: [testSkills[0], testSkills[4]],
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03")
  }
];

// Données de test pour les commentaires
const testComments = [
  {
    id: 1,
    content: "Super contribution !",
    writer: testUsers[1],
    parentId: 0,
    createdAt: new Date("2025-01-15T10:30:00"),
    updatedAt: new Date("2025-01-15T10:30:00")
  },
  {
    id: 2,
    content: "Exactement ce dont nous avions besoin",
    writer: testUsers[2],
    parentId: 0,
    createdAt: new Date("2025-01-16T14:20:00"),
    updatedAt: new Date("2025-01-16T14:20:00")
  },
  {
    id: 3,
    content: "Merci pour cette slice !",
    writer: testUsers[0],
    parentId: 1,
    createdAt: new Date("2025-01-17T09:15:00"),
    updatedAt: new Date("2025-01-17T09:15:00")
  }
];

// Données de test pour les projets (sans les slices pour éviter les références circulaires)
const testProjects = [
  {
    id: 1,
    name: "Pizza Delivery App",
    description: "Application de livraison de pizza",
    slices: 5,
    likes: 25,
    comments: [testComments[0], testComments[1]],
    categories: [testSkills[0], testSkills[3]],
    collaborators: [testUsers[0], testUsers[1]],
    request: [], // Sera rempli après la définition des slices
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2025-01-15")
  },
  {
    id: 2,
    name: "Pizza Recipe Manager",
    description: "Gestionnaire de recettes de pizza",
    slices: 3,
    likes: 15,
    comments: [testComments[2]],
    categories: [testSkills[1], testSkills[4]],
    collaborators: [testUsers[0], testUsers[2]],
    request: [], // Sera rempli après la définition des slices
    createdAt: new Date("2025-01-05"),
    updatedAt: new Date("2025-02-10")
  },
  {
    id: 3,
    name: "PizzaVerse",
    description: "Réseau social pour les amateurs de pizza",
    slices: 8,
    likes: 42,
    comments: [],
    categories: [testSkills[2], testSkills[3], testSkills[4]],
    collaborators: [testUsers[0], testUsers[1], testUsers[2]],
    request: [], // Sera rempli après la définition des slices
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-03-01")
  }
];

// Données de test pour les slices
const testSlices = [
  {
    id: 101,
    name: "Refactoring du backend",
    recipient: testUsers[0],
    project: testProjects[0],
    sender: testUsers[1],
    categories: [testSkills[0], testSkills[1]],
    comments: [testComments[0], testComments[1]],
    likes: 12,
    createdAt: new Date("2025-01-10"),
    updatedAt: new Date("2025-01-12")
  },
  {
    id: 102,
    name: "Amélioration de l'UI",
    recipient: testUsers[1],
    project: testProjects[0],
    sender: testUsers[0],
    categories: [testSkills[3], testSkills[4]],
    comments: [testComments[2]],
    likes: 8,
    createdAt: new Date("2025-02-05"),
    updatedAt: new Date("2025-02-05")
  },
  {
    id: 103,
    name: "Optimisation des performances",
    recipient: testUsers[2],
    project: testProjects[1],
    sender: testUsers[0],
    categories: [testSkills[0], testSkills[2]],
    comments: [],
    likes: 5,
    createdAt: new Date("2025-02-20"),
    updatedAt: new Date("2025-02-21")
  },
  {
    id: 104,
    name: "Implémentation d'API",
    recipient: testUsers[0],
    project: testProjects[2],
    sender: testUsers[2],
    categories: [testSkills[1], testSkills[2]],
    comments: [testComments[0]],
    likes: 15,
    createdAt: new Date("2025-03-01"),
    updatedAt: new Date("2025-03-02")
  }
];

// Ajouter les slices aux requests des projets
testProjects[0].request = [testSlices[0], testSlices[1]];
testProjects[1].request = [testSlices[2]];
testProjects[2].request = [testSlices[3]];

// Données de test pour les événements
const testEvents = [
  {
    id: 1,
    title: "Pizza Party Summer Bash",
    description: "Un événement festif pour célébrer l'été avec des pizzas délicieuses",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5",
    comments: [testComments[0]],
    likes: 35,
    users: [
      { id: 1, name: "Sid ARIFI" },
      { id: 2, name: "Maria Rodriguez" },
      { id: 3, name: "Alex Thompson" }
    ],
    date: new Date("2025-08-15"),
    location: "Central Park",
    createdAt: new Date("2025-05-01"),
    updatedAt: new Date("2025-05-01")
  },
  {
    id: 2,
    title: "Workshop Pâte Parfaite",
    description: "Apprenez à faire la pâte à pizza parfaite avec nos experts",
    image: "https://images.unsplash.com/photo-1579156412503-f22426588c6d",
    comments: [testComments[1], testComments[2]],
    likes: 28,
    users: [
      { id: 1, name: "Sid ARIFI" },
      { id: 3, name: "Alex Thompson" }
    ],
    date: new Date("2025-03-22"),
    location: "La Scuola della Pizza",
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-02-15")
  }
];

// Données de test pour l'utilisateur principal dans le format UserProps
const testMainUser = {
  name: "Sid ARIFI",
  username: "PizzaMaster42",
  email: "sid.arifi@grabapizza.slice",
  experience: new Date("2023-06-01"),
  skills: testSkills.slice(0, 3),
  events: [
    { id: 1, name: "Pizza Party Summer Bash", date: "15 Août 2025", location: "Central Park" },
    { id: 2, name: "Workshop Pâte Parfaite", date: "22 Mars 2025", location: "La Scuola della Pizza" }
  ],
  achievements: [
    { id: 1, title: "Meilleure Pizza Margherita", contest: "Concours International de Pizza 2024" },
    { id: 2, title: "Développeur Pizza de l'Année", contest: "DevPizza Awards 2024" }
  ],
  pinnedPizzas: testProjects,
  image: "https://randomuser.me/api/portraits/men/1.jpg"
};

// Fonction fictive pour mettre à jour l'utilisateur
const updateUser = (user) => {
  console.log("Mise à jour de l'utilisateur :", user);
  // Logique de mise à jour
};

// Exportez les données de test
export const testData = {
  skills: testSkills,
  users: testUsers,
  comments: testComments,
  projects: testProjects,
  slices: testSlices,
  events: testEvents,
  mainUser: testMainUser,
  updateUser: updateUser
};