import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService) { }

  ngOnInit() {
    this._prod.getproductData("properties")
      .subscribe(
        res => {
          this.properties = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

}
