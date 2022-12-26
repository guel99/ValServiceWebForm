import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ValidationPolicyDTO } from "../model/dto/validation-policy-dto";
import { ValidationPolicyGetResponseDTO } from "../model/dto/validation-policy-get-response-dto";
import { ValidationPolicyResponseDTO } from "../model/dto/validation-policy-response-dto";

@Injectable({providedIn: "root"})
export class PolicyService {
    /**
     * The url of the policy server
     */
    policyServer: string = "http://localhost:8080/policy/api";

    constructor(private http: HttpClient) { }

    async createPolicy(request: ValidationPolicyDTO, mode: string){
        const body = JSON.stringify(request);
        const headers = { "content-type": "application/json"};
        const url = this.policyServer + "/create/" + mode;
        return this.http.post<ValidationPolicyResponseDTO>(url, body, {'headers': headers});
    }

    async get(policyId: string) : Promise<Observable<ValidationPolicyGetResponseDTO>> {
        const url = this.policyServer + "/" + policyId;
        return this.http.get<ValidationPolicyGetResponseDTO>(url);
    }

    /**
     * Checks if the server contains any policy which 
     * id contains the passed token (as substring)
     * @param token The passed token
     */
    async searchPolicyByToken(token: String){
        const url = this.policyServer + "/searchFor/" + token;
        const headers = { "content-type": "application/json"};
        return this.http.get<Array<String>>(url, {"headers": headers});
    }
}