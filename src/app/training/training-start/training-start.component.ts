import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-start',
  templateUrl: './training-start.component.html',
  styleUrls: ['./training-start.component.css']
})
export class TrainingStartComponent implements OnInit {

  text = 'ברוכה הבאה ליחידת הלימוד לדוגמה בנושא מתן משוב!';
  text1 = 'ביחידה זאת תלמדי מהי הדרך הנכונה לתת משוב, למה בעצם הוא כל כך חשוב וכמובן תקבלי עצות פרקטיות שיעזרו לך לאחר סיום יחידת הלימוד.';
  text2 = 'המוטיבציה למשוב:';
  text3 = 'המשוב נוכח כמעט בכל סיטואציה אנושית. המשוב, מגוון הדרכים שבהן אדם או קהילה מגיבים על מעשינו, הוא מנוע חשוב ומרכזי ללמידה ולבניית אישיות וזהות. הקהילה או פרטים בתוכה נותנים לנו משוב בלתי פוסק על התנהגויות, דעות, אופני לבוש וסגנון, ידע, כישרון ומיומנות. משובים עשויים להיות מודעים ומתוכננים או מקריים וספונטניים. מישהו עשוי להשמיע את עמדתו הפוליטית בסיטואציה חברתית, אחר עשוי לומר לו את דעתו על עמדתו ואף על המגבלות האפשריות שלה. מתוך כל אלו מתפתחת עמדה מגובשת יותר, ברורה יותר ועשירה יותר. מישהו משתוקק להיות זמר. הוא שר בפני קבוצת חברים או בפני העולם כולו באחת מאותן תכניות כישרונות. המשוב עשוי לרומם אותו ועשוי לרסק אותו. המשוב הוא מפתח מרכזי בכינון הזהות ובהעצמתה.';
  text4 = 'מעבר לתכניו של המשוב, להיעדרו עשויה להיות השפעה דרמטית. היעדרו של משוב יוצר קושי ממשי בהתפתחות הידע ובגיבוש הידע, אך הוא גם מסמל התעלמות או אדישות – הוא מהווה השפלה וביטול של האדם.';


  constructor() { }

  ngOnInit(): void {
  }

}
