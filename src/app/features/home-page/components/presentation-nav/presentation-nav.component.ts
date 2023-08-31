import { OptionObject } from './../../utils/option-object.util';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnId } from '../../utils/btn-id.util';
import { WichOption } from '../../verifications/nav-verifications/wich-option';

@Component({
  selector: 'app-presentation-nav',
  templateUrl: './presentation-nav.component.html',
  styleUrls: ['./presentation-nav.component.css']
})
export class PresentationNavComponent {

  @Input() optionObject!: OptionObject;

  // optionObject = new EventEmitter();
  buttonId = BtnId; 
  @Output() optionChanged = new EventEmitter();
  constructor(private verify: WichOption){}

  onOptionChange(btnId: BtnId, signal: boolean){
    let object: any
    if(this.optionObject.id != btnId){
      signal = true;
      this.optionObject = this.verify.wichOption(btnId, signal);
      console.log(this.optionObject);
      this.optionChanged.emit(this.optionObject);
    }else{
      this.optionObject = this.verify.wichOption(btnId, signal);
    }
  }
}