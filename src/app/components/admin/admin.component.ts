import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
supervisors:InternModel={ID:null,fullName:null,passport:null,phone:null,academic:null}
academic:InternModel={ID:null,fullName:null,passport:null,phone:null}
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){

}

submitAcademic(){
  
}
}