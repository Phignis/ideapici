import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleIncriptionAddIconComponent } from './people-incription-add-icon.component';

describe('PeopleIncriptionAddIconComponent', () => {
  let component: PeopleIncriptionAddIconComponent;
  let fixture: ComponentFixture<PeopleIncriptionAddIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleIncriptionAddIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleIncriptionAddIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
