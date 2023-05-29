import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.css']
})
export class TextSliderComponent {
  @Input() Title: any;
  @Input() min: any;
  @Input() max: any;
  @Input() sliderValue : any;
}
