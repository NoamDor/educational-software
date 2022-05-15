import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-closed-question-sec',
  templateUrl: './closed-question-sec.component.html',
  styleUrls: ['./closed-question-sec.component.css']
})
export class ClosedQuestionSecComponent implements OnInit {

  
  @ViewChild('1') check1: ElementRef;
  @ViewChild('2') check2: ElementRef;
  @ViewChild('3') check3: ElementRef;
  @ViewChild('4') check4: ElementRef;
  @ViewChild('tester') tester: ElementRef;
  @ViewChild('explanation') explanation: ElementRef;
  exp = '';
  currentAns = undefined;

  constructor() { }

  answer(e){
    this.currentAns = e;
    this.check1.nativeElement['checked']=false;
    this.check2.nativeElement['checked']=false;
    this.check3.nativeElement['checked']=false;
    this.check4.nativeElement['checked']=false;
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
      case 4:
        this.check4.nativeElement['checked']=true;
        break;
    }
  }

  ngOnInit(): void {
  }

  t(){
    this.tester.nativeElement.style.display='none'
    this.explanation.nativeElement.style.display = 'block'
    this.explanation.nativeElement.style['margin-top'] = '100px'
    if(this.currentAns == 3){
      this.exp = 'צדקת! איזה אלוף בלה בלה בלה'
    } else{
      this.exp = 'טיפש!! תתקדם'
    }
  }

}
