import { Slice } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface ISliceService {
    GetSliceList(): Promise<Slice[]>;
    GetSliceById(id: string): Promise<Slice>;
    CreateSlice(body: any): Promise<Slice>;
    AddSkillToSlice(id: string, body: any): Promise<Slice>;
    AddCommentToSlice(id: string, body: any): Promise<Slice>;
    DeleteSliceById(id: string): Promise<void>;
    GetSliceByName(name: string): Promise<Slice>;
    GetSliceBySkillId(id: string): Promise<Slice[]>;
}

const BASE_URL = '/api/slices/'

class SliceService implements ISliceService {
    async GetSliceList(): Promise<Slice[]> {
        try {
            const res = await fetch(BASE_URL);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetSliceById(id: string): Promise<Slice> {
        try {
            const res = await fetch(BASE_URL + id);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async CreateSlice(body: any): Promise<Slice> {
        try {
            const res = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return data;
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async AddSkillToSlice(id: string, body: any): Promise<Slice> {
        try {
            const res = await fetch(BASE_URL + id + '/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return data;
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async AddCommentToSlice(id: string, body: any): Promise<Slice> {
        try {
            const res = await fetch(BASE_URL + id + '/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return data;
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async DeleteSliceById(id: string): Promise<void> {
        try {
            const res = await fetch(BASE_URL + id, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetSliceByName(name: string): Promise<Slice> {
        try {
            const res = await fetch(BASE_URL + 'name/' + name);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetSliceBySkillId(skillId: string): Promise<Slice[]> {
        try {
            const res = await fetch(BASE_URL + 'skill/' + skillId);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

}