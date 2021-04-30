import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GemService } from './gem.service';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent implements OnInit {

  constructor(public gemService: GemService,   private router: Router) { }

  ngOnInit(): void {
  }

  
  gem:any={};

  ionViewWillEnter() {
   this.getDatagem();
   
  }
  getDatagem() {
    let id = +localStorage.getItem('gemID')
     
  this.gemService.getDatagem(id).subscribe((res:any) => {
   console.log("GEEEM ",res.data);
   this.gem = res.data[0];

 });

 }

}
