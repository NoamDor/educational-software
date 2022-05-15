import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new Subject<any>();

  constructor() { }

  setUser(user: any) {
    this.user.next(user);
  }

  logout(){
    this.user.next()
  }

  getUser(): Observable<any> {
    return this.user.asObservable();
  }
}
