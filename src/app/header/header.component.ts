import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products = ["cars", "bikes", "books", "electronics", "furniture", "jobs", "pets", "fashion", "services", "properties"]
  search = '';
  isStretch: boolean = false;
  count = 0;
  _id: any;
  rol = sessionStorage.getItem('role');
  role = (this.rol == 'admin') ? 'admin' : 'user';
  constructor(public _authService: AuthService, public _prod: ProductService, private _cart: CartService) { }

  ngOnInit() {
    this._id = sessionStorage.getItem('id');
    if (this._id) {
      this._cart.getproducts(sessionStorage.getItem('id'))
        .subscribe(res => {
          this.count = res.cartList.length;
          console.log(res.cartList.length);
        })
    };
  }

  toggleNaviagtion() {
    this.isStretch = !this.isStretch;
  }
}
