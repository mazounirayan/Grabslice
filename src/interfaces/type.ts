export type Project = {
    id: number;
    name: string;
    likes: number;
    comments: Comment[];
    categories: Skill;
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
    skills : Skill[];
    createdAt: Date;
    updatedAt: Date;
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