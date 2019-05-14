import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  fashion:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService) { }

  ngOnInit() {
    this._prod.getproductData("fashion")
      .subscribe(
        res => {
          this.fashion = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }
}
