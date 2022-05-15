import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedQuestionSecComponent } from './closed-question-sec.component';

describe('ClosedQuestionSecComponent', () => {
  let component: ClosedQuestionSecComponent;
  let fixture: ComponentFixture<ClosedQuestionSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedQuestionSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedQuestionSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
