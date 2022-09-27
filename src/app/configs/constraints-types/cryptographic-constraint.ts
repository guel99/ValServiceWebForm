import { Constraints } from "./constraints";

export class CryptographicConstraint extends Constraints {
    
    constructor (ruleName: string) {
        super(ruleName, undefined);
    }
}