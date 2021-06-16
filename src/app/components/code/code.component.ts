import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
userName;
    constructor(public loginService:LoginServiceService,private activatedRouts:ActivatedRoute) {
     this.userLogin=loginService.intern;
     this.password=[];
     
     this.activatedRouts.paramMap.subscribe(param=>this.userName=param.get("ID"))
     }
  
    ngOnInit(): void {
      
    }
  
   submit(){
     let code=this.password.join("");
     this.loginService.sendCode(code,this.userName);
     
    }
  
    next(event:Event){
        this.x++;
        document.getElementById(""+this.x).focus();
        
    }
  
    end(event:Event){
      
    }
  
   
  
  
  }
  