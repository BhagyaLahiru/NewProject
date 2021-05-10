import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:49789/api';



  register(body) {


    return this.http.post(this.BaseURI + '/User/insert', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/User/login', formData);
  }


}
