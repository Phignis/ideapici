import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomboboxComponent } from './textcombobox.component';

describe('TextcomboboxComponent', () => {
  let component: TextcomboboxComponent;
  let fixture: ComponentFixture<TextcomboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcomboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
