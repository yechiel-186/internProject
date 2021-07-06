import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { testFile } from 'src/app/interface/intern-model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.css']
})
export class TestFileComponent implements OnInit {
  test:testFile;
 testUrl:string;
  constructor(private storage:AngularFireStorage,private loginService:LoginServiceService) { 
 
  }

  ngOnInit(): void {
  }

add(event:any){
   this.storage.upload(`testFile/${this.loginService.user.fullName.split(' ').join('')}/test.png`,event.target.files[0])
}

download(){  
  this.storage.ref(`testFile/${this.loginService.user.fullName.split(' ').join('')}/test.png`).getDownloadURL().subscribe(data=>(this.testUrl=data, this.test.url=this.testUrl))
}

update(){
  
}

}
