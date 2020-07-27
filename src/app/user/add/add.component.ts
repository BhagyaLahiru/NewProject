import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnrollmentService } from 'src/app/enrollment.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   topicHasError = true;
 submitted = false;
 userModel = new User('nkn', 'rob@tes.com', 999999, 'ghgjh', 'kkjhkjhkj', 'kjkjkjkjkj');

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

   // tslint:disable-next-line:typedef
   validateTopic(value) {
   if (value === 'default') {
     this.topicHasError = true;
   } else {
    this.topicHasError = false;
   }
 }

   // tslint:disable-next-line:typedef
   onSubmit(userForm) {
     console.log(userForm);
  }
}




