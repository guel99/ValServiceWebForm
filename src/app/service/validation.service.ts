import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ValidationRequest } from '../model/validationRequest';

@Injectable({providedIn: "root"})
export class ValidationService {
  constructor(private http: HttpClient) { }

  validate(request: ValidationRequest){
    const body = JSON.stringify(request);
    const headers = { "content-type": "application/json"};
    const resp = this.http.post<ValidationRequest>("http://localhost:8081/api/validate",body,{'headers':headers});
    resp.subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
}