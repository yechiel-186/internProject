import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  
  y:number=0;
  userName;
    constructor(public loginService:LoginServiceService,private activatedRouts:ActivatedRoute, private router:Router) {
     
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
  
    

    egain(){
      this.loginService.postRegister();
      this.router.navigate(["/code"]);
      
    }
  
   
  
  
  }
  