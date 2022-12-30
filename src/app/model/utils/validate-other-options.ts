import { RemotePolicyDTO } from "../dto/remote-policy-dto";

export class OtherOptions{

    signedETSIReport: boolean = true;
    certificateSource: Array<File> = new Array<File>();
    policy?: File | RemotePolicyDTO = undefined;

    constructor() {}

    getCertificateSourceFileNames() : Array<string> {
        var list = new Array<string>();
        for(var file of this.certificateSource)
            list.push(file.name);
        return list;
    }

    get policyName(): String | undefined {
        if(this.policy == undefined)
            return undefined;
        return this.policy instanceof File ? this.policy.name : this.policy!.id;
    }

    clone() : OtherOptions{
        var clone = new OtherOptions();
        clone.certificateSource = this.certificateSource;
        clone.policy = this.policy;
        clone.signedETSIReport = this.signedETSIReport;
        return clone;
    }
}