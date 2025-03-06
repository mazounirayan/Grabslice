import { Project, Skill } from '@interfaces/type';
import { CustomError } from '../commons/Error';


interface IPizzaService {
    GetPizzaList(): Promise<Project[]>;
    GetPizzaOfUser(userId: string): Promise<Project[]>;
    GetPizzaById(id: string): Promise<Project>;
    CreatePizza(body: any): Promise<Project>;
    UpdatePizzaById(id: string, body: any): Promise<Project>;
    DeletePizzaById(id: string): Promise<void>;
}
const BASE_URL = '/api/'

class PizzaService implements IPizzaService {
    async GetPizzaList(): Promise<Project[]> {
        const pizzas: Project[] = [];
        const categories: Skill[] = [];
        categories.push({
            id: 1,
            name: 'Rust',
            shapeName: 'Shape 1',
            createdAt: new Date(),
            updatedAt: new Date()
        
        });
        categories.push({
            id: 2,
            name: 'Java',
            shapeName: 'Shape 2',
            createdAt: new Date(),
            updatedAt: new Date()
        
        });
        categories.push({
            id: 3,
            name: 'Typescript',
            shapeName: 'Shape 3',
            createdAt: new Date(),
            updatedAt: new Date()
        
        });
        pizzas.push({
            id: 1,
            name: 'Pizza 1',
            likes: 1,
            comments: [],
            categories: categories,
            collaborators: [],
            request: [],
            createdAt: new Date(),
            updatedAt: new Date()
        });
        pizzas.push({
            id: 2,
            name: 'Pizza 2',
            likes: 6,
            comments: [],
            categories: categories.slice(0, 1),
            collaborators: [],
            request: [],
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return pizzas;

        
        try {
            const res = await fetch('http://localhost:3000/pizzas');
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetPizzaOfUser(userId: string): Promise<Project[]> {
        try {
            const res = await fetch(`http://localhost:3000/pizzas?userId=${userId}`);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetPizzaById(id: string): Promise<Project> {
        try {
            const res = await fetch(`http://localhost:3000/pizzas/${id}`);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async CreatePizza(body: any): Promise<Project> {
        try {
            const res = await fetch('http://localhost:3000/pizzas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async UpdatePizzaById(id: string, body: any): Promise<Project> {
        try {
            const res = await fetch(`http://localhost:3000/pizzas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async DeletePizzaById(id: string): Promise<void> {
        try {
            const res = await fetch(`http://localhost:3000/pizzas/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }
}

export default new PizzaService();