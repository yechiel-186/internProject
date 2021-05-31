import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  password:number[];
  bool:boolean;
  x:number=0;
  change:any;
    constructor(public apiService:ApiService) {
     this.password=[];
     this.bool=false;
     this.change={};
     }
  
    ngOnInit(): void {
    }
  
   submit(){
      var str="";
      this.password.forEach(element => {
        str += ""+element;
      });

      
      this.apiService.getCode().subscribe(()=>{console.log("is wok")});    
    }
  
    next(event:Event){
        this.x++;
        document.getElementById(""+this.x).focus();
        
    }
  
    end(event:Event){
      this.bool=true;
    }
  
    
  
  
  }
  