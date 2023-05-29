import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  public destination: string = '';

  @Input()
  public textToDisplay: string = 'PlaceHolder';

  constructor(private router: Router) {}

  protected redirect(wantedDestination: string) : void {
    this.router.navigate([`/${this.destination}`]);
  }
}
