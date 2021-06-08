
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
y:number=0;
token:string="";

  constructor(public apiService:ApiService, private router:Router) {
    this.intern={ID:null, fullName:"", passport:"", phone:null};
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
   }

   

  postRegister(intern){
    this.intern=intern;
    this.apiService.httpPost<InternModel,any>(this.intern,'/auth/checkUserNutExits').subscribe(data=>{ 
      this.userLogin._id=data._id;
      console.log(this.userLogin);
      
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
    this.y=1;  

    setTimeout(()=> this.router.navigate(["/image"]),1000*2)
    },error=>{
      this.y=2; 
      setTimeout(()=> {this.router.navigate(["/code"]); this.y=0},1000*2)
    }
    )
  }


  sendImage(){
    this.apiService.httpPost<any,any>({user:this.userLogin,intern:this.intern},'/auth/ImageAuthentication').subscribe(data=>{
      this.apiService.token=data.token;
      this.router.navigate(["/pass"]);
    },error=>{
      alert(error)
    }
    )
  }
  
  

  
}
