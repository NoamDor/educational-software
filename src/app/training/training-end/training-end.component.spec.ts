import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEndComponent } from './training-end.component';

describe('TrainingEndComponent', () => {
  let component: TrainingEndComponent;
  let fixture: ComponentFixture<TrainingEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
