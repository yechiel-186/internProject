import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
  getIntern(){
    this.loginService.getIntern()

  }
  addIntern(){
    this.loginService.addIntern()
  }

  getAllInternsAcademic(){
    this.loginService.getAllInternsAcademic()
  }

  createTest(){
    
  }
}
