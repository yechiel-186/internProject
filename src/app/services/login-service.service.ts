
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
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
  sendCode(code,userName){
    if(!userName){
    this.userLogin.code=code;
    this.apiService.httpPost<LoginModel,any>(this.userLogin,'/auth/checkCode').subscribe(data=>{
    this.y=1;  
    setTimeout(()=> this.router.navigate(["/image"]),1000*2)
    },error=>{
      console.log(error);
      console.log(this.apiService.token);
      this.y=2; 
      setTimeout(()=> {this.router.navigate(["/code"]); this.y=0},1000*2)
    }
    )
  }
  if(userName){
    this.userLogin.code=code;
    this.apiService.httpPost<LoginModel,any>(this.userLogin,'/login/checkCode').subscribe(data=>{
    this.y=1;
    setTimeout(()=> this.router.navigate(["/testFile"]),1000*2)  
    },error=>{
      console.log(error);
      console.log(this.apiService.token);
      this.y=2; 
      setTimeout(()=> {this.router.navigate(["login"]); this.y=0},1000*2)
    }
    )
  }
  }


  sendImage(){
    this.apiService.httpPost<any,any>({user:this.userLogin,intern:this.intern},'/auth/ImageAuthentication').subscribe(data=>{
      console.log("kjn");
      
      this.router.navigate(["/pass"]);
    },error=>{
      alert(error)
    }
    )
  }
  

  loginIntern(ID){
    this.apiService.httpGet<LoginModel>(`/login/${ID}`).subscribe(data=>{ 
      console.log(data);
      this.userLogin._id=data._id;
      this.router.navigate([`code/${ID}`]);
    },error=>{
      console.log(error.error);
      alert(error.error.message);
    }
    )
  
  }

  
 

  
}
