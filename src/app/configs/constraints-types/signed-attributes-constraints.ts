import { ConstraintType } from "src/app/model/enums/policy/constraint-types";
import { Constraints } from "./constraints";

export class SignedAttributesConstraints extends Constraints {

    static instruction: string = 'Group of constraints on the signed attributes/properties';

    static constraints = [
        {
            ruleName: 'Signing certificate present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Unicity signing certificate',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Signing certificate refers cert. chain',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'References to all cert. chain present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Signing certificate digest algorithm',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Certificate digest present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Certificate digest match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Issuer serial match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Key identifier present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Key identifier match',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Signing time',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Content type',
            pattern: '^([0-2])((\.0)|(\.[1-9][0-9]*))*$',
            placeholder: 'Specify an OID. e.g. 1.2.840.113549.1.7.1',
            onEmptyValue: 'Please type an OID',
            onWrongValue: 'Type a valid OID',
            type: ConstraintType.VALUE_CONSTRAINT
        },
        {
            ruleName: 'Content hints',
            placeholder: 'Type a hint (or any (*)',
            onEmptyValue: 'Please type a hint or * (any)',
            type: ConstraintType.VALUE_CONSTRAINT
        },
        {
            ruleName: 'Content identifier',
            placeholder: 'Type an identifier (or any (*))',
            onEmptyValue: 'Please type an identifier or * (any)',
            type: ConstraintType.VALUE_CONSTRAINT
        },
        {
            ruleName: 'Message digest or signed properties present',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            rule: 'Commitment type indication',
            pattern: '1.2.840.113549.1.9.16.6.[1-6]',
            placeholder: 'Type a valid OID. e.g. 1.2.840.113549.1.9.16.6.1',
            onEmptyValue: 'Please type an OID for a commitment type',
            onWrongValue: 'Please type a valid commitment type',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT
        },
        {
            ruleName: 'Signed location',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Claimed roles',
            placeholder: 'Type role (or any (*)',
            onEmptyValue: 'Please type a role or * (any)',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT
        },
        {
            ruleName: 'Certified roles',
            placeholder: 'Type role (or any (*)',
            onEmptyValue: 'Please type a role or * (any)',
            type: ConstraintType.MULTI_VALUES_CONSTRAINT
        },
        {
            ruleName: 'Content timestamp',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
        {
            ruleName: 'Content timestamp imprint',
            type: ConstraintType.LEVEL_CONSTRAINT
        },
    ]

    constructor (ruleName: string, instruction: string, constraints?: Array<Constraints>) {
        super(ruleName, instruction, constraints);
    }
}