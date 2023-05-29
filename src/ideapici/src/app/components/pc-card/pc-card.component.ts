import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pc-card',
  templateUrl: './pc-card.component.html',
  styleUrls: ['./pc-card.component.css']
})
export class PcCardComponent {
  constructor(){}
  @Input() cpu: string;
  @Input() gpu: string;
  @Input() ram: number;
  @Input() brand: string;
  @Input() cost: number;
}
