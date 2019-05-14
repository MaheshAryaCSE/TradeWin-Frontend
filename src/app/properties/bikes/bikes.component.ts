import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
bikes:any={
  name:'',
   subcategory:[],
   image:''
};
  constructor(private _prod:ProductService) { }

  ngOnInit() {
    this._prod.getproductData("bikes")
    .subscribe(
      res=>{
            this.bikes=res;
            // console.log(res);
            },
      err=>{
            console.log(err);
           })
  }

}
