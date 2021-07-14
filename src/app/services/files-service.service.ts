import { Injectable } from '@angular/core';
import { testFile } from '../interface/intern-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {
  testFile:testFile={supervisor:null,date:null,testName:null,subject:null,score:null,new:null,intern:null,questionsUrl:null,answersUrl:null};
  urlArr:string[];
  nameArr:string[];
  constructor(private apiService:ApiService) {

   }


   postTestAnswers(){
     this.apiService.httpPost<any,any>(this.testFile,'/api/users/postTestAnswers').subscribe(
       data=>console.log(data))
   }


  async getAllTests(){
    await this.apiService.httpGet<any>('/api/users/getAllTests').toPromise().then(
  
        data=>{this.urlArr=data.map((a)=>a.url)} 
    )
   }



   createTest(){
     this.apiService.httpPost<any,any>(this.testFile,'/api/supervisor/verify/createTest').subscribe(
       data=>{console.log(data);
       }
     )
   }
}
