
import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interface/intern-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
users:InternModel[]=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  getAllUsers(){
    console.log("hjbv");
    
  this.api.httpGet<any>('/users/all').subscribe(data=>{
    console.log(data);
    this.users=data})
    
    
  }

}
