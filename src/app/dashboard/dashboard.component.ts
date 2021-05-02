import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gemlist;
  
  gemlistFix=[];
  gemlistBid=[];
  

  constructor( private homeService: HomeService) { }

  ngOnInit() {
 
  }
  
  ionViewWillEnter() {
    this.gemList() 
  }
  
  gemList() {
   
    this.homeService.getDataGems().subscribe((res:any) => {
      console.log(res.data);
      this.gemlist=res.data;
      console.log(this.gemlist.length);
 
         
      let indx=0;
      this.gemlist.forEach((gem)=>{
        if(gem.gemBid){
          this.gemlistBid[indx] = gem;
          indx++;
        }
      });

      let indxx=0;
      this.gemlist.forEach((gem)=>{
        if(!gem.gemBid){
          this.gemlistFix[indxx] = gem;
          indxx++;
        }
      });


    });
  }
}

