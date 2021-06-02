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
url:string="/auth/checkUserNutExits";
path:string="/auth/checkCode";
constructor(private loginServiceService:LoginServiceService) {
    
 }

ngOnInit(): void {
}

onSubmit(){
  this.loginServiceService.postRegister(this.intern);
}
}
