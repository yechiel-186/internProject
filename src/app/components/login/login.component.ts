import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginIntern:InternModel={ID:null, fullName:null, passport:null, phone:null};

  constructor() { }

  ngOnInit(): void {
  }

}
