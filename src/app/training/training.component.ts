import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  title = 'יחידת לימוד לדוגמא - מתן משוב ';
  state = [{
    name: 'training-start',
    nextButton: 'התחל יחידה'
  },{
    name: 'training-theory',
    nextButton: 'הבא'
  },{
    name: 'training-video',
    nextButton: 'הבא'
  },
  {
    name: 'training-closed-question',
    nextButton: 'הבא'
  },
  {
    name: 'training-closed-question-sec',
    nextButton: 'הבא'
  },{
    name: 'training-summary',
    nextButton: 'הבא'
  },
  {
    name: 'training-open-question',
    nextButton: 'סיימי יחידה'
  },{
    name: 'training-end',
    nextButton: 'שלחי דירוג'
  }]

  stateIndex = 0;
  currentState = this.state[this.stateIndex];
  width: any;
  @ViewChild('bar') barel: ElementRef;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  changeState(x){
    this.stateIndex+=x;
    this.width = (100 - (100/(this.state.length))*(this.stateIndex+1)).toString().concat('%')
    this.barel.nativeElement.style['width'] = this.width;
    this.currentState = this.state[this.stateIndex];
    if(this.stateIndex == this.state.length){
     this.router.navigateByUrl('/home-page')
    }
  }

}
