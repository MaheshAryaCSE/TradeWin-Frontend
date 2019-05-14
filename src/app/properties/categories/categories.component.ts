import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products:any=[];
  constructor(private _prod:ProductService) { }

  ngOnInit() {
    this.products=this._prod.products
    }

}
