import { Component, Input, forwardRef } from '@angular/core';
import { SVGComponentComponent } from '../svgcomponent/svgcomponent.component';

@Component({
  selector: 'app-people-profile-icon',
  templateUrl: './people-profile-icon.component.html',
  styleUrls: ['./people-profile-icon.component.css'],
  providers: [{provide: SVGComponentComponent, useExisting: forwardRef(() => PeopleProfileIconComponent)}], // usefull to resolve extends when using @ChildContent
})
export class PeopleProfileIconComponent extends SVGComponentComponent {
  // fillColor in SVGComponentComponent
}
