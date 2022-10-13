import { ConstraintDTO } from "./constraint-dto";

export class UnsignedAttributesConstraintsDTO extends ConstraintDTO {

    /**
     * Checks the presence of a counter-signature attribute
     */
    counterSignature: string;

    override populate(dic: Map<string, any>): void {
        
    }
}