import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-textcombobox',
  templateUrl: './textcombobox.component.html',
  styleUrls: ['./textcombobox.component.css']
})
export class TextcomboboxComponent {
  @Input() Text: string;
  @Input() option: string[];
  selected: any = "any";

  @Output() selectedValues = new EventEmitter<string>();

  output(value: string) {
    console.log("output", this.selected)
    this.selectedValues.emit(this.selected);
  }
}
