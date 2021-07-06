
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


import { userModel, LoginModel, testFile } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
user:userModel={ID:null, fullName:null, passport:null, phone:null,role:null,roleNumber:null,image:null};
userLogin:LoginModel={_id:"",code:""};
interns:userModel[];
intern:userModel;
y:number=0;
token:string="";
loginNow:boolean=false;
testFile:testFile={date:null,name:null,subject:null,url:null};

  constructor(public apiService:ApiService, private router:Router) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    
   }

   

  postRegister(){
    this.apiService.httpPost<userModel,any>(this.user,'/auth/checkUserNutExits').subscribe(data=>{ 
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
      console.log(data);
      this.loginNow=true;
      this.user.image=data.user.image;
      this.user.ID=data.user.ID;
      this.user.academic=data.user.academic;
      this.user.fullName=data.user.fullName;
      this.user.image=data.user.image;
      this.user.roleNumber=data.user.roleNumber;
      this.user.role=data.user.role;
      this.user.passport=data.user.passport;
      this.user.phone=data.user.phone;
      
      console.log(this.user,'user');
      
      this.y=1;
      if(this.user.roleNumber==100){
    setTimeout(()=> this.router.navigate(["/testFile"]),1000*2)}
    if(this.user.roleNumber==200) 
    setTimeout(()=> this.router.navigate(["/supervisor"]),1000*2);
    if(this.user.roleNumber==500){
      setTimeout(()=> this.router.navigate(["/admin"]),1000*2)}
    },error=>{
      console.log(error);
      console.log(this.apiService.token);
      this.y=2; 
      setTimeout(()=> {this.router.navigate(["/login"]); this.y=0},1000*2)
    }
    )
  }
  }


  sendImage(){
    this.apiService.httpPost<any,any>({user:this.userLogin,intern:this.user},'/auth/ImageAuthentication').subscribe(data=>{
      console.log(this.user);

      this.loginNow=true;
      this.router.navigate(["/pass"]);
    },error=>{
      alert(error)
      console.log(error);
      
    }
    )
  }


  updateFileTest(){
    this.apiService.httpPut<any,any>({testFile:this.testFile},'/auth/updataTestFile').subscribe(data=>
      console.log(data)
      )
  }
  

  loginUser(ID){
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

  
 getIntern(){
  this.apiService.httpGet<any>('/api/supervisor/verify/getInterns').subscribe(data=>{
    this.interns=data;
    console.log(data);
    
  })
 }

 addIntern(){
   this.apiService.httpPut<any,any>(this.intern,'/api/supervisor/verify/addInterns').subscribe(data=>{
    console.log(data);
    
   })
 }

 getAllInternsAcademic(){
  this.apiService.httpGet<any>('/api/supervisor/verify/getAllInternsAcademic').subscribe(data=>{
    console.log(data);
    
  })
 }

  
}
