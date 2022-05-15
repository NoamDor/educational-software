import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile = new Subject<any>();

  constructor() { }

  setProfile(profile: any) {
    this.profile.next(profile);
  }

  getProfile(): Observable<any> {
    return this.profile.asObservable();
  }
}
