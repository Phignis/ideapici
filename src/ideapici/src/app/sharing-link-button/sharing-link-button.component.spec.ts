import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingLinkButtonComponent } from './sharing-link-button.component';

describe('SharingLinkButtonComponent', () => {
  let component: SharingLinkButtonComponent;
  let fixture: ComponentFixture<SharingLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingLinkButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
