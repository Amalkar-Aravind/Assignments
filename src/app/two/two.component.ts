import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/user.service';

@Component({
  selector: 'my-two',
  templateUrl: './two.component.html',
  styleUrls: [ './two.component.css' ]
})
export class TwoComponent implements OnInit {
  user:string;
  newUser:string;
  constructor(private userService:UsersService){}
  ngOnInit(){
    this.userService.castUser.subscribe(user => this.user = user);

  }

  // newUsers(user){
  //   this.userService.editUser(this.newUser);
  // }

}
