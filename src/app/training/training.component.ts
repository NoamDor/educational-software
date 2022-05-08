import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  title = 'אנגולר- כלים לפיתוח נכון';
  state = [{
    name: 'training-start',
    nextButton: 'התחל לומדה'
  },{
    name: 'training-theory',
    nextButton: 'הבא'
  },
  {
    name: 'training-closed-question',
    nextButton: 'הבא'
  },
  {
    name: 'training-open-question',
    nextButton: 'סיים לומדה'
  },{
    name: 'training-end'
  }]

  stateIndex = 0;
  currentState = this.state[this.stateIndex];

  constructor() { }

  ngOnInit(): void {
    

  }

  changeState(x){
    this.stateIndex+=x;
    this.currentState = this.state[this.stateIndex];
  }

}
