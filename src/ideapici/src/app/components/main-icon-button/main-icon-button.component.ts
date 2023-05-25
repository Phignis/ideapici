import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-icon-button',
  templateUrl: './main-icon-button.component.html',
  styleUrls: ['./main-icon-button.component.css']
})
export class MainIconButtonComponent {
  @Input()
  public destination: string = '';

  @Input()
  public textToDisplay: string = 'PlaceHolder';

  constructor(private router: Router) {}

  protected redirect(wantedDestination: string) : void {
    this.router.navigate([`/${this.destination}`]);
  }
}
