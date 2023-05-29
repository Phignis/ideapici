import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGComponentComponent } from './svgcomponent.component';

describe('SVGComponentComponent', () => {
  let component: SVGComponentComponent;
  let fixture: ComponentFixture<SVGComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVGComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SVGComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
