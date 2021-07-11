import { Injectable } from '@angular/core';
import { testFile } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {
  testFile:testFile={supervisor:null,date:null,testName:null,subject:null,url:null,score:null,new:null,intern:null};

  constructor(private apiService:ApiService) {

   }


   postTest(){
     this.apiService.httpPost<any,any>(this.testFile,'/api/users/updataTestFile').subscribe(
       data=>{console.log(data)})
   }


   addHoldTest(){
     this.apiService.httpGet<any>('/api/users/getHoldTest').subscribe(
       data=>console.log(data)
     )
   }

}
