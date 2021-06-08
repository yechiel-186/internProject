import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
user:InternModel;
  constructor(private loginService:LoginServiceService) {
    this.user=this.loginService.intern;
   }

  ngOnInit(): void {
  }


  next(){
    this.loginService.sendImage()
    
    
  }
}
