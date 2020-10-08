 import { Injectable} from '@angular/core';
 import {BehaviorSubject} from 'rxjs';

 @Injectable()
 export class UsersService{
   constructor(){}
   private user = new BehaviorSubject<string>('Anonymous User');
   castUser = this.user.asObservable();
   
   editUser(newUser){
     this.user.next(newUser); 
   }
 }