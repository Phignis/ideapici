import { Component, forwardRef } from '@angular/core';
import { SVGComponentComponent } from '../svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-ideapici-logo-svg',
  templateUrl: './ideapici-logo-svg.component.html',
  styleUrls: ['./ideapici-logo-svg.component.css'],
  providers: [{provide: SVGComponentComponent, useExisting: forwardRef(() => IdeapiciLogoSvgComponent)}], // usefull to resolve extends when using @ChildContent
})
export class IdeapiciLogoSvgComponent extends SVGComponentComponent {
  // fillColor in SVGComponentComponent
}
