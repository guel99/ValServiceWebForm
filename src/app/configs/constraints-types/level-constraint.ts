import { Constraints } from "./constraints";

export class LevelConstraint extends Constraints{

    constructor (ruleName: string) {
        super(ruleName, undefined, undefined);
    }
}