import { Component, Input, forwardRef } from '@angular/core';
import { SVGComponentComponent } from '../svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-people-incription-add-icon',
  templateUrl: './people-incription-add-icon.component.html',
  styleUrls: ['./people-incription-add-icon.component.css'],
  providers: [{provide: SVGComponentComponent, useExisting: forwardRef(() => PeopleIncriptionAddIconComponent)}], // usefull to resolve extends when using @ChildContent
})
export class PeopleIncriptionAddIconComponent extends SVGComponentComponent {
  // fillColor is in SVGComponentComponent
}
