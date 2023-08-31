import { OptionObject } from './../../utils/option-object.util';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnChanges{
  @Input() optionObject!: OptionObject;
  
  ngOnChanges(): void {
    console.log(this.optionObject)
  }
  // protected optionObject: OptionObject = {tag:'' ,id: 0, textContent: 'Explore as opções!'};
  
}
