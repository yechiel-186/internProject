import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { testFile } from 'src/app/interface/intern-model';
import { FilesServiceService } from 'src/app/services/files-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.css']
})
export class TestFileComponent implements OnInit {
  testFile:testFile={supervisor:null,date:null,testName:null,subject:null,url:null,score:null,new:null,intern:null};

  constructor(private storage:AngularFireStorage,private loginService:LoginServiceService, private fileService:FilesServiceService) { 
 
  }

  ngOnInit(): void {
  }

addNewTest(){
  this.fileService
}


add(event:any){
   this.storage.upload(`testFile/${this.loginService.user.fullName.split(' ').join('')}/test.png`,event.target.files[0])
}

download(){  
  this.storage.ref(`testFile/${this.loginService.user.fullName.split(' ').join('')}/test.png`).getDownloadURL().subscribe
  (data=>(this.testFile.url=data))
}

update(){
  this.fileService.testFile=this.testFile;
  this.fileService.postTest();
}

}
