import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  user:InternModel;
  constructor(private loginService:LoginServiceService) {
    this.user=loginService.intern;
    
   }
  

   nextView(){
     
   }
  ngOnInit(): void {
  }

}
