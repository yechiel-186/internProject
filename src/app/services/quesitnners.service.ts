import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { quesitnnersModel } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuesitnnersService {
  quesitnners:quesitnnersModel={};
  
  constructor(private apiService:ApiService, private http:HttpClient) {
  
   }

   getQuesitnners(){
    this.apiService.httpGet<any>('/api/users/getQuesitnners').subscribe(data=>{
      this.quesitnners.age=data.age,
      this.quesitnners.country=data.country, 
      this.quesitnners.city=data.city,
      this.quesitnners.graducition=data.graducition,
      this.quesitnners.academic=data.academic,
      this.quesitnners.medical=data.medical,
      this.quesitnners.residency=data.residency,
      this.quesitnners.department=data.department,
      this.quesitnners.yearResidency=data.yearResidency
      console.log(data);
          
    },error=>{
      alert(error.message)
    }
    )
   }
   httpCountry(url:string,headers?:object):Observable<any>{
     return this.http.get(url,this.getOptions(headers));
   }

   

updateQuesitnners(){

  this.apiService.httpPut<any,any>(this.quesitnners,'/api/users/updateQuesitnners').subscribe(data=>{
    console.log(data);
    
    
  })
}
getOptions(headers?: any) {
  headers = headers? headers : {};
  headers['x-rapidapi-key'] = 'e5fea4ea23mshf1c09cb5d12f974p11d6b0jsn0516510dea44';
  headers['x-rapidapi-host'] = "ajayakv-rest-countries-v1.p.rapidapi.com";
  return {
    headers: new HttpHeaders(headers)
  }

}
}
