import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 

  
  constructor( public profileServce:ProfileService ,   private router: Router,  ) {}

     ngOnInit() {
 
     }
     datauser;

     
     ionViewWillEnter() {
      this.getDataUser();
      console.log("this is work")
     }
      getDataUser() {

        let id = +localStorage.getItem('userID')
        
         this.profileServce.getDataUser(id).subscribe((res:any) => {
        console.log(res.data);
        this.datauser = res.data;
  
      });
  }

  logOut(){

    this.router.navigateByUrl('/acount');
    localStorage.removeItem('userID');
  }

}
