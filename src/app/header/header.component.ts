import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser$= undefined;
  profile$= false;
  @ViewChild('profile') profile: ElementRef;

  constructor(private userService: UserService, private profileService: ProfileService) { 
    this.userService.getUser().subscribe(user=> {
      this.currentUser$ = user
    })
    this.profileService.getProfile().subscribe(profile=>{
      this.profile$ = profile
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    window.location.href='/home-page';
  }


  openProfileCard(){
    this.profileService.setProfile(true);
  }

  closeProfileCard(){
    this.profileService.setProfile(false);
  }

}
