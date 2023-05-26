import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceInfoComponent } from './performance-info.component';

describe('PerformanceInfoComponent', () => {
  let component: PerformanceInfoComponent;
  let fixture: ComponentFixture<PerformanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
