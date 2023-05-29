import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svgcomponent',
  templateUrl: './svgcomponent.component.html',
  styleUrls: ['./svgcomponent.component.css']
})
export class SVGComponentComponent {
  @Input()
  public fillColor: string = 'red';

  @Input()
  public width: string = '40px';

  @Input()
  public height : string = '40px';
}