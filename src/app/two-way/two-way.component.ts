import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
username="waheed khan";
employee={
  name:'',
  id:'',
  address:'',
  number:''
};
  constructor() { }

  ngOnInit() {
  }
  
  changeUser($event){
    this.username = $event.target.value
  }

  submit(){
  console.log(this.employee);
  }

}
