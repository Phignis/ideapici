import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionHeroButtonComponent } from './connexion-hero-button.component';

describe('ConnexionHeroButtonComponent', () => {
  let component: ConnexionHeroButtonComponent;
  let fixture: ComponentFixture<ConnexionHeroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionHeroButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionHeroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
