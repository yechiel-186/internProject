import { Component, OnInit } from '@angular/core';
import { quesitnnersModel } from 'src/app/interface/intern-model';
import { QuesitnnersService } from 'src/app/services/quesitnners.service';

@Component({
  selector: 'app-quesitnners2',
  templateUrl: './quesitnners2.component.html',
  styleUrls: ['./quesitnners2.component.css']
})
export class Quesitnners2Component implements OnInit {
  quesitnners:quesitnnersModel={};
  constructor(private quesitnnersService:QuesitnnersService) {
    this.quesitnners=this.quesitnnersService.quesitnners;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.quesitnnersService.quesitnners.department=this.quesitnners.department;
    this.quesitnnersService.quesitnners.medical=this.quesitnners.medical;
    this.quesitnnersService.quesitnners.residency=this.quesitnners.residency;
    this.quesitnnersService.quesitnners.yearResidency=this.quesitnners.yearResidency;
    this.quesitnnersService.updateQuesitnners();
  }

}
