import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { adminModel, userModel, academicModel } from 'src/app/interface/intern-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: adminModel = { ID: null, fullName: null, password: null };
  supervisor: userModel = { ID: null, fullName: null, passport: null, phone: null, academic: null }
  academic: academicModel = { ID: null, fullName: null }
  academicsList: string[] = []
  constructor(private api: ApiService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(r => this.admin.fullName = (r.get("name")));
    this.router.paramMap.subscribe(r => this.admin.ID = (r.get("ID")));
    this.router.paramMap.subscribe(r => this.admin.password = (r.get("password")));
    this.Admin();

  }

  ngOnInit(): void {

  }

  Admin() {
    this.api.httpPost<any, any>(this.admin, "/admin/createAdmin").subscribe(data => {
      console.log(data)
      //this.getAcademic()
      this.academicsList = data.academicsList;
      
    }, error => {
      console.log(error.error.message);
      if (error.error.message == "you are registed") {
        this.api.httpPost<any, any>(this.admin, "/admin/loginAdmin").subscribe(data2 => {
          console.log(data2);
          this.academicsList = data2.academicsList;
          console.log(this.academicsList);
          //this.getAcademic()
        })
      }
    })
  }


  createSupervisor() {
    this.api.httpPost(this.supervisor, "/admin/api/verify/createSupervisor").subscribe(data => {
      console.log(this.supervisor);

      console.log(data)
    }
    )
  }

  createAcademic() {
    console.log("uyguyg");
    this.api.httpPost(this.academic, "/admin/api/verify/createAcademic").subscribe(data => {
      console.log("hfuygf");

      console.log(data)
    }
    )
  }

  // getAcademic(){
  //   this.api.httpGet<any>("/admin/api/verify/getAcademic").subscribe(data=>{
  //     if(data==[]){
  //     }
  //     else
  //     this.academicsList=data;
  //     console.log(data)}
  //     )
  // }
}