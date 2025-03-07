import { Event } from '@interfaces/type';
import { CustomError } from '../commons/Error';

interface IEventService {
    GetEventById(id: string): Promise<any>;
    UpdateEventById(id: string, body: any): Promise<any>;
    DeleteEventById(id: string): Promise<any>;
    GetEventList(limit: number, page: number): Promise<any>;
    CreateEvent(body: any): Promise<any>;

   
    addCommentToEvent(id: string, body: any): Promise<any>;
    addCollaboratorToEvent(id: string, body: any): Promise<any>;

    likeEvent(id: string): Promise<any>;
    unlikeEvent(id: string): Promise<any>;

    getEventComments(id: string): Promise<any>;
    GetEventOfUser(userId: string): Promise<Project[]>

    
    removeCommentFromEvent(id: string, commentId: string): Promise<any>;
    removeCollaboratorFromEvent(id: string, collaboratorId: string): Promise<any>;
}

const BASE_URL = '/api/Event'

class EventService implements IEventService {
    async GetEventList(): Promise<Event[]> {
        const Events: Event[] = [];
       
        const participantList=[{id:1, name: "help"}, {id:2, name: "wanted"}];
        const participantList2=[{id:1, name: "hoh"}, {id:2, name: "wed"}, {id:4, name: "wanttted"}];
        
        Events.push({
            id: 1,
            title: 'Pizza Party 1',
            likes: 1,
            description: "une description",
            comments: [],
            users: participantList,
            date: new Date(),
            location: "nowhere",
            createdAt: new Date(),
            updatedAt: new Date(),
            image: ''
        });
        Events.push({
            id: 2,
            title: 'Pizza Party 2',
            likes: 6,
            comments: [],
            description: "une description",
            users: participantList2,
            date: new Date(),
            location: "everywhere",
            createdAt: new Date(),
            updatedAt: new Date(),
            image: ''
        });
        return Events;

        
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

    async GetEventOfUser(userId: string): Promise<Event[]> {
        try {
            const res = await fetch(`http://localhost:3000/Events/user/${userId}`);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async GetEventById(id: string): Promise<Event> {
        try {
            const res = await fetch(`http://localhost:3000/Events/${id}`);
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
            return await res.json();
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }

    async CreateEvent(body: any): Promise<Event> {
        try {
            const res = await fetch('http://localhost:3000/Events', {
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

    async UpdateEventById(id: string, body: any): Promise<Event> {
        try {
            const res = await fetch(`http://localhost:3000/Events/${id}`, {
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

    async DeleteEventById(id: string): Promise<void> {
        try {
            const res = await fetch(`http://localhost:3000/Events/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new CustomError(res.status, res.statusText);
            }
        } catch (error: any) {
            throw new CustomError(500, error.message);
        }
    }
   
    addCommentToEvent(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    addCollaboratorToEvent(id: string, body: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    likeEvent(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    unlikeEvent(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getEventComments(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    
    removeCommentFromEvent(id: string, commentId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    removeCollaboratorFromEvent(id: string, collaboratorId: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
}

export default new EventService();