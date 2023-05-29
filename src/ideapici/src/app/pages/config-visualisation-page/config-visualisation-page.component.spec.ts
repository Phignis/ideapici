import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigVisualisationPageComponent } from './config-visualisation-page.component';

describe('ConfigVisualisationPageComponent', () => {
  let component: ConfigVisualisationPageComponent;
  let fixture: ComponentFixture<ConfigVisualisationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigVisualisationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigVisualisationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
