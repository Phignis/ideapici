import { Component, Input } from '@angular/core';
import { SVGComponent } from 'src/app/interfaces/svgcomponent';

@Component({
  selector: 'app-people-profile-icon',
  templateUrl: './people-profile-icon.component.html',
  styleUrls: ['./people-profile-icon.component.css']
})
export class PeopleProfileIconComponent implements SVGComponent {
  @Input()
  public fillColor : string = '#78D6C6'
}
