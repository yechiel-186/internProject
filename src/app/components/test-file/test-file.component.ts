import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { FilesServiceService } from 'src/app/services/files-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.css']
})
export class TestFileComponent implements OnInit {


  constructor(private storage: AngularFireStorage, private loginService: LoginServiceService, public fileService: FilesServiceService) {

  }

  ngOnInit(): void {
  }




  add(event: any) {
    this.storage.upload(`testFile/${this.loginService.user.fullName.split(' ').join('')}/testAnswers.pdf`, event.target.files[0])
  }

  submit() {
    this.storage.ref(`testFile/${this.loginService.user.fullName.split(' ').join('')}/testAnswers.pdf`).getDownloadURL().subscribe
      (data => {
        this.fileService.testFile.answersUrl = data

        this.fileService.testFile.subject = "English";
        this.fileService.postTestAnswers();
      })
  }



  getAllTests() {
    this.fileService.getAllTests();

  }



}
