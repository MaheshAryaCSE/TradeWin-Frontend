import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronics:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService) { }

  ngOnInit() {
    this._prod.getproductData("electronics")
      .subscribe(
        res => {
          this.electronics = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

}
