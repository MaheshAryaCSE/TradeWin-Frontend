import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 books:any={
   name:'',
   subcategory:[],
   image:''
 };
  constructor(private _prod:ProductService) { }

  ngOnInit() {
   
    this._prod.getproductData("books")
    .subscribe(
      res=>{
            this.books=res;
            console.log(res);
            },
      err=>{
            console.log(err);
           })
 }
  

}
