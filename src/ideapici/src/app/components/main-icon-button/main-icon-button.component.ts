import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-icon-button',
  templateUrl: './main-icon-button.component.html',
  styleUrls: ['./main-icon-button.component.css']
})
export class MainIconButtonComponent {

  protected rootStyle: any = window.getComputedStyle(document.body)

  constructor(private router: Router) {}

  protected redirect(wantedDestination: string) : void {
    this.router.navigate([`/${wantedDestination}`]);
  }
}
