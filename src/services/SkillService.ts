import { Skill } from '@interfaces/type';
import { CustomError } from '../commons/Error';


interface ISkillService {

    GetSkillList(): Promise<Skill[]>;
    GetSkillById(id: string): Promise<Skill>;
    CreateSkill(body: any): Promise<Skill>;
    UpdateSkillById(id: string, body: any): Promise<Skill>;
    DeleteSkillById(id: string): Promise<void>;
}

