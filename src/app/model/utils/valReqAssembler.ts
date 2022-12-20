import { ValidationRequest } from "../validationRequest";
import { InDocsDocType } from "../valRequestElems/inDocs/documentType";
import { InputDocuments } from "../valRequestElems/inDocs/inputDocuments";
import { Base64DataType } from "../valRequestElems/inDocs/base64DataType";
import { Encoding } from "./encoding";
import { v4 as uuidv4 } from "uuid";
import { SignatureObject } from "../valRequestElems/sigObj/signatureObject";
import { OptionalInputs } from "../valRequestElems/optInp/optionalInputs";
import { ReturnValReportType } from "../valRequestElems/optInp/returnValReportType";
import * as JSZip from 'jszip';
import { AdditionalKeyInfoType } from "../valRequestElems/optInp/additionalKeyInfoType";

export class ValRequestAssembler {

    /**
     * The file that contains the signatures
     */
    signedFile: File;

    /**
     * The original signed files (if applied)
     */
    originalFiles: Array<File>;

    /**
     * Indicates if the ETSI validation report resulting 
     * of validation process must be signed or not
     */
    signETSIReport: boolean;

    /**
     * The certificate source that may be sepcified by the user
     */
    certificateSource?: Array<File>;

    constructor(signedFile: File, originalFiles: Array<File>, signETSIReport: boolean, certificateSource: Array<File> | undefined = undefined) {
        this.signedFile = signedFile;
        this.originalFiles = originalFiles;
        this.signETSIReport = signETSIReport;
        if (certificateSource != undefined)
            this.certificateSource = certificateSource;
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

        for (var file of this.originalFiles) {
            var buffer = <ArrayBuffer>await file.arrayBuffer();
            var newDoc = new InDocsDocType();
            newDoc.b64Data = new Base64DataType();
            newDoc.b64Data.val = Encoding.arrayBufferToB64String(buffer);
            request.inDocs!.doc!.push(newDoc);
        }

        request.sigObj = new SignatureObject();
        request.sigObj.b64Sig = new Base64DataType();
        var sigBuffer = <ArrayBuffer>await this.signedFile.arrayBuffer();
        request.sigObj.b64Sig.val = Encoding.arrayBufferToB64String(sigBuffer);

        if(this.certificateSource != undefined && this.certificateSource.length > 0){
            var certificateSource = await this.assembleCertificateSource(this.certificateSource);
            request.optInp.addKeyInfo = certificateSource;
        }
        return request;
    }
}