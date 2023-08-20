import { Component } from '@angular/core';
import { WichOption } from './verifications/nav-verifications/nav-verifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  optionObject: OptionObject = {id: 'init', textContent: 'Explore as opções!'}
  sideBarObject:any = {id: 'empty'};

  options = NavOptions;
  wichOptionIns = new WichOption;
  
  constructor(){}

  render(option: NavOptions, signal: boolean) {
    if(option === NavOptions.SIDEBAR){
      if(this.sideBarObject.id != option){
        signal= true;
      }
      this.sideBarObject = this.wichOptionIns.wichOption(option, signal);
    }

    if(option !== NavOptions.SIDEBAR){
      if(this.optionObject.id != option){
        signal = true;
      }
      this.optionObject = this.wichOptionIns.wichOption(option, signal);
    }
    
    return;
  }
}

interface OptionObject {
  id: string,
	title?: string,
	textContent?: string,
	imageSrc?: string[],
	anchor?: string[],
}

export enum NavOptions {
  MECANICA = 'Mecânica na prática',
  EXP = 'Minhas experiências',
  POOL = 'Champion Pool',
  MIDIA = 'Mídia',
  SIDEBAR = 'Sidebar'
}

