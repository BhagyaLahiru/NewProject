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

    });
  }


  gemDtls(id){

    localStorage.setItem('gemID' , id);
this.router.navigateByUrl('/gem');

  }

}
