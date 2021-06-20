import { Component, OnInit } from '@angular/core';
import { quesitnnersModel } from 'src/app/interface/intern-model';
import { QuesitnnersService } from 'src/app/services/quesitnners.service';

@Component({
  selector: 'app-quesitnners1',
  templateUrl: './quesitnners1.component.html',
  styleUrls: ['./quesitnners1.component.css']
})
export class Quesitnners1Component implements OnInit {
  quesitnners:quesitnnersModel={};
  countrys:string[]=[""];
  citys:string[]=[""];
  
  constructor(private quesitnnersService:QuesitnnersService) {
    
    this.quesitnners=this.quesitnnersService.quesitnners;
    
   }

  ngOnInit(): void {
    this.getCountry()
  }

  ​

onSubmit(){

  this.quesitnnersService.quesitnners.academic=this.quesitnners.academic;
  this.quesitnnersService.quesitnners.age=this.quesitnners.age;
  this.quesitnnersService.quesitnners.city=this.quesitnners.city;
  this.quesitnnersService.quesitnners.country=this.quesitnners.country;
  this.quesitnnersService.quesitnners.graducition=this.quesitnners.graducition;

}



getCountry(){
this.quesitnnersService.httpCountry("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all").subscribe(
  data=>{
    for (let index = 0; index < data.length; index++) {
      this.countrys[index] = data[index].name;
      this.
    }

      
   

 }
)
}
}