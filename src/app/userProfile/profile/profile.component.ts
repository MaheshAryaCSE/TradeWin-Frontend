import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_id = sessionStorage.getItem('id');
  userDetails: any = {
    firstName: '',
    lastName: '',
    profileImg: ''
  };
  constructor(private auth: AuthService) { }
  ngOnInit() {
    this.getUserData()
  }
  getUserData() {
    this.auth.getUserProfile(this.user_id)
      .subscribe(userData => {
        console.log(userData);
        this.userDetails = userData;
      }, err => {
        console.log(err);
      })
  }

  onFileSelected(event) {
    let file = event.target.files[0];
    console.log(file);
    let formdata = new FormData();
    formdata.append('profileImg', file)
    var reader = new FileReader();
      reader.readAsDataURL(file)
    reader.onload = () => {
      this.userDetails.profileImg = reader.result
    }

    this.auth.getimagepath(this.user_id, formdata)
      .subscribe(
        (res) => {
          Swal.fire(
            'Image Uploaded!',
            'Successfully!',
            'success'
          )
        },
        (error) => Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        }))
  }
}




