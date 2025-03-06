export type Project = {
    id: number;
    name: string;
    likes: number;
    comments: Comment[];
    categories: Skill[];
    collaborators : User[];
    request : Slice[];
    createdAt: Date;
    updatedAt: Date;
}

export type Skill = {
    id: number;
    name: string;
    shapeName: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Comment = {
    id: number;
    content: string;
    writer: User;
    parentId: number;
    createdAt: Date;
    updatedAt: Date;
}

export type User = {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    skills : Skill[];
    createdAt?: Date;
    updatedAt?: Date;
}

export type Slice = {
    id: number;
    name: string;
    categories: Skill[];
    comments: Comment[];
    likes: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserProps{
 user:{
    name: string;
    avatar: string;
    username: string;
    bio: string;
    location?: string;
    website?: string;
    email?: string;
    followers: number;
    experience: string;
    following: number;
    pizzerias: { id: number; name: string; avatar: string }[];
    skills: string[];
    events: { id: number; name: string; date: string; location: string }[];
    achievements: { id: number; title: string; contest: string }[];
    pinnedPizzas: { id: number; name: string; description: string; stars: number; shares: number; style: string; styleColor: string }[];
 } 
}