import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-profile-icon',
  templateUrl: './people-profile-icon.component.html',
  styleUrls: ['./people-profile-icon.component.css']
})
export class PeopleProfileIconComponent {
  @Input()
  public fillColor : string = '#78D6C6'
}
