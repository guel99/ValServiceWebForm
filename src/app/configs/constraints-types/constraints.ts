import { ConstraintType } from "src/app/model/enums/policy/constraint-types";

export class Constraints{

    ruleName: string;

    instruction?: string;

    constraints?: any;

    type: ConstraintType;

    /**
     * Field that stores info like regex pattern (if applicable), etc...
     */
    info?: any;

    constructor (instruction: string, constraints: any) {
        this.instruction = instruction;
        this.constraints = constraints;
    }

    /**
     * Tells if a type of constraint has complex sub-contraints or not. 
     * It is considered complex if it is different than level, 
     * multi-value, value or time constraint.
     * @param type The constraint type
     * @returns 
     */
    static isComplex(type: ConstraintType) : boolean {
        return type == ConstraintType.BASIC_SIGNATURE_CONSTRAINT ||
                type == ConstraintType.CERTIFICATE_CONSTRAINT ||
                type == ConstraintType.CRYPTOGRAPHIC_CONSTRAINT ||
                type == ConstraintType.SIGNED_ATTRIBUTES_CONSTRAINT ||
                type == ConstraintType.UNSIGNED_ATTRIBUTES_CONSTRAINT ||
                type == ConstraintType.TIME_STAMP_CONSTRAINTS;
    }

    /**
     * Tells if any of the sub-constraints of the constraints are complex or not
     * @returns True if at least one sub-component is complex
     */
    hasComplexConstraintsElements() : boolean {
        var hasComplex = false;
        var i = 0;
        for(i = 0; i<this.constraints!.length && !hasComplex; i++){
            hasComplex = Constraints.isComplex(this.constraints![i].type!);
        }
        return hasComplex;
    }

    /**
     * Gets the group of basic constraints of a complex constraint configuration
     * @returns 
     */
    getSimpleConstraintsElements(instruction: string) : Constraints {
        var list: Array<any> = new Array<any>();
        for(var elem of this.constraints!){
            if(Constraints.isComplex(elem.type))
                list.push(elem);
        }
        return new Constraints(instruction, list);
    }
}