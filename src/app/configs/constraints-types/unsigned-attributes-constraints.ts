import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { ConfigParser } from "../parser/config-parser";
import { Constraints } from "./constraints";

export class UnsignedAttributesConstraints extends Constraints {

    static instruction: string = 'Group of constraints on the unsigned attributes/properties';

    static constraints = [
        {
            ruleName: 'Counter-signature',
            type: ConstraintType.LEVEL_CONSTRAINT
        }
    ]

    constructor (ruleName: string, instruction: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}