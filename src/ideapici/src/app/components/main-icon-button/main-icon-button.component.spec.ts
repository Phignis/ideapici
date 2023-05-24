import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIconButtonComponent } from './main-icon-button.component';

describe('MainIconButtonComponent', () => {
  let component: MainIconButtonComponent;
  let fixture: ComponentFixture<MainIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
