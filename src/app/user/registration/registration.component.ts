import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService,private router: Router,private fb: FormBuilder) { }
  formModel
  ngOnInit() {
  


    this.formModel = this.fb.group({
    
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      nicNumber: ['', Validators.required],
      password: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.ComparePasswords })
  
    });
    this.formModel.reset();
  }

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


  onSubmit() {
    console.log('frm val: ' + this.formModel.value.email);

    var body = {
      firstName: this.formModel.value.first,
      lastName: this.formModel.value.last,
      email: this.formModel.value.email,
      address: this.formModel.value.address,
      phoneNumber: this.formModel.value.phoneNumber,
      nicNumber: this.formModel.value.nic,
      password: this.formModel.value.password.password
    };


console.log(
  body
)
    this.service.register(body).subscribe(
      (res: any) => {
        // if (res.succeeded) {
          this.formModel.reset();
          this.router.navigateByUrl('/user/login');
          this.toastr.success('New user created!', 'Registration successful.');

          console.log('New user created! Registration successful.');


          

        // } else {

          // res.errors.forEach(element => {
          //   switch (element.code) {
          //     case 'DuplicateUserName':
          //       this.toastr.error('Username is already taken','Registration failed.');
          //       console.log('Username is already taken','Registration failed.');
          //       break;

          //     default:
          //     this.toastr.error(element.description,'Registration failed.');
          //     console.log(element.description + ' Registration failed.');
          //       break;
          //   }
          // });
        // }
      },
      err => {
        console.log(err);
      }
    );
  }

}
