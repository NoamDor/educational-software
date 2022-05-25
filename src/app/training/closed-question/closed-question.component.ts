import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-closed-question',
  templateUrl: './closed-question.component.html',
  styleUrls: ['./closed-question.component.css']
})
export class ClosedQuestionComponent implements OnInit {

  @ViewChild('1') check1: ElementRef;
  @ViewChild('2') check2: ElementRef;
  @ViewChild('3') check3: ElementRef;
  @ViewChild('tester') tester: ElementRef;
  @ViewChild('explanationn') explanationn: ElementRef;
  exp = '';
  currentAns = undefined;

  constructor() { }

  answer(e){
    this.currentAns = e;
    this.check1.nativeElement['checked']=false;
    this.check2.nativeElement['checked']=false;
    this.check3.nativeElement['checked']=false;
    switch(e){
      case 1:
        this.check1.nativeElement['checked']=true;
        break;
      case 2:
        this.check2.nativeElement['checked']=true;
        break;
      case 3:
        this.check3.nativeElement['checked']=true;
        break;
    }
  }

  ngOnInit(): void {
  }

  t(){
    this.tester.nativeElement.style.display='none'
    this.explanationn.nativeElement.style.display = 'block'
    this.explanationn.nativeElement.style['margin-top'] = '100px'
    if(this.currentAns == 2){
      this.exp = 'צדקת! השיחה הראשונה אכן הייתה יותר טובה מבין השתיים'
    } else{
      this.exp = 'תשובה לא נכונה, השיחה השניה הייתה טובה יותר מבין השתיים, אבל אל דאגה, בהמשך הלומדה תלמדי מדוע :)'
    }
  }

}
