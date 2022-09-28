import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { BasicSignatureConstraints } from "./basic-signature-constraints";
import { Constraints } from "./constraints";
import { SignedAttributesConstraints } from "./signed-attributes-constraints";
import { UnsignedAttributesConstraints } from "./unsigned-attributes-constraints";

export class SignatureConstraints extends Constraints {

    static instruction: string = "Please choose the rules you want to apply in the generated signature validation policy. You may enable each rule by clicking in the respective card and fill the required parameters to each of them.";

    static constraints = [
        {
            ruleName: 'Structural validation',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Acceptable policies',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            info: {
                placeholder: "Type any acceptable policy",
                onEmptyValue: "Please specify any policy id"
            },
        },
        {
            ruleName: 'Policy available',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Signature policy store present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Policy hash match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Acceptable formats',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT,
            info: {
                placeholder: "Type any acceptable AdES format",
                onEmptyValue: "Please specify any AdES format"
            }
        },
        {
            ruleName: 'Full scope',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Basic signature constraints',
            type: ConstraintType.BASIC_SIGNATURE_CONSTRAINT,
            instruction: 'Group of common checks for any kind of signed token (signature, timestamp or revocation data). In this case, related with the signature itself.',
            constraints: BasicSignatureConstraints.constraints
        },
        {
            ruleName: 'Signed attributes',
            type: ConstraintType.SIGNED_ATTRIBUTES_CONSTRAINT,
            instruction: 'Group of checks on the signed attributes/properties.',
            constraints: SignedAttributesConstraints.constraints
        },
        {
            ruleName: 'Unsigned attributes',
            type: ConstraintType.UNSIGNED_ATTRIBUTES_CONSTRAINT,
            instruction: 'Group of checks on the unsigned attributes/properties.',
            constraints: UnsignedAttributesConstraints.constraints
        }
    ]

    constructor(ruleName: string, instruction: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}