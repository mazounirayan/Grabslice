export type Project = {
    description: string;
    slices: number;
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
    recipient: User;
    project: Project;
    sender: User;
    categories: Skill[];
    comments: Comment[];
    likes: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserProps{
 user:{
    name: string;
    username: string;
    email?: string;
    experience: Date;
    skills: Skill[];
    events: { id: number; name: string; date: string; location: string }[];
    achievements?: { id: number; title: string; contest: string }[];
    pinnedPizzas: Project[];
    image: string;
 } ,
 updateUser: (user: UserProps['user']) => void;
}

type UsersForEvent={
    id: number,
    name: string
}
export type Event={
    image: string;
    id: number;
    title: string;
    description: string;
    comments: Comment[];
    likes: number;
    users: UsersForEvent[] ;
    date: Date;
    location: string
    createdAt: Date;
    updatedAt: Date;

}