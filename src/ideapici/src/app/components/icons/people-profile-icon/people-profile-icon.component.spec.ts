import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleProfileIconComponent } from './people-profile-icon.component';

describe('PeopleProfileIconComponent', () => {
  let component: PeopleProfileIconComponent;
  let fixture: ComponentFixture<PeopleProfileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleProfileIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
