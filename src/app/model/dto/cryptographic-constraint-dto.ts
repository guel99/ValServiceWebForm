import { Algo } from "../enums/policy/dto/Algo";
import { AlgoExpirationDateDTO } from "./algo-expiration-date-dto";
import { ConstraintDTO } from "./constraint-dto";

export class CryptographicConstraintDTO extends ConstraintDTO{

    acceptableEncryptionAlgo: Array<Algo>;

    acceptableDigestAlgo: Array<Algo>;

    miniPublicKeySize: Array<Algo>;

    algoExpirationData: AlgoExpirationDateDTO;

    constructor () {
        super();
        this.acceptableEncryptionAlgo = new Array<Algo>();
        this.acceptableDigestAlgo = new Array<Algo>();
        this.miniPublicKeySize = new Array<Algo>();
    }

    override populate(dic: Map<string, any>): void {
        
    }
}