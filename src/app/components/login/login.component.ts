import { Component, OnInit } from '@angular/core';

import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private login:LoginServiceService) {
    
   }

   postUserLogin(ID:number){
     
     this.login.loginUser(ID);
   }

  ngOnInit(): void {
  }

}
