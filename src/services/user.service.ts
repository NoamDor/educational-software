import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new Subject<any>();
  userValue ='';

  constructor() { }

  setUser(user: any) {
    this.user.next(user);
    this.userValue = user
  }

  logout(){
    this.user.next()
    this.userValue = ''
  }

  getUser(): Observable<any> {
    return this.user;
  }
}
