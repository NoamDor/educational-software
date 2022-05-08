import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTheoryComponent } from './training-theory.component';

describe('TrainingTheoryComponent', () => {
  let component: TrainingTheoryComponent;
  let fixture: ComponentFixture<TrainingTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
