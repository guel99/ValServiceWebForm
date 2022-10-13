import { ConstraintDTO } from "./constraint-dto";

export class ModelConstraintDTO extends ConstraintDTO{

    model: string;

    constructor () {
        super();
    }

    override populate(dic: Map<string, any>): void {
        
    }
}