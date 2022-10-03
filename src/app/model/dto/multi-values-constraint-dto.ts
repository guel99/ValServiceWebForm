import { ConstraintDTO } from "./constraint-dto";

export class MultiValuesConstraintDTO extends ConstraintDTO{

    level: string;
    acceptedValues: Array<string>;

    constructor () {
        super();
        this.acceptedValues = new Array<string>();
    }
}