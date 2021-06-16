import { Component, OnInit } from '@angular/core';
import { quesitnnersModel } from 'src/app/interface/intern-model';
import { QuesitnnersService } from 'src/app/services/quesitnners.service';

@Component({
  selector: 'app-quesitnners1',
  templateUrl: './quesitnners1.component.html',
  styleUrls: ['./quesitnners1.component.css']
})
export class Quesitnners1Component implements OnInit {
  quesitnners:quesitnnersModel={};
  constructor(private quesitnnersService:QuesitnnersService) {
    
    this.quesitnners=this.quesitnnersService.quesitnners;
    
   }

  ngOnInit(): void {
  }


onSubmit(){
  this.quesitnnersService.updateQuesitnners()
}
}
