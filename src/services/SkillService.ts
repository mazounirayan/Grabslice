import { Skill } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface ISkillService {
    GetSkillList(): Promise<Skill[]>;
    GetSkillById(id: string): Promise<Skill>;
    CreateSkill(body: Record<string, unknown>): Promise<Skill>;
    UpdateSkillById(id: string, body: Record<string, unknown>): Promise<Skill>;
    DeleteSkillById(id: string): Promise<void>;
}

const BASE_URL = '/skills/';

class SkillService implements ISkillService {
    async GetSkillList(): Promise<Skill[]> {
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

    async GetSkillById(id: string): Promise<Skill> {
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

    async CreateSkill(body: Record<string, unknown>): Promise<Skill> {
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

    async UpdateSkillById(id: string, body: Record<string, unknown>): Promise<Skill> {
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

    async DeleteSkillById(id: string): Promise<void> {
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
}

export default new SkillService();
