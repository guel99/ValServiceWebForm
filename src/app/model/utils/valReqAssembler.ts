import { ValidationRequest } from "../validationRequest";
import { InDocsDocType } from "../valRequestElems/inDocs/documentType";
import { InputDocuments } from "../valRequestElems/inDocs/inputDocuments";
import { Base64DataType } from "../valRequestElems/inDocs/base64DataType";
import { Encoding } from "./encoding";
import { v4 as uuidv4 } from "uuid";
import { SignatureObject } from "../valRequestElems/sigObj/signatureObject";
import { OptionalInputs } from "../valRequestElems/optInp/optionalInputs";
import { ReturnValReportType } from "../valRequestElems/optInp/returnValReportType";
import { AdditionalKeyInfoType } from "../valRequestElems/optInp/additionalKeyInfoType";
import { RemotePolicyDTO } from "../dto/remote-policy-dto";

export class ValRequestAssembler {

    /**
     * The file that contains the signatures
     */
    signatureFile: File;

    /**
     * The original signed files (if applied)
     */
    signedFiles: Array<File>;

    /**
     * Indicates if the ETSI validation report resulting 
     * of validation process must be signed or not
     */
    signETSIReport: boolean;

    /**
     * The certificate source that may be sepcified by the user
     */
    certificateSource?: Array<File>;

    /**
     * The validation policy specified by the user
     */
    policy?: RemotePolicyDTO | File = undefined;

    constructor(signatureFile: File, signedFiles: Array<File>, signETSIReport: boolean, certificateSource: Array<File> | undefined = undefined,
        policy: File | RemotePolicyDTO | undefined) {
        this.signatureFile = signatureFile;
        this.signedFiles = signedFiles;
        this.signETSIReport = signETSIReport;
        if (certificateSource != undefined)
            this.certificateSource = certificateSource;
        this.policy = policy;
    }

    /**
   * Builds a base-64 string with the content of all certificates passed as parameter
   * @param certificateSource An array containing all the certificates
   * @returns A base-64 encoded string
   */
    async assembleCertificateSource(certificateSourceFiles: Array<File>): Promise<AdditionalKeyInfoType[]> {
        var certificateSource = new Array<AdditionalKeyInfoType>();
        for (var file of certificateSourceFiles) {
            const certBuffer = await file.arrayBuffer();
            var certString = new TextDecoder().decode(certBuffer);
            certString = certString.replace(new RegExp("-----BEGIN CERTIFICATE-----\s*"), "");
            certString = certString.replace(new RegExp("\s*-----END CERTIFICATE-----"), "");
            var cert = new AdditionalKeyInfoType();
            cert.cert = certString;
            certificateSource.push(cert);
        }
        return certificateSource;
    }


    /**
     * Assembles an instance of ValidationRequest
     * @returns
     */
    async assembleValRequest(): Promise<ValidationRequest> {
        var request = new ValidationRequest();

        request.optInp = new OptionalInputs();
        request.optInp.returnValReport = new ReturnValReportType();
        request.optInp.returnValReport.signIt = this.signETSIReport;
        // we generate a random UUID
        request.reqID = uuidv4();

        request.inDocs = new InputDocuments();
        request.inDocs.doc = [];

        for (var file of this.signedFiles) {
            var buffer = <ArrayBuffer>await file.arrayBuffer();
            var newDoc = new InDocsDocType();
            newDoc.b64Data = new Base64DataType();
            newDoc.b64Data.val = Encoding.arrayBufferToB64String(buffer);
            request.inDocs!.doc!.push(newDoc);
        }

        if (this.signatureFile != undefined) {
            request.sigObj = new SignatureObject();
            request.sigObj.b64Sig = new Base64DataType();
            var sigBuffer = <ArrayBuffer>await this.signatureFile.arrayBuffer();
            request.sigObj.b64Sig.val = Encoding.arrayBufferToB64String(sigBuffer);
        }

        if (this.certificateSource != undefined && this.certificateSource.length > 0) {
            var certificateSource = await this.assembleCertificateSource(this.certificateSource);
            request.optInp.addKeyInfo = certificateSource;
        }

        if(this.policy != undefined){
            if(this.policy instanceof RemotePolicyDTO){
                request.optInp.policy = new Array<String>();
                const policyURI = this.policy.source + "/" + this.policy.id;
                request.optInp.policy.push(policyURI);
            }
            else{
                request.optInp.policy = new Array<String>();
                const policyURI = "file://" + this.policy.name;
                request.optInp.policy.push(policyURI);
                request.attachment = new Map<String, String>();
                const buffer = await this.policy.arrayBuffer();
                const b64Policy = Encoding.arrayBufferToB64String(buffer);
                request.attachment[policyURI] = b64Policy;
            }
        }
        return request;
    }
}