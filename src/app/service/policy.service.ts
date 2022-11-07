import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ValidationPolicyDTO } from "../model/dto/validation-policy-dto";

@Injectable({providedIn: "root"})
export class PolicyService {
    /**
     * The url of the policy server
     */
    policyServer: string = "http://localhost:8080/api/validate";

    constructor(private http: HttpClient) { }
}