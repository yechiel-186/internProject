import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { InternModel } from 'src/app/interface/intern-model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
t:string;
  constructor(public loginService:LoginServiceService, private storage:AngularFireStorage) {
    
   }

  ngOnInit(): void {
  }
  add(event:any){
    console.log(event);
     this.storage.upload(`testFile/${this.loginService.intern.fullName.split(' ').join('')}/face.png`,event.target.files[0])
  }
  download(){
    this.storage.ref(`testFile/${this.loginService.intern.fullName.split(' ').join('')}/face.png`).getDownloadURL().subscribe(data=>(this.t=data));
  
  }
  next(){
    this.loginService.sendImage()
    
    
    
  }
}
