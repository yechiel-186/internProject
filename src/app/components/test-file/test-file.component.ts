import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.css']
})
export class TestFileComponent implements OnInit {
 t:string;
  constructor(private storage:AngularFireStorage) { 
    

  }

  ngOnInit(): void {
  }
add(event:any){
  console.log(event);
   this.storage.upload('testFile/image2.png',event.target.files[0])
}
download(){
  
  this.storage.ref('testFile/image2.png').getDownloadURL().subscribe(data=>(this.t=data));

}
}
