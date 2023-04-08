import { Component } from '@angular/core';

@Component({
  selector: 'app-secretkey',
  templateUrl: './secretkey.component.html',
  styleUrls: ['./secretkey.component.css']
})
export class SecretkeyComponent {
  displayState: boolean = false ;
  clicks: string[] = [];
  counter: number = 0;


  displayDetails() {
    this.displayState=!this.displayState;
    if(this.displayState){
      this.clicks.push(`${this.counter++}`);
    }
  }
}
