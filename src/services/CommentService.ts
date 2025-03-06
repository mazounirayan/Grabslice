import { Comment } from '@interfaces/type';
import { CustomError } from '../commons/Error';


interface ICommentService {
    GetCommentOfProject(projectId: string): Promise<Comment[]>;
    GetCommentOfUser(userId: string): Promise<Comment[]>;
    GetCommentById(id: string): Promise<Comment>;
    CreateComment(body: any): Promise<Comment>;
    UpdateCommentById(id: string, body: any): Promise<Comment>;
    DeleteCommentById(id: string): Promise<void>;
}

const BASE_URL = '/api/comments/'
