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
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private router: Router, private service: ProfileService) { }

 
  ngOnInit() {
  }

   ionViewWillEnter() {
      this.getUserProfile();
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

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.service.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }
}

