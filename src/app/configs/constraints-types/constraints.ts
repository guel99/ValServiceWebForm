import { ConstraintType } from "src/app/model/enums/policy/constraint-types";

export class Constraints{

    ruleName: string;

    instruction?: string;

    constraints?: Array<Constraints>;

    type: ConstraintType;

    /**
     * Field that stores info like regex pattern (if applicable), etc...
     */
    info?: any;

    constructor (ruleName: string, instruction?: string, constraints?: Array<Constraints>) {
        this.ruleName = ruleName;
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
    isComplex() : boolean {
        return this.type == ConstraintType.BASIC_SIGNATURE_CONSTRAINT ||
                this.type == ConstraintType.CERTIFICATE_CONSTRAINT ||
                this.type == ConstraintType.SIGNED_ATTRIBUTES_CONSTRAINT ||
                this.type == ConstraintType.UNSIGNED_ATTRIBUTES_CONSTRAINT ||
                this.type == ConstraintType.TIME_STAMP_CONSTRAINTS;
    }

    /**
     * Tells if any of the sub-constraints of the constraints are complex or not
     * @returns True if at least one sub-component is complex
     */
    hasComplexConstraintsElements() : boolean {
        var hasComplex = false;
        var i = 0;
        for(i = 0; i<this.constraints!.length && !hasComplex; i++){
            hasComplex = this.constraints![i].isComplex();
        }
        return hasComplex;
    }

    /**
     * Gets the group of basic constraints of a complex constraint configuration
     * @returns 
     */
    getSimpleConstraintsElements() : Array<Constraints> | undefined {
        if(this.constraints === undefined)
            return undefined;
        var simples: Array<Constraints> = new Array<Constraints>();
        for(var constraint of this.constraints!){
            if(!constraint.isComplex())
                simples.push(constraint);
        }
        return simples;
    }

    getComplexConstraintsElements() : Array<Constraints> | undefined {
        if(this.constraints === undefined)
            return undefined;
        var complex: Array<Constraints> = new Array<Constraints>();
        for(var constraint of this.constraints!){
            if(constraint.isComplex())
                complex.push(constraint);
        }
        return complex;
    }

    isLevelConstraint(): boolean {
        return this.type == ConstraintType.LEVEL_CONSTRAINT;
    }

    isMultiValuesConstraint(): boolean{
        return this.type == ConstraintType.MULTI_VALUES_CONSTRAINT;
    }

    isTimeConstraint(): boolean {
        return this.type == ConstraintType.TIME_CONSTRAINT;
    }

    isCryptographicConstraint() : boolean {
        return this.type == ConstraintType.CRYPTOGRAPHIC_CONSTRAINT;
    }

    isValueConstraint() : boolean {
        return this.type == ConstraintType.VALUE_CONSTRAINT;
    }
}