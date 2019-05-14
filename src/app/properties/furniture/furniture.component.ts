import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furniture:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService) { }

  ngOnInit() {
    this._prod.getproductData("furniture")
      .subscribe(
        res => {
          this.furniture = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

}
