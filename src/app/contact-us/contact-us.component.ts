import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
enquiry:any={
  name:'',
  email:'',
  comment:'',
  subject:''
}
  constructor(private product:ProductService) { }

  ngOnInit() {
  }
submit(){
  console.log(this.enquiry);
this.product.enquiryData(this.enquiry)
.subscribe(data=>{
  Swal.fire({
    position: 'center',
    type: 'success',
    title: data.message,
    showConfirmButton: false,
    timer: 2500
  })
  this.enquiry='';
},err=>{
  Swal.fire({
    position: 'top-end',
    type: 'error',
    title: err.message,
    showConfirmButton: false,
    timer: 2500
  })
})
}

}
