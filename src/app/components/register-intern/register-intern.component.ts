import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register-intern',
  templateUrl: './register-intern.component.html',
  styleUrls: ['./register-intern.component.css']
})
export class RegisterInternComponent implements OnInit {
 
intern:InternModel={ID:null, fullName:null, passport:null, phone:null};
bool:boolean=true;
submitted = false;


constructor(private apiService:ApiService) {
    
 }

ngOnInit(): void {
}

onSubmit(){
  this.submitted = true;
  console.log("is true");
  
}


}
