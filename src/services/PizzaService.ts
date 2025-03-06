import { Project, Skill } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface IProjectService {
    GetPizzaById(id: string): Promise<any>;
    UpdatePizzaById(id: string, body: any): Promise<any>;
    DeletePizzaById(id: string): Promise<any>;
    GetPizzaList(limit: number, page: number): Promise<any>;
    CreatePizza(body: any): Promise<any>;

    addSliceToPizza(id: string, body: any): Promise<any>;
    addSkillToPizza(id: string, body: any): Promise<any>;
    addCommentToPizza(id: string, body: any): Promise<any>;
    addCollaboratorToPizza(id: string, body: any): Promise<any>;

    likePizza(id: string): Promise<any>;
    unlikePizza(id: string): Promise<any>;

    getPizzaComments(id: string): Promise<any>;
    GetPizzaOfUser(userId: string): Promise<Project[]>

    removeSliceFromPizza(id: string, sliceId: string): Promise<any>;
    removeSkillFromPizza(id: string, skillId: string): Promise<any>;
    removeCommentFromPizza(id: string, commentId: string): Promise<any>;
    removeCollaboratorFromPizza(id: string, collaboratorId: string): Promise<any>;
}

const BASE_URL = '/api/project'

class PizzaService implements IProjectService {
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
            const res = await fetch('http://localhost:3000'+BASE_URL);
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
            const res = await fetch(`http://localhost:3000/pizzas/user/${userId}`);
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
    addSliceToPizza(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    addSkillToPizza(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    addCommentToPizza(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    addCollaboratorToPizza(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    likePizza(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    unlikePizza(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getPizzaComments(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    removeSliceFromPizza(id: string, sliceId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    removeSkillFromPizza(id: string, skillId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    removeCommentFromPizza(id: string, commentId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    removeCollaboratorFromPizza(id: string, collaboratorId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}

export default new PizzaService();