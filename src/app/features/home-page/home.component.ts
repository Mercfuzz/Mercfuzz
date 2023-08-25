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
  
  isHidden: boolean = true;
  navBarContentClass!: string;

  protected optionObject: OptionObject = {id: 0, textContent: 'Explore as opções!'};
  protected sideBarObject: any = {id: 0};

  protected buttonOf = BtnId;
  
  constructor(private verify: WichOption){}

  protected render(btnId: BtnId, signal: boolean): void {
    if(btnId === BtnId.SIDEBAR){
      if(this.sideBarObject.id != btnId){
        signal = true;
      }
      this.sideBarObject = this.verify.wichOption(btnId, signal);
      this.navBarContentClass = this.sideBarObject.class;
      this.isHidden = !this.isHidden
    }else{
      if(this.optionObject.id != btnId){
        signal = true;
      }
      this.optionObject = this.verify.wichOption(btnId, signal);
    }
    
    return;
  }
  
}

