import { Component } from '@angular/core';
import { WichOption } from './verifications/nav-verifications/wich-option';
import { OptionObject } from './utils/option-object.util';
import { BtnId } from './utils/btn-id.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  protected optionObject: OptionObject = {id: 0, textContent: 'Explore as opções!'};
  protected sideBarObject: any = {id: 0};

  protected buttonOf = BtnId;
  
  constructor(private verificate: WichOption){}

  protected render(btnId: BtnId, signal: boolean) {
    if(btnId === BtnId.SIDEBAR){
      if(this.sideBarObject.id != btnId){
        signal = true;
      }
      this.sideBarObject = this.verificate.wichOption(btnId, signal);
    }
    
    if(btnId !== BtnId.SIDEBAR){
      if(this.optionObject.id != btnId){
        signal = true;
      }
      this.optionObject = this.verificate.wichOption(btnId, signal);
    }
    
    return;
  }
  
}

