import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService  ) { }

  ngOnInit() {
    this._prod.getproductData("services")
      .subscribe(
        res => {
          this.services = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

}
