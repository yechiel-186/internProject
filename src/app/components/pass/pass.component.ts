import { Component, OnInit } from '@angular/core';

import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
  
  constructor(public loginService:LoginServiceService) {
    
   }
  

   
  ngOnInit(): void {
  }

}
