import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';

import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-register-intern',
  templateUrl: './register-intern.component.html',
  styleUrls: ['./register-intern.component.css']
})
export class RegisterInternComponent implements OnInit {
 
intern:InternModel={ID:null, fullName:null, passport:null, phone:null};
bool:boolean=true;
submitted = false;

constructor(private loginService:LoginServiceService) {
    loginService.intern=this.intern;
 }

ngOnInit(): void {
}

onSubmit(){
  this.loginService.postRegister();


}
}
