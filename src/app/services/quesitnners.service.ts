
import { Injectable } from '@angular/core';
import { quesitnnersModel } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuesitnnersService {
  quesitnners:quesitnnersModel={};
  constructor(private apiService:ApiService) {
  
   }

   getQuesitnners(){
    this.apiService.httpGet<quesitnnersModel>('/api/users/getQuesitnners').subscribe(data=>{
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
          
    }
    )
   }

}
