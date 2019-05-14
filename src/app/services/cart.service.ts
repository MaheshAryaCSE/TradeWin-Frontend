import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _url="http://localhost:4090/api/";

  constructor(private http:HttpClient,private _router:Router) { }

  sendcart(name,data){
    // console.log(data);
    return this.http.put<any>(this._url+"additems"+"/"+name,data)
  }
  
  getproducts(userId){
    return this.http.get<any>(this._url+"getitems/"+userId)
  }
  
  removeproducts(userId,cartId){
    console.log(userId);
    console.log(cartId);
    return this.http.get<any>(this._url+"removeitems/"+userId+"/"+cartId)
  }

  payBill(userId,data){
    return this.http.post<any>(this._url+"addbill/"+userId,data)
  }
  

}
