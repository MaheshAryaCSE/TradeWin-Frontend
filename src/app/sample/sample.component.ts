import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
products:any=[];
title:String='Hello World'
selection = 'other';
options = ['name','address','other'];
selectedAnimal = 'dog';
animals = ['cat', 'dog', 'zebra', 'giraffe'];
dt=new Date();
people: any[] = [
  {
    "name": "Avinash",
    "country": 'INDIA'
  },
  {
    "name": "Mcleod  Mueller",
    "country": 'USA'
  },{
    "name": "Day  Meyers",
    "country": 'HK'
  }
 ];
 user={
   name:"xyz",
   office:{
     address:'HYD',
     sal:'00000'
   }
}
  constructor(public auth:AuthService) { 
    this.products=['cars','books','jobs','furniture','music']
  }

  ngOnInit() {
  }

  onAnimalClicked(event:Event){
    console.log(event);
    
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
  
  getColor(country) { 
    switch (country) {
      case 'INDIA':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

}
