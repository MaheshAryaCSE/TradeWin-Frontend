import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userResponse:any;
  logindata={
  email:'',
  password:''
}
error:any;
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }
login(data){
  this._auth.login(data).subscribe(
    res=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      sessionStorage.setItem('user',res.user);
      sessionStorage.setItem('id',res.id);
      sessionStorage.setItem('role',res.role);
      this._router.navigate(['home']);
    },
    err => {
      this.error="failed"
      // console.log(err.error.message);
      // this.error = err.error.message;
    }
  )}
}
