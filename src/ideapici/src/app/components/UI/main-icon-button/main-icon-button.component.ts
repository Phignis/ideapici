import { Component, ContentChild, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SVGComponentComponent } from '../../icons/svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-main-icon-button',
  templateUrl: './main-icon-button.component.html',
  styleUrls: ['./main-icon-button.component.css'],
})
export class MainIconButtonComponent {
  @Input()
  public destination: string = '';

  @Input()
  public textToDisplay: string = 'PlaceHolder';

  @ContentChild(SVGComponentComponent) // ContentChild search in the projected DOM (inside elements of ng-content)
  svg_component!: SVGComponentComponent;

  private rootStyle: any = window.getComputedStyle(document.body);

  constructor(private router: Router) {}

  protected redirect(wantedDestination: string) : void {
    this.router.navigate([`/${wantedDestination}`]);
  }

  @HostListener('mouseenter')
  private onMouseEnter() {
    this.svg_component.fillColor = this.rootStyle.getPropertyValue('--interactible-color');
  }

  @HostListener('mouseleave')
  private onMouseLeaving() {
    this.svg_component.fillColor = this.rootStyle.getPropertyValue('--primary-color');
  }
}
