import { Component, forwardRef } from '@angular/core';
import { SVGComponentComponent } from '../svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-ideapici-logo-svg-wired',
  templateUrl: './ideapici-logo-svg-wired.component.html',
  styleUrls: ['./ideapici-logo-svg-wired.component.css'],
  providers: [{provide: SVGComponentComponent, useExisting: forwardRef(() => IdeapiciLogoSvgWiredComponent)}], // usefull to resolve extends when using @ChildContent
})
export class IdeapiciLogoSvgWiredComponent extends SVGComponentComponent {

}
