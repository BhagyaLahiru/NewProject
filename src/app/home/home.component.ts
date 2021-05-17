import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datagems;
  gemListApprove =[];
  constructor(
    private homeService: HomeService ,  private router: Router
  ) { }
  ngOnInit() {
    this.getDataGems();
    
    
   }
   getDataGems() {
    this.homeService.getDataGems().subscribe((res:any) => {
      console.log(res.data);
      this.datagems = res.data;

      let indx=0;
       this.datagems.forEach((gem)=>{
         if(gem.approve){
           this.gemListApprove[indx] =gem;
           indx++;
         }
       });


    });
  }


  gemDtls(id){

    localStorage.setItem('gemID' , JSON.stringify(id));
this.router.navigateByUrl('/gem');

  }

}
