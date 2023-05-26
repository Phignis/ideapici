import { Component, OnInit } from '@angular/core';
import * as pcs from '../../../assets/JSON/pc.json';
@Component({
  selector: 'app-setup-choice',
  templateUrl: './setup-choice.component.html',
  styleUrls: ['./setup-choice.component.css']
})
export class SetupChoiceComponent implements OnInit  {
  
  data: any = pcs;


  ngOnInit(): void {
    console.log('Data', this.data);
  }
}
