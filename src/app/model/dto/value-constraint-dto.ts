import { ConstraintDTO } from "./constraint-dto";

export class ValueConstraintDTO extends ConstraintDTO{

    level: string;
    value: string;

    constructor () {
        super();
    }
}