import { ContainerConstraints } from "./constraints-types/container-constraints";
import { SignatureConstraints } from "./constraints-types/signature-constraints";

/**
 * Represents the configured constraints in the context of this problem
 */
export class ConstraintsConfiguration{

    static container: ContainerConstraints = new ContainerConstraints();

    static signature: SignatureConstraints = new SignatureConstraints();
}