import { BtnId } from './../../utils/btn-id.util';
import { Component } from '@angular/core';
import { WichOption } from '../../verifications/nav-verifications/wich-option';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  protected isHidden: boolean = true;
  protected navBarContentClass!: string;
  protected sideBarObject: any = {id: 0};
  readonly buttonOf = BtnId;

  constructor(private verify: WichOption){}

  onClick(btnId: BtnId, signal: boolean){
        if(this.sideBarObject.id != btnId){
          signal = true;
        }
        this.sideBarObject = this.verify.wichOption(btnId, signal);
        this.navBarContentClass = this.sideBarObject.class;
        this.isHidden = !this.isHidden;
  }
}
