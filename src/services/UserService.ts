import { User } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface IUserService {
    getUserDataByToken(): Promise<User>;
    getUserList(page: number, limit: number): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    deleteUserById(id: string): Promise<void>;
    patchUserById(id: string, body: PatchUserByIdBody): Promise<User>;
}

interface PatchUserByIdBody {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
}

class UserService implements IUserService {
    /**
     * Récupère l'utilisateur connecté en se basant sur un ID stocké (par exemple dans le localStorage).
     * Le back ne propose pas de route dédiée "self", ainsi on réutilise getUserById.
     */
    async getUserDataByToken(): Promise<User> {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            throw new CustomError(401, "Utilisateur non connecté");
        }
        return this.getUserById(userId);
    }

    /**
     * Récupère la liste de tous les utilisateurs.
     * Remarque : le back ne gère pas encore la pagination, les paramètres page et limit sont ignorés.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getUserList(_page: number, _limit: number): Promise<User[]> {
        const response = await fetch('/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw new CustomError(response.status, data.error || 'Une erreur est survenue');
        }
        return data;
    }

    /**
     * Récupère un utilisateur via son ID.
     */
    async getUserById(id: string): Promise<User> {
        const response = await fetch(`/users/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw new CustomError(response.status, data.error || 'Une erreur est survenue');
        }
        return data;
    }

    /**
     * Supprime un utilisateur par son ID.
     */
    async deleteUserById(id: string): Promise<void> {
        const response = await fetch(`/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!response.ok) {
            const data = await response.json();
            throw new CustomError(response.status, data.error || 'Une erreur est survenue');
        }
        return;
    }

    /**
     * Met à jour un utilisateur par son ID.
     * Note : Le back ne propose pas encore de mapping PATCH (ou PUT).
     * Pour utiliser cette méthode, il faudra ajouter un endpoint correspondant côté back.
     */
    async patchUserById(id: string, body: PatchUserByIdBody): Promise<User> {
        const response = await fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new CustomError(response.status, data.error || 'Une erreur est survenue');
        }
        return data;
    }
}

export default new UserService();
