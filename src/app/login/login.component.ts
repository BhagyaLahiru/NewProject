import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  RegisterService: any;
  constructor( 
    private registerService: RegisterService, 
    private router: Router, 
    private toastCtrl: ToastController,
   
    ) { }

  ngOnInit() {
    this.form = new FormGroup(
      { user: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        password: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
  }

  // onCreateGem() {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   console.log(this.form);
  // }

  async login() {

    try {

      const res: any = await this.registerService.login(JSON.stringify({
        email: this.form.value.user,
        password: this.form.value.password
      }));
      console.log(res);
      if (res.message == "Success") {
        localStorage.setItem('userID', res.data[0].Id)
        const toast = await this.toastCtrl.create({
          message: 'Successfully login',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.registerService._userIsAuthenticated  = true;
        this.form.reset();
        this.router.navigateByUrl('/profile');
      }

    } catch (err) {
      // console.log(err.error.message);
      const toast = await this.toastCtrl.create({
        message: 'Login failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
    }

}
