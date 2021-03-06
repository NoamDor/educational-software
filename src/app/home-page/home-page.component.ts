import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  slideIndex = 1;
  currentUser:any;

  constructor(private userService: UserService,private router: Router) { 
    this.userService.getUser().subscribe(user=> {
      this.currentUser = user
    })
  }

  ngOnInit(): void {
    this.showDivs(this.slideIndex);
  }

  plusDivs = (n) =>  {
    this.showDivs(this.slideIndex += n);
  }

  showDivs = (n) => {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i]['style'].display = "none";  
    }
    x[this.slideIndex-1]['style'].display = "block";  
  }

  startTraining(){
    if(this.userService.userValue){
      this.router.navigateByUrl('/training')
    } else{
      this.router.navigateByUrl('/register')
    }

  }

}
