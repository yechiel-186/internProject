import { Injectable } from '@angular/core';
import { InternModel } from '../interface/intern-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  intern:InternModel;
  interns:InternModel[];
  password:string[]; 
  pass:boolean;
  data:Observable<object>;
  baseUrl:string="http://localhost:8080";
  constructor(private httpClient:HttpClient) {
    this.intern={ID:"", fullName:"", passport:"", phone:0};
    this.interns=[{ID:"23344", fullName:"iuhujhuio", passport:"ikhbww", phone:23752623}]
    this.password=[];
    this.pass=false;
    
   }

   create(intern:InternModel){
    this.interns.forEach(element => {
       if (element.ID!=intern.ID) {
         this.interns.push(intern);
        }
       })
  }

  getCode():Observable<any>{
    return this.httpClient.post(this.baseUrl+"/auth/checkCode",this.interns[0]);
   }
  
   
  
}
