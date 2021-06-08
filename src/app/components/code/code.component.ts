import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
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
  y:number=0;

    constructor(public loginService:LoginServiceService) {
     this.userLogin=loginService.intern;
     this.password=[];
    
    
     }
  
    ngOnInit(): void {
      
    }
  
   submit(){
     let code=this.password.join("");
     this.loginService.sendCode(code);
     
    }
  
    next(event:Event){
        this.x++;
        document.getElementById(""+this.x).focus();
        
    }
  
    end(event:Event){
      
    }
  
   
  
  
  }
  