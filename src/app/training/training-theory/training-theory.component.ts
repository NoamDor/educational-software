import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-theory',
  templateUrl: './training-theory.component.html',
  styleUrls: ['./training-theory.component.css']
})
export class TrainingTheoryComponent implements OnInit {

  text ='"קצת על משוב": מבוא והגדרות';
  text1 = 'Angular הינו פריימר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם. Angular הינו פריימוורק למפתחי  Webהמאפשר להם לפתח את צד הלקוח (Front End) בצורה מהירה, נוחה ומדולרית יותר. יותר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם.';
  text2 ='';
  text3 ='';


  constructor() { }

  ngOnInit(): void {
  }

}
