import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { BasicSignatureConstraints } from "./basic-signature-constraints";
import { Constraints } from "./constraints";

export class RevocationConstraints extends Constraints{

    static instruction: string = 'Constraints related to the signature revocation data';

    static constraints: Array<any> = [
        {
            ruleName: 'Level',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'OCSP certificate hash present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'OCSP certificate hash match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Self issued OCSP',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Basic signature constraints',
            type: ConstraintType.BASIC_SIGNATURE_CONSTRAINT,
            instruction: 'Group of common checks on revocation data token signature',
            constraints: BasicSignatureConstraints.constraints
        }
    ]

    constructor (ruleName: string, instruction?: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}