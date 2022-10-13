import { ConstraintDTO } from "./constraint-dto";

export class LevelConstraintDTO extends ConstraintDTO{

    level: string;

    override populate(dic: Map<string, any>): void {
        
    }
}