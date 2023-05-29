import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledIconIdeapiciComponent } from './titled-icon-ideapici.component';

describe('TitledIconIdeapiciComponent', () => {
  let component: TitledIconIdeapiciComponent;
  let fixture: ComponentFixture<TitledIconIdeapiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitledIconIdeapiciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitledIconIdeapiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
