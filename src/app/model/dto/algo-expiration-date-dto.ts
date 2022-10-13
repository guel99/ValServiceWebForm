import { Algo } from "../enums/policy/dto/Algo";
import { ConstraintDTO } from "./constraint-dto";

export class AlgoExpirationDateDTO extends ConstraintDTO {

    algos: Array<Algo>;
    format: string;

    override populate(dic: Map<string, any>): void {
        
    }
}