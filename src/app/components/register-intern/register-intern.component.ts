import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/interface/intern-model';

import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-register-intern',
  templateUrl: './register-intern.component.html',
  styleUrls: ['./register-intern.component.css']
})
export class RegisterInternComponent implements OnInit {
 
user:userModel={ID:null, fullName:null, passport:null, phone:null};
bool:boolean=true;
submitted = false;

constructor(private loginService:LoginServiceService) {
    loginService.user=this.user;
 }

ngOnInit(): void {
}

onSubmit(){
  this.loginService.postRegister();


}
}
