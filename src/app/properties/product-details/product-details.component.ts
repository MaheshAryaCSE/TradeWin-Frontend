import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cart: any = {};
  subCategoryId: any;
  productName: any;
  productinfo = {
    sub:[]
  }
  userId = sessionStorage.getItem('id');

  constructor(private route: ActivatedRoute, private _prod: ProductService, private router: Router, private auth: AuthService, private _cart: CartService) { }

  ngOnInit() {
    // console.log(this.userId);
    this.route.params.subscribe(params => {
       console.log(params);
      this.subCategoryId = params.productId;
      this.productName = params.product;
    })

    this._prod.getSubProducts(this.productName, this.subCategoryId)
      .subscribe(
        res => {
          this.productinfo = res;
          console.log(this.productinfo);
        })
  }

  addCart(value) {
    console.log(value);
    if (!this.auth.logedIn()) {
      this.router.navigate(['/login']);
    } else {
      // if (value == "Maruti Suzuki Ignis") {
      //   this.cart = { name: "Maruti Suzuki Ignis", price: "467000", details: "The Maruti Suzuki Ignis is a revolutionary car by … and later unveiled at the 2015 Tokyo Motor Show.", model: "cars-Ignis", image: "./assets/images/cars/maruthi.jpg" }
      // } else if (value == "Hyundai Elite") {
      //   this.cart = { name: "Hyundai Elite", model: "Elitei20 Asta 1.4 CRDi Dual Tone 2018", price: "866900", date: "20-5-2018", image: "./assets/images/cars/hyundai.png" }
      // } else {
      //   this.cart = { name: "BMW", image: "./assets/images/cars/bmw.jpg", model: "cars>>BMW i8", price: "2620000", date: "14-2-2018" }
      // }
      for(let key of this.productinfo.sub){
        if(value==key.name){
          this.cart=key;
        }
      }
      console.log(value);
      console.log(this.cart);
      this._cart.sendcart(this.userId, this.cart).subscribe(res => {
        console.log(res);
        // window.location.reload();
      })
      this.router.navigate(['/cart'])
    }
  }
}


