import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ValidationRequest } from '../model/validationRequest';
import { ValidationResponse } from '../model/validationResponse';

@Injectable({providedIn: "root"})
export class ValidationService {
  constructor(private http: HttpClient) { }

  async validate(request: ValidationRequest): Promise<Observable<ValidationResponse>>{
    const body = JSON.stringify(request);
    const headers = { "content-type": "application/json"};
    return this.http.post<ValidationResponse>("http://localhost:8081/api/validate",body,{'headers':headers});
  }
}