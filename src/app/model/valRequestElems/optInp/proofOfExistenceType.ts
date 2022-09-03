import { SigsRefType } from "./sigsRefType";

export class ProofOfExistenceType{
    /**
     * Component whose value is a time instant value. This time instant shall be considered by the server as a
     * proof of existence of the signature referenced in the other component of the tuple
     */
    time?:string;

    /**
     * One component referencing ONE signature
     */
    sigRef?:SigsRefType;
}