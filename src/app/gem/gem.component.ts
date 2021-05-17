import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CartService } from '../cart/cart.service';
// import { MessengerService } from '../cart/messenger.service';
import { GemService } from './gem.service';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  // @Input() productItem: Product;
  constructor(
      public gemService: GemService, 
      private router: Router,
      // private msg: MessengerService,
      // private cartService: CartService,
    ) { }


  ngOnInit(): void {
    this.getDatagem();
  }

  
  gem:any={};

  // ionViewWillEnter() {
 
   
  // }
  // handleAddToCart() {
  //   this.cartService.addProductToCart(this.gemService.getDatagem).subscribe(() => {
  //     this.msg.sendMsg(this.gemService.getDatagem)
  //   })
  // }
  getDatagem() {
    
    this.gem = JSON.parse(localStorage.getItem('gemID'))
    console.log("GEEEM ",this.gem);
     
//   this.gemService.getDatagem(id).subscribe((res:any) => {
//    console.log("GEEEM ",res.data);
//    this.gem = res.data[0];

//  });

 }

}
