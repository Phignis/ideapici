import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.css']
})
export class HeroButtonComponent {
  @Input()
  public destination: string = '';

  @Input()
  public textToDisplay: string = 'PlaceHolder';

  constructor(private router: Router) {}

  protected redirect(wantedDestination: string) : void {
    this.router.navigate([`/${this.destination}`]);
  }
}
