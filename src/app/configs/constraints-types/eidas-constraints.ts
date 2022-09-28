import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { Constraints } from "./constraints";

export class EidasConstraints extends Constraints{

    static instruction: string = 'Constraints related to the European context (trusted list validity,...)';

    static constraints = [
        {
            ruleName: 'TL freshness',
            type: ConstraintType.TIME_CONSTRAINT,
        },
        {
            ruleName: 'TL not expired',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'TL well signed',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'TL version',
            type: ConstraintType.VALUE_CONSTRAINT,
            info: {
                placeholder: 'Specify a version (or any (*))',
                onEmptyValue: 'Please, specify a version (or any (*))'
            }
        }
    ]

    constructor (ruleName: string, instruction?: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}