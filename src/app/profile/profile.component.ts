import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any;

  constructor(private router: Router, private service: ProfileService) { }

 
  ngOnInit() {
    this.getUserProfile();
  }

   ionViewWillEnter() {
    
      console.log("this is work")
   }

   getUserProfile() {

    let id = +localStorage.getItem('userID')
    
    this.service.getUserProfile(id).subscribe((res:any) => {
    console.log(res.data);
    this.userDetails = res.data;

  });
}

  onLogout() {
    localStorage.removeItem('userID');
    this.router.navigate(['/user/login']);
  }
}

