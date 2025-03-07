import { Comment } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface ICommentService {
    GetCommentOfProject(projectId: string): Promise<Comment[]>;
    GetCommentOfUser(userId: string): Promise<Comment[]>;
    GetCommentById(id: string): Promise<Comment>;
    CreateComment(body: Record<string, unknown>): Promise<Comment>;
    UpdateCommentById(id: string, body: Record<string, unknown>): Promise<Comment>;
    DeleteCommentById(id: string): Promise<void>;
}

const BASE_URL = '/api/comments/';

class CommentService implements ICommentService {
    async GetCommentOfProject(projectId: string): Promise<Comment[]> {
        try {
            const res = await fetch(`${BASE_URL}?projectId=${encodeURIComponent(projectId)}`, {
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

    async GetCommentOfUser(userId: string): Promise<Comment[]> {
        try {
            const res = await fetch(`${BASE_URL}?userId=${encodeURIComponent(userId)}`, {
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

    async GetCommentById(id: string): Promise<Comment> {
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

    async CreateComment(body: Record<string, unknown>): Promise<Comment> {
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

    async UpdateCommentById(id: string, body: Record<string, unknown>): Promise<Comment> {
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

    async DeleteCommentById(id: string): Promise<void> {
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

export default new CommentService();
