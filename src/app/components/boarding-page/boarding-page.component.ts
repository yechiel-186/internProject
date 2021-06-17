import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boarding-page',
  templateUrl: './boarding-page.component.html',
  styleUrls: ['./boarding-page.component.css']
})
export class BoardingPageComponent implements OnInit {
  internLink:boolean=true;
  supervisorsLink:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  change1(){
    this.internLink=true;
    this.supervisorsLink=false;
  }
  change2(){
    this.internLink=false;
    this.supervisorsLink=true;
  }
}
