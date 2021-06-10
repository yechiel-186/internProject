import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { TOKEN } from '../interface/intern-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  token:string="";

  baseUrl:string="http://localhost:8080";
  

  constructor(private httpClient:HttpClient) {
   
   }

 

  httpPost<S,G extends TOKEN>(data:S,path:string,headers?:object):Observable<G>{
    return this.httpClient.post<G>(this.baseUrl+path,data,this.getOptions(headers)).pipe(tap(data=>{if(data && data.token){this.token=data.token}}));
   }

   httpGet<G extends TOKEN>(path:string,headers?:object):Observable<G>{
     return this.httpClient.get<G>(this.baseUrl+path,this.getOptions(headers)).pipe(tap(data=>{if(data && data.token){this.token=data.token}}));
   }

   httpPut<S,G extends TOKEN>(data:S,path:string,headers?:object):Observable<G>{
     return this.httpClient.put<G>(this.baseUrl+path,data,this.getOptions(headers)).pipe(tap(data=>{if(data && data.token){this.token=data.token}}));
   }

   httpDelate<G extends TOKEN>(path:string, headers?:object):Observable<G>{
     return this.httpClient.delete<G>(path,this.getOptions(headers)).pipe(tap(data=>{if(data && data.token){this.token=data.token}}));
   }





   getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token || "";
    return {
      headers: new HttpHeaders(headers)
    }
  }
}
