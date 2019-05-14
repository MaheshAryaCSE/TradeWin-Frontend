import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function () {
      $('.btn').click(function () {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
      });
    
    }).call(this);
    
    //# sourceURL=coffeescript
  }

}
