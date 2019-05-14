import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets:any= {
    name: '',
    subcategory: [],
    image: ''
  }
  constructor(private _prod: ProductService) { }

  ngOnInit() {
    this._prod.getproductData("pets")
      .subscribe(
        res => {
          this.pets = res;
          console.log(res);
        },
        err => {
          console.log(err);
        })
  }

}
