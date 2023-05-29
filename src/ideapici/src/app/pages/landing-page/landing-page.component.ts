import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  protected isContentExpended : boolean = false;

  protected expendContent() {
    // TODO: create landing page content and expend the section
    console.log("hey");
    this.isContentExpended = !this.isContentExpended;
  }
}
