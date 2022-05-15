import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  text = 'דף נוסף עם טקסט ותמונה בצורה מהירה, נוחה ומדולרית יותר. יותר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם. Angular הינו פריימוורק למפתחי  Webהמאפשר להם לפתח את צד הלקוח (Front End) בצורה מהירה, נוחה ומדולרית יותר. יותר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם.';
  another_text = 'Angular הינו פריימר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם. Angular הינו פריימוורק למפתחי  Webהמאפשר להם לפתח את צד הלקוח (Front End) בצורה מהירה, נוחה ומדולרית יותר. יותר ויותר מפתחי Web המנוסים בטכנולוגיות ישנות יותר מחליטים לפתח באנגולר את הפרוייקטים הבאים שלהם.';

  constructor() { }

  ngOnInit(): void {
  }

}
