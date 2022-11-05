import { ValidationRequest } from "../validationRequest";
import { InDocsDocType } from "../valRequestElems/inDocs/documentType";
import { InputDocuments } from "../valRequestElems/inDocs/inputDocuments";
import { Base64DataType } from "../valRequestElems/inDocs/base64DataType";
import { Encoding } from "./encoding";
import { v4 as uuidv4 } from "uuid";
import { SignatureObject } from "../valRequestElems/sigObj/signatureObject";
import { OptionalInputs } from "../valRequestElems/optInp/optionalInputs";
import { ReturnValReportType } from "../valRequestElems/optInp/returnValReportType";

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

    constructor(signedFile: File, originalFiles: Array<File>, signETSIReport: boolean) {
        this.signedFile = signedFile;
        this.originalFiles = originalFiles;
        this.signETSIReport = signETSIReport;
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
        return request;
    }
}