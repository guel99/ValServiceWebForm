export class OtherOptions{

    signedETSIReport: boolean = true;
    certificateSource: Array<File> = new Array<File>();
    policy?: File = undefined;

    constructor() {}

    getCertificateSourceFileNames() : Array<string> {
        var list = new Array<string>();
        for(var file of this.certificateSource)
            list.push(file.name);
        return list;
    }

    clone() : OtherOptions{
        var clone = new OtherOptions();
        clone.certificateSource = this.certificateSource;
        clone.policy = this.policy;
        clone.signedETSIReport = this.signedETSIReport;
        return clone;
    }
}