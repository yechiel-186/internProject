import { Component, OnInit } from '@angular/core';
import { formModel2 } from 'src/app/interface/intern-model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
form:formModel2;
  constructor() {
    this.form={age:null, country:null, city:null, graducition:null, academic:null}
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
