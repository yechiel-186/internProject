import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
import { ApiService } from 'src/app/services/api.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  password:number[];
  bool:boolean;
  x:number=0;
  userLogin:InternModel;
  
    constructor(private loginService:LoginServiceService) {
     this.userLogin=loginService.intern;
     this.password=[];
     this.bool=false;
    
     }
  
    ngOnInit(): void {
    }
  
   submit(){
     this.password.join("");
     
     this.loginService.sendCode(this.password);
    }
  
    next(event:Event){
        this.x++;
        document.getElementById(""+this.x).focus();
        
    }
  
    end(event:Event){
      this.bool=true;
    }
  
    
  
  
  }
  