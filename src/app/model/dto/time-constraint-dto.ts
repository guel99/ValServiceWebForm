import { ConstraintDTO } from "./constraint-dto";

export class TimeConstraintDTO extends ConstraintDTO {
    
    timeUnit: string;
    value: number;

    constructor() {
        super();
    }

    override populate(dic: Map<string, any>): void {
        
    }
}