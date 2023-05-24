import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sharing-link-button',
  templateUrl: './sharing-link-button.component.html',
  styleUrls: ['./sharing-link-button.component.css']
})
export class SharingLinkButtonComponent {
  @Input() linkToSVG!: string;
  @Input() description!: string;
}
