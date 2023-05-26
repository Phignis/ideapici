import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-textcombobox',
  templateUrl: './textcombobox.component.html',
  styleUrls: ['./textcombobox.component.css']
})
export class TextcomboboxComponent {
  @Input() Text: string;
  @Input() option: string[];
  selected: any = "any";
}
