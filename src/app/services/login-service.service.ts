
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InternModel, LoginModel } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
intern:InternModel;
userLogin:LoginModel={_id:"",code:""};
code:number[];
;
  constructor(public apiService:ApiService, private router:Router) {
    this.intern={ID:null, fullName:"", passport:"", phone:null};

   }


  postRegister(intern){
    this.intern=intern;
    this.apiService.httpPost<InternModel,any>(intern,'/auth/checkUserNutExits').subscribe(data=>{ 
      this.userLogin._id=data;
      console.log(data);
      console.log(intern);
      
      this.router.navigate(["/code"]);
    },error=>{
      console.log(error.error);
      alert(error.error.message);
    }
    );
  
    
  }
  sendCode(code){
    this.userLogin.code=code;
    this.apiService.httpPost<LoginModel,any>(this.userLogin,'/auth/checkCode').subscribe(data=>{
      console.log(data);
      
    })
  }
  
  
}
