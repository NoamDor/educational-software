import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-end',
  templateUrl: './training-end.component.html',
  styleUrls: ['./training-end.component.css']
})
export class TrainingEndComponent implements OnInit {

  constructor() { }
  effect = 5;
  satisfaction = 5;
  

  ngOnInit(): void {
  }

  valueEffectChanged(val){
    this.effect = val;
  }

  valueSatisfactionChanged(val){
    this.satisfaction = val;
  }
}
