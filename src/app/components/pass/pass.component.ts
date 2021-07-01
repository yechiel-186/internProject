import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/interface/intern-model';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { QuesitnnersService } from 'src/app/services/quesitnners.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  
  constructor(public loginService:LoginServiceService) {
    console.log(loginService.user.role);
    
   }
  

   
  ngOnInit(): void {
  }

}
