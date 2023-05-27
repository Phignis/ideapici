import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIndicatorComponent } from './question-indicator.component';

describe('QuestionIndicatorComponent', () => {
  let component: QuestionIndicatorComponent;
  let fixture: ComponentFixture<QuestionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
