import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = ''
  firstName = ''
  lastName = ''
  password = ''
  birthDate=''
  role=''

  emailValid = true
  firstNameValid = true
  lastNameValid = true
  passwordValid = true
  birthDateValid=true
  roleValid=true

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  isEmailValid(){
    if(this.email) {
      this.emailValid = true;
      return true
    } else {
      this.emailValid = false;
      return false
    }
  }
  isFirstNameValid(){
    console.log(this.firstName)
    if(this.firstName !== '') {
      this.firstNameValid = true
      return true
    } else{
      this.firstNameValid = false
      return false
    }
  }
  isLastNameValid(){
    console.log(this.lastName)

    if(this.lastName!=='') {
      this.lastNameValid = true
      return true
    } else{
      this.lastNameValid = false
      return false
    }
  }
  isPasswordValid(){
    if(this.password) {
      this.passwordValid = true
      return true
    } else {
      this.passwordValid = false
      return false
    }
  }
  isBirthDateValid(){
    if(this.birthDate) {
      this.birthDateValid = true
      return true
    } else{
      this.birthDateValid = false
      return false
    }
  }
  isRoleValid(){
    if(this.role) {
      this.roleValid = true
      return true
    } else{
      this.roleValid = false
      return false
    }
  }

  send(){
   
    if(this.firstName && this.lastName && this.email && this.birthDate && this.role && this.password){
      let userConnected = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthDate: this.birthDate,
        role: this.role,
        password: this.password
      }
      this.http.post('http://localhost:3000/user', userConnected).subscribe(()=>{
        this.userService.setUser(userConnected);
        this.router.navigateByUrl('/training')})
    } else {
      this.isBirthDateValid();
      this.isEmailValid();
      this.isFirstNameValid();
      this.isLastNameValid()
      this.isPasswordValid()
      this.isRoleValid()
    }
  }

}
