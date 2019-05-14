import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
name:any;
id:any;
cartData:any={};
display=false;
bill:any={};
totalAmount:any=0;
userId=sessionStorage.getItem('id');
message:string;
  
  constructor(private route:ActivatedRoute,private auth:AuthService,private _cart:CartService) {}
  ngOnInit() {
  this.getProducts();
  }

  getProducts(){
    if(this.auth.getUserId()){
      console.log(this.auth.getUserId());
      
      this._cart.getproducts(this.auth.getUserId())
      .subscribe(
      res=>{
      this.cartData=res;
      console.log(this.cartData);
           })
    }
  }

removeCart(id){
  // console.log(id);
  this._cart.removeproducts(this.userId,id)
  .subscribe(
    res=>{
      console.log(res);
      this.getProducts()
    })
}

showBill(){
  console.log(this.cartData.cartList);
  this.display=true;
  for (let ref of this.cartData.cartList ){
    this.totalAmount+=Number(ref.price);
 }
 this.bill.total=this.totalAmount;
 this.bill.gst = this.bill.total*0.18 ;
 this.bill.vat = this.bill.total*0.02 ;
 this.bill.billAmount = this.bill.total +this.bill.gst+this.bill.vat;
 this.bill.billItems = this.cartData.cartList;
}

payBill(){
  console.log(this.bill);
 this._cart.payBill(this.userId,this.bill)
  .subscribe(
    res=>{
      console.log(res);
      this.message  =res.message;            
    }
    ,err=>{
     console.log(err);
    })
  }
 
}
