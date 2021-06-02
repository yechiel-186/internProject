
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InternModel, LoginModel } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
intern:InternModel;
userLogin:LoginModel;


  constructor(public apiService:ApiService, private router:Router) {
    this.intern={ID:null, fullName:"", passport:"", phone:null};
   }


  postRegister(intern){
    this.intern=intern;
    this.apiService.httpPost<InternModel,any>(intern,'/auth/checkUserNutExits').subscribe(data=>{ 
      this.router.navigate(["/code"]);
    },error=>{
      console.log(error.error);
      alert(error.error.message);
    }
    );
  
    
  }
  
  
  
}
