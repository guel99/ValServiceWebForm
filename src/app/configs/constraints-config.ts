import { ContainerConstraints } from "./constraints-types/container-constraints";
import { EidasConstraints } from "./constraints-types/eidas-constraints";
import { RevocationConstraints } from "./constraints-types/revocation-constraints";
import { SignatureConstraints } from "./constraints-types/signature-constraints";
import { TimeStampConstraints } from "./constraints-types/time-stamp-constraints";
import { ConfigParser } from "./parser/config-parser";

/**
 * Represents the configured constraints in the context of this problem
 */
export class ConstraintsConfiguration{

    static container: ContainerConstraints = 
        new ContainerConstraints("Container Constraints", ContainerConstraints.instruction, ConfigParser.parse(ContainerConstraints.constraints));

    static signature: SignatureConstraints = 
        new SignatureConstraints("Signature Constraints", SignatureConstraints.instruction, ConfigParser.parse(SignatureConstraints.constraints));

    static counterSignature: SignatureConstraints = 
        new SignatureConstraints("Counter-Signature Constraints", SignatureConstraints.instruction, ConfigParser.parse(SignatureConstraints.constraints));

    static timestamp: TimeStampConstraints = 
        new TimeStampConstraints("Timestamp Constraints", TimeStampConstraints.instruction, ConfigParser.parse(TimeStampConstraints.constraints));

    static revocation: RevocationConstraints = 
        new RevocationConstraints("Revocation Constraints", RevocationConstraints.instruction, ConfigParser.parse(RevocationConstraints.constraints));

    static eidas: EidasConstraints =
        new EidasConstraints("eIDAS", EidasConstraints.instruction, ConfigParser.parse(EidasConstraints.constraints));
}