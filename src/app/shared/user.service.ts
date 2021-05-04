import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:49789/api';

  formModel = this.fb.group({
    
    first: ['', Validators.required],
    last: ['', Validators.required],
    email: ['', Validators.email],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.ComparePasswords })

  });

  ComparePasswords(fb: FormGroup) {
    let ConfirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (ConfirmPswrdCtrl.errors == null || 'passwordMismatch' in ConfirmPswrdCtrl.errors) {
      if (fb.get('password').value != ConfirmPswrdCtrl.value)
        ConfirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        ConfirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      firstName: this.formModel.value.first,
      lastName: this.formModel.value.last,
      email: this.formModel.value.email,
      address: this.formModel.value.address,
      phoneNumber: this.formModel.value.phoneNumber,
      password: this.formModel.value.passwords.password
    };
    return this.http.post(this.BaseURI + '/User/insert', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/User/login', formData);
  }


}
