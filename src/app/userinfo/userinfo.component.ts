import { Component } from '@angular/core';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  userName: string = '';
  status: boolean = true;

  getStatus(){
    return this.userName ? !this.status : this.status ;
  }

  setUserName(){
    this.userName = '';
  }
  
  
}
