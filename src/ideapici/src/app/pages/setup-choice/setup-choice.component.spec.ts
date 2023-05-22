import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupChoiceComponent } from './setup-choice.component';

describe('SetupChoiceComponent', () => {
  let component: SetupChoiceComponent;
  let fixture: ComponentFixture<SetupChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
