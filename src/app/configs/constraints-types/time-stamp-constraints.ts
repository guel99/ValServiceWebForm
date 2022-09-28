import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { BasicSignatureConstraints } from "./basic-signature-constraints";
import { Constraints } from "./constraints";
import { SignedAttributesConstraints } from "./signed-attributes-constraints";

export class TimeStampConstraints extends Constraints{

    static instruction: string = "Group of constraints on the signature timestamp";

    static constraints: Array<any> = [
        {
            ruleName: 'Timestamp delay',
            type: ConstraintType.TIME_CONSTRAINT
        },
        {
            ruleName: 'Revocation time againts best-signature-time',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Best-signature-time before expiration date of signing certificate',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Coherence',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'TSA General name present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'TSA General name content match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'TSA General name order match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Basic signature constraints',
            type: ConstraintType.BASIC_SIGNATURE_CONSTRAINT,
            instruction: 'Group of common checks on timestamp token signature',
            constraints: BasicSignatureConstraints.constraints
        },
        {
            ruleName: 'Signed attributes constraints',
            type: ConstraintType.SIGNED_ATTRIBUTES_CONSTRAINT,
            instruction: 'Group of checks on the timestamp token signed attributes/properties',
            constraints: SignedAttributesConstraints.constraints
        }
    ]

    constructor (ruleName: string, instruction?: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}