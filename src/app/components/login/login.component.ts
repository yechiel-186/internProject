import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
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
     console.log(ID);
     
     this.login.loginIntern(ID);
   }

  ngOnInit(): void {
  }

}
