import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-incription-add-icon',
  templateUrl: './people-incription-add-icon.component.html',
  styleUrls: ['./people-incription-add-icon.component.css']
})
export class PeopleIncriptionAddIconComponent {

  @Input()
  public fillColor: string = '#78D6C6';
}
