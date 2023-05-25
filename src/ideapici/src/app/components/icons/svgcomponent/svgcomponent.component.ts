import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svgcomponent',
  templateUrl: './svgcomponent.component.html',
  styleUrls: ['./svgcomponent.component.css']
})
export class SVGComponentComponent {
  @Input()
  public fillColor: string = '#78D6C6';
}

