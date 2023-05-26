import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-performance-info',
  templateUrl: './performance-info.component.html',
  styleUrls: ['./performance-info.component.css']
})
export class PerformanceInfoComponent {
  @Input() title!: string;
  @Input() description1!: string;
  @Input() description2!: string;
}
