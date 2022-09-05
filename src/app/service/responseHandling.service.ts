import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { throwError } from 'rxjs';
import { Encoding } from '../model/utils/encoding';
import { ValidationResponse } from '../model/validationResponse';
import { Buffer } from 'buffer';

@Injectable({ providedIn: "root"})
export class ResponseHandlingService{

    /**
     * Gets the content of the other reports
     * @param content
     * @returns 
     */
    private async handleSecundaryReportsZip(content:ArrayBuffer): Promise<Map<string, Promise<string>>>{
        var reports = new Map<string, Promise<string>>();
        return JSZip.loadAsync(content).then(async zip => {
            var simpleReport = zip.file('SimpleReport.html');
            var detailedReport = zip.file('DetailedReport.html');
            var diagnosticData = zip.file('DiagnosticData.xml');
            var simpleReportHtml = simpleReport?.async('string') as Promise<string>;
            var detailedReportHtml = detailedReport?.async('string') as Promise<string>;
            var diagnosticDataXml = diagnosticData?.async('string') as Promise<string>;
            reports.set("SimpleReport.html", simpleReportHtml);
            reports.set("DetailedReport.html", detailedReportHtml);
            reports.set("DiagnosticData.xml", diagnosticDataXml);
            return reports;
        });
    }

    /**
     * Builds ETSI validation report from b64 encoded string
     * @param b64String
     * @returns 
     */
    private getETSIReport(b64String:string): string {
        return Encoding.fromB4String(b64String);
    }

    /**
     * Gets etsi validation report string from a valid ValidationResponse
     * @param valReponse The validation response
     * @returns The ETSI validation report as a string
     */
    public etsiReport(valReponse: ValidationResponse): string {
        if(valReponse.optOutp != undefined && valReponse.optOutp.validationReport != undefined && valReponse.optOutp.validationReport.etsiTS11910202XMLReport != undefined){
            return this.getETSIReport(valReponse.optOutp.validationReport.etsiTS11910202XMLReport);
        }
        throw new Error("No ETSI validation report at this Validation response");
    }

    /**
     * Gets other validation reports strings from a valid ValidationResponse
     * @param valReponse The validation response
     * @returns All other reports
     */
    public async otherReports(valResponse: ValidationResponse): Promise<Map<string, Promise<string>>> {
        var reports = new Map<string, string>();
        if(valResponse.optOutp != undefined && valResponse.optOutp.validationReport != undefined && valResponse.optOutp.validationReport.other != undefined){
            var zipB64Str = valResponse.optOutp.validationReport.other.content?.val;
            return this.handleSecundaryReportsZip(Buffer.from(zipB64Str as string, 'base64'));
        }
        throw new Error("No other reports at this Validation response");
    }
}