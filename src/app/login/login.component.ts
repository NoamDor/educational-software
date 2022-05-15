import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=''
  password=''
  @ViewChild('err') err: ElementRef;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  getUser(){
    let params = new HttpParams().set("email", this.email).set("password", this.password);

    this.http.get('http://localhost:3000/user', {params: params})
      .subscribe(val=>{
        if(val!='error'){
          this.userService.setUser(val)
          this.router.navigateByUrl('/training')
        } else {
          this.err.nativeElement.style['display']='block';
        }
    })
  }

}
