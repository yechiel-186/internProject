import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  token:string="";

  baseUrl:string="http://localhost:8080";
  

  constructor(private httpClient:HttpClient) {
   
   }

 

  httpPost<S,G>(data:S,path:string,headers?:object):Observable<G>{
    return this.httpClient.post<G>(this.baseUrl+path,data,this.getOptions(headers));
   }

   httpGet<S>(path:string,headers?:object):Observable<S>{
     return this.httpClient.get<S>(this.baseUrl+path,this.getOptions(headers)); 
   }

   httpPut<S>(data:S,path:string,headers?:object):Observable<S>{
     return this.httpClient.put<S>(this.baseUrl+path,data,this.getOptions(headers));
   }

   httpDelate<S>(path:string, headers?:object):Observable<S>{
     return this.httpClient.delete<S>(path,this.getOptions(headers));
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
