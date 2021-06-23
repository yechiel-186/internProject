import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { adminModel, InternModel } from 'src/app/interface/intern-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin:adminModel={ID:null,fullName:null,password:null};
supervisor:InternModel={ID:null,fullName:null,passport:null,phone:null,academic:null}
academic:InternModel={ID:null,fullName:null,passport:null,phone:null}
  constructor(private api:ApiService, private router:ActivatedRoute) {
    this.router.paramMap.subscribe(r=>this.admin.fullName=(r.get("name")));
    this.router.paramMap.subscribe(r=>this.admin.ID=(r.get("ID")));
    this.router.paramMap.subscribe(r=>this.admin.password=(r.get("password")));
    this.createAdmin();
    this.getAcademic();
   }

  ngOnInit(): void {
  }

  createAdmin(){
    this.api.httpPost(this.admin,"/admin/create").subscribe(data=>{
      console.log(data)}
      )
  }


createSupervisor(){
  this.api.httpPost(this.supervisor,"/admin/api/createSupervisor").subscribe(data=>{
    console.log(data)}
    )
}

submitAcademic(){
  this.api.httpPost(this.academic,"/admin/api/createAcademic").subscribe(data=>{
    console.log(data)}
    )
}
getAcademic(){
  this.api.httpGet("/admin/getAcademic").subscribe(data=>{
    console.log(data)}
    )
}
}