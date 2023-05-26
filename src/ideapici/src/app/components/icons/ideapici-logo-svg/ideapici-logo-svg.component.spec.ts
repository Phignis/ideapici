import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeapiciLogoSvgComponent } from './ideapici-logo-svg.component';

describe('IdeapiciLogoSvgComponent', () => {
  let component: IdeapiciLogoSvgComponent;
  let fixture: ComponentFixture<IdeapiciLogoSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeapiciLogoSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeapiciLogoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
