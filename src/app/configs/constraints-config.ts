import { ContainerConstraints } from "./constraints-types/container-constraints";
import { SignatureConstraints } from "./constraints-types/signature-constraints";
import { ConfigParser } from "./parser/config-parser";

/**
 * Represents the configured constraints in the context of this problem
 */
export class ConstraintsConfiguration{

    static container: ContainerConstraints = new ContainerConstraints("Container Constraints", ContainerConstraints.instruction, ConfigParser.parse(ContainerConstraints.constraints));

    static signature: SignatureConstraints = new SignatureConstraints("Signature Constraints", SignatureConstraints.instruction, ConfigParser.parse(SignatureConstraints.constraints));
}