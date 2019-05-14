import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartCount:any;
  private _productUrl = "http://localhost:4090/api/product";

  products = ["properties", "cars", "electronics", "furniture",
    "bikes", "books", "fashion", "mobiles", "pets", "services"];

subPropArray=[
[],
["cars","Commercial & Vehicles","Other Vehicles","Spare Parts"],
["Computer & Laptops","TVs, Video & Audio"],
[],
[],
[],
[],
[],
[]]
  constructor(private http: HttpClient) { }

  getproductData(data) {
    // console.log(data);
    return this.http.get(this._productUrl + "/" + data);
  }

  getSubProducts(name,id){
    // console.log(name);
    // console.log(id);
   return this.http.get<any>(this._productUrl+"/"+name+"/"+id)
  
  }

  getCount(count){
this.cartCount=count
return count;
  }

  enquiryData(data){
    let url="http://localhost:4090/api/enquiry"
    return this.http.post<any>(url,data)

  }


}
