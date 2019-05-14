import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata={
    lastName:'',
    firstName:'',
    email:'',
    phonenumber:'',
    password:'',
    confirmpassword:''
    }
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }
  signUp(data){
    console.log(data);
    this._auth.signUp(data)
    .subscribe(
     res=> {
       console.log(res);
       localStorage.setItem('token',res.token);
       sessionStorage.setItem('user',res.user);
       sessionStorage.setItem('id',res.id);
       sessionStorage.setItem('role',res.role);
       this._router.navigate(['home']);

      }
    )
  }
}
