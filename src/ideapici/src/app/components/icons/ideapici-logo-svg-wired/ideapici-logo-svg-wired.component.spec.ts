import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeapiciLogoSvgWiredComponent } from './ideapici-logo-svg-wired.component';

describe('IdeapiciLogoSvgWiredComponent', () => {
  let component: IdeapiciLogoSvgWiredComponent;
  let fixture: ComponentFixture<IdeapiciLogoSvgWiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeapiciLogoSvgWiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeapiciLogoSvgWiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
