import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { testFile } from 'src/app/interface/intern-model';
import { FilesServiceService } from 'src/app/services/files-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  testFile:testFile={supervisor:null,date:null,testName:null,subject:null,score:null,new:null,intern:null,questionsUrl:null,answersUrl:null};
  constructor(private loginService:LoginServiceService,private storage:AngularFireStorage,public fileService:FilesServiceService) {
    
   }


   add(event:any){
    this.storage.upload(`testFile/${this.loginService.user.fullName.split(' ').join('')}/${this.testFile.subject}/${this.testFile.testName}.pdf`,event.target.files[0])
 }

 createTest(){  
  this.storage.ref(`testFile/${this.loginService.user.fullName.split(' ').join('')}/${this.testFile.subject}/${this.testFile.testName}.pdf`).getDownloadURL().subscribe
  (data=>{
  this.testFile.questionsUrl=data;
  this.fileService.testFile=this.testFile;
  this.fileService.createTest();
})
}


  ngOnInit(): void {
  }
  getIntern(){
    this.loginService.getIntern()

  }
  addIntern(){
    this.loginService.addIntern()
  }

  getAllInternsAcademic(){
    this.loginService.getAllInternsAcademic()
  }

}
