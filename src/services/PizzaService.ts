import { Project as Pizza, Comment } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface IPizzaService {
    GetPizzaById(id: string): Promise<Pizza>;
    UpdatePizzaById(id: string, body: Record<string, unknown>): Promise<Pizza>;
    DeletePizzaById(id: string): Promise<void>;
    GetPizzaList(limit: number, page: number): Promise<Pizza[]>;
    CreatePizza(body: Record<string, unknown>): Promise<Pizza>;
    addSliceToPizza(id: string, body: Record<string, unknown>): Promise<void>;
    addSkillToPizza(id: string, body: Record<string, unknown>): Promise<void>;
    addCommentToPizza(id: string, body: Record<string, unknown>): Promise<void>;
    addCollaboratorToPizza(id: string, body: Record<string, unknown>): Promise<void>;
    likePizza(id: string): Promise<void>;
    unlikePizza(id: string): Promise<void>;
    getPizzaComments(id: string): Promise<Comment[]>;
    GetPizzaOfUser(userId: string): Promise<Pizza[]>;
    removeSliceFromPizza(id: string, sliceId: string): Promise<void>;
    removeSkillFromPizza(id: string, skillId: string): Promise<void>;
    removeCommentFromPizza(id: string, commentId: string): Promise<void>;
    removeCollaboratorFromPizza(id: string, collaboratorId: string): Promise<void>;
}

const BASE_URL = '/api/project/';

class PizzaService implements IPizzaService {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async GetPizzaList(_limit: number, _page: number): Promise<Pizza[]> {
        try {
            const res = await fetch(BASE_URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async GetPizzaById(id: string): Promise<Pizza> {
        try {
            const res = await fetch(`${BASE_URL}${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async CreatePizza(body: Record<string, unknown>): Promise<Pizza> {
        try {
            const res = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async UpdatePizzaById(id: string, body: Record<string, unknown>): Promise<Pizza> {
        try {
            const res = await fetch(`${BASE_URL}${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async DeletePizzaById(id: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async addSliceToPizza(id: string, body: Record<string, unknown>): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/addSlice`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async addSkillToPizza(id: string, body: Record<string, unknown>): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/addSkill`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async addCommentToPizza(id: string, body: Record<string, unknown>): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/addComment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async addCollaboratorToPizza(id: string, body: Record<string, unknown>): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/addCollaborator`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async likePizza(id: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/like`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async unlikePizza(id: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/removeLike`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async getPizzaComments(id: string): Promise<Comment[]> {
        try {
            const res = await fetch(`${BASE_URL}${id}/comments`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async GetPizzaOfUser(userId: string): Promise<Pizza[]> {
        try {
            const res = await fetch(`${BASE_URL}user/${userId}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async removeSliceFromPizza(id: string, sliceId: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/removeSlice`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sliceId)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async removeSkillFromPizza(id: string, skillId: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/removeSkill`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(skillId)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async removeCommentFromPizza(id: string, commentId: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/removeComment`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(commentId)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }

    async removeCollaboratorFromPizza(id: string, collaboratorId: string): Promise<void> {
        try {
            const res = await fetch(`${BASE_URL}${id}/removeCollaborator`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(collaboratorId)
            });
            if (!res.ok) {
                const data = await res.json();
                throw new CustomError(res.status, (data.error as string) || res.statusText);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomError(500, error.message);
            }
            throw new CustomError(500, 'Unknown error');
        }
    }
}

export default new PizzaService();
