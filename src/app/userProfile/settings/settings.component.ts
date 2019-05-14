import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user_id=sessionStorage.getItem('id');
  userDetails:any={
    firstName:'',
    lastName:''
  };
    constructor(private auth:AuthService) { }
    ngOnInit() {
    this.getUserData()
    }
    getUserData(){
      this.auth.getUserProfile(this.user_id)
      .subscribe(userData=>{
        console.log(userData);
        this.userDetails=userData;
      },err=>{
        console.log(err);
      })
    }

    updateUser(){
      console.log(this.userDetails);
      
      this.auth.updateUserProfile(this.user_id,this.userDetails)
      .subscribe(res=>{
        console.log(res);
        this.userDetails=res;
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Updated Successfully!',
          showConfirmButton: false,
          timer: 2500
        })
      },err=>{
        console.log(err);
        Swal.fire({
          position: 'center',
          type: 'error',
          title: 'err.message',
          showConfirmButton: false,
          timer: 2500
        })
      })
    }
}
