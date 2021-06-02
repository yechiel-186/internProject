import { Injectable } from '@angular/core';
import { InternModel } from '../interface/intern-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  token:string="";

  baseUrl:string="http://localhost:8080";
  

  constructor(private httpClient:HttpClient) {
    this.intern={ID:null, fullName:"", passport:"", phone:null};
    this.interns=[{ID:23344, fullName:"iuhujhuio", passport:"ikhbww", phone:23752623}]
    this.password=[];
    this.pass=false;
    
   }

 

  httpPost<S,G>(data:S,path:string,headers?:object):Observable<G>{
    return this.httpClient.post<G>(this.baseUrl+path,data,this.getOptions(headers));
   }


   getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }
}
